# Plan: Signal Score v1 (Kịch bản A) — handoff cho junior dev

**Ngày:** 2026-06-29
**Nguồn quyết định:** `DECISION_LOG.md` (mục 2026-06-29), `PRD_RepoRadar_VN.md` §2, §2bis, §5, §4.1, §9.
**Mục tiêu:** Thêm `altstackSignalScore` v1 + lớp Evidence (EEAT) vào AltStack, theo **Kịch bản A** — score là *phụ đề* của radar, không phải sản phẩm chính.

> Đọc trước khi code: phần "Bối cảnh" + "Quyết định thiết kế" bên dưới. Đừng nhảy thẳng vào task nếu chưa nắm 2 phần đó — sai contract thì phải làm lại.

---

## Bối cảnh (đọc 1 lần)

- Stack: **Astro 5** content collection. Schema = nguồn sự thật: `src/content/config.ts`.
- 29 record `.md` ở `src/content/repos/` (1 file `_template.md` là mẫu, KHÔNG đếm).
- Render record: `src/pages/repos/[slug].astro` (trang chi tiết) + `src/components/RepoCard.astro` + `src/components/RepoListItem.astro` (list).
- `scripts/fetch-signals.mjs`: kéo tín hiệu GitHub/HN/Reddit cho 1 repo, đã tính `starsPerDay`, `ageDays` nhưng **chưa persist** vào record (record chỉ lưu `stars/forks/note`).
- `scripts/export-member-feed.mjs`: chạy trong `npm run build`, đọc frontmatter bằng `js-yaml`, sinh `functions/_generated/member-feed.js`. Thêm field mới phải nhớ cập nhật file này.
- Pipeline soạn record = 3 skill: `repo-radar-hunt` (điền `repoStats`), `repo-radar-synthesize` (góc VN), `repo-radar-edit` (nội dung reader). Ở `.claude/skills/` và `.agents/skills/`.
- Build = `npm run build` (chạy export-member-feed + `astro build`, Zod validate toàn bộ record). Dev = `npm run dev`.

## Phạm vi

**TRONG phạm vi:** schema fields mới, scoring lib, Evidence Card, trang `/methodology`, mở rộng `fetch-signals`, backfill 29 record, publish checklist mềm, cập nhật template + skill + member-feed.

**NGOÀI phạm vi (Phase 2 — KHÔNG làm):** lab testing thật, benchmark, auto-scoring tự động chạy nền, star authenticity (`trustScore`), leaderboard/xếp hạng. Nếu thấy mình đang xây mấy thứ này → dừng, hỏi lại.

---

## Quyết định thiết kế (CHỐT — đừng tự đổi)

1. **`scoreBreakdown` lưu trong frontmatter; `altstackSignalScore` (tổng) là DERIVED.**
   Tổng = hàm `computeScore()` trong `src/lib/score.ts` cộng 5 sub-score. **Không** lưu tổng trong frontmatter (tránh lệch số). Evidence Card + member-feed luôn lấy tổng từ lib.

2. **1 cấu phần auto + 4 cấu phần judged.**
   - `projectHealth` (auto): `fetch-signals.mjs` tính sẵn 1 số 0–25 từ public signal, skill ghi vào `scoreBreakdown.projectHealth`. Render KHÔNG gọi GitHub (build phải offline-safe).
   - 4 cái còn lại (judged): người chấm theo rubric (mục "Rubric chấm điểm" bên dưới).

3. **Trọng số v1 (tổng 100), lệch về moat VN:**
   | Cấu phần | Key trong scoreBreakdown | Max | Loại |
   |---|---|---|---|
   | Use Case Fit | `useCaseFit` | 25 | judged |
   | Project Health | `projectHealth` | 25 | auto |
   | Cost Advantage | `costAdvantage` | 20 | judged |
   | Deployment Friendliness | `deployment` | 15 | judged |
   | Documentation Quality | `documentation` | 15 | judged |

   Trọng số khai báo MỘT chỗ duy nhất: `export const WEIGHTS` trong `src/lib/score.ts`. Trang `/methodology` và Evidence Card đều import từ đây — không hardcode lại số.

4. **Score là phụ đề.** Evidence Card nằm *dưới* hero quyết định, KHÔNG phải tiêu đề trang. Tuyệt đối không có trang/section "Top score" hay sort theo score.

5. **Field mới đều OPTIONAL trong schema.** Để 29 record cũ vẫn build khi chưa backfill → migration tăng dần, không big-bang.

6. **Publish checklist MỀM.** Thiếu field → cảnh báo (warn) lúc build, KHÔNG fail build. Không dựng Publish Gate cứng (sẽ bóp nhịp — PRD R4).

---

## Dependency graph

```
0.1 schema (config.ts) ──┬─> 0.2 score.ts (lib)
                         │        │
                         │        ├─> 1.3 Evidence Card ─> 2.1 /methodology
                         │        │         │
1.1 fetch-signals ───────┘        │         └─> 3.4 badge ở RepoCard (list)
   │                              │
   └─> 1.2 pilot record ─────────┘
                              (Checkpoint B: 1 record chạy end-to-end)

3.1 template+skill ─┐
3.2 member-feed     ├─ sau khi path đã proven (Checkpoint B)
3.3 backfill 28     ┘
4.1 publish checklist ─ cuối cùng
```

Thứ tự bắt buộc: **0.x trước mọi thứ**. Sau đó Phase 1 chứng minh 1 đường dọc hoàn chỉnh trên *một* record rồi mới nhân ra (Phase 3).

---

## Phase 0 — Contract (nền, block mọi thứ)

### Task 0.1 — Mở rộng schema `src/content/config.ts`
Thêm vào `repos` schema (tất cả OPTIONAL):
- Mở rộng `repoStats` object: thêm `starsPerDay`, `ageDays`, `pushedAt` (z.coerce.date optional), `archived` (boolean optional), `openIssues` (number optional). Giữ nguyên `stars/forks/note`.
- `scoreBreakdown`: object 5 số nguyên optional — `useCaseFit`, `projectHealth`, `costAdvantage`, `deployment`, `documentation`. Mỗi field `.min(0)`; thêm `.max()` đúng trọng số (25/25/20/15/15) bằng `z.number().int().min(0).max(N).optional()`.
- `scoringVersion`: `z.string().optional()` (vd `"v1"`).
- `evidenceLevel`: `z.enum(['A','B','C','D']).optional()`.
- `confidence`: `z.enum(['high','medium','low']).optional()`.
- `lastReviewedAt`: `z.coerce.date().optional()`.
- `nextReviewDueAt`: `z.coerce.date().optional()`.
- Giữ `trustScore` y nguyên (Phase 2).

**Acceptance:**
- `npm run build` xanh với cả 29 record hiện tại (chưa có field mới → optional nên không lỗi).
- Cố tình ghi `scoreBreakdown.useCaseFit: 99` vào 1 record → build FAIL (Zod chặn vượt max). Xong test thì revert.

**Verify:** `npm run build` 2 lần (trước/sau khi nhét giá trị sai).

### Task 0.2 — Lib `src/lib/score.ts`
Pure functions, không side-effect, không I/O:
```ts
export const WEIGHTS = { useCaseFit: 25, projectHealth: 25, costAdvantage: 20, deployment: 15, documentation: 15 } as const;
export const SCORE_LABELS = { useCaseFit: 'Use Case Fit', projectHealth: 'Project Health', costAdvantage: 'Cost Advantage', deployment: 'Deployment', documentation: 'Docs' };
export const SCORE_KIND = { useCaseFit: 'judged', projectHealth: 'auto', costAdvantage: 'judged', deployment: 'judged', documentation: 'judged' } as const;

// total = sum các sub-score có mặt; trả null nếu chưa có scoreBreakdown.
export function computeScore(data): { total: number | null; breakdown: Array<{key,label,value,max,kind}>; hasScore: boolean };
```
- Nếu `data.scoreBreakdown` undefined → `{ total: null, hasScore: false, breakdown: [] }`.
- Clamp mỗi value về `[0, max]` phòng dữ liệu bẩn.
- Tổng làm tròn số nguyên.

**Acceptance:**
- File chạy được độc lập: thêm block self-test ở cuối kiểu `if (import.meta.vitest)` HOẶC tạo `scripts/check-score.mjs` in ra total cho plane record để mắt thường verify (Plane kỳ vọng ~ tổng các sub-score backfill ở 1.2).
- Import được trong `.astro` không lỗi type.

**Verify:** `node scripts/check-score.mjs` (nếu chọn cách script) in đúng tổng; `npm run build` xanh.

> **CHECKPOINT A** (human review): schema + lib đã xong, build xanh, 29 record cũ không vỡ. Review tên field + công thức trước khi đi tiếp.

---

## Phase 1 — Một đường dọc hoàn chỉnh (trên 1 record)

### Task 1.1 — Mở rộng `scripts/fetch-signals.mjs`
- Trong `fetchGitHub()`: lấy thêm `pushed_at`, `archived`, `open_issues_count` từ API (đã gọi `/repos/{owner}/{repo}` rồi — chỉ map thêm field).
- Thêm hàm `healthScore(gh)` trả về số 0–25 theo công thức:
  ```
  if archived → return 3
  daysSincePush = (now - pushed_at)/86400000
  liveness = daysSincePush<=30?12 : <=90?9 : <=180?6 : <=365?3 : 0
  adoption = stars>=20000?8 : >=5000?6 : >=1000?4 : >=200?2 : 1
  momentum = starsPerDay>=20?5 : >=5?4 : >=1?2 : 1
  return min(25, liveness+adoption+momentum)
  ```
- Output (cả `--json` lẫn human) thêm: `pushedAt`, `archived`, `openIssues`, và `suggestedHealthScore`.
- KHÔNG thêm dependency (dùng `fetch` thuần như hiện tại).

**Acceptance:**
- `node scripts/fetch-signals.mjs makeplane/plane --json` in ra `pushedAt`, `archived`, `openIssues`, `suggestedHealthScore` (0–25) hợp lý.
- Repo archived bất kỳ → `suggestedHealthScore` = 3.

**Verify:** chạy script với 2 repo (1 sống, 1 cũ/archived nếu tìm được) và đọc output.

### Task 1.2 — Backfill record pilot: `plane-project-management.md`
Điền tay (Plane là record demo, dữ liệu đầy đủ nhất):
- `repoStats`: thêm `starsPerDay`, `ageDays`, `pushedAt`, `archived`, `openIssues` (lấy từ 1.1).
- `scoreBreakdown`: `projectHealth` = `suggestedHealthScore`; 4 cái còn lại chấm theo rubric bên dưới.
- `evidenceLevel`: `"B"` (đã review public signal, chưa lab). `confidence`: `"high"` (Plane data chắc).
- `lastReviewedAt: 2026-06-29`, `nextReviewDueAt: 2026-09-29` (review mỗi ~quý).
- `scoringVersion: "v1"`.

**Acceptance:** `npm run build` xanh; `computeScore` trả tổng khớp tổng tay của 5 sub-score.

### Task 1.3 — Evidence Card + wire vào `[slug].astro`
- Tạo `src/components/EvidenceCard.astro`, props = `entry.data`. Hiển thị:
  - Tổng `altstackSignalScore` (từ `computeScore`) + nhãn "Signal Score · v1".
  - 5 thanh breakdown (label + value/max), gắn chip `auto`/`judged` theo `SCORE_KIND`.
  - `evidenceLevel` (A/B/C/D) + `confidence` (badge), `lastReviewedAt` (format vi-VN).
  - **Sources**: render `signalSources` *công khai* (hiện đang bị giấu trong block dev-only — Evidence Card đưa nó ra public).
  - **Known limitations**: `usabilityRisk`.
  - Link "Cách tính điểm →" trỏ `/methodology`.
  - Nếu `computeScore().hasScore === false` → render gọn (chỉ evidence level/confidence/sources), KHÔNG hiện thanh score rỗng.
- Wire vào `[slug].astro`: đặt Evidence Card *sau* `<header>` hero, *trước* hoặc cạnh section "VN fit". KHÔNG để lên trên h1 (giữ score là phụ đề).
- Dùng CSS var sẵn có (`--rr-*`), bám tone component hiện tại.

**Acceptance:**
- Trang `/repos/plane-project-management` hiện Evidence Card với tổng đúng, 5 thanh, badges, sources công khai, link methodology.
- Record CHƯA backfill (vd bất kỳ record nào khác) vẫn render trang OK, Evidence Card ở chế độ gọn, không vỡ layout.

**Verify:** `npm run dev` → mở `/repos/plane-project-management` (dùng preview tools: snapshot + screenshot), và mở 1 record chưa backfill để xác nhận fallback.

> **CHECKPOINT B** (human review — quan trọng nhất): xem Evidence Card thật trên trình duyệt. Chốt: bố cục đúng "phụ đề", rubric ra số hợp lý, sources công khai ổn. Đồng ý mới nhân ra.

---

## Phase 2 — Methodology page

### Task 2.1 — Trang `src/pages/methodology.astro`
Tĩnh, nhưng **import `WEIGHTS`/`SCORE_LABELS` từ `src/lib/score.ts`** để bảng trọng số luôn khớp lib (không gõ tay số). Nội dung (theo PRD §5 methodology + brief):
- Signal Score nghĩa là gì / KHÔNG nghĩa là gì (nhấn: "Signal Scored ≠ Lab Tested").
- Bảng 5 cấu phần + trọng số + cái nào auto/judged.
- Giải thích Evidence Level A/B/C/D, Confidence high/med/low.
- Quy trình review (cadence ~quý, `lastReviewedAt`).
- Conflict-of-interest policy (1 đoạn ngắn: chưa nhận tài trợ; khi có sẽ tách bạch — bám PRD §8).
- Dùng `BaseLayout`. Thêm link tới `/methodology` ở footer hoặc Evidence Card.

**Acceptance:** `/methodology` render, bảng trọng số khớp `WEIGHTS`. Sửa 1 số trong `WEIGHTS` → trang đổi theo (rồi revert).

**Verify:** `npm run dev` → `/methodology` (snapshot).

> **CHECKPOINT C**: methodology live, link 2 chiều với Evidence Card.

---

## Phase 3 — Nhân ra (sau khi path đã proven)

### Task 3.1 — Cập nhật `_template.md` + 3 skill
- `_template.md`: thêm block field mới với comment hướng dẫn + giá trị mặc định an toàn (`evidenceLevel: "C"`, `confidence: "low"`, scoreBreakdown placeholder, `scoringVersion: "v1"`).
- `repo-radar-hunt` (cả `.claude/skills/` VÀ `.agents/skills/`): bước fetch-signals giờ ghi thêm `repoStats` structured + `scoreBreakdown.projectHealth = suggestedHealthScore`.
- `repo-radar-synthesize`: chấm `costAdvantage`, set `evidenceLevel`/`confidence` (vì tầng này đánh giá độ chắc).
- `repo-radar-edit`: chấm `useCaseFit`, `deployment`, `documentation`; set `lastReviewedAt` = ngày publish.
- Nhúng "Rubric chấm điểm" (bên dưới) vào skill tương ứng để skill tự chấm nhất quán.

**Acceptance:** đọc lại 3 SKILL.md — mỗi field mới có đúng 1 skill chịu trách nhiệm, không chồng chéo.

### Task 3.2 — Cập nhật `scripts/export-member-feed.mjs`
Thêm vào object `items.push({...})`: `scoreBreakdown`, `altstackSignalScore` (gọi computeScore — hoặc tự cộng tay nếu ngại import .ts vào .mjs; nếu vậy copy WEIGHTS thành comment cảnh báo "đồng bộ với score.ts"), `evidenceLevel`, `confidence`, `lastReviewedAt`, `repoStats` (đã có nhưng giờ giàu field hơn — tự pass-through nên OK).

**Acceptance:** `npm run build` → `functions/_generated/member-feed.js` chứa field mới cho record đã backfill.

**Verify:** mở file generated, grep `evidenceLevel`.

### Task 3.3 — Backfill 28 record còn lại
- Với mỗi record: chạy `fetch-signals --json` lấy structured repoStats + suggestedHealthScore; chấm 4 sub-score judged theo rubric; set evidenceLevel/confidence/lastReviewedAt/scoringVersion.
- Làm theo lô 5–6 record, build sau mỗi lô (dễ khoanh lỗi).
- Record dữ liệu mỏng / chưa synthesize → `evidenceLevel: "C"`, `confidence: "low"`, vẫn cho điểm phần chấm được.

**Acceptance:** cả 29 record có `scoreBreakdown` + `evidenceLevel` + `confidence` + `lastReviewedAt`; `npm run build` xanh.

**Verify:** viết nhanh `scripts/check-score.mjs` liệt kê record nào còn THIẾU field (đọc frontmatter bằng js-yaml) → chạy ra danh sách rỗng.

### Task 3.4 — Badge ở list view `RepoCard.astro` (gọn)
Thêm badge nhỏ `evidenceLevel` + score tổng ở góc card (đã có sẵn chỗ render badges). KHÔNG biến thành cột sort. Mục tiêu: tín hiệu tin cậy ở list, không phải bảng xếp hạng.

**Acceptance:** card hiện badge evidence level; thứ tự list KHÔNG đổi theo score.

**Verify:** `npm run dev` → trang chủ (screenshot).

> **CHECKPOINT D**: toàn bộ record có score; feed có field mới; list view có badge; build xanh.

---

## Phase 4 — Publish checklist mềm

### Task 4.1 — Cảnh báo mềm lúc build
Trong `export-member-feed.mjs` (đang đọc mọi record rồi): với record `draft !== true`, nếu thiếu bất kỳ `evidenceLevel` / `confidence` / `lastReviewedAt` / `signalSources` (≥1) / `usabilityRisk` (không rỗng) → `console.warn` liệt kê slug + field thiếu. **KHÔNG** `process.exit(1)`.

**Acceptance:** tạm xoá `evidenceLevel` ở 1 record published → `npm run build` vẫn xanh nhưng in warn đúng slug. Revert.

**Verify:** `npm run build`, đọc log.

> **CHECKPOINT E** (final): review tổng thể + đối chiếu PRD §2bis "publish checklist mềm".

---

## Rubric chấm điểm (dùng cho 4 sub-score judged — để skill + người chấm nhất quán)

### Use Case Fit (0–25)
| Điểm | Tiêu chí |
|---|---|
| 25 | ≥3 `useCases` cụ thể, trả lời đúng câu lăng kính ngành, có con số; `workflowStepReplaced` rõ |
| 18 | ≥3 useCases, đúng ngành nhưng thiếu con số |
| 12 | useCases có nhưng chung chung |
| 6 | fit yếu/mơ hồ |
| 0 | không có useCases |

### Cost Advantage (0–20)
| Điểm | Tiêu chí |
|---|---|
| 20 | Thay rõ 1 SaaS trả phí (`paidToolReplaced`) + `timeOrCostSaved` có số/tiền |
| 14 | Thay tool phí nhưng mức tiết kiệm mơ hồ |
| 8 | Lợi ích chi phí gián tiếp |
| 0 | Không phải bản thay free đáng kể |

### Deployment Friendliness (0–15)
| Điểm | Tiêu chí |
|---|---|
| 15 | Hosted/one-click/SaaS-like; chạy Windows; không cần GPU |
| 10 | Cài local đơn giản, prereq nhẹ |
| 6 | Cần Docker / setup kỹ thuật vừa |
| 3 | Cần GPU / self-host phức tạp |
| 0 | Rất khó / không rõ cài đặt |

### Documentation Quality (0–15)
| Điểm | Tiêu chí |
|---|---|
| 15 | README đầy đủ + media demo + quickstart chạy được + `practitionerGuide.steps` |
| 10 | README tốt + có demo |
| 6 | README cơ bản |
| 3 | Sơ sài |
| 0 | Gần như không có |

### Evidence Level (chọn)
- **A** — AltStack đã lab-test (Phase 2, hiện gần như không dùng).
- **B** — đã review public signals (mặc định cho record đã synthesize).
- **C** — mới ở mức discovery signal (record mỏng/chưa synthesize).
- **D** — chỉ là tuyên bố chưa kiểm chứng của tác giả tool.

### Confidence
- **high**: dữ liệu chắc, nhiều nguồn, đã synthesize kỹ.
- **medium**: đủ tin nhưng vài chỗ suy luận.
- **low**: mỏng, cần review lại sớm.

---

## Definition of Done (toàn dự án)
- [ ] 29 record có `scoreBreakdown` + evidence labels; `npm run build` xanh.
- [ ] Evidence Card render đúng "phụ đề" trên trang chi tiết; sources + limitations công khai.
- [ ] `/methodology` live, trọng số khớp `WEIGHTS` (một nguồn sự thật).
- [ ] member-feed có field mới; publish checklist mềm cảnh báo đúng.
- [ ] KHÔNG có leaderboard / sort theo score.
- [ ] template + 3 skill cập nhật để record mới tự có score.

## Rollback
Mọi field mới optional → nếu cần huỷ: gỡ Evidence Card khỏi `[slug].astro` + xoá `/methodology`; record giữ field thừa cũng không vỡ build. Lib `score.ts` độc lập, xoá là xong.
