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

// Khớp header `repoStats:` + mọi dòng con thụt lề (dừng ở key cấp 0 kế tiếp).
const REPO_STATS_BLOCK_RE = /^repoStats:.*(?:\r?\n[ \t].*)*/m;

/**
 * Dựng lại khối `repoStats:` từ số liệu GitHub tươi. `note` là field dẫn xuất nên
 * sinh lại luôn. Thứ tự field giữ như record hiện có. `JSON.stringify` cho note/
 * pushedAt để ra chuỗi double-quoted hợp lệ YAML.
 */
export function buildRepoStatsBlock(stats, eol = '\n') {
  const note = `~${stats.ageDays} ngày tuổi, ~${stats.starsPerDay} sao/ngày`;
  return [
    'repoStats:',
    `  stars: ${stats.stars}`,
    `  forks: ${stats.forks}`,
    `  note: ${JSON.stringify(note)}`,
    `  starsPerDay: ${stats.starsPerDay}`,
    `  ageDays: ${stats.ageDays}`,
    `  pushedAt: ${JSON.stringify(stats.pushedAt)}`,
    `  archived: ${stats.archived}`,
    `  openIssues: ${stats.openIssues}`,
  ].join(eol);
}

/**
 * Thay khối `repoStats:` tại chỗ bằng số liệu mới, giữ nguyên phần còn lại của file
 * và kiểu xuống dòng (CRLF/LF). Trả `source` nguyên vẹn nếu không tìm thấy khối.
 */
export function updateRepoStatsFrontmatter(source, stats) {
  if (!REPO_STATS_BLOCK_RE.test(source)) return source;
  const eol = source.includes('\r\n') ? '\r\n' : '\n';
  return source.replace(REPO_STATS_BLOCK_RE, buildRepoStatsBlock(stats, eol));
}
