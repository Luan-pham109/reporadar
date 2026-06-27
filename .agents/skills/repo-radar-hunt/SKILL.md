---
name: repo-radar-hunt
description: >-
  Tầng 1 (HUNT) của RepoRadar VN — săn & lập hồ sơ KHÁCH QUAN cho một repo GitHub. Trigger khi người dùng
  dán link GitHub / tên owner-repo và yêu cầu "hunt repo", "soi repo", "săn tool", "lập hồ sơ repo",
  "repo này có ngon không", "bao nhiêu sao bao nhiêu fork", "đặc điểm nổi bật", "tool này đã nổi chưa",
  hoặc khi cần baseline khách quan trước khi nghiên cứu góc Việt. Output = bản nháp record với số liệu +
  đặc điểm + độ chín + media. KHÔNG làm phần keyword/insight VN (đó là repo-radar-synthesize) và KHÔNG
  viết nội dung reader (đó là repo-radar-edit).
---

# RepoRadar VN — Tầng 1: HUNT (khách quan)

Bạn là "thợ săn" của RepoRadar VN (PRD v0.2). Nhiệm vụ: lập **hồ sơ khách quan** cho một repo — *cái này
là gì, đã nổi tới đâu, nổi bật ở điểm nào* — KHÔNG vội phán góc Việt.

**Quan trọng (input Luan vòng 3):** tệp khách rộng → **không chỉ săn tool pre-viral mới nổi**. Repo đã nổi
tiếng (nhiều sao) vẫn rất đáng đưa lên. Đừng loại một tool chỉ vì nó "không còn mới".

## Quy trình

### Bước 0 — Discovery (tuỳ chọn, khi CHƯA có repo cụ thể)
Khi Luan chưa đưa repo nào mà hỏi "tuần này có gì", "tìm tool mới", "săn repo đi" →
chạy khâu auto-discovery để ra danh sách ứng viên (đã loại trùng record đã có):
```
node scripts/discover-repos.mjs --days 7            # tất cả nguồn
node scripts/discover-repos.mjs --vertical seo --json
```
Nguồn: GitHub Search (repo mới + sao, theo chủ đề 4 ngách) + Show HN (Algolia) + subreddit
ngành. Đặt `GITHUB_TOKEN` để khỏi dính 403. Đây CHỈ là phát hiện thô — chọn 1-vài repo
đáng chú ý rồi đi tiếp Bước 1 để lập hồ sơ đầy đủ. KHÔNG bê thẳng output discovery thành record.

### Bước 1 — Số liệu máy (deterministic)
```
node scripts/fetch-signals.mjs <owner/repo hoặc URL> --json
```
Lấy: `stars`, `forks`, `starsPerDay`, `ageDays`, thread HN, post Reddit, và `maturitySuggestion`.
Điền `repoStats` (stars/forks/note) và `signalSources` (link HN/Reddit/PH).

### Bước 2 — Độ chín (`maturity`)
- `pre-viral`: đang được bàn ở HN/Reddit/PH, còn non, chưa lên Trending (đáng đi trước).
- `established`: đã nhiều sao, đã kiểm chứng (đáng dùng dù không mới).
- `rising`: ở giữa.
Dùng `maturitySuggestion` làm gợi ý, nhưng tự quyết dựa trên bối cảnh.

### Bước 3 — Hiểu tool + đặc điểm nổi bật
Đọc README (`WebFetch` trang GitHub). Điền:
- `oneLiner`: 1-2 câu tiếng người, non-tech, tool này giải gì.
- `standoutFeatures`: 2-4 đặc điểm KHÁCH QUAN nổi bật (vì sao đáng để ý). Bỏ marketing fluff.
- `vertical`: ngách nào (creative/agency/ecom/seo) — chọn 1+.
- `paidToolReplaced`: thay tool trả phí nào (nếu có).
- `greyHatFlag`: in / borderline / out (xem bộ lọc IN/OUT bên dưới).
- `tags`: vài tag ngắn.

### Bước 4 — Media (hotlink GitHub)
```
curl -fsSL https://raw.githubusercontent.com/<owner>/<repo>/<main|master>/README.md \
  | grep -oE 'https?://[^ )"'"'"'<>]+' | grep -iE 'user-attachments|githubusercontent|\.(png|jpg|jpeg|gif|mp4|webp)'
```
Chọn 1-3 ảnh/video **demo sản phẩm** (bỏ logo/badge/shields/social icon). Với `user-attachments/assets/<uuid>`
không có đuôi → `curl -I` xem `content-type` để phân loại `image`/`video`. Verify `http=200` trước khi ghi.
Bỏ qua nếu README không có ảnh demo.

### Bước 5 — Ghi nháp record
Tạo `src/content/repos/<slug>.md` (đúng `_template.md` + schema). Điền các field KHÁCH QUAN ở trên.
Với field thuộc tầng sau, để **placeholder rõ ràng** để build vẫn chạy và người sau biết phải làm:
- `localProblem`, `localEvidence`, `vnMarket.insight`: `"⏳ Chờ synthesize"`
- `useCases`: để trống `[]` (edit sẽ viết).
- Bắt buộc: `draft: true`, `publishedAt` hôm nay, `week` dạng `YYYY-Www`.

Chạy `npm run build` (Zod validate). Tóm tắt cho Luan: số liệu, độ chín, đặc điểm nổi bật, và nhắc bước
tiếp theo: **chạy `repo-radar-synthesize`** để nghiên cứu từ khoá + góc Việt.

## Bộ lọc IN/OUT (PRD §2bis)
`in` = đồ sạch; `borderline` = tuỳ khung kể (ghi rõ khung dùng được); `out` = grey-hat (deepfake gán mặt,
nuôi nick, cào data lậu, anti-detect/proxy) → cảnh báo mạnh hoặc khuyên bỏ.

## Tuyệt đối tránh
- Bịa số sao/fork — luôn lấy từ script/API.
- Loại repo chỉ vì "đã nổi, không còn mới" (sai định vị tệp rộng).
- Lấn sang keyword research / insight VN (để `repo-radar-synthesize`).
