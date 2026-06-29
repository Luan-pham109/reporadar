#!/usr/bin/env node
import { spawn } from 'node:child_process';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { parseDeployArgs } from './lib/publish-flow.mjs';

const projectName =
  process.env.REPO_RADAR_PAGES_PROJECT ||
  process.env.CLOUDFLARE_PAGES_PROJECT ||
  process.env.CF_PAGES_PROJECT_NAME;
const branch = process.env.REPO_RADAR_PAGES_BRANCH || 'main';
const { assumeYes, source } = parseDeployArgs(process.argv.slice(2));

if (!projectName) {
  console.error(
    'Missing Pages project name. Set REPO_RADAR_PAGES_PROJECT to your Cloudflare Pages project.',
  );
  process.exit(1);
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      env: process.env,
      shell: process.platform === 'win32',
    });
    child.on('error', reject);
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))));
  });
}

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';

if (!assumeYes) {
  if (!input.isTTY || !output.isTTY) {
    console.error(
      'Refusing to deploy production without confirmation. Re-run with --yes after you review the live change.',
    );
    process.exit(1);
  }

  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(
    `About to build and deploy dist/ to Cloudflare Pages project "${projectName}" on branch "${branch}" (source: ${source}). Type DEPLOY to continue: `,
  );
  rl.close();

  if (answer.trim() !== 'DEPLOY') {
    console.error('Production deploy cancelled.');
    process.exit(1);
  }
}

console.log(`[publish:prod] source=${source}`);
await run(npm, ['run', 'build']);
await run(npx, [
  'wrangler',
  'pages',
  'deploy',
  'dist',
  '--project-name',
  projectName,
  '--branch',
  branch,
  '--commit-dirty',
]);
