# Decision Log

## 2026-06-26

- Discovery is an on-demand step, not a local always-on process.
- Recommended discovery cadence is once per day.
- Default scope for daily discovery: `--days 7`, `--limit 20-30`, rotate by vertical to reduce noise.
- GitHub Actions is the chosen trigger so discovery does not depend on the local machine being open.
- The workflow uses `REPO_RADAR_GITHUB_PAT` first, with `GITHUB_TOKEN` as fallback.
- `discover-repos.mjs` and `fetch-signals.mjs` both read `GITHUB_TOKEN`, so no code changes are needed for PAT usage.
- The current workflow only prints discovery results to logs; it does not yet commit or export artifacts.
- Updated: daily discovery now exports a queue artifact instead of only printing logs.
- Updated: draft writing is handled by Codex scheduler (`reporadar-daily-codex-draft`) after discovery, not by OpenAI API calls in GitHub Actions.
- Updated foundation cadence: use `--days 365 --limit 60 --pick 5` for 2-3 weeks to build the initial draft base, then reduce to a narrower radar cadence.
- Production remains gated by `draft: false`; draft preview is available via `npm run dev` or `npm run preview:drafts`.

## 2026-06-29

### Signal Score — Kịch bản A (phụ đề radar, không phải sản phẩm chính)

- Quyết định thêm `altstackSignalScore` v1 vào MVP, theo **Kịch bản A**: score là lớp nén của đánh giá đã có trong record, không phải product primitive độc lập.
- Score sống *trong* Evidence Card, không làm trục xếp hạng. Không có leaderboard / top-score. Positioning một câu (§1.3 PRD) **không thay đổi**.
- **Score ≠ Trust layer.** Score nén đánh giá *đã có* (field hiện có + gu biên tập). Trust layer (star authenticity, star velocity lịch sử) cần hạ tầng *chưa có* → vẫn Phase 2.
- **Trọng số v1 lệch về moat VN** (không theo trọng số brief gốc Health 30):
  - Use Case Fit: 25 (gắn lăng kính ngành, moat chính)
  - Cost Advantage: 20 (thay tool trả phí, moat VN)
  - Project Health: 25 (semi-auto từ `fetch-signals`, proxy độ-sống)
  - Deployment Friendliness: 15 (từ `usabilityRisk` + `practitionerGuide.prerequisites`)
  - Documentation Quality: 15 (README/demo/guide chạy được)
- Mỗi cấu phần dán nhãn **auto** (Health) hoặc **judged** (4 còn lại) — minh bạch chỗ máy chấm vs người chấm.
- Thêm scaffolding EEAT rẻ: trang `/methodology`, Evidence Card, nhãn `evidenceLevel` (A/B/C/D), `confidence` (high/med/low), `lastReviewedAt`.
- Publish gate **mềm** (checklist), không cứng — để không bóp nhịp xuất bản (R4).
