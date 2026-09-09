---
name: "Viết Agent (writing-agent)"
repoUrl: "https://github.com/dongbeixiaohuo/writing-agent"
oneLiner: "Viết Agent là quy trình viết bài dài chạy trong Claude Code: đi qua từng bước chọn lập trường, đào dẫn chứng, viết nháp, biên tập và khử giọng AI, kèm một cổng fact-check trước khi cho bài xuất bản."
media: []

vertical: ["agency"]

maturity: "rising"
repoStats:
  stars: 407
  forks: 64
  note: "~262 ngày tuổi, ~1.6 sao/ngày"
  starsPerDay: 1.6
  ageDays: 262
  pushedAt: "2026-09-07T05:47:39Z"
  archived: false
  openIssues: 2
standoutFeatures:
  - "Quy trình nhiều bước (chọn đề tài/lập trường → đào dẫn chứng → dàn ý → viết nháp → biên tập → khử giọng AI → cổng fact-check) thay vì một prompt tổng ra cả bài."
  - "Bản v0.7.8 thêm 'sổ chứng cứ' bắt buộc: mọi số liệu, tên người, tên tổ chức trong bài phải gắn nguồn, và một bước fact-check chặn xuất bản nếu phát hiện dữ kiện mâu thuẫn hoặc không có nguồn."
  - "Chạy được với các model giá rẻ tương thích Anthropic API như DeepSeek-V3.2, Zhipu GLM, MiniMax — không bắt buộc phải có tài khoản Claude chính thức."
  - "Có sẵn một demo đầy đủ: toàn bộ file trung gian của một bài viết thật, từ chọn đề tài tới bản xuất bản cuối, để xem trước khi chạy đề tài của bạn."
signalSources:
  - label: "GitHub"
    url: "https://github.com/dongbeixiaohuo/writing-agent"

useCases:
  - "Chạy một bài dài qua nhiều bước có kiểm chứng — chọn lập trường, đào dẫn chứng, viết nháp, biên tập, khử giọng AI, fact-check — thay vì thả một prompt và cầu may."
  - "Kiểm tra từng con số, tên người, tên tổ chức trong bài AI viết ra bằng sổ chứng cứ bắt buộc, tránh đăng bài rồi bị bắt lỗi bịa dữ kiện."
  - "Chạy thử cả pipeline với model giá rẻ như DeepSeek-V3.2 trước khi quyết định đầu tư gói dùng dài hạn."
  - "Xuất bài dưới dạng văn bản sạch để đăng ngay, hoặc thêm bản HTML đã lên khuôn cho bài đăng công chúng."
  - "Dùng bộ demo có sẵn (một bài thật chạy hết quy trình) làm mẫu đào tạo nhanh cho copywriter mới trong team."

workflowStepReplaced: "Khâu tự lên dàn ý - viết nháp - biên tập - soát giọng AI cho bài dài (blog, bài quan điểm, PR): thay một prompt tổng bằng quy trình nhiều bước có chứng cứ và cổng fact-check."
timeOrCostSaved: "Không thay hẳn một SaaS cụ thể; tiết kiệm chủ yếu ở công sửa tay do giọng AI lộ liễu và công tự kiểm chứng số liệu. Chạy thử một bài đầy đủ với model rẻ như DeepSeek-V3.2 có thể chỉ tốn vài chục nghìn đồng."
localProblem: "Agency và freelancer viết content Việt làm bài dài bằng AI (blog, bài quan điểm, bài PR) thường bị chê 'đọc là biết AI viết' — câu sáo, không góc nhìn cá nhân, không dẫn chứng thật. Viết Agent ép AI phải có lập trường, dẫn chứng có nguồn, và một bước khử giọng AI + fact-check trước khi giao bài."
localEvidence: "Từ khoá như 'khử giọng AI', 'viết bài không lộ AI', 'AI viết bài tự nhiên như người' đã có nhu cầu tìm kiếm rõ ràng ở VN (nhiều bài so sánh công cụ AI viết content tiếng Việt như Laho AI, Jasper, Copy.ai), nhưng chưa ai viết tiếng Việt về riêng repo writing-agent."

vnMarket:
  insight: "Thị trường VN đã quen công cụ AI viết content 'một phát ra bài' (ChatGPT, Copy.ai, Laho AI...) nhưng đang than phiền bài đọc lộ giọng AI, thiếu góc nhìn cá nhân và không kiểm chứng số liệu. writing-agent khác biệt ở chỗ nó là một QUY TRÌNH nhiều bước chạy trong Claude Code (không phải web app một cú click), có sổ chứng cứ bắt buộc và bước khử giọng + fact-check trước khi xuất bản — đúng insight content lead VN đang tìm ('làm sao AI viết mà không lộ'). Rào cản: cần biết dùng Claude Code/CLI, không phải web app, và toàn bộ README/luồng vận hành bằng tiếng Trung."
  seoKeywords: ["khử giọng AI", "viết bài không lộ AI", "công cụ viết content Claude Code", "AI viết bài chuẩn giọng người", "quy trình viết bài AI nhiều bước", "viết bài fact-check AI"]
  notes: "Verify qua WebSearch 2026-07-02: nhu cầu 'khử giọng AI' và công cụ viết content tiếng Việt rất rõ, nhưng chưa thấy nội dung tiếng Việt nào về riêng repo writing-agent. Cần Luan kiểm thêm nhóm content/agency VN trước khi publish."

usabilityRisk: "Đây không phải web app bấm nút ra bài — bạn phải chạy trong Claude Code (CLI), tự cấu hình model (DeepSeek/GLM/MiniMax hoặc tài khoản Claude) và làm quen với 4 tầng skills/agents/workflows/scripts của repo. Toàn bộ README, demo và log vận hành đều bằng tiếng Trung, phải tự dịch/thử để hiểu luồng. Bản desktop app Windows mới ở preview 0.1.0."

practitionerGuide:
  outcome: "Sau guide này bạn có một bài dài (nháp) chạy qua đủ các bước chọn đề tài, lập trường, dẫn chứng, viết, biên tập, khử giọng AI và fact-check, để so sánh với cách viết AI một phát bạn đang làm."
  prerequisites:
    - "Đã cài Node.js 18+ và Claude Code trên máy."
    - "Một API key model chi phí thấp (DeepSeek-V3.2, Zhipu GLM hoặc MiniMax) hoặc tài khoản Claude Pro/Max."
    - "Sẵn một đề tài bài viết thật (blog, bài quan điểm) để test thay vì đề tài ảo."
  steps:
    - "Clone repo hoặc cài qua plugin marketplace, cấu hình model rồi khởi động `claude` ngay trong thư mục dự án."
    - "Đọc thử demo mẫu trong `demo/` để hiểu từng file giai đoạn (lập trường, dẫn chứng, dàn ý, bản nháp) trước khi chạy đề tài của bạn."
    - "Chạy quy trình với đề tài thật của bạn, để hệ thống tự đi qua các bước lập trường, dẫn chứng, dàn ý, viết nháp."
    - "Khi tới bước fact-check, đọc kỹ những chỗ bị gắn cờ mâu thuẫn hoặc thiếu nguồn — đây là chỗ AI có thể đang bịa, đừng bỏ qua."
    - "Lấy bản văn bản sạch cuối cùng, đọc lại một lượt bằng giọng của bạn trước khi đăng — quy trình giảm giọng AI chứ không thay hoàn toàn biên tập con người."
  expectedResult: "Bạn có một bài dài hoàn chỉnh kèm toàn bộ dấu vết trung gian (lập trường, dẫn chứng, các vòng nháp), đủ để đánh giá quy trình này có đáng thay cách viết hiện tại không."
  commonPitfalls:
    - "Bỏ qua bước fact-check vì nghĩ 'AI viết là xong' — đây là bước bắt lỗi bịa dữ kiện."
    - "Chạy thẳng đề tài phức tạp lần đầu thay vì thử demo có sẵn để hiểu luồng trước."
    - "Kỳ vọng ra bài tiếng Việt tự nhiên hoàn toàn mà không đọc lại — quy trình khử giọng AI nhưng gốc README/logic là tiếng Trung."

greyHatFlag: "in"

suggestedAngle: "Góc creator: 'Thử quy trình viết bài nhiều bước chạy trong Claude Code này để xem có thật sự hết mùi AI không' — dùng chính bài viết thật để test, so sánh trước/sau khử giọng."
paidToolReplaced: "Một phần công ghostwriter/biên tập viên cho bài dài, hoặc các gói AI viết content trả phí theo tháng khi cần bài sâu có kiểm chứng thay vì bài ngắn nhanh"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI/Trending nói được 'có công cụ viết bài bằng Claude Code chống giọng AI', nhưng việc quy trình nhiều bước này có đáng đổi cách viết của agency VN không, cần cấu hình gì, và rủi ro ngôn ngữ/kỹ thuật là phần cần biên tập theo ngữ cảnh VN."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 16
  costAdvantage: 8
  deployment: 6
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-07-02
nextReviewDueAt: 2026-09-30

tags: ["agency", "content", "claude-code", "writing", "ai-writing"]
publishedAt: 2026-07-02
week: "2026-W27"
draft: false
---

Record nháp sinh trong daily pipeline ngày 2026-07-02 (nguồn: github-search, 301 sao). Đã gộp cả 3 tầng hunt/synthesize/edit trong một lượt vì đây là job tự động.

Cần Luan kiểm tay trước khi publish: (1) độ bão hoà nội dung tiếng Việt quanh "khử giọng AI"/công cụ viết content Claude Code, (2) có group content/agency VN nào đã bàn về repo này chưa, (3) xác nhận lại phí thực tế khi chạy DeepSeek-V3.2/GLM/MiniMax cho một bài đầy đủ.
