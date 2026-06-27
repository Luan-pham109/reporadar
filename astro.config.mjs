// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs/promises';
import path from 'node:path';

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

            if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
              throw new Error('Slug khong hop le');
            }

            const reposDir = path.resolve(process.cwd(), 'src/content/repos');
            const filePath = path.resolve(reposDir, `${slug}.md`);
            if (!filePath.startsWith(reposDir + path.sep)) {
              throw new Error('File nam ngoai thu muc repos');
            }

            const original = await fs.readFile(filePath, 'utf8');
            const nextDraft = `draft: ${draft ? 'true' : 'false'}`;
            let next = original;

            if (/^draft:\s*(true|false)\s*$/m.test(next)) {
              next = next.replace(/^draft:\s*(true|false)\s*$/m, nextDraft);
            } else {
              next = next.replace(/^(---\r?\n)/, `$1${nextDraft}\n`);
            }

            await fs.writeFile(filePath, next);
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify({ ok: true, slug, draft }));
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
export default defineConfig({
  site: 'https://reporadar.vn',
  vite: {
    plugins: [tailwindcss(), draftReviewPlugin()],
  },
});
