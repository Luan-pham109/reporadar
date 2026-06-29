#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { join } from 'node:path';

const astro = join('node_modules', 'astro', 'astro.js');

function run(command, args, env = process.env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', env });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))));
  });
}

const env = { ...process.env, PUBLIC_SHOW_DRAFTS: 'true' };
await run(process.execPath, [astro, 'build'], env);
await run(process.execPath, [astro, 'preview'], env);
