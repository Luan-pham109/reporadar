# TODO: Signal Score v1 (Kịch bản A)

> Chi tiết + acceptance/verify từng task: xem `tasks/plan.md`. Làm theo thứ tự. Dừng ở mỗi CHECKPOINT chờ review.

## Phase 0 — Contract (block mọi thứ)
- [ ] **0.1** Mở rộng schema `src/content/config.ts`: repoStats (+starsPerDay, ageDays, pushedAt, archived, openIssues), scoreBreakdown (5 số, max theo trọng số), scoringVersion, evidenceLevel, confidence, lastReviewedAt, nextReviewDueAt — tất cả OPTIONAL.
- [ ] **0.2** Tạo `src/lib/score.ts`: WEIGHTS + SCORE_LABELS + SCORE_KIND + `computeScore()`. Tổng = derived, clamp value, hasScore flag.
- [ ] ⛳ **CHECKPOINT A** — build xanh, 29 record cũ không vỡ. Review field + công thức.

## Phase 1 — Một đường dọc trên record pilot
- [ ] **1.1** Mở rộng `scripts/fetch-signals.mjs`: lấy pushed_at/archived/open_issues; thêm `healthScore()` (0–25) + output `suggestedHealthScore`.
- [ ] **1.2** Backfill `plane-project-management.md`: repoStats structured + scoreBreakdown (health=auto, 4 cái judged) + evidenceLevel B + confidence high + lastReviewedAt/nextReviewDueAt + scoringVersion v1.
- [ ] **1.3** Tạo `src/components/EvidenceCard.astro` + wire vào `[slug].astro` (dưới hero, không phải tiêu đề). Sources + limitations công khai. Fallback gọn khi chưa có score.
- [ ] ⛳ **CHECKPOINT B** (quan trọng nhất) — xem Evidence Card thật trên browser. Chốt bố cục + rubric trước khi nhân ra.

## Phase 2 — Methodology
- [ ] **2.1** Tạo `src/pages/methodology.astro`, import WEIGHTS từ lib (không hardcode số). Giải thích score/evidence level/confidence/review/COI policy. Link 2 chiều với Evidence Card.
- [ ] ⛳ **CHECKPOINT C** — methodology live.

## Phase 3 — Nhân ra
- [ ] **3.1** Cập nhật `_template.md` + 3 skill (hunt/synthesize/edit, cả `.claude/` lẫn `.agents/`): phân vai field mới, nhúng rubric.
- [ ] **3.2** Cập nhật `scripts/export-member-feed.mjs`: thêm scoreBreakdown, altstackSignalScore, evidenceLevel, confidence, lastReviewedAt.
- [ ] **3.3** Backfill 28 record còn lại (theo lô 5–6, build sau mỗi lô). Viết `scripts/check-score.mjs` liệt kê record thiếu field.
- [ ] **3.4** Thêm badge evidenceLevel + score ở `RepoCard.astro` (KHÔNG sort theo score).
- [ ] ⛳ **CHECKPOINT D** — mọi record có score, feed + list cập nhật, build xanh.

## Phase 4 — Publish checklist mềm
- [ ] **4.1** `export-member-feed.mjs`: warn (không fail) khi record published thiếu evidenceLevel/confidence/lastReviewedAt/signalSources/usabilityRisk.
- [ ] ⛳ **CHECKPOINT E** (final) — đối chiếu PRD §2bis.

## Definition of Done
- [ ] 29 record có score + evidence labels, build xanh
- [ ] Evidence Card = phụ đề, sources/limitations công khai
- [ ] /methodology khớp WEIGHTS (1 nguồn sự thật)
- [ ] member-feed + checklist mềm ok
- [ ] KHÔNG leaderboard / sort theo score
- [ ] template + skill tự sinh score cho record mới
