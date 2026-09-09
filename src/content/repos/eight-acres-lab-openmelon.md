---
name: "OpenMelon"
repoUrl: "https://github.com/eight-acres-lab/openmelon"
oneLiner: "OpenMelon là một 'trợ lý làm nội dung' chạy trong terminal: mỗi dự án giữ nhân vật, ảnh tham chiếu và ảnh đã tạo trên máy, rồi để AI dựng ảnh mới bám theo đúng nhân vật cũ qua nhiều lần."
media: []

vertical: ["creative", "agency"]

maturity: "pre-viral"
repoStats:
  stars: 84
  forks: 10
  note: "~73 ngày tuổi, ~1.2 sao/ngày"
  starsPerDay: 1.2
  ageDays: 73
  pushedAt: 2026-05-11T13:28:51Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "README mô tả một agent tạo nội dung chạy trong terminal (TUI), mỗi dự án lưu nhân vật, ảnh tham chiếu và asset ngay trên ổ đĩa."
  - "Điểm nhấn là giữ nhân vật nhất quán: khi tạo ảnh, agent tự kéo ảnh chân dung nhân vật làm reference cho model ảnh."
  - "Có provenance rõ ràng: mỗi ảnh có sha256, mỗi phiên làm việc lưu transcript và asset để tái tạo lại về sau."
  - "Là binary Go cài qua npm hoặc go install; hỗ trợ OpenRouter/OpenAI/Anthropic và có chế độ headless `openmelon -p` để ghép vào Claude Code/Cursor."
  - "Bash tool được gate theo quyền (strict/auto/trusted) với LLM đóng vai người duyệt lệnh."
signalSources:
  - label: "GitHub"
    url: "https://github.com/eight-acres-lab/openmelon"

useCases:
  - "Tạo loạt ảnh nội dung giữ nhân vật hoặc mascot thương hiệu nhất quán qua nhiều lần generate, dựa trên ảnh chân dung tham chiếu."
  - "Dựng một kho nhân vật, ảnh tham chiếu bối cảnh và asset cho từng dự án, quản lý gọn ngay trong terminal."
  - "Chạy một phiên làm việc AI có lưu vết (session + sha256) để tái tạo lại kết quả cũ hoặc kiểm tra ảnh nào tạo từ prompt nào."
  - "Ghép vào Claude Code hoặc Cursor qua chế độ headless để gọi như một sub-agent chuyên tạo ảnh."

workflowStepReplaced: "Khâu prompt thủ công và quản lý nhân vật/asset rời rạc khi làm nội dung hình ảnh hàng loạt (mỗi lần lại phải mô tả lại nhân vật cho model)."
timeOrCostSaved: "Tiết kiệm thời gian mô tả lại nhân vật và gom asset qua từng lần tạo ảnh; mức tiết kiệm thật phụ thuộc khối lượng nội dung và chi phí API model ảnh bạn dùng."
localProblem: "Ekip content và người làm truyện tranh/mascot ở Việt Nam hay bị lệch nhân vật giữa các ảnh AI: cùng một nhân vật nhưng mỗi lần generate lại ra mặt khác, quần áo khác, khó dùng cho series bài hoặc bộ ảnh sản phẩm có người mẫu cố định."
localEvidence: "Nhu cầu giữ nhân vật nhất quán khi tạo ảnh AI (character consistency) đang là điểm đau rõ với người làm truyện, mascot, KOL ảo và series content. OpenMelon đáng chú ý vì đóng gói phần này thành quy trình có kho nhân vật + reference, nhưng repo còn nhỏ (84 sao) và cần Luan thử thật một phiên trước khi khuyên dùng."

vnMarket:
  insight: "Ở Việt Nam, dân creative/agency đang chủ yếu giữ nhân vật nhất quán bằng tay: lưu prompt seed, tự đính kèm ảnh reference mỗi lần chạy Midjourney/Nano Banana/ComfyUI, hoặc train LoRA riêng. Chưa nhiều người dùng một agent terminal có kho nhân vật + provenance như OpenMelon; rào cản là thói quen dùng UI đồ hoạ và ngại thao tác dòng lệnh."
  seoKeywords: ["giữ nhân vật nhất quán AI", "character consistency AI", "tạo ảnh nhân vật cố định", "AI làm truyện tranh nhân vật", "agent tạo nội dung terminal"]
  notes: "Từ khoá suy từ điểm đau character consistency mà người Việt hay gặp khi tạo ảnh AI. Chưa kiểm tra cộng đồng Việt riêng cho OpenMelon; độ chắc chắn trung bình-thấp."

usabilityRisk: "Đây là công cụ dòng lệnh (TUI Go), không có giao diện đồ hoạ, nên hợp người quen terminal hơn là người làm content thuần. Cần tự cắm API key (OpenRouter/OpenAI/Anthropic) và chịu chi phí model ảnh. Repo mới, ít sao, lần push gần nhất cách khá lâu (giữa tháng 5), chưa có cộng đồng Việt."

practitionerGuide:
  outcome: "Bạn tạo được một dự án OpenMelon, khai báo một nhân vật kèm ảnh chân dung, rồi generate vài ảnh giữ đúng nhân vật đó để tự đánh giá mức độ nhất quán."
  prerequisites:
    - "Máy cài được Node.js (npm) hoặc Go, và biết chạy lệnh trong terminal."
    - "Một API key có quyền gọi model ảnh: OpenRouter, OpenAI hoặc Anthropic."
    - "Vài ảnh chân dung/tham chiếu của nhân vật bạn muốn giữ nhất quán."
  steps:
    - "Cài bằng `npm i -g @e8s/openmelon @e8s/skillplus` (hoặc build từ Go theo README)."
    - "Vào thư mục dự án, chạy `openmelon` và đi qua bước trust → nhập API key → chọn LLM → chọn model ảnh → init dự án."
    - "Thêm nhân vật bằng `openmelon character add <slug>` kèm ảnh chân dung để làm reference."
    - "Trong TUI, nhập ý tưởng cảnh có nhân vật đó; để agent tự kéo ảnh reference và gọi generate_image."
    - "So sánh vài ảnh sinh ra xem nhân vật có giữ nhất quán không, và dùng save_artifact để chốt ảnh đạt."
  expectedResult: "Kết quả đạt là nhân vật giữ được nét cơ bản (khuôn mặt, kiểu tóc, trang phục) qua nhiều ảnh, và bạn tái tạo lại được ảnh cũ nhờ session/provenance."
  commonPitfalls:
    - "Kỳ vọng giao diện bấm-kéo như app đồ hoạ rồi bỏ cuộc vì đây là công cụ terminal."
    - "Quên rằng chất lượng nhân vật nhất quán phụ thuộc model ảnh phía sau (OpenRouter/OpenAI), không phải bản thân OpenMelon."
    - "Bật chế độ bash 'trusted' cho dự án quan trọng — nên giữ strict/auto vì agent có thể chạy lệnh shell."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: cách giữ nhân vật/mascot nhất quán khi làm series ảnh AI, và vì sao một agent có kho nhân vật + provenance khác gì so với dán reference bằng tay mỗi lần."
paidToolReplaced: "Thay một phần cách giữ nhân vật nhất quán trả phí như Midjourney Character Reference hoặc các app tạo nội dung có nhân vật cố định, bằng agent tự host cắm API key riêng."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI tóm tắt được README, nhưng góc thực dụng (giữ nhân vật nhất quán cho content Việt, đánh đổi terminal vs UI, chi phí model ảnh) cần người thử thật một phiên mới rút ra được."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 12
  costAdvantage: 13
  deployment: 8
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-07
nextReviewDueAt: 2026-10-05

tags: ["ai", "creative", "image-generation", "agent", "character-consistency", "cli"]
publishedAt: 2026-07-07
week: "2026-W28"
draft: true
---

Draft foundation từ hàng đợi discovery ngày 2026-07-07. Repo nhỏ (84 sao) và push gần nhất giữa tháng 5, nên trạng thái để pre-viral. Cần Luan chạy thử một phiên tạo ảnh giữ nhân vật thật trước khi nâng confidence; đặc biệt kiểm tra mức nhất quán nhân vật thực tế (phụ thuộc model ảnh) và độ ma sát của giao diện terminal với người làm content không rành dòng lệnh.
