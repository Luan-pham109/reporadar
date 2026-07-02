import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

export const REPOS_DIR = path.resolve(process.cwd(), 'src/content/repos');

export function listRepoFiles(reposDir = REPOS_DIR) {
  return fs
    .readdir(reposDir)
    .then((files) => files.filter((file) => file.endsWith('.md') && !file.startsWith('_')).sort());
}

export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: raw };
  return {
    data: yaml.load(match[1]) || {},
    body: raw.slice(match[0].length),
  };
}

export async function readRepoRecord(reposDir, file) {
  const raw = await fs.readFile(path.join(reposDir, file), 'utf8');
  const { data, body } = parseFrontmatter(raw);
  return {
    slug: file.replace(/\.md$/, ''),
    draft: Boolean(data.draft),
    data,
    body,
  };
}

export async function readAllRepoRecords(reposDir = REPOS_DIR) {
  const files = await listRepoFiles(reposDir);
  return Promise.all(files.map((file) => readRepoRecord(reposDir, file)));
}

export async function readDraftStates(reposDir = REPOS_DIR) {
  const records = await readAllRepoRecords(reposDir);
  return new Map(records.map((record) => [record.slug, record.draft]));
}

export function updateDraftFrontmatter(source, draft) {
  const nextDraft = `draft: ${draft ? 'true' : 'false'}`;

  if (/^draft:\s*(true|false)\s*$/m.test(source)) {
    return source.replace(/^draft:\s*(true|false)\s*$/m, nextDraft);
  }

  return source.replace(/^(---\r?\n)/, `$1${nextDraft}\n`);
}
