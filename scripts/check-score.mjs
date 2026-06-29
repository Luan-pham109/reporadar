#!/usr/bin/env node
/**
 * check-score.mjs — liệt kê record thiếu scoreBreakdown hoặc evidence fields.
 * Dùng: node scripts/check-score.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

const REQUIRED = ['evidenceLevel', 'confidence', 'lastReviewedAt'];
const reposDir = path.resolve('src/content/repos');

const files = (await fs.readdir(reposDir))
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  .sort();

const missing = [];
let withScore = 0;

for (const file of files) {
  const raw = await fs.readFile(path.join(reposDir, file), 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) continue;
  const data = yaml.load(match[1]) || {};
  if (data.draft) continue;

  const slug = file.replace(/\.md$/, '');
  const missingFields = [];

  if (!data.scoreBreakdown) missingFields.push('scoreBreakdown');
  for (const f of REQUIRED) {
    if (!data[f]) missingFields.push(f);
  }

  if (missingFields.length > 0) {
    missing.push({ slug, missingFields });
  } else {
    withScore++;
  }

  // Print score for records that have scoreBreakdown
  if (data.scoreBreakdown) {
    const sb = data.scoreBreakdown;
    const WEIGHTS = { useCaseFit: 25, projectHealth: 25, costAdvantage: 20, deployment: 15, documentation: 15 };
    let total = 0;
    for (const [key, max] of Object.entries(WEIGHTS)) {
      const v = sb[key] ?? 0;
      total += Math.min(max, Math.max(0, v));
    }
    console.log(`[SCORE] ${slug}: ${Math.round(total)}/100 (useCaseFit=${sb.useCaseFit ?? '-'}, projectHealth=${sb.projectHealth ?? '-'}, costAdvantage=${sb.costAdvantage ?? '-'}, deployment=${sb.deployment ?? '-'}, documentation=${sb.documentation ?? '-'})`);
  }
}

if (missing.length === 0) {
  console.log(`\nTất cả ${withScore} record published đều có đủ field. Build sẵn sàng.`);
} else {
  console.log(`\n${missing.length} record published thiếu field:`);
  for (const { slug, missingFields } of missing) {
    console.log(`  ${slug}: ${missingFields.join(', ')}`);
  }
}
