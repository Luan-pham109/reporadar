# TODO — 3 pattern OpenAlternative cho AltStack

Chi tiết & acceptance criteria: [openalt-plan.md](./openalt-plan.md).
Quy tắc: làm tuần tự theo phase, **không vượt CHECKPOINT** khi chưa pass. Tick khi AC + verify đạt.

Lựa chọn đã chốt: data **auto-seed rồi sửa tay** · icon **avatar owner GitHub** · filter **3 chiều** (Vertical+Maturity+Tag) · UI **chỉ card+grid** trên **branch/preview**.

---

## Phase 1 — Alternative-to data + pages (item 2) · FOUNDATION
- [ ] **T1.1** Schema `alternativeTo[{name,slug}]` + `src/lib/alternatives.ts` (slugifyTool, extractToolLabel MOVE từ index, groupByAlternative, ownerAvatar); index.astro import từ lib
- [ ] **T1.2** `scripts/seed-alternatives.mjs` auto-seed (idempotent, không đụng _template) → chạy + `git diff` kiểm
- [ ] **T1.3** Trang `/alternatives/[slug].astro` + `/alternatives/index.astro` (JSON-LD ItemList, canonical, loại slug rỗng)
- [ ] **T1.4** Wire link: grid homepage → `/alternatives/{slug}`; thêm "Alternatives" vào nav/footer
- [ ] 🔸 *Bước người:* Luan duyệt/sửa tay slug+name 33 file (gộp brand trùng, bỏ noise)
- [ ] **✅ CHECKPOINT A** — data sạch · trang alternatives đúng · internal link chạy · sitemap có URL mới

## Phase 2 — Card enrichment (item 1)
- [ ] **T2.1** Helper `relativeTime(date)` VI + `ownerAvatar` (unit test ≥4 mốc)
- [ ] **T2.2** Enrich `RepoListItem`: avatar owner + 3-metric (stars·forks·last-commit) + chip "Alternative to" (ẩn gọn khi thiếu data)
- [ ] **T2.3** Enrich `RepoCard` đồng nhất (avatar + last-commit + chip), responsive ok
- [ ] **✅ CHECKPOINT B** — demo card mới trên homepage · /nganh · /alternatives

## Phase 3 — Faceted filter 3 chiều (item 3) · ĐỘC LẬP
- [ ] **T3.1** Thêm `data-filter-vertical` + `data-filter-maturity` vào card (giữ data-filter-tags)
- [ ] **T3.2** Component `FacetFilter.astro` (3 nhóm chip, lọc AND, `?vertical=&maturity=&tag=`, popstate, prop chọn chiều)
- [ ] **T3.3** Thay TagFilter→FacetFilter ở homepage; /nganh giữ filter (bỏ chiều Vertical)
- [ ] **✅ CHECKPOINT C** — lọc giao đúng · back/forward · share URL ra đúng state

## Phase 4 — Mimic UI card + grid OpenAlt (item 4) · branch `feat/openalt-ui`
- [ ] **T4.1** `RepoCardFlat.astro` (phẳng, hairline border, bo góc ~12px, favicon + 3-stat + alt-to chip + OSS badge); token phẳng cô lập, không phá brand
- [ ] **T4.2** Route `/alt-preview.astro` render radar bằng grid 3 cột + RepoCardFlat; thêm vào PRIVATE_PAGES (vắng sitemap)
- [ ] **✅ CHECKPOINT D** — Luan so A/B `/alt-preview` ↔ homepage → (a) merge swap vào trang thật · (b) chỉnh thêm · (c) giữ song song

---

## Gate cuối (trước khi ship)
- [ ] `npm run build` xanh · `npm test` xanh · `dist/alternatives/*` tồn tại · sitemap có URL mới
- [ ] QA tay: homepage → alternatives → repo detail; 3 tổ hợp filter; card hiện avatar/last-commit
- [ ] 3 commit riêng theo phase (dễ revert)

## Ngoài phạm vi
- [ ] ~~Alternative-to vào filter~~ (chốt 3 chiều gọn)
- [ ] ~~License/Tech-stack facet~~ · ~~Favicon tool trả phí~~ · ~~Pagination kiểu OpenAlt~~
- [ ] ~~Full redesign toàn site (hero/brand/token)~~ — Phase 4 chỉ card+grid
- [ ] ~~Sponsor logo bar / top banner ad~~ (chỉ tham chiếu)
