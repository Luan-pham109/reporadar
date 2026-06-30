import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildReviewDeployArgs,
  parseDeployArgs,
  stampReviewDates,
  updateDraftFrontmatter,
} from '../scripts/lib/publish-flow.mjs';

const NOW = new Date('2026-06-30T00:00:00Z');

test('stampReviewDates sets review window by maturity cadence', () => {
  const rising = stampReviewDates(`---\nmaturity: "rising"\ndraft: false\n---\n`, NOW);
  assert.match(rising, /^lastReviewedAt: 2026-06-30$/m);
  assert.match(rising, /^nextReviewDueAt: 2026-08-29$/m); // +60

  const preViral = stampReviewDates(`---\nmaturity: "pre-viral"\ndraft: false\n---\n`, NOW);
  assert.match(preViral, /^nextReviewDueAt: 2026-07-30$/m); // +30

  const established = stampReviewDates(`---\nmaturity: "established"\ndraft: false\n---\n`, NOW);
  assert.match(established, /^nextReviewDueAt: 2026-10-28$/m); // +120
});

test('stampReviewDates replaces existing review dates and defaults missing maturity to rising', () => {
  const src = `---\ndraft: false\nlastReviewedAt: 2026-01-01\nnextReviewDueAt: 2026-02-01\n---\n`;
  const out = stampReviewDates(src, NOW);
  assert.match(out, /^lastReviewedAt: 2026-06-30$/m);
  assert.match(out, /^nextReviewDueAt: 2026-08-29$/m); // rising default +60
  assert.doesNotMatch(out, /2026-02-01/);
});

test('updateDraftFrontmatter replaces an existing draft flag', () => {
  const input = `---\ntitle: Demo\ndraft: true\n---\nBody\n`;
  const output = updateDraftFrontmatter(input, false);

  assert.match(output, /^---\ntitle: Demo\ndraft: false\n---/);
});

test('updateDraftFrontmatter inserts a draft flag when missing', () => {
  const input = `---\ntitle: Demo\n---\nBody\n`;
  const output = updateDraftFrontmatter(input, true);

  assert.match(output, /^---\ndraft: true\ntitle: Demo\n---/);
});

test('buildReviewDeployArgs forwards review source metadata and confirmation bypass', () => {
  assert.deepEqual(buildReviewDeployArgs({ slug: 'demo-repo', draft: false }), [
    'run',
    'publish:prod',
    '--',
    '--yes',
    '--source=review:publish:demo-repo',
  ]);
});

test('parseDeployArgs reads --yes and --source flags', () => {
  assert.deepEqual(parseDeployArgs(['--yes', '--source=review:publish:demo-repo']), {
    assumeYes: true,
    source: 'review:publish:demo-repo',
  });
});
