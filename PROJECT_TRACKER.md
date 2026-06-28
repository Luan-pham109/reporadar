# RepoRadar VN — Project Tracker

> File sống. Cập nhật mỗi phiên làm việc. PRD gốc: `PRD_RepoRadar_VN.md`.

- **Phase hiện tại:** Phase 0 → 1 (build lean MVP thủ công).
- **Cập nhật lần cuối:** 2026-06-27.
- **Trạng thái:** Phase 1 foundation đang chạy; schema/render/pipeline/draft preview build sạch; member feed đã khóa static, chưa có auth runtime thật; chưa deploy.

---

# Current Status - 2026-06-28

- Phase: AltStack repositioning/UI pass is now implemented on top of the existing RepoRadar foundation.
- Brand direction: shifted public UI from "RepoRadar VN / dark pre-viral feed" toward **AltStack - operator-grade alternative intelligence**.
- North star focus: membership and "open repo" are now explicitly instrumented.
- Last verification: `npm.cmd run build` passed and generated 32 pages; function import smoke check passed for analytics/auth event files.

## Session Summary

- Applied AltStack brand identity across core UI surfaces:
  - `src/styles/global.css`
  - `src/layouts/BaseLayout.astro`
  - `src/pages/index.astro`
  - `src/pages/nganh/[vertical].astro`
  - `src/pages/repos/[slug].astro`
  - `src/pages/login.astro`
  - `src/pages/tuan/[week].astro`
  - `src/components/RepoCard.astro`
  - `src/components/RepoListItem.astro`
  - `src/components/IndustryNav.astro`
  - `src/components/SignalBadge.astro`
- Visual system now uses a neutral-first palette with Signal Blue, Open Green, Warning Amber, and dark editorial panels.
- Homepage now leads with "Trước khi gia hạn SaaS, kiểm tra AltStack" and a radar/decision console.
- Industry pages now feel like stack command centers with dark masthead, operator lens, and stats.
- Repo detail pages are now decision briefs:
  - `Repo signal` moved into the header content area under the `mt-5` cluster, with icon/color/stars/forks emphasis.
  - `Member insight` moved above `Related alternatives`.
  - `Decision brief` holds Replaces / Workflow cut / Caution.
- Fixed CTA contrast issues:
  - `Xem radar mới nhất`
  - `Open decision brief`
  - `Đăng nhập để xem guide`

## Discovery UX Added

- Added tag filtering at key browsing touchpoints:
  - Homepage Radar filter.
  - Industry/stack page filter scoped to that industry.
- New reusable component:
  - `src/components/TagFilter.astro`
- Repo list/card items now expose `data-filter-tags`.
- Card tag chips link into filtered radar views.
- Browser verification: `/nganh/seo?tag=seo#radar` showed filter active and matching cards.

## Measurement Added

- Added first-party event tracking layer:
  - `functions/api/events.js`
  - `functions/_lib/analytics.js`
  - client tracker in `src/layouts/BaseLayout.astro`
- Storage behavior:
  - Writes to `ANALYTICS_KV` or `EVENTS_KV` if bound.
  - Falls back to console logging without breaking UX.
- Tracked events:
  - `page_view`
  - `membership_intent`
  - `membership_submit`
  - `membership_signup_success`
  - `membership_login_success`
  - `membership_signup_failed`
  - `membership_login_failed`
  - `membership_logout_submit`
  - `membership_logout_success`
  - `repo_brief_open`
  - `repo_open`
  - `tag_filter_click`
  - `tag_filter_applied`
- Server-side conversion events added to:
  - `functions/api/auth/login.js`
  - `functions/api/auth/signup.js`
  - `functions/api/auth/google/callback.js`

## Updated North Star Metrics

| Metric | Event(s) | Notes |
|---|---|---|
| Membership | `membership_intent`, `membership_signup_success`, `membership_login_success` | Intent and conversion are separated. Password and Google auth both report success server-side. |
| Open repo | `repo_open` | Fired when user clicks external GitHub repo CTA from repo detail. |

## Immediate Next Steps

1. Add Cloudflare KV binding for analytics, preferably `ANALYTICS_KV`, before relying on production event storage.
2. Build a simple analytics review script/page to summarize daily counts for `membership_*` and `repo_open`.
3. Clean up remaining legacy naming/domain:
   - `astro.config.mjs` still uses `https://reporadar.vn`.
   - Some internal comments/files still reference RepoRadar.
4. Remove the old unreachable `{false && (...)}` member block in `src/pages/repos/[slug].astro` once the detail layout is stable.
5. Decide whether to keep direct KV event storage long-term or forward events to an analytics warehouse later.

---

## 1. Quyết định đã chốt

| Ngày | Quyết định | Ghi chú |
|---|---|---|
| 2026-06-26 | Phạm vi build = website kho lưu + schema + module insight VN | Không làm crawler/automation/Trust layer (Phase 2) |
| 2026-06-26 | Data = file Markdown trong repo (structured-first) | Mỗi repo 1 file; Phase 2 expose schema thành API |
| 2026-06-26 | Stack = Astro + Tailwind v4 (static) | Content Layer + Zod validate schema |
| 2026-06-26 | Hosting = Cloudflare Pages (static) | Build `npm run build` → `dist/` |
| 2026-06-26 | Module insight VN = Claude Code skill on-demand | `repo-radar-vn-insight`, không chạy nền |
| 2026-06-26 | **PIVOT audience → Hybrid** | Khách chính = practitioner (creative/agency/ecom/seo); creator = kênh khuếch đại. PRD v0.2. Giải R2 (TAM nhỏ); thêm R6 (gánh phân phối), R7 (grey-hat) |
| 2026-06-26 | "Dịch business" = moat (không còn commodity) | Với điều kiện = curation hợp ngành + có bằng chứng (PRD §2 lớp 2), không phải dịch thô |
| 2026-06-26 | Thêm hiến pháp biên tập: bộ lọc IN/OUT + 4 lăng kính ngành | PRD §2bis; mã hoá vào schema (`greyHatFlag`) + skill |

---

## 2. Nhật ký công việc (changelog)

### 2026-06-26 — Dựng xong hạ tầng MVP
- Đọc PRD, lên plan, chốt phạm vi build với Luan.
- Scaffold Astro + Tailwind, cấu hình static cho Cloudflare Pages.
- Viết schema "bản tình báo repo" (`src/content/config.ts`) theo PRD §5, gắn nhãn vùng giá trị (cốt lõi / bán-cốt-lõi / commodity / Phase 2).
- Dựng website: Feed (`index`), trang chi tiết (`repos/[slug]`), newsletter tuần (`tuan/[week]`), `feed.json` (hạt giống API Phase 2), `rss.xml`.
- Viết `scripts/fetch-signals.mjs` — kéo tín hiệu pre-viral (GitHub + HN Algolia + Reddit). Tinh chỉnh khớp HN theo URL repo (giảm false positive); Reddit chặn 403 → degrade sang link tìm-tay.
- Tạo skill `repo-radar-vn-insight` (4 bước: tín hiệu pre-viral → bão hoà VN → bài toán local → ghi file nháp).
- Verify: `npm install` ✓, `npm run build` sạch (Zod validate) ✓, `feed.json` hợp lệ ✓, script chạy đúng ✓.
- **Chạy thử skill 2 lần** (xem mục Records).
- Dựng preview trang Feed + trang chi tiết để Luan duyệt layout.

---

## 3. Trạng thái artifacts

| Artifact | Trạng thái |
|---|---|
| Schema (`src/content/config.ts`) | ✅ Xong |
| Website (Feed / chi tiết / tuần / feed.json / rss) | ✅ Xong, build sạch |
| `scripts/fetch-signals.mjs` | ✅ Xong (Reddit chặn 403 — dùng link tìm tay) |
| Skill `repo-radar-vn-insight` | ✅ Xong, đã chạy thử 2 repo |
| Deploy Cloudflare Pages | ⬜ Chưa làm |
| Tên + domain sản phẩm | ⬜ Chưa chốt (đang dùng tạm `reporadar.vn`) |

---

## 4. Records hiện có

| Repo | File | draft | Verdict |
|---|---|---|---|
| Plane | `src/content/repos/plane-project-management.md` | `false` | Record DEMO mẫu — nên xoá/thay trước khi deploy |
| Postiz | `src/content/repos/postiz-app.md` | `true` | ❌ Không pre-viral (32k sao); VN đã có bài cài đặt — bỏ qua hoặc góc hẹp |
| OpenKnowledge | `src/content/repos/open-knowledge.md` | `true` | ⚡ Pre-viral thật + VN chưa ai viết → **đáng viết bây giờ** (cảnh báo: chưa hỗ trợ Windows) |

---

## 5. KR theo dõi (go/no-go sau 6-8 kỳ, PRD §9)

> Chạy ~2 tháng rồi quyết tiếp/dừng. KHÔNG đo bằng like/view.

| # | KR | Cách đo | Trạng thái |
|---|---|---|---|
| KR1 | TAM thực: số creator AI/tech VN active | Đếm thật danh sách | ⬜ Chưa bắt đầu |
| KR2 | Hành động: có creator lấy đề tài/góc từ nguồn này để viết không | Theo dõi/hỏi trực tiếp | ⬜ Chưa bắt đầu |
| KR3 | Lặp lại: nhóm creator quay lại mỗi kỳ + chủ động đặt đề tài | Quan sát qua các kỳ | ⬜ Chưa bắt đầu |
| KR4 | Hơn-AI: mỗi repo tự test "creator có tự lấy từ Trending/AI không" | Field `aiCheck` trong record; mục tiêu >50% trả lời "không" | 🟡 Đã gắn vào schema, đang áp dụng từng record |

---

## 6. Việc tiếp theo (ưu tiên trên xuống)

**Migration schema/skill theo PRD v0.2 (ĐÃ XONG 2026-06-26):**
1. ✅ `src/content/config.ts`: thêm `vertical`, `workflowStepReplaced`, `timeOrCostSaved`, `usabilityRisk`, `greyHatFlag`, `creatorWhitespace`; đổi `worthWritingNow`→`worthAdoptingNow`; thay `vnSaturation`→`vnMarket` (insight + seoKeywords + notes).
2. ✅ `_template.md` + 3 record (open-knowledge, postiz, plane) migrate sang schema mới.
3. ✅ Trang render (`repos/[slug]`, `RepoCard`, index, `tuan/[week]`, `feed.json`, `BaseLayout`) + badge ngành + khối insight VN/SEO/cạm bẫy.
4. ✅ Nâng cấp skill `repo-radar-vn-insight`: 5 bước, 4 lăng kính + bộ lọc IN/OUT + field mới.
5. ✅ `npm run build` xanh + verify preview (feed + trang chi tiết OpenKnowledge).

**Kiến trúc trụ-ngành + cluster (ĐÃ XONG 2026-06-26 — input Luan vòng 2):**
A1. ✅ `src/lib/industries.ts` — meta 4 ngành (label, lăng kính, blurb) dùng chung.
A2. ✅ Pillar pages `/nganh/[vertical]` (creative/agency/ecom/seo) + `IndustryNav` chip.
A3. ✅ Index reorg: chip ngành + section "🔥 Đáng đi trước" (#hot) + feed.
A4. ✅ Cluster: badge ngành trỏ pillar + "Tool liên quan" (cùng ngành/tag) ở chi tiết + link ngành sitewide ở footer.
A5. ✅ Build sạch (9 trang) + verify DOM (pillar, cluster, chip).

**Giọng + reader-first (ĐÃ XONG 2026-06-26 — vòng B):**
B1. ✅ Field `useCases` (usecase-first) vào schema + template + 3 record.
B2. ✅ Tái cấu trúc trang chi tiết **reader-first**: tầng đọc lên đầu (Bạn dùng nó để làm gì → Thay được gì/tiết kiệm → Thực tế ngành VN → Hợp với ai → Cần biết trước → Tool liên quan); tầng phân tích (KR#5, góc creator, tín hiệu pre-viral, ghi chú) gập vào `<details>` mặc định đóng.
B3. ✅ Skill `repo-radar-vn-copy` (voice guide 6 quy tắc + tách tầng đọc/phân tích) + insight skill bàn giao `useCases`.
B4. ✅ Build sạch (9 trang) + verify DOM (useCases render, thứ tự reader-first, analyst collapsed).

**AEO + SEO + insight-thành-nguyên-liệu (ĐÃ XONG 2026-06-26 — input Luan vòng 4):**
E1. ✅ `vnMarket.insight` không còn hiển thị cho người đọc (bỏ khối public) → chỉ hiện ở dev làm nguyên liệu; `repo-radar-edit` hấp thụ vào localProblem/useCases. `seoKeywords` → meta keywords + JSON-LD (không còn pill).
E2. ✅ SEO BaseLayout: canonical + Open Graph + Twitter card + `<slot name="head">` + og:image (ảnh hero).
E3. ✅ Trang chi tiết: JSON-LD Article + FAQPage (AEO), keywords meta, title search-friendly ("X: dùng để làm gì, thay tool nào?"), tiêu đề section → `<h2>` (6 h2, heading hierarchy đúng).
E4. ✅ Skill `repo-radar-edit`: thêm chuẩn AEO (answer-first, câu tự-chứa, phủ câu hỏi FAQ) + giọng creative (ấm, sống động) + rải seoKeywords tự nhiên + vnMarket = nguyên liệu.
E5. ✅ Verify: prod HTML KHÔNG chứa insight/pill per-tool; có FAQPage/canonical/og/keywords; dev hiện material cho Luan.

**Maturity + pipeline 3 tầng (ĐÃ XONG 2026-06-26 — input Luan vòng 3):**
D1. ✅ Field `maturity` (pre-viral/rising/established) thay `worthAdoptingNow`; tệp rộng cover cả tool đã nổi.
D2. ✅ Field `repoStats` (stars/forks/note) + `standoutFeatures` (Hunt khách quan); điền số thật cho 3 record (postiz 32k, plane 53k = established; open-knowledge 790 = pre-viral).
D3. ✅ Index 2 luồng: "🔥 Đáng đi trước" (#hot) + "⭐ Đã kiểm chứng" (#proven); RepoCard + chi tiết hiện sao/fork + standoutFeatures.
D4. ✅ `fetch-signals.mjs`: thêm forks + đổi heuristic → gợi ý `maturity` (pre-viral/rising/established).
D5. ✅ Tách 3 skill: `repo-radar-hunt` (khách quan) → `repo-radar-synthesize` (keyword fan-out + insight VN) → `repo-radar-edit` (reader-first). Xoá `repo-radar-vn-insight` + `repo-radar-vn-copy`.
D6. ✅ Cập nhật PRD §5/§6, README, records; build sạch (9 trang) + verify DOM + smoke-test script.

**Rich media (ĐÃ XONG 2026-06-26 — vòng C):**
C1. ✅ Field `media[]` (type/url/caption, hotlink GitHub) vào schema + template.
C2. ✅ Render: gallery ảnh/video ở trang chi tiết (sau header) + thumbnail (ảnh đầu) trên thẻ feed.
C3. ✅ Skill insight: bước trích media từ README (curl + lọc + phân loại image/video + verify 200).
C4. ✅ Media thật cho postiz (3 ảnh user-attachments) + plane (3 webp); open-knowledge để trống (README không có ảnh → test graceful, OK).
C5. ✅ Build sạch (9 trang) + verify DOM (3 figure ở detail, thumbnail trên card) + HTTP 200 image/*.

> Lưu ý vận hành: dev server hay giữ content store cũ sau khi sửa .md/config → nếu preview không cập nhật,
> stop + xoá `.astro/data-store.json` + start lại. Build prod luôn re-sync đúng.

**Còn lại (từ trước):**
6. 🟡 Auto-discovery nguồn repo: ✅ `scripts/discover-repos.mjs` (GitHub Search + Show HN + subreddit ngành → ứng viên, loại trùng record; nối vào skill hunt Bước 0). ⬜ Còn lại: thêm ProductHunt / HF trending (cần token PH).
7. ⬜ (tuỳ chọn) Skill "soạn bài xuất bản" cho nhánh khuếch đại.
8. ⬜ Xoá record demo Plane; rà 2 record nháp theo schema mới.
9. ⬜ Chốt tên + domain → sửa `site` trong `astro.config.mjs`.
10. ⬜ Deploy Cloudflare Pages.
11. ⬜ Chốt kênh phân phối + nền newsletter (PRD §12).
12. ⬜ Định nghĩa "active practitioner" + bắt đầu đếm KR1 (PRD §12.5).
13. ⬜ Quyết: nhắm cả 4 ngách hay khởi động 1-2 ngách trước (PRD §12.6).
14. ⬜ Chạy kỳ đầu tiên: 3-5 tool đào sâu.

---

## 7. Câu hỏi mở (PRD §12 — cần Luan quyết)

1. ⬜ Tên sản phẩm + domain.
2. ⬜ Nền newsletter (Substack / Beehiiv / Notion + email).
3. ⬜ Danh sách subreddit/HN cụ thể để theo dõi (hiện script dùng r/selfhosted, r/opensource, r/SideProject).
4. ⬜ Tiêu chí biên tập độc lập (chuẩn bị cho ngày có sponsor).
5. ⬜ Định nghĩa "active creator" để đếm TAM.

---

## 8. Rủi ro đang theo dõi (PRD §10)

- **R1 (chí mạng):** nội dung trượt về commodity → đối phó bằng field `aiCheck` (KR4) mỗi record + skill từ chối gắn cờ pre-viral khi không xứng (đã chứng minh với Postiz).
- **R3:** pre-viral false positive → record luôn kèm link nguồn + phát biểu mềm ("đang được bàn", không hứa viral) + cảnh báo nhược điểm (vd OpenKnowledge chưa hỗ trợ Windows).
- **Kỹ thuật:** Reddit chặn JSON 403 → hiện degrade sang link tìm-tay. Nếu Phase 2 cần đọc Reddit tự động → phải dùng OAuth.
# Current Status - 2026-06-27

- Phase: Phase 1 foundation is working. MVP site/schema/render pipeline, daily discovery queue, draft review screen, and static member-feed gate are wired.
- Automation mode: GitHub Actions prepares deterministic discovery queues; Codex scheduler/manual review turns queue items into draft records. `scripts/run-daily-pipeline.mjs` does not call an LLM API and does not need `OPENAI_API_KEY`.
- Foundation defaults: `npm.cmd run daily -- --source all --days 365 --limit 60 --pick 5`.
- Scheduler note: intended local scheduler is `reporadar-daily-codex-draft`, daily 09:15 Asia/Saigon, cwd `D:\RepoRadar`; verify scheduler config outside git before relying on it.
- GitHub Action: `.github/workflows/discover-repos.yml`, daily at 08:30 Asia/Saigon, uploads `reporadar-daily-queue` artifact.
- Queue path: `.codex/reporadar-daily-queue/latest.json` locally; directory is ignored by git.
- Draft preview: `npm.cmd run dev` shows drafts; static draft preview uses `npm.cmd run preview:drafts`; production build `npm.cmd run build` hides `draft: true`.
- Member/feed state: public nav now points to `/login`; `/feed.json` returns an empty `auth_required` payload and `public/_redirects` plus `scripts/serve-dist.mjs` redirect `/feed.json` to `/login`. This is a static lock, not real auth.
- Last verification: `npm.cmd ci` restored a broken local Vite install; `npm.cmd run build` passed and generated 17 production pages; `npm.cmd run build:drafts` passed and generated 22 draft-preview pages.

## Automation And Tooling

- `scripts/run-daily-pipeline.mjs`: discovery -> shortlist -> signals -> README/media hints -> queue JSON.
- `src/lib/drafts.ts`: shared draft visibility gate for dev/draft-preview vs production.
- `src/pages/review.astro`: local dev review screen can flip `draft` via Vite middleware.
- `scripts/build-drafts.mjs` and `scripts/preview-drafts.mjs`: run Astro directly through Node, no Windows shell warning.
- `scripts/serve-dist.mjs`: static dist preview helper; now uses `dist/` relative to cwd and redirects `/feed.json`.
- `.gitignore`: ignores `.codex/reporadar-daily-queue/`.

## Records Now

| State | Count | Records |
|---|---:|---|
| Published (`draft: false`) | 9 | Claude SEO, Pixelle-Video, OpenMontage, Toonflow, Guizang PPT Skill, OpenKnowledge, Plane, Postiz, Awesome Nano Banana Pro Prompts |
| Draft (`draft: true`) | 5 | Claude Ads, API Mega List, Ian Xiaohei Illustrations, vLLM-Omni, Awesome GPT Image 2 Prompts |

## Content Caveats

- Plane is still published even though earlier tracker notes called it a demo record. Decide whether to keep it as "proven" example or move it back to draft before deploy.
- Postiz is still published even though earlier notes said it was not pre-viral. It can stay only if framed as an established/proven tool, not an "đi trước" pick.
- The five remaining draft records build cleanly, but still need editorial review before flipping public.

## Immediate Next Steps

1. Decide public set before deploy: keep/remove Plane and confirm Postiz framing.
2. Review the 5 remaining drafts in `/review`; polish and publish only the strongest 2-3.
3. Verify media URLs for published records and replace weak/incorrect preview assets.
4. If member feed is strategic, add real auth/runtime later; current state only prevents casual static exposure.
5. Chốt tên + domain, then update `site` in `astro.config.mjs` and deploy Cloudflare Pages.
6. Keep foundation cadence `365/60/5` for 2-3 weeks, then reduce to radar cadence such as `--days 30 --limit 30 --pick 2`.

---
