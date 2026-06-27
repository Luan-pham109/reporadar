#!/usr/bin/env node
import { spawn } from 'node:child_process';

const astro = process.platform === 'win32' ? 'node_modules\\.bin\\astro.cmd' : 'node_modules/.bin/astro';

function run(command, args, env = process.env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', shell: process.platform === 'win32', env });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))));
  });
}

const env = { ...process.env, PUBLIC_SHOW_DRAFTS: 'true' };
await run(astro, ['build'], env);
await run(astro, ['preview'], env);
