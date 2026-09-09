---
name: "Needle"
repoUrl: "https://github.com/cactus-compute/needle"
oneLiner: "Needle là mô hình AI chỉ 26 triệu tham số chuyên việc gọi hàm (function/tool calling), nhỏ tới mức chạy được trên thiết bị bé như điện thoại, đồng hồ, kính — chưng cất từ Gemini và finetune ngay tại chỗ trên Mac/PC."
media: []

vertical: ["agency"]

maturity: "pre-viral"
repoStats:
  stars: 2689
  forks: 184
  note: "~136 ngày tuổi, ~19.8 sao/ngày"
  starsPerDay: 19.8
  ageDays: 136
  pushedAt: 2026-07-01T14:26:24Z
  archived: false
  openIssues: 19
standoutFeatures:
  - "Chỉ 26M tham số nhưng chạy on-device rất nhanh (repo nêu ~6000 tok/s prefill, ~1200 tok/s decode qua runtime Cactus); weights mở trên HuggingFace."
  - "Có playground web (needle playground) để test và finetune trên bộ tool của riêng bạn ngay trên máy, kèm cả phần sinh dữ liệu."
  - "Repo nêu vượt FunctionGemma-270m, Qwen-0.6B, LFM2.5-350m... ở single-shot function call, nhưng nhấn mạnh chỉ mạnh single-shot, không giỏi hội thoại."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=48111896"
  - label: "GitHub"
    url: "https://github.com/cactus-compute/needle"

useCases:
  - "Thêm khả năng 'câu lệnh → gọi đúng hàm' vào ứng dụng chạy on-device mà không cần gọi LLM đám mây cho mỗi thao tác."
  - "Finetune một mô hình gọi hàm riêng cho bộ công cụ/sản phẩm của bạn chỉ với vài trăm mẫu dữ liệu, ngay trên Mac/PC."
  - "Thử nghiệm tính năng điều khiển bằng ngôn ngữ tự nhiên (bật/tắt, tra cứu) cho thiết bị nhỏ, nơi mô hình lớn không chạy nổi."

workflowStepReplaced: "Khâu gọi một LLM đám mây (tốn phí, cần mạng) chỉ để chuyển một câu lệnh người dùng thành một lời gọi hàm."
timeOrCostSaved: "Bỏ chi phí và độ trễ gọi LLM cloud cho tác vụ function-call đơn giản; đổi lại phải bỏ công finetune và tích hợp on-device."
localProblem: "Đây là công cụ cho dev/team sản phẩm, không cho người làm nội dung. Nhóm liên quan là agency/studio Việt có mảng kỹ thuật muốn nhúng tính năng 'điều khiển bằng lời' vào app on-device mà không phụ thuộc API cloud."
localEvidence: "Show HN đạt ~776 điểm với ~211 bình luận quanh ý tưởng 'tiny AI cho thiết bị nhỏ'; nhưng đây là quan tâm của giới ML/dev, chưa có dấu hiệu nhu cầu từ tệp creative/ecom/seo Việt."

vnMarket:
  insight: "Xu hướng 'AI chạy on-device' đang được giới dev để ý, và một mô hình function-call 26M mở weights là điểm khởi đầu rẻ để thử. Nhưng ở VN đây vẫn là chủ đề kỹ thuật sâu; muốn dùng được cần kỹ năng ML và tích hợp, không phải công cụ dùng ngay."
  seoKeywords: ["AI chạy trên thiết bị", "on-device function calling", "mô hình gọi hàm nhỏ", "tiny AI model", "Needle Cactus Compute"]
  notes: "Fit với 'agency' chỉ ở nhánh kỹ thuật/sản phẩm. Lọt queue vì tín hiệu Show HN. Cần Luan cân nhắc mức độ phù hợp với độc giả. Độ chắc chắn: thấp."

usabilityRisk: "Mô hình chỉ làm single-shot function call, kém trong hội thoại và (theo chính repo) 'có thể khá đỏng đảnh' vì quá nhỏ. Cần biết Python/ML; finetune đòi tối thiểu ~120 mẫu/tool nếu không sẽ overfit. Playground sinh dữ liệu dựa vào Gemini (cần key/kết nối). Chạy on-device thực tế cần tích hợp qua runtime Cactus. Không có cộng đồng Việt và ít liên quan trực tiếp tới creative/ecom/seo."

practitionerGuide:
  outcome: "Bạn chạy thử và finetune một mô hình gọi hàm nhỏ trên bộ tool của mình, xem nó suy ra đúng lời gọi hàm từ câu lệnh hay không."
  prerequisites:
    - "Máy Mac/PC và biết chạy Python; ưu tiên người có nền ML cơ bản."
    - "Bộ định nghĩa tool (schema) và dữ liệu mẫu (khuyến nghị ≥120 mẫu/tool)."
    - "Kết nối/tài khoản Gemini nếu dùng playground để sinh dữ liệu."
  steps:
    - "Clone repo, chạy setup rồi mở needle playground (web UI ở localhost)."
    - "Khai báo bộ tool của bạn và thử vài câu lệnh để xem mô hình gốc gọi hàm ra sao."
    - "Sinh/gom dữ liệu ≥120 mẫu/tool, đa dạng cách diễn đạt câu lệnh."
    - "Finetune bằng needle finetune data.jsonl và đánh giá trên tập test."
    - "Dùng checkpoint tốt nhất để chạy inference thử trên câu lệnh thật."
  expectedResult: "Mô hình trả về đúng tên hàm và tham số cho các câu lệnh trong phạm vi bộ tool đã finetune; sai/đuối khi ra ngoài phạm vi hoặc khi cần hội thoại."
  commonPitfalls:
    - "Finetune với quá ít dữ liệu: metric train đẹp nhưng mô hình không tổng quát hoá."
    - "Kỳ vọng nó trò chuyện như LLM lớn — Needle chỉ mạnh single-shot function call."
    - "Bỏ qua bước tích hợp on-device (Cactus) và tưởng chạy thẳng trên thiết bị là xong."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm nhóm dev/agency với góc 'AI gọi hàm chạy on-device, không tốn API cloud' — kèm cảnh báo giới hạn single-shot."
paidToolReplaced: "Một phần nhu cầu gọi LLM cloud cho tác vụ function-call đơn giản"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Needle, nhưng phần đánh giá thật (giới hạn single-shot, chi phí finetune, có đáng dùng cho team Việt không) là lớp tổng hợp Luan cần kiểm trước khi publish."

scoreBreakdown:
  useCaseFit: 10
  projectHealth: 20
  costAdvantage: 12
  deployment: 7
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-10
nextReviewDueAt: 2026-10-08

tags: ["ai", "on-device", "function-calling", "llm", "edge-ai"]
publishedAt: 2026-07-10
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue (Show HN ~776 điểm). CẢNH BÁO FIT: tool ML/dev, fit yếu với creative/agency/ecom/seo (đặt tạm `vertical: ["agency"]` ở nhánh kỹ thuật). Confidence thấp. Cần Luan xác nhận có nằm trong scope không trước khi publish.
