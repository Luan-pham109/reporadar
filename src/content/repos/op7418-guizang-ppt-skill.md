---
name: "Guizang PPT Skill"
repoUrl: "https://github.com/op7418/guizang-ppt-skill"
oneLiner: "Guizang PPT Skill giúp Claude Code/Codex dựng nhanh một deck HTML nhìn chỉn chu, theo phong cách editorial magazine hoặc Swiss design, kèm gợi ý ảnh, cover social và màn trình chiếu."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/5dc316a2-401c-4e37-9123-ea081b6ae470"
    caption: "Ví dụ deck HTML do Guizang PPT Skill tạo."
  - type: "image"
    url: "https://github.com/user-attachments/assets/8960e78c-69bb-4b7e-aa95-6fad64b70314"
    caption: "Ví dụ layout trình chiếu."
  - type: "image"
    url: "https://github.com/user-attachments/assets/5b0c22c8-aff4-4219-900d-6af8604c57a8"
    caption: "Ví dụ phong cách visual / cover."

vertical: ["creative", "agency"]

maturity: "established"
repoStats:
  stars: 19083
  forks: 1389
  note: "~64 ngày tuổi, ~298.2 sao/ngày"
standoutFeatures:
  - "Tạo single-file HTML slide deck cho agent environment như Claude Code và Codex."
  - "Có nhiều hướng layout như editorial magazine, Swiss design, social cover và image prompt."
  - "Nhắm thẳng vào cách làm presentation bằng AI agent thay vì chỉ xuất PPT truyền thống."
  - "Tốc độ tăng sao rất mạnh, phản ánh nhu cầu biến agent thành designer slide."
signalSources:
  - label: "GitHub"
    url: "https://github.com/op7418/guizang-ppt-skill"

useCases:
  - "Biến outline thành deck HTML có bố cục rõ ràng để pitch nội bộ hoặc demo ý tưởng cho khách."
  - "Tạo nhanh cover, social card và visual direction cho một proposal trước khi designer polish."
  - "Dựng slide kiểu magazine/Swiss để tránh cảm giác template PowerPoint cũ."
  - "Cho Codex/Claude Code sản xuất deck một file, dễ gửi, dễ review và dễ chỉnh trong code."

workflowStepReplaced: "Khâu lên layout slide và tạo bản deck nháp từ outline nội dung."
timeOrCostSaved: "Có thể rút ngắn vòng làm slide nháp từ vài giờ xuống một lượt chạy AI, nhưng vẫn cần người biên tập nội dung và kiểm brand."
localProblem: "Agency, consultant và founder Việt thường phải làm proposal/deck nhanh, nhưng mất thời gian ở phần bố cục và polish cho tử tế. Skill này hợp để tạo bản nháp đẹp trước khi chỉnh theo brand."
localEvidence: "Nhu cầu 'AI làm slide', 'tạo PPT bằng AI' và deck proposal ở Việt Nam có thật. Riêng nội dung tiếng Việt quanh Guizang PPT Skill vẫn cần kiểm thêm."

vnMarket:
  insight: "Giá trị ở VN không nằm ở chuyện 'AI tạo slide' chung chung, mà ở việc tạo deck HTML có gu để agency/freelancer dùng làm bản nháp pitch. Người dùng vẫn cần sửa thông điệp, số liệu và nhận diện thương hiệu."
  seoKeywords: ["AI làm slide", "tạo PPT bằng AI", "AI làm proposal", "tạo slide tự động", "HTML presentation", "Codex làm slide"]
  notes: "Suy luận từ README và nhu cầu deck/proposal. Cần kiểm Google/YouTube tiếng Việt nếu chuẩn bị publish."

usabilityRisk: "Đây là skill cho môi trường coding, không phải app PowerPoint kéo thả. Người dùng cần biết cách chạy Claude Code/Codex và chấp nhận chỉnh HTML/CSS khi muốn polish sâu."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một deck HTML nháp đủ đẹp để review nội dung hoặc pitch thử."
  prerequisites:
    - "Một outline 5-10 slide hoặc ít nhất là các ý chính của proposal/deck."
    - "Claude Code hoặc Codex có thể chạy skill và xuất file HTML."
    - "Một người trong team có thể đọc nhanh HTML/CSS nếu cần chỉnh sâu phần layout."
  steps:
    - "Chuẩn bị outline rõ ràng theo từng slide: mở bài, vấn đề, giải pháp, bằng chứng, chốt."
    - "Chọn một phong cách trước khi chạy, ví dụ editorial magazine hay Swiss, để deck không nhảy visual giữa chừng."
    - "Đưa outline vào skill và yêu cầu xuất bản deck HTML đầu tiên thay vì cố hoàn thiện cả brand guideline ngay."
    - "Mở deck đã sinh ra, review logic câu chuyện và bố cục trước; chỉ sửa visual sau khi nội dung đã đúng."
    - "Tinh chỉnh các slide quan trọng như cover, giải pháp và pricing rồi mới quyết định có chuyển cho designer polish."
  expectedResult: "Bạn có một bản deck xem được từ đầu tới cuối, đủ để nội bộ phản hồi hoặc mang đi demo sớm."
  commonPitfalls:
    - "Thiếu outline rõ nên tool phải tự đoán câu chuyện và deck ra đẹp nhưng rỗng."
    - "Kỳ vọng đây là PowerPoint kéo thả hoàn chỉnh nên thất vọng khi phải chạm HTML/CSS."
    - "Chỉnh font, màu, animation quá sớm trước khi chốt cấu trúc nội dung."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: tạo bản nháp proposal/deck trong 30 phút bằng Codex, rồi designer chỉ polish brand."
paidToolReplaced: "Gamma / Tome / Canva Docs-to-Deck / một phần việc làm PowerPoint thủ công"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt repo, nhưng góc dùng cho proposal/deck agency Việt và cảnh báo cần biết agent/html là phần cần biên tập."

tags: ["presentation", "deck", "agency", "creative", "codex", "html"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 23
  costAdvantage: 14
  deployment: 3
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-26
nextReviewDueAt: 2026-09-26
publishedAt: 2026-06-26
week: "2026-W26"
draft: false
---

Record nháp foundation. Cần xem demo thật để chọn media đẹp nhất trước khi publish.
