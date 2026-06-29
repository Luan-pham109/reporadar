# Plan — Hoàn chỉnh Module Membership (Google-only)

**Sản phẩm:** RepoRadar VN / AltStack
**Scope đã chốt:** Chỉ giữ **đăng nhập bằng Google** (gỡ luồng email/password). Không có quên-mật-khẩu / xác-minh-email (Google đã lo).
**Người làm:** Junior dev (1 người)
**Người review:** Luan
**Ngày lập:** 2026-06-29
**Hạ tầng:** Astro static (`dist/`) + **Cloudflare Pages Functions** (`functions/`) + **Cloudflare KV**.

> ⚠️ **Điều quan trọng nhất phải hiểu trước khi bắt đầu:**
> Toàn bộ `functions/api/auth/*` là **Cloudflare Pages Functions** — chúng **KHÔNG chạy** trong `astro dev` (port 4321). Muốn test auth phải build rồi chạy `wrangler pages dev` (port 8788). Đây là nguồn nhầm lẫn số 1. Xem Phase 0.

---

## 1. Hiện trạng (đọc kỹ — phần lớn ĐÃ build)

Backend auth đã hoàn thiện ~80%. Đừng viết lại từ đầu — nhiệm vụ là **gỡ password, wire infra, thêm UX, siết bảo mật, test, viết doc**.

### Đã có và chạy được (giữ lại)
| File | Vai trò |
|---|---|
| `functions/_lib/auth.js` | Session (KV, token hash SHA-256), cookie (HttpOnly/SameSite=Lax/Secure), user store theo `user:`/`email:`/`google:`, `safeReturnTo`, OAuth state/return cookie. **Có cả password (PBKDF2) — sẽ gỡ.** |
| `functions/api/auth/google/start.js` | Tạo `state`, set cookie, redirect sang Google consent. |
| `functions/api/auth/google/callback.js` | Verify `state` → đổi code lấy token → lấy userinfo → tạo/link user → tạo session → redirect `returnTo`. |
| `functions/api/auth/me.js` | Trả user hiện tại từ session (đã ổn). |
| `functions/api/auth/logout.js` | Hủy session + clear cookie (đã ổn). |
| `functions/feed.json.js` | Gate member feed sau `requireUser`; guest nhận 401 + `loginUrl`. |
| `functions/api/events.js` + `_lib/analytics.js` | Analytics event (KV `ANALYTICS_KV`/`EVENTS_KV`). |
| `src/pages/login.astro` | UI login (hiện có **cả** tab email/password — sẽ rút gọn còn Google). |
| `src/layouts/BaseLayout.astro` | Header có link tĩnh "Member" (chưa phản ánh trạng thái đăng nhập). |
| `src/pages/repos/[slug].astro` | Có teaser member trỏ `/login`; còn 1 block chết `{false && (...)}` cần xóa. |

### Sẽ gỡ (vì đi Google-only)
- `functions/api/auth/login.js`, `functions/api/auth/signup.js`
- `hashPassword` / `verifyPassword` / hằng số PBKDF2 / `passwordHash` / provider `password` trong `auth.js` và `callback.js`
- Tab + form email/password trong `login.astro`

### CHƯA có (phần việc thật)
1. **Không có `wrangler.jsonc`** → KV binding `AUTH_KV`, `ANALYTICS_KV` chưa khai báo → local lẫn prod đều chưa chạy được auth.
2. **Không có `.dev.vars.example`** → `GOOGLE_CLIENT_ID/SECRET`, `AUTH_SESSION_TTL_SECONDS` chưa tài liệu hóa.
3. **Không có Google OAuth client** đã cấu hình redirect URI (localhost + prod).
4. **Không có quy trình dev cho Functions** (`wrangler pages dev`) — chưa có npm script, chưa có doc.
5. **Header không phản ánh trạng thái đăng nhập** (không avatar/tên/logout).
6. **Không có trang `/account`** để member xem hồ sơ + đăng xuất.
7. **Không có rate-limit / chống lạm dụng** trên endpoint OAuth + events.
8. **Không có test nào** + chưa có QA checklist + chưa có runbook deploy.

---

## 2. Dependency graph

```
Phase 0  Hạ tầng + credentials  ─────────────┐  (mọi thứ phụ thuộc)
  T0.1 wrangler.jsonc + KV namespaces         │
  T0.2 .dev.vars(.example) + .gitignore       │
  T0.3 Google OAuth client (redirect URIs)    │
  T0.4 npm script + doc `wrangler pages dev`   │
        └── CHECKPOINT A (review hạ tầng) ─────┘
                  │
Phase 1  Spine: đăng nhập Google end-to-end
  T1.1 Verify happy-path Google sign-in  ◀── cần T0.*
  T1.2 Gỡ backend password (login/signup/auth.js)
        └── CHECKPOINT B
                  │
        ┌─────────┴───────────────┐
Phase 2 UX đăng nhập             Phase 3 Nội dung gated
  T2.1 login.astro Google-only     T3.1 Verify feed.json round-trip
  T2.2 Header auth-state           T3.2 Repo detail: xóa block chết
  T2.3 Trang /account                    + returnTo về đúng repo
        └── CHECKPOINT C              └── CHECKPOINT D
                  │                        │
                  └────────────┬───────────┘
Phase 4  Hardening
  T4.1 Rate-limit OAuth + events (KV counter)
  T4.2 Security review checklist
        └── CHECKPOINT E
                  │
Phase 5  Test + QA + Doc
  T5.1 Unit test hàm thuần trong auth.js
  T5.2 Integration smoke test (wrangler pages dev)
  T5.3 Runbook MEMBERSHIP.md + QA checklist
        └── CHECKPOINT F (go / no-go ship)
```

**Quy tắc cho junior:** làm tuần tự theo Phase. **Không vượt checkpoint** khi tiêu chí của nó chưa pass. Mỗi task là một lát cắt dọc (một đường đi hoàn chỉnh, có thể demo được), không làm theo lớp ngang.

---

## 3. Lát cắt dọc & chi tiết task

Mỗi task ghi rõ: **Mục tiêu · File đụng tới · Acceptance criteria (AC) · Cách verify**.

---

### PHASE 0 — Hạ tầng & credentials

#### T0.1 — Khai báo `wrangler.jsonc` + tạo KV namespaces
- **Mục tiêu:** Pages Functions thấy được binding KV để lưu user/session/analytics.
- **File:** tạo `wrangler.jsonc` ở gốc.
- **Việc:**
  - `npx wrangler kv namespace create AUTH_KV` và `... --preview` → lấy 2 id.
  - Tương tự cho `ANALYTICS_KV`.
  - `wrangler.jsonc`:
    ```jsonc
    {
      "name": "reporadar-vn",
      "compatibility_date": "2024-11-01",
      "pages_build_output_dir": "dist",
      "kv_namespaces": [
        { "binding": "AUTH_KV", "id": "<prod>", "preview_id": "<preview>" },
        { "binding": "ANALYTICS_KV", "id": "<prod>", "preview_id": "<preview>" }
      ]
    }
    ```
- **AC:**
  - File parse được: `npx wrangler pages dev dist` khởi động không báo thiếu binding.
  - `AUTH_KV` và `ANALYTICS_KV` xuất hiện trong log binding của wrangler.
- **Verify:** `npx wrangler pages dev dist` → log liệt kê 2 KV binding.

#### T0.2 — `.dev.vars.example` + `.dev.vars` + `.gitignore`
- **Mục tiêu:** Biến môi trường (secret) cho local Functions, không commit secret thật.
- **File:** tạo `.dev.vars.example` (commit), `.dev.vars` (KHÔNG commit), sửa `.gitignore`.
- **Việc:**
  - `.dev.vars.example`:
    ```
    GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
    GOOGLE_CLIENT_SECRET=your-client-secret
    AUTH_SESSION_TTL_SECONDS=2592000
    ```
  - Thêm `.dev.vars` vào `.gitignore`.
- **AC:** `git status` không thấy `.dev.vars`; `.dev.vars.example` được track.
- **Verify:** `git check-ignore .dev.vars` trả về `.dev.vars`.

#### T0.3 — Tạo Google OAuth client
- **Mục tiêu:** Có `GOOGLE_CLIENT_ID/SECRET` thật + redirect URI đúng.
- **Việc (Google Cloud Console → APIs & Services → Credentials → OAuth client ID → Web app):**
  - Authorized redirect URIs:
    - `http://localhost:8788/api/auth/google/callback` (wrangler pages dev mặc định 8788)
    - `https://<domain-prod>/api/auth/google/callback`
  - OAuth consent screen: scope `openid email profile`, thêm test users nếu app ở chế độ Testing.
  - Đổ `client_id/secret` vào `.dev.vars`.
- **AC:** `.dev.vars` có 2 giá trị thật; consent screen mở được khi bấm nút.
- **Verify:** làm trong T1.1 (end-to-end).
- **Ghi chú quyền:** nếu junior không có quyền tạo client → Luan cấp (xem CHECKPOINT A). Fallback offline: tạm stub `callback.js` trả user giả để iterate UI (đánh dấu TODO gỡ).

#### T0.4 — npm script + doc dev workflow
- **Mục tiêu:** 1 lệnh để chạy site + Functions + KV local.
- **File:** `package.json`, README (mục "Local dev with auth").
- **Việc:**
  - Thêm script: `"dev:functions": "npm run build && wrangler pages dev dist"`.
  - Doc 3 bước: (1) copy `.dev.vars.example`→`.dev.vars` điền creds; (2) `npm run dev:functions`; (3) mở `http://localhost:8788`.
  - Ghi rõ: `astro dev` (4321) = chỉ UI tĩnh, auth sẽ fail (đúng như catch trong `login.astro`); `wrangler pages dev` (8788) = có auth thật.
- **AC:** chạy `npm run dev:functions` lên được site ở 8788; `GET http://localhost:8788/api/auth/me` trả `{"ok":true,"user":null}`.
- **Verify:** `curl http://localhost:8788/api/auth/me` → `user: null`.

> ### ✅ CHECKPOINT A — Review hạ tầng (Luan)
> - [ ] `wrangler.jsonc` đúng, 2 KV namespace đã tạo (prod + preview).
> - [ ] Google OAuth client tồn tại, redirect URI khớp localhost:8788 + prod.
> - [ ] `npm run dev:functions` chạy, `/api/auth/me` trả `user:null`.
> - [ ] Secrets không bị commit.
> **Chỉ qua Phase 1 khi cả 4 ô tick.** Đây là điểm Luan xác nhận credentials/quyền trước khi đụng code.

---

### PHASE 1 — Spine: đăng nhập Google end-to-end

#### T1.1 — Verify happy-path Google sign-in
- **Mục tiêu:** Khẳng định luồng có sẵn chạy thật trước khi đụng vào.
- **Việc:** Bấm "Tiếp tục với Google" trên `/login` → consent → quay lại → có cookie `rr_session` → redirect về `returnTo`.
- **AC:**
  - Sau đăng nhập, `GET /api/auth/me` trả `user` có `email`, `providers:["google"]`.
  - KV `AUTH_KV` có key `user:*`, `email:*`, `google:*`, `session:*`.
  - `GET /feed.json` trả `access:"member"` (không còn 401).
- **Verify:** DevTools → Application → Cookies thấy `rr_session` HttpOnly; `wrangler kv key list --binding AUTH_KV` thấy các key.
- **Nếu fail:** sửa tại chỗ (thường do redirect URI sai hoặc thiếu env). Ghi lỗi gặp phải vào PR.

#### T1.2 — Gỡ backend password → Google-only
- **Mục tiêu:** Sản phẩm chỉ còn một con đường xác thực; bớt attack surface; bỏ code chết.
- **File:** xóa `functions/api/auth/login.js`, `functions/api/auth/signup.js`; sửa `functions/_lib/auth.js`, `functions/api/auth/google/callback.js`.
- **Việc:**
  - Xóa 2 file endpoint password.
  - Trong `auth.js`: bỏ `hashPassword`, `verifyPassword`, `PASSWORD_*`, mọi tham chiếu `passwordHash`. `putUser` giữ nguyên nhánh `google`. `safeUser.providers` vẫn ok.
  - Trong `callback.js`: bỏ `providers.password`, chỉ set `providers.google`.
  - Grep đảm bảo không còn import `hashPassword`/`verifyPassword`/`login.js`/`signup.js` ở đâu.
- **AC:**
  - `grep -rn "hashPassword\|verifyPassword\|passwordHash\|auth/login\|auth/signup" functions src` → 0 kết quả (trừ doc/plan).
  - `npm run build` pass.
  - Đăng nhập Google vẫn chạy như T1.1.
- **Verify:** lặp lại verify T1.1 sau khi build lại; `curl -X POST /api/auth/login` trả 404 (file đã xóa).

> ### ✅ CHECKPOINT B
> - [ ] Chỉ còn path Google; build pass; sign-in + `/me` + logout chạy qua `wrangler pages dev`.
> - [ ] Không còn tham chiếu password trong codebase.

---

### PHASE 2 — Trải nghiệm đăng nhập

#### T2.1 — Rút gọn `login.astro` còn Google-only
- **Mục tiêu:** Trang login sạch, 1 hành động chính.
- **File:** `src/pages/login.astro`.
- **Việc:** bỏ 2 tab + `<form>` email/password + JS xử lý form/setMode; giữ: nút "Tiếp tục với Google" (gắn `returnTo`), `boot()` gọi `/me` để hiện trạng thái đã-đăng-nhập, nút Đăng xuất, panel marketing bên trái.
- **AC:**
  - Trang chỉ có nút Google + (nếu đã login) panel member/logout.
  - Không còn input password trong DOM.
  - `returnTo` từ query được truyền vào href nút Google.
- **Verify:** mở `/login?returnTo=/account`, xem source nút Google có `returnTo=%2Faccount`; đăng nhập xong về `/account`.

#### T2.2 — Header phản ánh trạng thái đăng nhập
- **Mục tiêu:** Khách thấy "Đăng nhập"; member thấy tên/avatar + "Đăng xuất".
- **File:** `src/layouts/BaseLayout.astro` (thêm 1 vùng nav + script gọi `/me`).
- **Việc:**
  - Thêm `<span id="rr-auth-slot">` trong nav, mặc định render link "Đăng nhập" (no-JS friendly).
  - Script nhỏ: `fetch('/api/auth/me')` → nếu có user, thay slot bằng tên (+ avatar nếu có) và nút "Đăng xuất" (POST `/api/auth/logout` rồi reload).
  - Logout phát analytics `membership_logout_*` (tái dùng `altstackTrack`).
- **AC:**
  - Guest: thấy "Đăng nhập".
  - Member: thấy tên + "Đăng xuất"; bấm logout → quay lại trạng thái guest.
  - Không lỗi console; static build (`astro dev`) vẫn render được link "Đăng nhập" (fetch fail im lặng).
- **Verify:** test cả 2 trạng thái trên `wrangler pages dev`; tắt Functions (`astro dev`) xác nhận header không vỡ.

#### T2.3 — Trang `/account`
- **Mục tiêu:** Nơi member xem hồ sơ + quản lý phiên.
- **File:** tạo `src/pages/account.astro`.
- **Việc:** client-side gọi `/me`; nếu `user:null` → redirect `/login?returnTo=/account`. Nếu có: hiện tên, email, avatar, provider (`google`), `createdAt`, nút "Mở member feed" (`/feed.json`), nút "Đăng xuất".
- **AC:**
  - Guest mở `/account` → bị đẩy sang `/login?returnTo=/account`; login xong quay lại `/account`.
  - Member thấy đúng thông tin từ `/me`.
- **Verify:** chạy cả 2 luồng trên 8788.

> ### ✅ CHECKPOINT C — Demo UX (Luan)
> - [ ] Login page Google-only gọn gàng.
> - [ ] Header đổi theo trạng thái; logout hoạt động.
> - [ ] `/account` gate đúng + hiển thị đúng.

---

### PHASE 3 — Đường đi nội dung gated

#### T3.1 — Verify round-trip member feed
- **Mục tiêu:** Guest bị chặn đúng, member xem được, returnTo quay về đúng chỗ.
- **File:** `functions/feed.json.js` (chỉ verify/chỉnh nhỏ nếu cần).
- **AC:**
  - Guest `GET /feed.json` → 401, payload có `loginUrl` chứa `returnTo=/feed.json`.
  - Sau login → `/feed.json` trả `access:"member"` + `member` + `items`.
- **Verify:** curl trước/sau login; kiểm payload.

#### T3.2 — Repo detail: dọn dead code + returnTo đúng repo
- **Mục tiêu:** Bỏ block chết; CTA member dẫn về đúng trang repo sau khi login.
- **File:** `src/pages/repos/[slug].astro`.
- **Việc:**
  - Xóa block `{false && ( ... )}` (dòng ~361).
  - Các link `/login` trong teaser member → thêm `?returnTo=<đường-dẫn-repo-hiện-tại>`.
- **AC:**
  - `grep -n "false &&" src/pages/repos/[slug].astro` → 0.
  - Bấm "Đăng nhập để xem guide" tại 1 repo → login Google → quay lại đúng repo đó.
  - `npm run build` pass.
- **Verify:** thao tác tay trên 1 trang repo bất kỳ ở 8788.

> ### ✅ CHECKPOINT D
> - [ ] Gated feed round-trip đúng; repo detail sạch dead code; returnTo về đúng repo.

---

### PHASE 4 — Hardening

#### T4.1 — Rate-limit OAuth + events
- **Mục tiêu:** Chặn lạm dụng (spam tạo session/khởi tạo OAuth, flood analytics).
- **File:** thêm helper `functions/_lib/ratelimit.js`; áp vào `google/start.js`, `google/callback.js`, `api/events.js`.
- **Việc:** đếm theo `ipHash` (đã có `hashIp` trong analytics) + window cố định trong KV (`rl:<scope>:<ipHash>:<bucket>`), TTL ngắn. Vượt ngưỡng → trả 429 (OAuth) / drop im lặng (events). Ngưỡng ví dụ: start 20/10ph, events 120/ph — tinh chỉnh.
- **AC:**
  - Gọi `/api/auth/google/start` quá ngưỡng trong cửa sổ → 429.
  - Người dùng bình thường (1 lần đăng nhập) không bao giờ chạm ngưỡng.
- **Verify:** script bắn N request thấy 429 sau ngưỡng; luồng đăng nhập thường vẫn ok.

#### T4.2 — Security review checklist
- **Mục tiêu:** Rà các điểm nhạy cảm, ghi lại kết luận.
- **File:** `tasks/security-review.md`.
- **Checklist (tự kiểm + ghi pass/lý do):**
  - Cookie `rr_session`: HttpOnly ✔, SameSite=Lax ✔, Secure khi https ✔, Max-Age hợp lý.
  - `state` cookie OAuth verify đúng; clear sau callback.
  - `safeReturnTo` chặn open-redirect (`//`, `\r\n`, absolute URL) — thêm test.
  - Session token chỉ lưu **hash** trong KV (không lưu token thô) ✔.
  - Không log `GOOGLE_CLIENT_SECRET`, access_token, session token.
  - userinfo: bắt buộc `email_verified` ✔.
- **AC:** mỗi mục có kết luận; lỗ hổng (nếu có) thành task con đã fix.
- **Verify:** review doc cùng Luan ở CHECKPOINT E.

> ### ✅ CHECKPOINT E
> - [ ] Rate-limit chạy, không cản người dùng thật.
> - [ ] Security checklist pass hết hoặc có task fix.

---

### PHASE 5 — Test, QA, Doc

#### T5.1 — Unit test hàm thuần trong `auth.js`
- **Mục tiêu:** Khóa hành vi các hàm không phụ thuộc KV.
- **File:** `tests/auth.unit.test.mjs` (node:test, không cần KV/wrangler).
- **Phủ:** `safeReturnTo` (chặn `//`, absolute, newline, quá dài, fallback), `getCookie`, `makeCookie` (flags), `normalizeEmail`, `isValidEmail`, `sha256Hex` (ổn định), `base64Url` round-trip.
- **AC:** `node --test tests/` xanh; ≥ 8 case.
- **Verify:** chạy `node --test`.

#### T5.2 — Integration smoke test (wrangler pages dev)
- **Mục tiêu:** Bắt regression ở các endpoint không cần Google.
- **File:** `tests/smoke.md` + script `scripts/smoke-auth.mjs` (tùy chọn).
- **Phủ:** `/api/auth/me` (guest→user:null), `/feed.json` (guest→401 + loginUrl), `POST /api/events` (→ ok), `POST /api/auth/login` (→404 đã gỡ).
- **AC:** chạy theo `wrangler pages dev` cho kết quả như mô tả; happy-path Google ghi là **manual** (cần consent).
- **Verify:** chạy script/curl theo checklist.

#### T5.3 — Runbook `MEMBERSHIP.md` + QA checklist
- **Mục tiêu:** Bàn giao được, deploy lại được, rollback được.
- **File:** `MEMBERSHIP.md` ở gốc.
- **Nội dung:** kiến trúc (Functions + KV), env/secrets, cách tạo KV, cấu hình Google client (cả prod), lệnh dev (8788) vs astro dev (4321), set secret prod (`wrangler pages secret put GOOGLE_CLIENT_SECRET`), deploy, **QA checklist tay** (login/logout/account/gated feed/header 2 trạng thái), cách rollback (revert + xóa KV nếu cần).
- **AC:** người khác theo doc dựng lại được local trong < 15 phút.
- **Verify:** Luan (hoặc người thứ 2) làm theo doc từ máy sạch.

> ### ✅ CHECKPOINT F — Go / No-go ship (Luan)
> - [ ] Unit + smoke test xanh.
> - [ ] QA tay pass toàn bộ checklist.
> - [ ] Runbook đầy đủ; secrets prod đã set; redirect URI prod đã thêm.
> - [ ] Quyết định deploy.

---

## 4. Rủi ro & lưu ý cho junior

| # | Rủi ro | Giảm thiểu |
|---|---|---|
| 1 | Test auth trong `astro dev` (4321) → luôn fail, tưởng hỏng | Luôn dùng `npm run dev:functions` (8788) cho auth |
| 2 | Redirect URI Google không khớp port → `redirect_uri_mismatch` | URI phải đúng `http://localhost:8788/...`; thêm cả prod |
| 3 | Commit nhầm `.dev.vars` | T0.2 đưa vào `.gitignore` trước khi điền secret |
| 4 | Quên set secret trên Pages prod | Runbook T5.3 + CHECKPOINT F |
| 5 | KV preview vs prod lẫn lộn | Khai báo cả `id` + `preview_id` (T0.1) |
| 6 | Gỡ password làm vỡ import chỗ khác | T1.2 grep sạch trước khi build |

## 5. Ngoài phạm vi (ghi nhận, KHÔNG làm lần này)
- Quên mật khẩu / xác minh email (không cần với Google-only).
- Email/password auth (đã chủ động gỡ; còn trong git history nếu cần khôi phục).
- Liên kết nhiều provider (GitHub, Facebook…), đổi tên hiển thị, xóa tài khoản.
- Role/authorization nâng cao ngoài `member` (giữ field `role` sẵn).
- Trust layer / phân tích analytics dashboard (Phase 2 của PRD).

## 6. Thứ tự đề xuất & ước lượng (junior)
P0 (~0.5–1 ngày, phụ thuộc cấp quyền) → P1 (~0.5 ngày) → P2 (~1–1.5 ngày) → P3 (~0.5 ngày) → P4 (~1 ngày) → P5 (~1 ngày). Tổng ~4.5–6 ngày làm việc, mỗi checkpoint là điểm dừng để Luan review.
