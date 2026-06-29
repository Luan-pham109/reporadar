import assert from 'node:assert/strict';
import test from 'node:test';

import {
  extractToolLabel,
  groupByAlternative,
  ownerAvatar,
  relativeTime,
  slugifyTool,
} from '../src/lib/alternatives.ts';

test('slugifyTool normalizes accents and punctuation', () => {
  assert.equal(slugifyTool('Công cụ Đắt Phí Pro'), 'cong-cu-at-phi-pro');
});

test('extractToolLabel keeps the first recognizable brand', () => {
  assert.equal(
    extractToolLabel('Một phần việc của Screaming Frog / Sitebulb / Surfer / checklist audit thủ công'),
    'Screaming Frog',
  );
});

test('ownerAvatar builds the owner avatar URL from GitHub repo URLs', () => {
  assert.equal(
    ownerAvatar('https://github.com/gitroomhq/postiz-app'),
    'https://github.com/gitroomhq.png?size=80',
  );
});

test('relativeTime formats hours, days, weeks, and months in Vietnamese', () => {
  const now = new Date('2026-06-29T12:00:00.000Z');

  assert.equal(relativeTime('2026-06-29T09:00:00.000Z', now), '3 giờ trước');
  assert.equal(relativeTime('2026-06-26T12:00:00.000Z', now), '3 ngày trước');
  assert.equal(relativeTime('2026-06-15T12:00:00.000Z', now), '2 tuần trước');
  assert.equal(relativeTime('2026-04-29T12:00:00.000Z', now), '2 tháng trước');
});

test('groupByAlternative prefers structured alternativeTo data and deduplicates entries', () => {
  const entryA = {
    id: 'plane-project-management',
    data: {
      paidToolReplaced: 'Jira / Linear / Trello bản trả phí',
      alternativeTo: [{ name: 'Jira', slug: 'jira' }],
    },
  };
  const entryB = {
    id: 'another-jira-tool',
    data: {
      paidToolReplaced: 'Jira / Trello',
      alternativeTo: [{ name: 'Jira', slug: 'jira' }],
    },
  };

  const groups = groupByAlternative([entryA, entryB]);
  const jira = groups.get('jira');

  assert.ok(jira);
  assert.equal(jira.name, 'Jira');
  assert.deepEqual(
    jira.entries.map((entry) => entry.id),
    ['plane-project-management', 'another-jira-tool'],
  );
});
