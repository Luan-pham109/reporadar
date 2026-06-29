---
name: repo-radar-synthesize
description: >-
  Tầng 2 (SYNTHESIZE) của RepoRadar VN — reflect một repo đã hunt với người dùng Việt: query fan-out +
  keyword research để tìm từ khoá họ sẽ search, rồi rút ra insight thực tế ngành VN. Trigger khi người
  dùng yêu cầu "synthesize", "nghiên cứu từ khoá", "keyword research", "query fan-out", "góc Việt cho
  repo này", "người Việt sẽ tìm bằng từ khoá gì", "insight ngành VN", "độ bão hoà VN", hoặc sau khi
  repo-radar-hunt tạo nháp khách quan. Output = điền vnMarket (insight + seoKeywords), localProblem,
  usabilityRisk, suggestedAngle, aiCheck. KHÔNG làm hồ sơ khách quan (repo-radar-hunt) và KHÔNG viết nội
  dung reader (repo-radar-edit).
---

# RepoRadar VN — Tầng 2: SYNTHESIZE (reflect với người Việt)

Bạn nhận một record đã **hunt** (số liệu + đặc điểm khách quan đã có) và **chiếu nó qua lăng kính người
dùng Việt**. Đây là tầng tạo moat: *góc Việt + từ khoá* — phần Trending/AI hỏi-lạnh không cho được.

Với repo đã `established` (đã nổi), bản thân tool không còn là tin mới → **moat dồn hết vào tầng này**
(insight ngành VN + từ khoá SEO).

## Quy trình

### Bước 1 — Query fan-out (brainstorm cách người Việt mô tả/tìm)
Từ `oneLiner` + `standoutFeatures` + `vertical`, liệt kê **nhiều cách khác nhau** một practitioner Việt sẽ
gọi tên / tìm kiếm việc mà tool này giải. Bám 4 lăng kính (xem `src/lib/industries.ts`). Ví dụ một tool ảnh
sản phẩm: "chụp ảnh sản phẩm AI", "tạo ảnh model mặc đồ", "xoá phông sản phẩm", "ảnh sản phẩm cho shop"...
→ ra danh sách truy vấn hạt giống.

### Bước 2 — Keyword research (verify bằng web)
Dùng `WebSearch` (và `WebFetch` khi cần) với các truy vấn tiếng Việt ở Bước 1 + biến thể:
- `"<tên tool>" tiếng Việt` / `hướng dẫn "<tên tool>"` / `"<tên tool>" review`
- các truy vấn hạt giống theo bài toán + ngách
- `<tên tool> site:youtube.com` (lọc kênh Việt)

Mục tiêu: (a) từ khoá người Việt THỰC SỰ gõ; (b) đã có ai làm nội dung tiếng Việt chưa (độ bão hoà).

### Bước 3 — Điền các field tầng synthesize (thay placeholder của Hunt)
- `vnMarket.insight`: ngành VN đang THỰC SỰ làm gì quanh bài toán này (hành vi, công cụ/giá hiện tại).
  ⚠ Đây là **NGUYÊN LIỆU viết, KHÔNG hiển thị cho người đọc** (chỉ hiện ở dev) — `repo-radar-edit` sẽ hấp
  thụ nó vào `localProblem`/`useCases`. Viết để người viết hiểu, không cần lo giọng.
- `vnMarket.seoKeywords`: từ khoá tiếng Việt đã verify (từ Bước 2) — trang tự đổ vào meta keywords + JSON-LD
  (KR#6). Liệt kê từ khoá thật, không bịa.
- `vnMarket.notes`: đã tìm ở đâu, độ chắc chắn.
- `localProblem` + `localEvidence`: nỗi đau CỤ THỂ của shop/ekip/team VN nào + bằng chứng thật.
- `usabilityRisk`: cạm bẫy cho người Việt — Windows? GPU? khó cài? CHƯA có cộng đồng VN?
- `creatorWhitespace`: creator còn đất viết không (nhánh khuếch đại).
- `suggestedAngle`: góc cho creator khuếch đại.
- `aiCheck`: practitioner có tự lấy được info này từ Trending/hỏi AI không? (KR#5).

> Trung thực: thiếu dữ liệu thì ghi rõ trong `notes` "cần Luan kiểm tay ở group X", đừng bịa từ khoá hay
> "ngành VN đang làm Y".

### Bước 4 — Signal Score (phần Synthesize phụ trách)
Điền vào record sau khi đã hiểu bài toán VN:

**`scoreBreakdown.costAdvantage`** (0–20):
| Điểm | Tiêu chí |
|---|---|
| 20 | Thay rõ 1 SaaS trả phí (`paidToolReplaced`) + `timeOrCostSaved` có số/tiền |
| 14 | Thay tool phí nhưng mức tiết kiệm mơ hồ |
| 8 | Lợi ích chi phí gián tiếp |
| 0 | Không phải bản thay free đáng kể |

**`evidenceLevel`** (chọn 1):
- `"B"` — đã review public signal đầy đủ (GitHub + HN/Reddit + community VN + bài viết ngoài). Mặc định cho record đã synthesize kỹ.
- `"C"` — mới ở mức discovery, chưa đủ dữ liệu community. Dùng khi signal yếu/mỏng.
- `"D"` — chỉ tuyên bố của tác giả tool, chưa kiểm chứng.

**`confidence`** (chọn 1):
- `"high"` — dữ liệu chắc, nhiều nguồn độc lập.
- `"medium"` — đủ tin nhưng vài điểm suy luận.
- `"low"` — mỏng, cần review lại sớm.

### Bước 5 — Build
Chạy `npm run build`. Tóm tắt: từ khoá chính tìm được, insight ngành, độ bão hoà, costAdvantage chấm, evidenceLevel/confidence, và nhắc bước cuối:
**chạy `repo-radar-edit`** để viết nội dung reader-first + hoàn thiện điểm còn lại.

## Tuyệt đối tránh
- Bịa từ khoá / "creator Việt X đã viết" mà chưa verify.
- Đụng số liệu khách quan (stars/forks/standoutFeatures) — đó là của Hunt.
- Viết copy reader (để `repo-radar-edit`).
