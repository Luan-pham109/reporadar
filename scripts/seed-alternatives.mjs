import fs from 'node:fs/promises';
import path from 'node:path';

import yaml from 'js-yaml';

import { extractToolLabel, slugifyTool } from '../src/lib/alternatives.ts';

const reposDir = path.resolve(process.cwd(), 'src/content/repos');
const files = await fs.readdir(reposDir);
let updatedCount = 0;

for (const file of files) {
  if (file === '_template.md') continue;
  if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;

  const filePath = path.join(reposDir, file);
  const raw = await fs.readFile(filePath, 'utf8');
  const frontmatterMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!frontmatterMatch) continue;

  const [, frontmatter] = frontmatterMatch;
  if (/(^|\r?\n)alternativeTo:/m.test(frontmatter)) continue;

  const parsed = yaml.load(frontmatter);
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) continue;

  const paidToolReplaced =
    typeof parsed.paidToolReplaced === 'string' ? parsed.paidToolReplaced : '';
  const label = extractToolLabel(paidToolReplaced);
  if (!label) continue;

  const slug = slugifyTool(label);
  if (!slug) continue;

  const lineEnding = raw.includes('\r\n') ? '\r\n' : '\n';
  const insertion =
    `alternativeTo:${lineEnding}` +
    `  - name: ${JSON.stringify(label)}${lineEnding}` +
    `    slug: ${JSON.stringify(slug)}`;

  const paidToolMatch = frontmatter.match(/^paidToolReplaced:.*$/m);
  if (!paidToolMatch || paidToolMatch.index == null) continue;

  const insertAt = paidToolMatch.index + paidToolMatch[0].length;
  const nextFrontmatter =
    `${frontmatter.slice(0, insertAt)}${lineEnding}${insertion}${frontmatter.slice(insertAt)}`;
  const nextRaw =
    `${raw.slice(0, frontmatterMatch.index)}---${lineEnding}` +
    `${nextFrontmatter}${lineEnding}---${frontmatterMatch[2]}` +
    `${raw.slice(frontmatterMatch.index + frontmatterMatch[0].length)}`;

  if (nextRaw !== raw) {
    await fs.writeFile(filePath, nextRaw);
    updatedCount += 1;
  }
}

console.log(`Seeded alternativeTo in ${updatedCount} file(s).`);
