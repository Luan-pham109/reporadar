import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import {
  parseFrontmatter,
  readDraftStates,
  updateDraftFrontmatter,
} from '../scripts/lib/repo-frontmatter.mjs';

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

test('parseFrontmatter extracts YAML data and body', () => {
  const input = `---\nname: Demo\ndraft: true\ntags:\n  - a\n  - b\n---\nBody text\n`;
  const { data, body } = parseFrontmatter(input);

  assert.equal(data.name, 'Demo');
  assert.equal(data.draft, true);
  assert.deepEqual(data.tags, ['a', 'b']);
  assert.equal(body.trim(), 'Body text');
});

test('parseFrontmatter returns empty data when frontmatter block is missing', () => {
  const { data, body } = parseFrontmatter('No frontmatter here\n');
  assert.deepEqual(data, {});
  assert.equal(body, 'No frontmatter here\n');
});

test('readDraftStates reports draft flag per slug from a repos directory', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'repo-frontmatter-'));
  try {
    await fs.writeFile(path.join(dir, 'draft-one.md'), '---\nname: Draft One\ndraft: true\n---\nBody\n');
    await fs.writeFile(path.join(dir, 'published-one.md'), '---\nname: Published One\ndraft: false\n---\nBody\n');
    await fs.writeFile(path.join(dir, 'no-flag.md'), '---\nname: No Flag\n---\nBody\n');
    await fs.writeFile(path.join(dir, '_template.md'), '---\nname: Template\ndraft: true\n---\nBody\n');

    const states = await readDraftStates(dir);

    assert.equal(states.get('draft-one'), true);
    assert.equal(states.get('published-one'), false);
    assert.equal(states.get('no-flag'), false);
    assert.equal(states.has('_template'), false);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});
