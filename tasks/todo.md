# TODO — Module Membership (Google-only)

Scope: **chỉ giữ đăng nhập Google**, gỡ email/password. Chi tiết & acceptance criteria xem [plan.md](./plan.md).
Quy tắc: làm tuần tự, **không vượt CHECKPOINT** khi chưa pass. Mỗi task tick khi AC + verify đạt.

---

## Phase 0 — Hạ tầng & credentials
- [ ] **T0.1** `wrangler.jsonc` + tạo KV namespaces `AUTH_KV`, `ANALYTICS_KV` (prod + preview)
- [ ] **T0.2** `.dev.vars.example` (commit) + `.dev.vars` (gitignore) + sửa `.gitignore`
- [ ] **T0.3** Tạo Google OAuth client, redirect URI localhost:8788 + prod, scope `openid email profile`
- [ ] **T0.4** npm script `dev:functions` + doc dev workflow (8788 vs 4321)
- [ ] **✅ CHECKPOINT A** — Luan review hạ tầng + credentials (4 ô trong plan)

## Phase 1 — Spine: đăng nhập Google end-to-end
- [ ] **T1.1** Verify happy-path Google sign-in (cookie + KV keys + feed.json member)
- [ ] **T1.2** Gỡ backend password: xóa `login.js`/`signup.js`, dọn `auth.js` + `callback.js`; grep sạch; build pass
- [ ] **✅ CHECKPOINT B** — chỉ còn path Google, build + sign-in + me + logout chạy

## Phase 2 — Trải nghiệm đăng nhập
- [ ] **T2.1** `login.astro` rút gọn còn nút Google (bỏ tab/form password), giữ returnTo + logged-in state
- [ ] **T2.2** Header `BaseLayout.astro` đổi theo trạng thái (guest: Đăng nhập / member: tên + Đăng xuất)
- [ ] **T2.3** Tạo trang `/account` (gate guest → /login?returnTo=/account; hiện hồ sơ + logout)
- [ ] **✅ CHECKPOINT C** — Luan demo UX

## Phase 3 — Nội dung gated
- [ ] **T3.1** Verify round-trip `/feed.json` (guest 401 + loginUrl → member sau login)
- [ ] **T3.2** `repos/[slug].astro`: xóa block chết `{false && (...)}` + returnTo về đúng repo
- [ ] **✅ CHECKPOINT D**

## Phase 4 — Hardening
- [ ] **T4.1** Rate-limit `google/start`, `google/callback`, `events` (KV counter theo ipHash; 429)
- [ ] **T4.2** Security review `tasks/security-review.md` (cookie, state, safeReturnTo, no-secret-logging, email_verified)
- [ ] **✅ CHECKPOINT E**

## Phase 5 — Test, QA, Doc
- [ ] **T5.1** Unit test `tests/auth.unit.test.mjs` (≥8 case, `node --test` xanh)
- [ ] **T5.2** Integration smoke test (me/feed/events/login-404) qua `wrangler pages dev`
- [ ] **T5.3** Runbook `MEMBERSHIP.md` + QA checklist tay + rollback
- [ ] **✅ CHECKPOINT F** — Luan go/no-go ship (test xanh, QA pass, secrets prod set, redirect URI prod)

---

### Ngoài phạm vi (không làm)
- [ ] ~~Quên mật khẩu / xác minh email~~ (không cần với Google-only)
- [ ] ~~Email/password auth~~ (đã gỡ; còn trong git history)
- [ ] ~~Multi-provider / xóa tài khoản / role nâng cao~~
