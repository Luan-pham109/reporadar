import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildRepoStatsBlock,
  updateRepoStatsFrontmatter,
} from '../scripts/lib/repo-frontmatter.mjs';
import { parseRepoRef } from '../scripts/lib/github-stats.mjs';

const STATS = {
  stars: 250,
  forks: 40,
  starsPerDay: 2.5,
  ageDays: 100,
  pushedAt: '2026-07-04T10:00:00Z',
  archived: false,
  openIssues: 3,
};

test('buildRepoStatsBlock renders canonical fields with derived note', () => {
  const block = buildRepoStatsBlock(STATS);
  assert.match(block, /^repoStats:\n/);
  assert.match(block, /\n  stars: 250\n/);
  assert.match(block, /\n  forks: 40\n/);
  assert.match(block, /\n  note: "~100 ngày tuổi, ~2\.5 sao\/ngày"\n/);
  assert.match(block, /\n  starsPerDay: 2\.5\n/);
  assert.match(block, /\n  pushedAt: "2026-07-04T10:00:00Z"\n/);
  assert.match(block, /\n  archived: false\n/);
  assert.match(block, /  openIssues: 3$/);
});

test('updateRepoStatsFrontmatter replaces the block and keeps surrounding fields + body', () => {
  const input = [
    '---',
    'name: "Demo"',
    'maturity: "rising"',
    'repoStats:',
    '  stars: 1',
    '  forks: 0',
    '  note: "cũ"',
    '  starsPerDay: 0.1',
    '  ageDays: 10',
    '  pushedAt: "2026-01-01T00:00:00Z"',
    '  archived: false',
    '  openIssues: 0',
    'standoutFeatures:',
    '  - "A"',
    'draft: false',
    '---',
    'Body text.',
    '',
  ].join('\n');

  const output = updateRepoStatsFrontmatter(input, STATS);

  // Số liệu mới
  assert.match(output, /\n  stars: 250\n/);
  assert.match(output, /\n  openIssues: 3\n/);
  // Field xung quanh giữ nguyên
  assert.match(output, /\nname: "Demo"\n/);
  assert.match(output, /\nmaturity: "rising"\n/);
  assert.match(output, /\nstandoutFeatures:\n  - "A"\n/);
  assert.match(output, /\ndraft: false\n/);
  // Body giữ nguyên
  assert.match(output, /\nBody text\.\n/);
  // Không còn giá trị cũ
  assert.doesNotMatch(output, /stars: 1\b/);
});

test('updateRepoStatsFrontmatter preserves CRLF line endings', () => {
  const input = [
    '---',
    'name: "Demo"',
    'repoStats:',
    '  stars: 1',
    '  forks: 0',
    '  note: "cũ"',
    '  starsPerDay: 0.1',
    '  ageDays: 10',
    '  pushedAt: "2026-01-01T00:00:00Z"',
    '  archived: false',
    '  openIssues: 0',
    'draft: false',
    '---',
    'Body.',
    '',
  ].join('\r\n');

  const output = updateRepoStatsFrontmatter(input, STATS);
  assert.match(output, /\r\n  stars: 250\r\n/);
  assert.ok(!output.includes('\n  stars: 250\n') || output.includes('\r\n  stars: 250\r\n'));
});

test('updateRepoStatsFrontmatter returns source unchanged when no repoStats block', () => {
  const input = '---\nname: "Demo"\ndraft: false\n---\nBody.\n';
  assert.equal(updateRepoStatsFrontmatter(input, STATS), input);
});

test('parseRepoRef parses urls, owner/repo, and rejects junk', () => {
  assert.deepEqual(parseRepoRef('https://github.com/degausai/wonda'), { owner: 'degausai', repo: 'wonda' });
  assert.deepEqual(parseRepoRef('degausai/wonda'), { owner: 'degausai', repo: 'wonda' });
  assert.deepEqual(parseRepoRef('https://github.com/owner/repo.git'), { owner: 'owner', repo: 'repo' });
  assert.equal(parseRepoRef('https://example.com/not-github'), null);
  assert.equal(parseRepoRef(''), null);
  assert.equal(parseRepoRef(null), null);
});
