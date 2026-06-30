/**
 * health.mjs — rubric KHÁCH QUAN dùng chung cho discovery gate + Signal Score.
 *
 * Nguồn sự thật duy nhất cho phần điểm tự-tính-được (không cần người):
 *   - computeProjectHealth(gh)  → trục projectHealth (0-25) của Signal Score v1.
 *   - docProxy(len, hasMedia)   → ước lượng trục documentation (0-15) từ README.
 *   - objectiveFloor(gh, ...)   → sàn = projectHealth + docProxy (0-40) để gate queue.
 *
 * Rubric chốt 2026-06-30 (xem hội thoại): Recency ≤14/30/90/180, gate 15/40,
 * cadence re-review 30/60/120. Đổi rubric → đổi DUY NHẤT ở đây.
 */

/** Ngưỡng sàn khách quan để 1 ứng viên được vào queue draft. */
export const GATE_THRESHOLD = 15;

/** Số ngày tới hạn re-review theo maturity. */
export const REVIEW_CADENCE_DAYS = { 'pre-viral': 30, rising: 60, established: 120 };

function daysSince(iso) {
  if (!iso) return Infinity;
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return Infinity;
  return Math.round((Date.now() - t) / 86400000);
}

/**
 * projectHealth (0-25) — deterministic từ repoStats/github signals.
 * A. Recency (0-10) · B. Momentum (0-8) · C. Adoption (0-7) · penalty archived/issues.
 */
export function computeProjectHealth(gh) {
  if (!gh) return 0;

  // A. Recency — bảo trì (pushedAt).
  const dPush = daysSince(gh.pushedAt);
  const recency = dPush <= 14 ? 10 : dPush <= 30 ? 8 : dPush <= 90 ? 5 : dPush <= 180 ? 2 : 0;

  // B. Momentum — starsPerDay (derive stars/ageDays nếu thiếu).
  let spd = gh.starsPerDay;
  if (spd == null && gh.ageDays > 0) spd = gh.stars / gh.ageDays;
  spd = spd ?? 0;
  const momentum = spd >= 15 ? 8 : spd >= 8 ? 6 : spd >= 4 ? 4 : spd >= 1.5 ? 2 : 1;

  // C. Adoption — stars.
  const s = gh.stars ?? 0;
  const adoption =
    s >= 10000 ? 7 : s >= 3000 ? 6 : s >= 1000 ? 5 : s >= 500 ? 4 : s >= 200 ? 3 : s >= 50 ? 2 : 1;

  let total = recency + momentum + adoption;

  // Penalty: repo chết.
  if (gh.archived) return Math.min(total, 5);

  // Penalty: tồn issue quá tải so với quy mô.
  const open = gh.openIssues ?? 0;
  if (s > 0 && open / s > 0.1 && open > 50) total -= 2;

  return Math.max(0, Math.min(25, total));
}

/** docProxy (0-15) — ước lượng trục documentation từ độ dài README + có media. */
export function docProxy(readmeLength = 0, hasMedia = false) {
  if (readmeLength >= 3000) return hasMedia ? 12 : 9;
  if (readmeLength >= 1000) return 6;
  if (readmeLength >= 300) return 3;
  return 1;
}

/** Sàn khách quan (0-40) = projectHealth + docProxy. */
export function objectiveFloor(gh, readmeLength = 0, hasMedia = false) {
  return computeProjectHealth(gh) + docProxy(readmeLength, hasMedia);
}
