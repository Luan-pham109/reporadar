---
name: "Nano Banana Slides Prompter"
repoUrl: "https://github.com/nomie7/nano-banana-slides-prompter"
oneLiner: "Nano Banana Slides Prompter là công cụ web sinh prompt tối ưu để tạo slide bằng AI: bạn nhập nội dung, nó chọn kiểu slide phù hợp và viết prompt cho model ảnh (Nano Banana Pro / Gemini) làm ra từng slide."
media: []

vertical: ["agency", "creative"]

maturity: "pre-viral"
repoStats:
  stars: 71
  forks: 13
  note: "~196 ngày tuổi, ~0.4 sao/ngày"
  starsPerDay: 0.4
  ageDays: 196
  pushedAt: 2026-01-10T21:39:36Z
  archived: false
  openIssues: 2
standoutFeatures:
  - "README mô tả tool sinh prompt cho việc tạo slide bằng AI, với 50+ loại slide theo nội dung (mở đầu, biểu đồ, timeline, so sánh, case study, CTA...)."
  - "Có tính năng Character Presenter: thêm một nhân vật dẫn nhất quán qua các slide với 8 phong cách render (Pixar, Real, Anime, Cartoon...)."
  - "Hỗ trợ trích nội dung từ URL và upload CSV để tạo slide dựa trên dữ liệu."
  - "Stack web React/TypeScript/Vite + backend Bun/Hono, cấu hình được LLM backend (OpenAI, OpenRouter, Ollama...), có Docker Compose và ảnh GHCR sẵn."
  - "Có bản hosted tại slides.jo3.ai và hỗ trợ đa ngôn ngữ (English/中文), quản lý session."
signalSources:
  - label: "GitHub"
    url: "https://github.com/nomie7/nano-banana-slides-prompter"

useCases:
  - "Sinh prompt tối ưu cho công cụ tạo slide bằng AI thay vì tự nghĩ prompt cho từng slide một."
  - "Chọn nhanh trong 50+ loại slide (mở đầu, biểu đồ, quy trình, so sánh, case study, kết luận) hợp với nội dung đang có."
  - "Thêm một nhân vật dẫn nhất quán qua cả bộ slide với 8 phong cách render."
  - "Dán URL bài viết hoặc upload CSV để tự dựng nội dung slide theo dữ liệu."

workflowStepReplaced: "Khâu nghĩ prompt và bố cục cho từng slide khi tạo bộ slide bằng AI — thay bằng prompt đã tối ưu theo loại slide."
timeOrCostSaved: "Rút ngắn thời gian viết prompt cho từng slide và chọn layout; giá trị thật phụ thuộc bạn dùng model ảnh/slide nào phía sau và chi phí API tương ứng."
localProblem: "Người làm agency, marketing và giảng viên ở Việt Nam thường mất nhiều thời gian dựng slide đẹp; khi thử tạo slide bằng AI thì lại bí ở khâu viết prompt sao cho ra layout và phong cách nhất quán cho cả bộ."
localEvidence: "Xu hướng tạo slide bằng AI (Gamma, Nano Banana, Kimi Slides) đang được dân marketing/agency Việt thử nhiều, nhưng chất lượng phụ thuộc lớn vào prompt. Tool này gom sẵn 50+ kiểu slide và prompt mẫu, tuy nhiên repo push gần nhất từ tháng 1 nên cần Luan kiểm tra còn chạy tốt với model hiện tại không."

vnMarket:
  insight: "Thị trường Việt đang bùng nổ nhu cầu 'làm slide bằng AI' cho pitch, báo cáo và bài giảng; nhiều người dùng thẳng Gamma/Canva AI hoặc các công cụ tạo ảnh slide. Điểm nghẽn không phải công cụ mà là prompt: viết prompt tốt cho từng loại slide và giữ phong cách đồng bộ. Một thư viện prompt + bộ chọn loại slide đúng là mảng còn ít người Việt làm bài bản."
  seoKeywords: ["tạo slide bằng AI", "prompt tạo slide AI", "làm powerpoint bằng AI", "prompt Nano Banana slide", "AI tạo bài thuyết trình"]
  notes: "Từ khoá suy từ cách người Việt gọi nhu cầu tạo slide/thuyết trình bằng AI. Chưa kiểm tra cộng đồng Việt riêng cho repo này; độ chắc chắn trung bình-thấp."

usabilityRisk: "Tool sinh prompt chứ không tự xuất ra file slide hoàn chỉnh — bạn vẫn cần một công cụ tạo slide/ảnh AI ở cuối chuỗi. Muốn tự host thì phải chạy Node/Bun hoặc Docker và cắm API key OpenAI-compatible. Repo nhỏ (71 sao), push gần nhất từ tháng 1/2026, chưa có cộng đồng Việt; nên coi là công cụ hỗ trợ prompt, không phải nền tảng slide trọn gói."

practitionerGuide:
  outcome: "Bạn nhập một chủ đề/nội dung và nhận về bộ prompt theo từng loại slide, thử dán sang một công cụ tạo slide-ảnh AI để xem chất lượng đầu ra."
  prerequisites:
    - "Dùng bản hosted (slides.jo3.ai) hoặc tự chạy: cần Node.js 18+, Bun và một API key OpenAI-compatible."
    - "Một công cụ tạo slide/ảnh AI ở cuối chuỗi (Nano Banana Pro / Gemini image / công cụ tương thích) để nhận prompt."
    - "Nội dung nguồn: chủ đề, dàn ý, URL bài viết hoặc file CSV nếu muốn slide theo dữ liệu."
  steps:
    - "Mở bản hosted hoặc cài local theo README (npm install + cd server && bun install), cấu hình LLM trong file .env."
    - "Nhập chủ đề/nội dung, hoặc dán URL / upload CSV để tool phân tích và chọn loại slide."
    - "Chọn phong cách và (tuỳ chọn) bật Character Presenter với phong cách render mong muốn."
    - "Copy prompt từng slide và dán vào công cụ tạo ảnh/slide AI bạn dùng."
    - "So sánh vài slide đầu ra, chỉnh nội dung nguồn hoặc phong cách rồi lặp lại tới khi đạt."
  expectedResult: "Kết quả đạt là bộ prompt rõ ràng theo từng loại slide, và khi đưa qua model ảnh cho ra slide có bố cục và phong cách tương đối đồng bộ để dùng làm nháp."
  commonPitfalls:
    - "Tưởng tool tự xuất ra PPTX/slide hoàn chỉnh, trong khi nó chỉ sinh prompt."
    - "Chất lượng slide phụ thuộc model ảnh phía sau; prompt tốt vẫn có thể ra ảnh lệch chữ tiếng Việt."
    - "Repo lâu chưa cập nhật — cần kiểm tra prompt còn hợp với phiên bản model hiện tại không."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: quy trình tạo slide bằng AI cho dân marketing Việt, trong đó khâu prompt là mấu chốt, và một thư viện 50+ kiểu slide giúp gì so với gõ prompt tay."
paidToolReplaced: "Thay một phần khâu viết prompt/dựng bố cục khi dùng công cụ tạo slide AI trả phí (Gamma, Beautiful.ai, Tome), bằng bộ prompt mã nguồn mở tự host được."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được tool, nhưng góc thực dụng (chất lượng slide thực tế với chữ tiếng Việt, tool chỉ sinh prompt nên cần công cụ cuối chuỗi, repo lâu chưa update) cần người thử mới nói chắc được."

scoreBreakdown:
  useCaseFit: 16
  projectHealth: 8
  costAdvantage: 12
  deployment: 9
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-07
nextReviewDueAt: 2026-10-05

tags: ["ai", "slides", "prompt-engineering", "presentation", "nano-banana", "gemini"]
publishedAt: 2026-07-07
week: "2026-W28"
draft: false
---

Draft foundation từ hàng đợi discovery ngày 2026-07-07. Repo nhỏ (71 sao) và push gần nhất từ 2026-01-10 nên projectHealth thấp và để pre-viral. Lưu ý quan trọng cho Luan: đây là công cụ SINH PROMPT, không tự xuất slide hoàn chỉnh — cần một model tạo ảnh/slide ở cuối chuỗi. Cần test chất lượng đầu ra với chữ tiếng Việt và kiểm tra repo còn tương thích model hiện tại trước khi nâng confidence.
