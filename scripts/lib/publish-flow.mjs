import { REVIEW_CADENCE_DAYS } from './health.mjs';

function toISODate(d) {
  return d.toISOString().slice(0, 10);
}

/** Upsert một dòng frontmatter `key: value` (thay nếu có, chèn sau dòng draft nếu chưa). */
function upsertFrontmatterLine(source, key, value) {
  const line = `${key}: ${value}`;
  const re = new RegExp(`^${key}:.*$`, 'm');
  if (re.test(source)) return source.replace(re, line);
  if (/^draft:\s*(true|false)\s*$/m.test(source)) {
    return source.replace(/^(draft:\s*(?:true|false)\s*)$/m, `$1\n${line}`);
  }
  return source.replace(/^(---\r?\n)/, `$1${line}\n`);
}

/**
 * Khi PUBLISH (draft:false) — đóng dấu lastReviewedAt = hôm nay và
 * nextReviewDueAt = hôm nay + cadence theo maturity (pre-viral 30 / rising 60 / established 120).
 */
export function stampReviewDates(source, now = new Date()) {
  const m = source.match(/^maturity:\s*["']?([a-z-]+)["']?\s*$/m);
  const maturity = m ? m[1] : 'rising';
  const cadence = REVIEW_CADENCE_DAYS[maturity] ?? REVIEW_CADENCE_DAYS.rising;

  const due = new Date(now.getTime() + cadence * 86400000);
  let next = upsertFrontmatterLine(source, 'lastReviewedAt', toISODate(now));
  next = upsertFrontmatterLine(next, 'nextReviewDueAt', toISODate(due));
  return next;
}

export function updateDraftFrontmatter(source, draft) {
  const nextDraft = `draft: ${draft ? 'true' : 'false'}`;

  if (/^draft:\s*(true|false)\s*$/m.test(source)) {
    return source.replace(/^draft:\s*(true|false)\s*$/m, nextDraft);
  }

  return source.replace(/^(---\r?\n)/, `$1${nextDraft}\n`);
}

export function buildReviewDeployArgs({ slug, draft }) {
  const source = draft ? `review:to-draft:${slug}` : `review:publish:${slug}`;
  return ['run', 'publish:prod', '--', '--yes', `--source=${source}`];
}

export function parseDeployArgs(argv) {
  let assumeYes = false;
  let source = 'manual';

  for (const arg of argv) {
    if (arg === '--yes') {
      assumeYes = true;
      continue;
    }

    if (arg.startsWith('--source=')) {
      const value = arg.slice('--source='.length).trim();
      if (value) source = value;
    }
  }

  return { assumeYes, source };
}
