#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { join } from 'node:path';

const astro = join('node_modules', 'astro', 'astro.js');
const child = spawn(process.execPath, [astro, 'build'], {
  stdio: 'inherit',
  env: { ...process.env, PUBLIC_SHOW_DRAFTS: 'true' },
});

child.on('exit', (code) => process.exit(code ?? 1));
