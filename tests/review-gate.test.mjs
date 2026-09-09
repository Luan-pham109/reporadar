import test from 'node:test';
import assert from 'node:assert/strict';
import { needsMember } from '../functions/_middleware.js';
import { draftSlugs } from '../functions/_generated/draft-slugs.js';

const draftSlug = [...draftSlugs][0];

test('gate chặn màn hình duyệt draft', () => {
  assert.equal(needsMember('/review'), true);
  assert.equal(needsMember('/review/'), true);
  // Pages phục vụ asset không phân biệt hoa thường.
  assert.equal(needsMember('/REVIEW/'), true);
});

test('gate chặn trang chi tiết của record chưa publish', () => {
  assert.equal(needsMember(`/repos/${draftSlug}`), true);
  assert.equal(needsMember(`/repos/${draftSlug}/`), true);
  assert.equal(needsMember(`/Repos/${draftSlug}/`), true);
  assert.equal(needsMember(`/repos/${draftSlug.toUpperCase()}/`), true);
});

test('gate không đụng vào trang công khai', () => {
  assert.equal(needsMember('/'), false);
  assert.equal(needsMember('/repos/postiz-app/'), false);
  assert.equal(needsMember('/feed.json'), false);
  assert.equal(needsMember('/rss.xml'), false);
  assert.equal(needsMember('/methodology/'), false);
});

test('slug không tồn tại không bị nhận nhầm là draft', () => {
  assert.equal(needsMember('/repos/khong-ton-tai-dau/'), false);
});
