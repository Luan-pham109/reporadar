#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { join } from 'node:path';

const projectName =
  process.env.REPO_RADAR_PAGES_PROJECT ||
  process.env.CLOUDFLARE_PAGES_PROJECT ||
  process.env.CF_PAGES_PROJECT_NAME;

if (!projectName) {
  console.error(
    'Missing Pages project name. Set REPO_RADAR_PAGES_PROJECT before running npm run dev:publish.',
  );
  process.exit(1);
}

const astro = join('node_modules', 'astro', 'astro.js');
const child = spawn(process.execPath, [astro, 'dev'], {
  stdio: 'inherit',
  env: { ...process.env, REPO_RADAR_AUTO_DEPLOY: 'true' },
});

child.on('exit', (code) => process.exit(code ?? 1));
