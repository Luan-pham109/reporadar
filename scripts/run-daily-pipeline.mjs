#!/usr/bin/env node
/**
 * run-daily-pipeline.mjs - prepare the deterministic queue for Codex drafting.
 *
 * This script does not call any LLM API. It gathers discovery candidates,
 * fetches objective repo signals, extracts README/media hints, and writes a
 * queue file that the Codex scheduler can turn into draft records.
 */

import { execFile } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const QUEUE_DIR = join(ROOT, '.codex', 'reporadar-daily-queue');
const DEFAULT_DAYS = 365;
const DEFAULT_LIMIT = 60;
const DEFAULT_PICK = 5;

function parseArgs(argv) {
  const args = {
    days: DEFAULT_DAYS,
    limit: DEFAULT_LIMIT,
    pick: DEFAULT_PICK,
    source: 'all',
    vertical: 'all',
    dryRun: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') args.dryRun = true;
    else if (a === '--days') args.days = Number(argv[++i]);
    else if (a === '--limit') args.limit = Number(argv[++i]);
    else if (a === '--pick') args.pick = Number(argv[++i]);
    else if (a === '--source') args.source = argv[++i];
    else if (a === '--vertical') args.vertical = argv[++i];
  }
  return args;
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

async function runNodeScript(script, args) {
  const { stdout } = await execFileAsync(process.execPath, [join(ROOT, 'scripts', script), ...args], {
    cwd: ROOT,
    env: process.env,
    maxBuffer: 1024 * 1024 * 8,
  });
  return stdout;
}

async function discover(args) {
  const stdout = await runNodeScript('discover-repos.mjs', [
    '--json',
    '--source',
    args.source,
    '--vertical',
    args.vertical,
    '--days',
    String(args.days),
    '--limit',
    String(args.limit),
  ]);
  return JSON.parse(stdout).candidates ?? [];
}

function scoreCandidate(c) {
  const sourceScore = (c.sources?.length ?? 0) * 1000;
  const starsScore = Math.min(c.stars ?? 0, 20000) / 20;
  const pointsScore = c.points ?? 0;
  const verticalScore = (c.verticals?.length ?? 0) > 0 ? 100 : 0;
  return sourceScore + starsScore + pointsScore + verticalScore;
}

function shortlist(candidates, pick) {
  return [...candidates]
    .sort((a, b) => scoreCandidate(b) - scoreCandidate(a))
    .slice(0, pick);
}

async function fetchSignals(fullName) {
  const stdout = await runNodeScript('fetch-signals.mjs', [fullName, '--json']);
  return JSON.parse(stdout);
}

async function fetchReadme({ owner, repo }) {
  const headers = {
    'User-Agent': 'RepoRadarVN/0.1 daily queue',
    Accept: 'application/vnd.github.raw',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, { headers });
  if (!res.ok) return '';
  return (await res.text()).slice(0, 20000);
}

function extractMedia(readme) {
  const urls = [...readme.matchAll(/https?:\/\/[^)"'\s<>]+/g)]
    .map((m) => m[0].replace(/[.,;]+$/, ''))
    .filter((url) => /githubusercontent|user-attachments|\.png|\.jpe?g|\.gif|\.webp|\.mp4/i.test(url))
    .filter((url) => !/badge|shield|logo|avatar/i.test(url));
  return [...new Set(urls)].slice(0, 3).map((url) => ({
    type: /\.mp4(\?|$)/i.test(url) ? 'video' : 'image',
    url,
    caption: '',
  }));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const candidates = await discover(args);
  const picked = shortlist(candidates, args.pick);

  const queue = {
    generatedAt: new Date().toISOString(),
    args,
    count: picked.length,
    instructions: [
      'Use repo-radar-hunt, repo-radar-synthesize, and repo-radar-edit semantics.',
      'Create one draft markdown record per queued repo in src/content/repos.',
      'Keep draft: true. Do not publish automatically.',
      'Run npm.cmd run build after writing records.',
    ],
    items: [],
  };

  for (const candidate of picked) {
    const signals = await fetchSignals(candidate.fullName);
    const readme = await fetchReadme(signals.repo);
    queue.items.push({
      candidate,
      signals,
      readmeExcerpt: readme.slice(0, 16000),
      media: extractMedia(readme),
      score: scoreCandidate(candidate),
    });
  }

  console.log(`Discovered ${candidates.length} candidates, queued ${queue.items.length}.`);
  for (const item of queue.items) {
    console.log(`- ${item.candidate.fullName} (${Math.round(item.score)}) ${item.candidate.url}`);
  }

  if (args.dryRun) return;

  await mkdir(QUEUE_DIR, { recursive: true });
  const datedPath = join(QUEUE_DIR, `${timestamp()}.json`);
  const latestPath = join(QUEUE_DIR, 'latest.json');
  const json = `${JSON.stringify(queue, null, 2)}\n`;
  await writeFile(datedPath, json, 'utf8');
  await writeFile(latestPath, json, 'utf8');
  console.log(`Queue written: ${latestPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
