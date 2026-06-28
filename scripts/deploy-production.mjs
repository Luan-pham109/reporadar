#!/usr/bin/env node
import { spawn } from 'node:child_process';

const projectName =
  process.env.REPO_RADAR_PAGES_PROJECT ||
  process.env.CLOUDFLARE_PAGES_PROJECT ||
  process.env.CF_PAGES_PROJECT_NAME;
const branch = process.env.REPO_RADAR_PAGES_BRANCH || 'main';

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
      shell: false,
    });
    child.on('error', reject);
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))));
  });
}

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';

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
