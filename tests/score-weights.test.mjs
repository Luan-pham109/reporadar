import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const weightsJson = require('../src/lib/score-weights.json');

test('score-weights.json sums to 100', () => {
  const total = Object.values(weightsJson).reduce((sum, value) => sum + value, 0);
  assert.equal(total, 100);
});

test('score-weights.json has exactly the five known score fields', () => {
  assert.deepEqual(
    Object.keys(weightsJson).sort(),
    ['costAdvantage', 'deployment', 'documentation', 'projectHealth', 'useCaseFit'],
  );
});
