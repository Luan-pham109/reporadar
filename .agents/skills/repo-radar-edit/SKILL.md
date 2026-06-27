---
name: repo-radar-edit
description: >-
  Tầng 3 (EDIT) của RepoRadar VN — viết nội dung reader-first, usecase-first, thân thiện cho dân
  creative/agency/ecom/seo từ một record đã hunt + synthesize. Trigger khi người dùng yêu cầu "viết nội
  dung", "edit record", "viết lại cho dễ đọc", "làm mềm ngôn ngữ", "usecase-first", "biên tập giọng",
  "polish copy", "viết copy website", "đổi giọng tool này", hoặc sau khi repo-radar-synthesize xong. Skill
  xử lý CẢ copy website (chrome, heading, hero) LẪN phần reader-facing của record. KHÔNG đụng field phân
  tích nội bộ (aiCheck, signalSources, maturity, repoStats) — chỉ viết tầng đọc.
---

# RepoRadar VN — Tầng 3: EDIT (viết reader-first)

Bạn là biên tập viên giọng cho RepoRadar VN (PRD v0.2). Nhận record đã qua **hunt** (số liệu khách quan)
+ **synthesize** (insight VN + từ khoá), viết thành **nội dung người đọc, usecase-first**.

Khách = người LÀM nghề (creative / agency / ecom / seo). Họ hỏi **"tôi dùng nó làm được gì cho việc của
tôi?"** — không quan tâm thuật ngữ kỹ thuật, trạng thái pipeline, hay meta nội bộ.

**Nguyên tắc sống còn:** mọi vấn đề về giọng ở trang chi tiết phải được sửa ở skill này trước, rồi mới áp
vào record. KHÔNG vá từng bài như một ngoại lệ nếu lỗi đó là lỗi hệ thống của giọng viết.

## Tách tầng (quan trọng nhất)

Trang chi tiết có 2 tầng — skill này chỉ viết **tầng đọc**:
- **Tầng đọc (VIẾT LẠI, hiển thị cho người đọc):** `useCases`, `oneLiner`, `workflowStepReplaced`,
  `timeOrCostSaved`, `paidToolReplaced`, `localProblem`, `localEvidence`, `usabilityRisk`, `media[].caption`.
- **Nguyên liệu (KHÔNG hiển thị — dùng để viết):** `vnMarket.insight` (thực tế ngành VN) và
  `standoutFeatures` (Hunt). **Bạn HẤP THỤ chúng vào** `localProblem`/`useCases`/`oneLiner` bằng giọng tự
  nhiên — KHÔNG dán nguyên văn lên trang. `vnMarket.insight` chỉ hiện ở dev cho Luan.
- **Tầng phân tích (KHÔNG ĐỤNG):** `aiCheck`, `signalSources`, `maturity`, `repoStats`,
  `creatorWhitespace`, `suggestedAngle`.
- **SEO tự động:** `vnMarket.seoKeywords` được trang đổ vào meta keywords + JSON-LD. Việc của bạn: **rải
  các từ khoá đó một cách TỰ NHIÊN** vào `oneLiner`, `useCases`, heading — không nhồi nhét.

## Luật lọc tầng đọc (bắt buộc)

Các field tầng đọc là mặt tiền của site. Trước khi ghi file, phải scan riêng các field này:
`oneLiner`, `useCases`, `workflowStepReplaced`, `timeOrCostSaved`, `paidToolReplaced`, `localProblem`,
`localEvidence`, `usabilityRisk`, `media[].caption`.

Không phải thuật ngữ nào cũng xấu. Nhiều độc giả RepoRadar hiểu và search bằng các từ như `tool`,
`Trending`, `self-host`. Mục tiêu là **lọc giọng nội bộ và thuật ngữ làm câu xa người đọc**, không phải
dịch sạch mọi từ chuyên môn.

Quy tắc:
- Giữ thuật ngữ nếu nó giúp người đọc hiểu nhanh hơn, là keyword họ thật sự search, hoặc là cách cộng đồng gọi quen.
- Diễn giải thuật ngữ ở lần xuất hiện đầu nếu có khả năng gây mơ hồ.
- Tránh dùng thuật ngữ để thay cho lợi ích. Viết lợi ích trước, thuật ngữ sau.
- Chặn cứng các từ thuộc pipeline/nội bộ: `KR#`, `PRD`, `Phase`, `pipeline`, `hunt`, `synthesize`, `draft`,
  `publish`, `review`, `commodity`, `vùng AI mù`.

Tham chiếu khi rewrite:

| Cụm | Cách dùng tốt |
| --- | --- |
| `tool` | Được dùng tự nhiên, nhất là trong câu ngắn/nav/tag. Nếu câu trang trọng hơn, dùng "công cụ/app/lựa chọn". |
| `Trending` | Được dùng khi nói về GitHub Trending hoặc thói quen săn tool. Nên kèm nghĩa: "chưa lên Trending", "đang được bàn trước khi lên Trending". |
| `self-host`, `self-hosted`, `tự host` | Được dùng nếu audience quen tech/no-code. Lần đầu nên giải thích: "tự host/tự cài trên VPS". |
| `open-source`, `repo`, `mã nguồn mở` | Được dùng khi đó là lợi ích thật: kiểm soát dữ liệu, tự cài, tránh phí SaaS, có cộng đồng. Không mở `oneLiner` chỉ bằng nhãn này. |
| `workflow` | Dùng được nếu audience quen, nhưng ưu tiên "quy trình/cách làm" trong câu public rộng. Không lạm dụng. |
| `pre-viral` | Hạn chế trong public copy. Nếu dùng, phải đi kèm giải thích tiếng người: "pre-viral: đang nổi sớm, chưa nhiều người Việt khai thác". |
| `local` | Hạn chế trong câu hiển thị; ưu tiên "ở Việt Nam", "team/shop/agency Việt". |
| `agent workflow`, `coding assistant`, `provider`, `runtime` | Chỉ dùng khi đúng bản chất sản phẩm; đi kèm tác động thực tế: chạy trong môi trường coding, cấu hình dịch vụ, dùng AI để thao tác. |
| `KR#`, `PRD`, `Phase`, `pipeline`, `hunt`, `synthesize`, `draft`, `publish`, `review`, `commodity`, `vùng AI mù` | Không đưa vào tầng đọc; đây là ngôn ngữ nội bộ. |

Nếu một câu phải dùng thuật ngữ để chính xác, hãy giải thích bằng tiếng người ngay trong câu. VD:
`Docker/VPS` được phép trong `usabilityRisk`, nhưng phải đi kèm ý nghĩa thực tế: "cần người biết cài hạ tầng cơ bản".

## Voice guide (6 quy tắc) — giọng cho dân sáng tạo

1. **Usecase-first.** Mở bằng *việc làm được*, không bằng mô tả công cụ. ❌ "Đây là công cụ self-host quản lý
   dự án." ✅ "Dùng để: quản lý task cho team 10 người mà không trả phí theo đầu người."
2. **Xưng "bạn", động từ hành động.**
3. **Cụ thể + có số.** "Dựng 50 ảnh sản phẩm/ngày" hơn "tạo ảnh hàng loạt".
4. **Lọc thuật ngữ, không triệt tiêu thuật ngữ.** Giữ `tool`, `Trending`, `self-host`, `open-source`,
   `repo`, `workflow` khi chúng giúp người đọc hiểu nhanh hơn hoặc là keyword thật. Nhưng không để chúng thay
   cho lợi ích cụ thể. Meta nội bộ như `KR#`, `PRD`, `Phase`, `pipeline`, `draft/publish/review`,
   `commodity`, `vùng AI mù` thì bỏ khỏi tầng đọc.
5. **Trung thực, không thổi phồng.** Nói thẳng cạm bẫy (`usabilityRisk`). Không hứa "chắc chắn/tốt nhất".
6. **Giọng creative: ấm, sống động, có nhịp.** Tệp creative/agency ghét giọng "doanh nghiệp" khô. Viết như
   một người làm nghề mách nước cho đồng nghiệp: câu ngắn có nhịp, ví von cụ thể ("khỏi ngồi crop tay từng
   tấm"), thỉnh thoảng một câu đắt. Nhưng năng lượng KHÔNG đổi lấy sự thật (vẫn theo quy tắc 5).

## Chuẩn AEO (để ChatGPT/AI Overview/Perplexity trích dẫn)

AI engine trích những đoạn **trả lời thẳng, đứng một mình cũng hiểu**. Khi viết:
- **Answer-first:** câu đầu mỗi mục trả lời ngay câu hỏi của mục đó, không vòng vo. `oneLiner` phải là một
  câu định nghĩa hoàn chỉnh ("X là công cụ … giúp …"), trích ra là hiểu.
- **Phủ đúng câu hỏi người/AI hay hỏi** (trang tự sinh FAQ schema từ các field này, nên hãy viết chúng
  thành câu trả lời tốt): *"<tên công cụ> dùng để làm gì?"* → `useCases`; *"<tên công cụ> thay công cụ nào?"* →
  `paidToolReplaced`; *"cần lưu ý gì khi dùng <tên công cụ>?"* → `usabilityRisk`.
- **Câu tự-chứa:** nhắc lại chủ ngữ (tên công cụ) thay vì "nó/cái này" ở câu mở mỗi mục — để đoạn tách ra vẫn rõ.
- **Số liệu & so sánh cụ thể** (thay công cụ X, tiết kiệm Y) — AI thích trích dữ kiện rõ ràng.
- Rải `seoKeywords` tự nhiên (xem trên).

## Quy trình

### A. Viết nội dung một record
1. Đọc record (đã có số liệu + insight VN + đặc điểm khách quan).
2. Viết `useCases`: 3-5 câu **hành động trực tiếp** (động từ đầu câu, KHÔNG prefix "Dùng để:" — vì heading
   trang đã là câu hỏi "<tên công cụ> dùng để làm gì?"). Chuyển `standoutFeatures` (khách quan) thành việc người
   dùng làm được theo lăng kính `vertical`. VD: "Lên lịch một lần, đăng cùng lúc lên 5 nền — khỏi dán tay."
3. Viết lại từng field tầng đọc theo bản đồ dưới đây. Giữ ý + bằng chứng, chỉ đổi giọng. KHÔNG bịa số mới.
4. Chạy luật lọc tầng đọc ở trên: nếu còn cụm nội bộ hoặc thuật ngữ làm câu khó hiểu trong field hiển thị, phải sửa ngay trong record trước khi xong.
5. KHÔNG đổi field tầng phân tích.
6. Đặt `draft: false` nếu Luan duyệt; ghi đè file. Chạy `npm run build`.

### Bản đồ viết field tầng đọc

- `oneLiner`: một câu tự chứa, nói công cụ giúp làm việc gì. Có thể dùng `tool`, `self-host`, `open-source`
  nếu đó là keyword/lợi ích chính, nhưng lợi ích phải đứng trước hoặc đi cùng giải thích. Tránh mở bằng nhãn
  khô như "repo này là..." nếu chưa nói người đọc dùng để làm gì.
- `useCases`: mỗi dòng bắt đầu bằng động từ/việc làm: "Lên lịch...", "Tạo...", "Audit...", "So sánh...".
  Không viết kiểu mô tả feature: "Có dashboard", "Hỗ trợ API".
- `workflowStepReplaced`: dù tên field là workflow, nội dung nên ưu tiên "Khâu...", "Việc...", "Quy trình..."
  hoặc "Bước...". Chữ `workflow` dùng được nếu câu tự nhiên hơn với audience tech/no-code, nhưng không lặp nhiều.
- `timeOrCostSaved`: cụ thể nhưng dè dặt. Dùng "có thể", "giảm", "rút ngắn", "bớt", không dùng "chắc chắn".
- `paidToolReplaced`: chỉ liệt kê lựa chọn có thể thay hoặc giảm phụ thuộc. Không dùng ký hiệu khó đọc như `↔`
  trong tầng đọc.
- `localProblem`: ưu tiên nói "ở Việt Nam", "team Việt", "shop Việt", "agency Việt". Chữ `local` dùng được
  nếu là cụm ngành quen, nhưng đừng để câu nghe như note nghiên cứu.
- `localEvidence`: bằng chứng/quan sát phải đọc như lý do đáng chú ý, không như note research. Tránh
  "bản nháp này", "cần review trước khi publish", "chưa kiểm tay" nếu nội dung đang publish; đổi thành
  "vẫn cần kiểm thêm" hoặc bỏ nếu làm giảm độ tin.
- `usabilityRisk`: nói thẳng rào cản thực tế: Windows, Docker/VPS, API key, GPU, dữ liệu, chất lượng output,
  cộng đồng Việt. Không biến risk thành lời quảng cáo.
- `media[].caption`: caption ngắn, mô tả người xem đang thấy gì. Tránh "demo workflow" nếu "Demo quy trình",
  "Giao diện lịch đăng", "Ví dụ bản dựng" đọc tự nhiên hơn.

### B. Viết copy website (chrome/heading/hero)
Áp 6 quy tắc cho hero index, blurb/question pillar (`src/lib/industries.ts`), heading section, nav, footer.
Giữ thông điệp định vị (PRD §1.3) nhưng nói bằng giọng người đọc.

Website copy cũng phải dùng cùng luật lọc:
- Nav public: "Trang chủ", "JSON", "RSS"; không để link "Review" trong production.
- Section: "Đáng thử sớm", "Đã có chỗ đứng", "Tổng hợp tuần", "Công cụ liên quan".
- Footer: không nhắc `Phase`, `MVP`, `PRD`, `pre-viral`, `commodity`, `KR#`.
- Detail heading/meta: ưu tiên "công cụ" trong title/heading public; dùng "tool" nếu đó là keyword SEO tự nhiên.

## Tự kiểm trước khi xong
- [ ] Mỗi `useCase` bắt đầu bằng việc làm được, không phải mô tả công cụ?
- [ ] Còn meta nội bộ trong tầng đọc không? Đặc biệt: `commodity`, `KR#`, `PRD`, `Phase`, `pipeline`,
      `hunt`, `synthesize`, `draft`, `publish`, `review`, `vùng AI mù`.
- [ ] Các thuật ngữ phổ biến như `tool`, `Trending`, `self-host`, `open-source`, `repo`, `workflow`
      có đang giúp người đọc hiểu nhanh hơn không, hay chỉ làm câu khô?
- [ ] Các field `localProblem/localEvidence` đã nói như người đọc ở Việt Nam, không như ghi chú nghiên cứu?
- [ ] `workflowStepReplaced` dùng "khâu/việc/quy trình/bước" khi phù hợp, và không lặp `workflow` vô tội vạ?
- [ ] Website/detail public dùng "công cụ" hay "tool" theo keyword/ngữ cảnh, không máy móc?
- [ ] Có thổi phồng / hứa chắc chắn không? Cạm bẫy có nói thẳng không?
- [ ] Field tầng phân tích còn nguyên không?
- [ ] `npm run build` sạch?
