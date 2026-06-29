# Hướng dẫn chuẩn bị (Luan) — trước khi junior bắt đầu

Bạn cần chuẩn bị **2 thứ credentials**. Đây là blocker của Phase 0. Làm xong dán kết quả vào mục "Bàn giao cho junior" ở cuối.

> Quy ước: thứ **bí mật** (secret) thì gửi junior qua kênh riêng (1Password / tin nhắn riêng), **không** commit, không dán vào chat nhóm.

---

## A. Cloudflare — tạo KV namespaces (lưu user/session/analytics)

**Cần:** một tài khoản Cloudflare có quyền tạo KV + (về sau) deploy Pages cho project này.

### Bước
1. Cài & đăng nhập wrangler (1 lần):
   ```
   npm i -g wrangler        # hoặc dùng npx
   npx wrangler login        # mở trình duyệt, đăng nhập Cloudflare
   ```
2. Tạo 4 namespace (prod + preview cho mỗi cái):
   ```
   npx wrangler kv namespace create AUTH_KV
   npx wrangler kv namespace create AUTH_KV --preview
   npx wrangler kv namespace create ANALYTICS_KV
   npx wrangler kv namespace create ANALYTICS_KV --preview
   ```
3. Mỗi lệnh in ra một `id`. **Chép lại 4 id** theo mẫu:

   | Binding | id (prod) | preview_id |
   |---|---|---|
   | AUTH_KV | `________` | `________` |
   | ANALYTICS_KV | `________` | `________` |

> Nếu bạn **không** muốn tự làm phần này: chỉ cần cấp cho junior quyền vào Cloudflare account (mời làm member trong dashboard), junior tự chạy 4 lệnh trên. KV id **không phải secret**, dán thẳng vào `wrangler.jsonc` được.

---

## B. Google — tạo OAuth Client (để "Login with Google")

**Cần:** một Google account (nên dùng account công ty, không phải cá nhân nếu được).

### Bước (Google Cloud Console)
1. Vào https://console.cloud.google.com → tạo **Project** mới (vd "RepoRadar Auth") hoặc dùng project sẵn.
2. **APIs & Services → OAuth consent screen:**
   - User type: **External**.
   - Điền App name (vd "RepoRadar / AltStack"), support email, developer email.
   - Scopes: thêm `openid`, `.../auth/userinfo.email`, `.../auth/userinfo.profile`.
   - Khi app còn ở chế độ **Testing**: thêm **Test users** = email của bạn + email junior (nếu không sẽ bị chặn lúc thử).
3. **APIs & Services → Credentials → Create credentials → OAuth client ID:**
   - Application type: **Web application**.
   - **Authorized redirect URIs** — thêm CẢ HAI:
     - `http://localhost:8788/api/auth/google/callback`  ← để dev local
     - `https://<DOMAIN-PROD>/api/auth/google/callback`   ← domain thật khi deploy
       (nếu chưa có domain riêng, dùng URL Pages: `https://<project>.pages.dev/api/auth/google/callback`)
4. Bấm Create → nhận **Client ID** và **Client Secret**. Chép lại:

   | Tên | Giá trị |
   |---|---|
   | GOOGLE_CLIENT_ID | `________.apps.googleusercontent.com` |
   | GOOGLE_CLIENT_SECRET | `________` ← **BÍ MẬT** |

> **Client ID** lộ ra ngoài không sao (nó nằm trong URL). **Client Secret** là bí mật — gửi riêng.

---

## C. (Về sau, khi deploy prod) — set secret trên Cloudflare Pages

Phần này làm ở CHECKPOINT F, không cần lúc đầu. Ghi sẵn để khỏi quên:
```
npx wrangler pages secret put GOOGLE_CLIENT_ID
npx wrangler pages secret put GOOGLE_CLIENT_SECRET
npx wrangler pages secret put AUTH_SESSION_TTL_SECONDS   # giá trị: 2592000 (30 ngày)
```
Và nhớ: domain prod thật phải được thêm vào Authorized redirect URIs ở mục B3.

---

## D. Bàn giao cho junior

Khi xong A + B, đưa junior:
- ✅ 4 KV id (bảng mục A) — dán vào `wrangler.jsonc` (T0.1). *Không bí mật.*
- ✅ `GOOGLE_CLIENT_ID` — *không bí mật.*
- 🔒 `GOOGLE_CLIENT_SECRET` — **gửi kênh riêng**, junior để vào `.dev.vars` (file này đã gitignore, T0.2).
- ✅ Xác nhận đã thêm email junior vào **Test users** (mục B2) — nếu không junior sẽ bị Google chặn lúc thử login.
- ✅ Domain prod (nếu đã có) để thêm redirect URI thứ hai.

Junior có 3 thứ trên là chạy được `npm run dev:functions` và test login Google thật ở `localhost:8788`.

---

## Checklist nhanh cho bạn
- [ ] `wrangler login` xong (hoặc đã mời junior vào Cloudflare account)
- [ ] Tạo 4 KV namespace, có đủ 4 id
- [ ] Tạo Google OAuth client (Web app)
- [ ] Thêm 2 redirect URI (localhost:8788 + prod)
- [ ] Thêm test users (email bạn + junior) nếu consent screen ở Testing
- [ ] Gửi junior: 4 KV id + CLIENT_ID (công khai) + CLIENT_SECRET (riêng)
