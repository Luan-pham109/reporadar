# Plan — Lấy 3 pattern từ OpenAlternative cho AltStack/RepoRadar

**Sản phẩm:** RepoRadar VN / AltStack
**Ngày lập:** 2026-06-29
**Hạ tầng:** Astro 5 static (`dist/`) → Cloudflare Pages. Content collection `repos` (Zod schema).
**Nguồn cảm hứng:** openalternative.co — directory OSS alternatives.

## 0. Scope đã chốt (3 item + 1 phase UI)

| # | Item | Quyết định của Luan |
|---|------|---------------------|
| 1 | **Card 6 thành phần** — enrich card kiểu OpenAlternative | Icon = **avatar owner GitHub** (`github.com/{owner}.png`). Thêm 3-metric row (stars/forks/last-commit) + chip "Alternative to". |
| 2 | **"Alternative to" cross-link** — dual-URL SEO engine | Field có cấu trúc `alternativeTo[{name,slug}]`. Migrate **auto-seed rồi sửa tay** (script rút brand từ `paidToolReplaced` → Luan duyệt 33 file). Sinh trang `/alternatives/[slug]` + index. |
| 3 | **Faceted filter** | **3 chiều gọn**: Vertical + Maturity + Tag (KHÔNG gồm alternative-to). |
| 4 | **Mimic UI OpenAlternative** — card + grid | **Chỉ card + grid** (phẳng, hairline border, bo góc nhỏ, favicon, stat row) — KHÔNG đụng hero/brand. Làm **trên branch + route `/alt-preview`** để Luan duyệt A/B rồi mới swap vào các trang thật. |

> **Phase 2 vs Phase 4 — phân vai rõ:** Phase 2 lo **dữ liệu trên card** (avatar, stat row, chip — chạy trên card hiện tại). Phase 4 lo **diện mạo** (restyle card+grid sang look phẳng OpenAlt). Để khỏi phí công, Phase 2 chỉ thêm content tối thiểu, không trau chuốt visual; Phase 4 mới quyết định hệ visual cuối.

## 1. Hiện trạng (đọc kỹ trước khi code)

- **Card:** [`RepoCard.astro`](../src/components/RepoCard.astro) (grid 2 cột, dùng ở `/nganh`) và [`RepoListItem.astro`](../src/components/RepoListItem.astro) (list, dùng ở homepage + related). Đã có: name, oneLiner, stars/forks, vertical chip, maturity badge. **Thiếu:** favicon/icon, last-commit, "alternative to" chip.
- **Cross-link `paidToolReplaced`:** string tự do ("Runway / Pika / CapCut AI…"). [`index.astro`](../src/pages/index.astro) dùng regex `extractToolLabel` (dòng 20-40) để rút brand → grid "Đang trả tiền cho tool nào?". **Mong manh** — đây là chỗ item 2 thay thế.
- **Filter:** [`TagFilter.astro`](../src/components/TagFilter.astro) — 1 chiều (tag), client-side ẩn/hiện qua `?tag=` + attr `data-filter-tags` trên card. `popstate`-aware.
- **Pillar pages:** `/nganh/[vertical]` đã có (creative/agency/ecom/seo) — mẫu `getStaticPaths` để bắt chước cho `/alternatives/[slug]`.
- **SEO:** sitemap auto ([`astro.config.mjs:113`](../astro.config.mjs)) lọc `PRIVATE_PAGES`; JSON-LD Article + FAQ trên repo page.
- **Schema:** [`content/config.ts`](../src/content/config.ts) — `repoStats.pushedAt` ĐÃ có (chưa render); `repoUrl` dạng `https://github.com/{owner}/{repo}`.
- **Test:** `npm test` = `node --test tests/*.test.mjs`. `npm run build` = export feed + astro build.

## 2. Dependency graph

```
Item 2 (alternativeTo data + /alternatives pages)   ← FOUNDATION
        │
        └──► Item 1 chip "Alternative to"  (avatar + stat row độc lập)
                    │
                    └──► Phase 4 (restyle card+grid OpenAlt)  ← dùng lại helper item 1+2

Item 3 (filter Vertical+Maturity+Tag)   ← ĐỘC LẬP (không cần item 2)
```

- Item 2 là nền: tạo data sạch + helper slugify, thay regex mong manh.
- Item 1: phần avatar + 3-metric row **độc lập**; chỉ chip "Alternative to" cần data item 2.
- Item 3: hoàn toàn độc lập (vertical/maturity/tag đều đã có sẵn trên schema).
- Phase 4: phụ thuộc helper của Phase 1 (`alternativeTo`, `ownerAvatar`) + Phase 2 (`relativeTime`); làm cuối, trên branch.

→ Thứ tự thực thi: **Phase 1 (item 2) → Phase 2 (item 1) → Phase 3 (item 3) → Phase 4 (UI)**. Item 3 có thể chạy song song bất cứ lúc nào nếu cần.

## 3. Slice vertical (mỗi phase = 1 đường hoàn chỉnh người dùng thấy được)

### Phase 1 — Alternative-to data + pages (item 2)

**Đường hoàn chỉnh:** user click chip/link "Alternative to Runway" → landing `/alternatives/runway` liệt kê các repo OSS thay được Runway.

- **T1.1 — Schema + helper slugify.**
  - Thêm vào `content/config.ts`: `alternativeTo: z.array(z.object({ name: z.string(), slug: z.string() })).default([])`.
  - Tạo `src/lib/alternatives.ts`: `slugifyTool(name)` (lowercase, bỏ dấu, `[^a-z0-9]+`→`-`), `extractToolLabel(raw)` (MOVE từ index.astro — 1 nguồn sự thật), `groupByAlternative(entries)` → `Map<slug, {name, entries[]}>`, `ownerAvatar(repoUrl)` → `https://github.com/{owner}.png?size=80`.
  - **AC:** `tsc`/astro check pass; helper export đủ; index.astro import `extractToolLabel` từ lib thay vì định nghĩa cục bộ (không đổi hành vi grid hiện tại).
  - **Verify:** `npm run build` xanh; grid "Đang trả tiền cho tool nào?" trên homepage render y như cũ.

- **T1.2 — Auto-seed script.**
  - `scripts/seed-alternatives.mjs`: đọc từng `src/content/repos/*.md`, nếu CHƯA có `alternativeTo` và CÓ `paidToolReplaced` → `extractToolLabel` → ghi `alternativeTo: [{name, slug}]` vào frontmatter (dùng js-yaml, giữ nguyên field khác). Idempotent (chạy lại không nhân đôi). KHÔNG đụng `_template.md`.
  - **AC:** chạy script → ≥1 file có `alternativeTo` được seed; chạy lần 2 không đổi diff; file không bị xáo trộn field/format khác (kiểm `git diff` gọn).
  - **Verify:** `node scripts/seed-alternatives.mjs` rồi `git diff --stat`; mở 2-3 file kiểm tay.
  - **Checkpoint con:** Luan duyệt/sửa tay slug+name của 33 file (gộp "Runway"/"Runway ML" về 1 slug, bỏ noise). *Đây là bước người, không block code.*

- **T1.3 — Trang `/alternatives/[slug]` + index.**
  - `src/pages/alternatives/[slug].astro`: `getStaticPaths` từ `groupByAlternative`; mỗi trang = hero "Open-source alternatives to {name}" + danh sách `RepoListItem` + JSON-LD `ItemList` + canonical + breadcrumb về `/alternatives`.
  - `src/pages/alternatives/index.astro`: lưới tất cả tool được thay (kèm count) → link sang từng `/alternatives/[slug]`.
  - SEO title VI: `{name}: các lựa chọn open-source thay thế | AltStack`.
  - **AC:** mỗi slug có trang build ra; index liệt kê đủ; sitemap chứa các URL mới; không có trang rỗng (slug 0 entries bị loại).
  - **Verify:** `npm run build` → đếm file `dist/alternatives/*/index.html`; mở `dist/sitemap-0.xml` grep `/alternatives/`.

- **T1.4 — Wire internal links.**
  - Refactor grid homepage "Đang trả tiền cho tool nào?" trỏ `/alternatives/{slug}` thay vì `/#radar` khi >1 alt.
  - Thêm link "Alternatives" vào footer/nav ([`BaseLayout.astro`](../src/layouts/BaseLayout.astro)).
  - **AC:** click brand bất kỳ trên homepage → tới đúng trang alternatives; nav có entry mới.
  - **Verify:** preview, click thử 3 brand.

- **✅ CHECKPOINT A** — Luan review: data sạch, trang alternatives đúng, internal link chạy, sitemap có URL mới.

### Phase 2 — Card enrichment (item 1)

**Đường hoàn chỉnh:** mọi nơi list repo (homepage, /nganh, related, /alternatives) hiển thị card giàu hơn: avatar + tên + oneLiner + (stars · forks · last-commit) + chip "Alternative to" + maturity badge.

- **T2.1 — Helper last-commit + avatar.**
  - Trong `src/lib/alternatives.ts` (hoặc `src/lib/format.ts`): `relativeTime(date)` → "7 giờ trước" / "3 ngày trước" (VI). `ownerAvatar` đã có ở T1.1.
  - **AC:** unit test `relativeTime` ≥4 mốc (giờ/ngày/tuần/tháng).
  - **Verify:** `node --test tests/format.test.mjs` xanh.

- **T2.2 — Enrich `RepoListItem`.**
  - Thêm avatar owner (img 32-36px, `loading=lazy`, fallback nếu lỗi), 3-metric row (stars · forks · last-commit từ `repoStats.pushedAt`), chip "Alternative to {name đầu tiên}" link `/alternatives/{slug}`.
  - **AC:** card hiện đủ 6 thành phần khi data có; ẩn gọn metric/chip khi thiếu data (không vỡ layout); avatar lỗi không để ô trống xấu.
  - **Verify:** preview homepage; test 1 repo có pushedAt + 1 repo không có.

- **T2.3 — Enrich `RepoCard`.**
  - Tương tự T2.2 cho card grid ở `/nganh` + `/alternatives` (thêm avatar cạnh tên, last-commit vào stat row, chip alternative-to).
  - **AC:** đồng nhất với RepoListItem; responsive 1↔2 cột ok.
  - **Verify:** preview `/nganh/creative`.

- **✅ CHECKPOINT B** — Luan demo card mới trên cả 3 surface.

### Phase 3 — Faceted filter 3 chiều (item 3)

**Đường hoàn chỉnh:** trên homepage radar, user chọn Vertical + Maturity + Tag đồng thời → list lọc giao (AND) tức thì, URL phản ánh state, back/forward chạy.

- **T3.1 — Data attributes trên card.**
  - Thêm `data-filter-vertical` (join `|`) + `data-filter-maturity` vào `RepoListItem` (và `RepoCard` nếu dùng faceted ở /nganh). Giữ `data-filter-tags`.
  - **AC:** mọi card radar có 3 attr; giá trị lowercase, khớp enum.
  - **Verify:** inspect DOM 2 card.

- **T3.2 — Component `FacetFilter`.**
  - Tạo `src/components/FacetFilter.astro` (mở rộng từ TagFilter): 3 nhóm chip (Vertical / Maturity / Tag), đọc/ghi `?vertical=&maturity=&tag=`, lọc AND, cập nhật `history.pushState`, `popstate`-aware, status "{n} match". Tái dùng analytics `altstackTrack`.
  - Prop `facets` để chọn hiện chiều nào (homepage: cả 3; `/nganh`: bỏ Vertical vì đã scope).
  - **AC:** chọn 2-3 facet cùng lúc lọc đúng giao; "All" mỗi nhóm reset nhóm đó; URL share lại ra đúng state; back/forward đúng.
  - **Verify:** preview homepage, thử các tổ hợp; copy URL mở tab mới kiểm.

- **T3.3 — Thay TagFilter ở homepage bằng FacetFilter; giữ TagFilter ở /nganh (hoặc FacetFilter bỏ Vertical).**
  - **AC:** không regress filter tag cũ; `/nganh` vẫn lọc được.
  - **Verify:** preview cả 2 trang.

- **✅ CHECKPOINT C** — Luan review filter, test back/forward + share URL.

### Phase 4 — Mimic UI card + grid OpenAlternative (item 4) · trên branch/preview

**Đường hoàn chỉnh:** Luan mở `/alt-preview` thấy radar render bằng card phẳng kiểu OpenAlternative cạnh look hiện tại để so sánh; duyệt xong → swap component vào homepage/nganh/alternatives.

**Tham chiếu visual OpenAlternative (card):** nền trắng phẳng, **border hairline 1px** (không gradient/không shadow nặng), **bo góc ~12px**, favicon góc trên-trái, tên + tagline ngắn, hàng **Stars · Forks · Last commit** với icon nhỏ + label, mô tả 1-2 câu, dòng "Alternative to:" kèm favicon chip, badge "Open Source". Grid **3 cột** desktop / 2 tablet / 1 mobile, gap đều, khoảng trắng rộng.

- **T4.1 — Token + component card phẳng.**
  - Tạo biến CSS phụ trong `global.css` cho biến thể phẳng (vd `--rr-radius-flat: 12px`) — KHÔNG sửa token brand hiện có. Hoặc đóng gói style ngay trong component (Tailwind) để cô lập.
  - Tạo `src/components/RepoCardFlat.astro`: bố cục đúng tham chiếu trên, tái dùng `ownerAvatar` (P1), `relativeTime` (P2), `alternativeTo` chip (P1). Giữ data-attr filter (P3) để vẫn lọc được.
  - **AC:** card phẳng đủ 7 thành phần (favicon, name, tagline, 3-stat, desc, alt-to chip, OSS badge); không gradient/không shadow nặng; ẩn gọn khi thiếu data; không phá token brand cũ.
  - **Verify:** preview component đơn lẻ; kiểm 1 repo đủ data + 1 thiếu pushedAt/alternativeTo.

- **T4.2 — Grid 3 cột + route `/alt-preview`.**
  - `src/pages/alt-preview.astro`: render toàn bộ radar bằng `RepoCardFlat` trong grid `sm:grid-cols-2 lg:grid-cols-3`; thêm link nội bộ "← so với bản hiện tại" trỏ `/#radar`. Route này thêm vào `PRIVATE_PAGES` (loại khỏi sitemap) để không lộ ra search khi đang thử.
  - **AC:** `/alt-preview` build ra, grid 3 cột responsive, card phẳng đồng nhất; KHÔNG xuất hiện trong sitemap.
  - **Verify:** `npm run build`; mở `dist/alt-preview/index.html`; grep sitemap đảm bảo vắng mặt.

- **✅ CHECKPOINT D** — Luan so sánh `/alt-preview` ↔ homepage hiện tại, chọn 1 trong 3:
  - (a) **Merge** — swap `RepoCardFlat` vào homepage/nganh/alternatives, gỡ route preview + bỏ khỏi PRIVATE_PAGES.
  - (b) **Chỉnh thêm** — ghi note, lặp T4.1/T4.2.
  - (c) **Giữ song song** — để `/alt-preview` như view tùy chọn, chưa swap.

> **Branch:** toàn bộ Phase 4 làm trên `feat/openalt-ui` (tách khỏi main); route `/alt-preview` cho A/B ngay trên cùng site khi dev/preview. Quyết định merge nằm ở CHECKPOINT D.

## 4. Verify tổng & rollback

- **Build gate cuối:** `npm run build` xanh, `npm test` xanh, `dist/alternatives/*` tồn tại, sitemap chứa URL mới.
- **QA tay:** click-through homepage → alternatives → repo detail; filter 3 tổ hợp; card hiện avatar/last-commit.
- **Rollback:** mỗi phase 1 commit riêng; revert theo phase. Schema `alternativeTo` có `.default([])` nên không vỡ build nếu thiếu data.

## 5. Ngoài phạm vi (không làm lần này)

- Alternative-to vào faceted filter (Luan chọn 3 chiều gọn).
- License/Tech-stack facet (OpenAlternative có, RepoRadar chưa cần).
- Favicon tool trả phí qua service ngoài (chọn avatar GitHub).
- Pagination kiểu OpenAlternative (radar hiện dùng "Xem thêm" fold — giữ nguyên).
- **Full redesign toàn site** (token brand, hero, dark-hero, footer): Phase 4 **chỉ card + grid**, KHÔNG đụng hero/brand/global token.
- Sponsor logo bar + top banner ad layout (chỉ là tham chiếu, chưa làm).
