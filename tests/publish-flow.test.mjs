import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildReviewDeployArgs,
  parseDeployArgs,
  updateDraftFrontmatter,
} from '../scripts/lib/publish-flow.mjs';

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
