#!/usr/bin/env node
/**
 * refresh-stats.mjs — cập nhật số liệu GitHub (repoStats) cho record hàng tuần.
 *
 * Chỉ đụng số liệu KHÁCH QUAN (stars/forks/starsPerDay/ageDays/pushedAt/archived/
 * openIssues + note dẫn xuất). KHÔNG đụng field biên tập (maturity, score, insight VN).
 * Mặc định chỉ refresh record ĐÃ PUBLISH (bỏ qua draft).
 *
 * Cách dùng:
 *   node scripts/refresh-stats.mjs                     # refresh mọi record published
 *   node scripts/refresh-stats.mjs --dry-run           # không ghi file, chỉ in đề xuất
 *   node scripts/refresh-stats.mjs --only degausai-wonda
 *   node scripts/refresh-stats.mjs --include-drafts    # gồm cả draft
 *   node scripts/refresh-stats.mjs --limit 5 --delay 500
 *
 * Đặt GITHUB_TOKEN trong env để nâng rate-limit (bắt buộc cho batch lớn).
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import {
  REPOS_DIR,
  listRepoFiles,
  parseFrontmatter,
  updateRepoStatsFrontmatter,
} from './lib/repo-frontmatter.mjs';
import { parseRepoRef, fetchGitHubStats } from './lib/github-stats.mjs';

function parseArgs(argv) {
  const args = { dryRun: false, only: null, limit: Infinity, delay: 250, includeDrafts: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') args.dryRun = true;
    else if (a === '--include-drafts') args.includeDrafts = true;
    else if (a === '--only') args.only = argv[++i];
    else if (a === '--limit') args.limit = Number(argv[++i]);
    else if (a === '--delay') args.delay = Number(argv[++i]);
  }
  return args;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('[refresh-stats] Chưa có GITHUB_TOKEN — GitHub API chỉ cho 60 req/giờ, dễ bị rate-limit.');
  }

  const files = await listRepoFiles();
  const updated = [];
  const errors = [];
  let unchanged = 0;
  let skipped = 0;
  let processed = 0;

  for (const file of files) {
    if (processed >= args.limit) break;
    const slug = file.replace(/\.md$/, '');
    if (args.only && slug !== args.only) continue;

    const filePath = path.join(REPOS_DIR, file);
    const raw = await fs.readFile(filePath, 'utf8');
    const { data } = parseFrontmatter(raw);

    if (data.draft && !args.includeDrafts) {
      skipped++;
      continue; // published-only (mặc định)
    }

    const ref = parseRepoRef(data.repoUrl);
    if (!ref) {
      skipped++;
      continue; // repoUrl không phải GitHub repo
    }

    processed++;
    let stats;
    try {
      stats = await fetchGitHubStats(ref, { token });
    } catch (err) {
      errors.push({ slug, message: err.message });
      console.warn(`  ✗ ${slug}: ${err.message}`);
      if (args.delay) await sleep(args.delay);
      continue;
    }

    const next = updateRepoStatsFrontmatter(raw, stats);
    if (next === raw) {
      unchanged++;
    } else {
      const old = data.repoStats || {};
      updated.push({ slug, oldStars: old.stars, newStars: stats.stars, oldForks: old.forks, newForks: stats.forks });
      if (!args.dryRun) await fs.writeFile(filePath, next, 'utf8');
    }
    if (args.delay) await sleep(args.delay);
  }

  console.log(`\n=== refresh-stats ${args.dryRun ? '(dry-run) ' : ''}===`);
  for (const u of updated) {
    const star = u.oldStars !== u.newStars ? ` ⭐ ${u.oldStars ?? '?'}→${u.newStars}` : '';
    const fork = u.oldForks !== u.newForks ? ` 🍴 ${u.oldForks ?? '?'}→${u.newForks}` : '';
    console.log(`  ~ ${u.slug}${star}${fork}`);
  }
  console.log(
    `\nĐã cập nhật: ${updated.length} | Không đổi: ${unchanged} | Bỏ qua: ${skipped} | Lỗi: ${errors.length}`,
  );

  // Exit 1 chỉ khi MỌI request đều lỗi (token/rate/mạng) — 404 lẻ tẻ vẫn exit 0.
  if (processed > 0 && errors.length === processed) {
    console.error('\nTất cả request đều lỗi — có thể do token/rate-limit/mạng. Thoát mã 1.');
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
