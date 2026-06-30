// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { buildReviewDeployArgs, stampReviewDates, updateDraftFrontmatter } from './scripts/lib/publish-flow.mjs';

const autoDeployProduction = process.env.REPO_RADAR_AUTO_DEPLOY === 'true';
let deployQueue = Promise.resolve();

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    let output = '';
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: process.platform === 'win32',
    });

    child.stdout.on('data', (chunk) => {
      output += chunk;
      process.stdout.write(chunk);
    });
    child.stderr.on('data', (chunk) => {
      output += chunk;
      process.stderr.write(chunk);
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve(output);
        return;
      }

      const tail = output.split(/\r?\n/).slice(-20).join('\n');
      reject(new Error(`Production deploy failed with exit code ${code}.\n${tail}`));
    });
  });
}

function enqueueProductionDeploy(payload) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const next = deployQueue.then(() => runCommand(npm, buildReviewDeployArgs(payload)));
  deployQueue = next.catch(() => {});
  return next;
}

function draftReviewPlugin() {
  return {
    name: 'reporadar-draft-review',
    configureServer(server) {
      server.middlewares.use('/__drafts/publish', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
          return;
        }

        let raw = '';
        req.on('data', (chunk) => {
          raw += chunk;
        });
        req.on('end', async () => {
          try {
            const body = JSON.parse(raw || '{}');
            const slug = String(body.slug || '');
            const draft = Boolean(body.draft);
            const wantsDeploy = body.deploy === true && autoDeployProduction;
            const confirmDeploy = body.confirmDeploy === true;

            if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
              throw new Error('Slug khong hop le');
            }

            if (wantsDeploy && !confirmDeploy) {
              throw new Error('Live deploy needs explicit confirmation');
            }

            const reposDir = path.resolve(process.cwd(), 'src/content/repos');
            const filePath = path.resolve(reposDir, `${slug}.md`);
            if (!filePath.startsWith(reposDir + path.sep)) {
              throw new Error('File nam ngoai thu muc repos');
            }

            const original = await fs.readFile(filePath, 'utf8');
            let next = updateDraftFrontmatter(original, draft);
            // Publish → đóng dấu chu kỳ review; đưa về draft thì giữ nguyên.
            if (!draft) next = stampReviewDates(next);
            await fs.writeFile(filePath, next);
            if (wantsDeploy) {
              await enqueueProductionDeploy({ slug, draft });
            }

            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({ ok: true, slug, draft, deployed: wantsDeploy }));
          } catch (error) {
            res.statusCode = 400;
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' }));
          }
        });
      });
    },
  };
}

// Static output (default) → build ra dist/ cho Cloudflare Pages.
// Đổi `site` sang domain thật khi chốt tên (PRD §12.1) để RSS/JSON feed có URL tuyệt đối.
const PRIVATE_PAGES = ['/login/', '/review/', '/account/'];

export default defineConfig({
  site: 'https://altstack.io.vn',
  integrations: [
    sitemap({
      filter: (url) => !PRIVATE_PAGES.some((p) => new URL(url).pathname === p),
    }),
  ],
  server: {
    port: Number(process.env.PORT) || 4321,
  },
  vite: {
    plugins: [tailwindcss(), draftReviewPlugin()],
  },
});
