import test from 'node:test';
import assert from 'node:assert/strict';

import { evaluate, totalScore } from '../scripts/auto-publish.mjs';

const strongBreakdown = {
  useCaseFit: 22,
  projectHealth: 20,
  costAdvantage: 16,
  deployment: 12,
  documentation: 10,
}; // = 80

test('totalScore sums clamped breakdown', () => {
  assert.equal(totalScore(strongBreakdown), 80);
  assert.equal(totalScore({ useCaseFit: 999 }), 25); // clamp to max
  assert.equal(totalScore(null), null);
});

test('evaluate publishes only A + high + in + score>=70', () => {
  const base = {
    draft: true,
    scoreBreakdown: strongBreakdown,
    evidenceLevel: 'A',
    confidence: 'high',
    greyHatFlag: 'in',
  };
  assert.equal(evaluate(base).eligible, true);
});

test('evaluate blocks weaker evidence/confidence/greyhat/score', () => {
  const base = {
    draft: true,
    scoreBreakdown: strongBreakdown,
    evidenceLevel: 'A',
    confidence: 'high',
    greyHatFlag: 'in',
  };
  assert.equal(evaluate({ ...base, evidenceLevel: 'B' }).eligible, false);
  assert.equal(evaluate({ ...base, confidence: 'medium' }).eligible, false);
  assert.equal(evaluate({ ...base, greyHatFlag: 'borderline' }).eligible, false);
  assert.equal(evaluate({ ...base, scoreBreakdown: { useCaseFit: 10 } }).eligible, false); // score 10
});

test('evaluate skips non-drafts', () => {
  assert.equal(evaluate({ draft: false }).skip, true);
});
