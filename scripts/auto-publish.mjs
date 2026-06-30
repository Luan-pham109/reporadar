#!/usr/bin/env node
/**
 * auto-publish.mjs — tự PUBLISH các draft đạt chuẩn cao, sau khi skill đã viết xong.
 *
 * Bối cảnh: run-daily-pipeline chỉ chấm tín hiệu KHÁCH QUAN (chưa có evidenceLevel/
 * greyHatFlag — chúng chỉ tồn tại sau khi repo-radar-synthesize/edit viết record).
 * Vì vậy auto-publish là BƯỚC RIÊNG quét draft đã hoàn chỉnh.
 *
 * Điều kiện auto-publish (chốt 2026-06-30):
 *   - Signal Score tổng >= 70
 *   - evidenceLevel === 'A'   (lab-tested — cổng người chặt nhất)
 *   - confidence  === 'high'
 *   - greyHatFlag === 'in'    (đồ sạch)
 * Draft không đủ → để nguyên cho Luan duyệt tay ở /review.
 *
 * Đạt chuẩn → set draft:false + stamp lastReviewedAt/nextReviewDueAt, rồi DEPLOY production.
 *
 * Cách dùng:
 *   node scripts/auto-publish.mjs            # flip + deploy
 *   node scripts/auto-publish.mjs --dry-run  # chỉ in ai đủ/không, không ghi/deploy
 *   node scripts/auto-publish.mjs --no-deploy# flip file nhưng không deploy
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { updateDraftFrontmatter, stampReviewDates } from './lib/publish-flow.mjs';

const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

// Rubric Signal Score v1 (đồng bộ src/lib/score.ts).
const WEIGHTS = { useCaseFit: 25, projectHealth: 25, costAdvantage: 20, deployment: 15, documentation: 15 };

// Ngưỡng auto-publish.
const MIN_SCORE = 70;
const ALLOWED_EVIDENCE = new Set(['A']);
const ALLOWED_CONFIDENCE = new Set(['high']);

const reposDir = path.resolve('src/content/repos');

export function totalScore(sb) {
  if (!sb) return null;
  let total = 0;
  for (const [key, max] of Object.entries(WEIGHTS)) {
    total += Math.min(max, Math.max(0, sb[key] ?? 0));
  }
  return Math.round(total);
}

export function evaluate(data) {
  const reasons = [];
  if (!data.draft) return { eligible: false, skip: true }; // không phải draft → bỏ qua im lặng
  const total = totalScore(data.scoreBreakdown);
  if (total == null) reasons.push('thiếu scoreBreakdown');
  else if (total < MIN_SCORE) reasons.push(`score ${total} < ${MIN_SCORE}`);
  if (!ALLOWED_EVIDENCE.has(data.evidenceLevel)) reasons.push(`evidenceLevel=${data.evidenceLevel ?? '-'} (cần A)`);
  if (!ALLOWED_CONFIDENCE.has(data.confidence)) reasons.push(`confidence=${data.confidence ?? '-'} (cần high)`);
  if ((data.greyHatFlag ?? 'in') !== 'in') reasons.push(`greyHatFlag=${data.greyHatFlag} (cần in)`);
  return { eligible: reasons.length === 0, total, reasons };
}

function runDeploy(sourceLabel) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  return new Promise((resolve, reject) => {
    const child = spawn(npm, ['run', 'publish:prod', '--', '--yes', `--source=${sourceLabel}`], {
      stdio: 'inherit',
      env: process.env,
      shell: process.platform === 'win32',
    });
    child.on('error', reject);
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`deploy exited ${code}`))));
  });
}

async function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes('--dry-run');
  const noDeploy = argv.includes('--no-deploy');

  const files = (await fs.readdir(reposDir)).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort();

  const published = [];
  const skipped = [];

  for (const file of files) {
    const filePath = path.join(reposDir, file);
    const raw = await fs.readFile(filePath, 'utf8');
    const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) continue;
    let data;
    try {
      data = yaml.load(fm[1]) || {};
    } catch {
      continue;
    }
    if (!data.draft) continue;

    const slug = file.replace(/\.md$/, '');
    const result = evaluate(data);
    if (!result.eligible) {
      skipped.push({ slug, total: result.total, reasons: result.reasons });
      continue;
    }

    published.push({ slug, total: result.total });
    if (!dryRun) {
      let next = updateDraftFrontmatter(raw, false);
      next = stampReviewDates(next);
      await fs.writeFile(filePath, next);
    }
  }

  console.log(`Auto-publish: ${published.length} đạt chuẩn, ${skipped.length} giữ draft.`);
  for (const p of published) console.log(`  ✓ ${p.slug} (score ${p.total})`);
  for (const s of skipped) console.log(`  – ${s.slug}: ${s.reasons.join('; ')}`);

  if (dryRun) {
    console.log('\n(dry-run — không ghi file, không deploy)');
    return;
  }
  if (published.length === 0) {
    console.log('\nKhông có draft nào đạt chuẩn — bỏ qua deploy.');
    return;
  }
  if (noDeploy) {
    console.log('\nĐã flip draft:false. Bỏ qua deploy (--no-deploy).');
    return;
  }

  console.log(`\nDeploy production (${published.length} record vừa publish)...`);
  await runDeploy(`auto-publish:${published.length}`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
