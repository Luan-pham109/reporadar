#!/usr/bin/env node
import { spawn } from 'node:child_process';

const astro = process.platform === 'win32' ? 'node_modules\\.bin\\astro.cmd' : 'node_modules/.bin/astro';
const child = spawn(astro, ['build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: { ...process.env, PUBLIC_SHOW_DRAFTS: 'true' },
});

child.on('exit', (code) => process.exit(code ?? 1));
