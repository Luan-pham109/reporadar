import test from 'node:test';
import assert from 'node:assert/strict';

import { buildReviewDeployArgs, parseDeployArgs } from '../scripts/lib/publish-flow.mjs';

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
