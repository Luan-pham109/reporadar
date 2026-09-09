---
name: "Social AI Team"
repoUrl: "https://github.com/stevenflanagan1/social-ai-team"
oneLiner: "Social AI Team là một bộ skill Claude Code đóng vai cả một đội social media cho doanh nghiệp nhỏ — từ tìm hiểu thương hiệu, lên lịch nội dung tháng, viết caption riêng cho từng nền tảng, tạo ảnh quảng cáo tới báo cáo hiệu suất cuối tháng."
media: []

vertical: ["agency"]

maturity: "rising"
repoStats:
  stars: 152
  forks: 33
  note: "~107 ngày tuổi, ~1.4 sao/ngày"
  starsPerDay: 1.4
  ageDays: 107
  pushedAt: "2026-05-07T23:01:16Z"
  archived: false
  openIssues: 4
standoutFeatures:
  - "9-10 skill nối tiếp nhau theo đúng quy trình một agency social thật làm: brand onboarding → content calendar → viết caption/LinkedIn/Threads/X riêng biệt → tạo ảnh → lên lịch đăng → review hiệu suất cuối tháng."
  - "Từng skill ghi ra file trung gian (brand-style.md, content-calendar.md, best-performers.md...) để skill sau đọc lại, nên một agency có thể chạy lặp lại quy trình cho nhiều khách hàng mà không mất ngữ cảnh."
  - "Có bước 'pause-and-approve' ở skill điều phối trước khi qua bước tiếp theo, giảm rủi ro agent tự ý đăng bài sai ý khách."
  - "Tách riêng giọng viết cho từng nền tảng và tự đếm ký tự (giới hạn 500 cho Threads, 280 cho X) thay vì dùng chung một mẫu caption cho tất cả."
signalSources:
  - label: "GitHub"
    url: "https://github.com/stevenflanagan1/social-ai-team"

useCases:
  - "Chạy buổi onboarding thương hiệu đầu tiên cho khách mới bằng cách quét website + Instagram của họ, ra một file brand-style dùng chung cho mọi nội dung sau này."
  - "Dựng lịch nội dung một tháng theo đúng tỉ lệ content pillar đã định, thay vì nghĩ ý tưởng từng bài một cách rời rạc."
  - "Viết riêng caption cho LinkedIn, Threads và X từ cùng một lịch nội dung, mỗi nền tảng đúng giọng và đúng giới hạn ký tự của nền tảng đó."
  - "Tạo ảnh mạng xã hội bám đúng brand — kể cả ghép ảnh sản phẩm thật của khách vào bối cảnh AI dựng, hoặc dựng chuỗi 6 khung stop-motion xuất ra video ngắn."
  - "Làm báo cáo hiệu suất cuối tháng từ file CSV/screenshot khách gửi, chỉ ra bài nào chạy tốt/tệ và vì sao, để tháng sau viết đúng hướng hơn."

workflowStepReplaced: "Một phần việc social media manager phải tự làm tay: brief brand mới, lên lịch nội dung, viết caption riêng từng nền tảng, và tổng hợp báo cáo cuối tháng."
timeOrCostSaved: "README không đưa ra số giờ/tiền cụ thể; lợi ích chính là gộp một chuỗi công việc thường phải làm tay hoặc thuê ngoài từng phần (brand research, content calendar, copywriting đa nền tảng, thiết kế ảnh, báo cáo) vào một bộ skill chạy miễn phí trong Claude Code — phần tạo ảnh và lên lịch tự động vẫn cần thêm MCP trả phí (Nano Banana, Blotato)."
localProblem: "Agency social media nhỏ (2-5 người) ở Việt Nam thường không đủ người để làm hết cả chuỗi: nghiên cứu brand khách mới, lên lịch nội dung tháng, viết caption riêng cho từng nền tảng, thiết kế ảnh, và làm báo cáo cuối tháng — nên hay bỏ bớt bước report hoặc dùng chung một mẫu caption cho mọi nền tảng."
localEvidence: "Chưa tìm thấy bài viết tiếng Việt nhắc trực tiếp tới social-ai-team; bằng chứng gián tiếp là nhiều bài hướng dẫn tiếng Việt về Claude Agent Skills nói chung (AZDIGI, CentriX, viblo.asia) đã nhấn mạnh lợi ích 'tạo bộ nhớ quy trình dùng chung cho cả đội' — đúng vấn đề mà bộ skill này giải quyết cho agency nhỏ."

vnMarket:
  insight: "Nội dung tiếng Việt về Claude Skills nói chung đã khá nhiều, nhưng phần lớn dừng ở mức 'skill là gì, cách tạo skill' — chưa thấy ai review một bộ skill social media hoàn chỉnh theo đúng quy trình agency (onboarding → lịch → caption đa nền tảng → ảnh → đăng → báo cáo) như social-ai-team. Đây có thể là góc khác biệt: viết theo hướng quy trình thật của agency thay vì giới thiệu khái niệm skill."
  seoKeywords: ["claude code cho agency social media", "tạo lịch nội dung mạng xã hội AI", "viết caption đa nền tảng AI", "skill claude code quản lý fanpage", "báo cáo hiệu suất mạng xã hội AI"]
  notes: "Đã tra 'claude code skill quản lý mạng xã hội tiếng Việt', 'claude code agency social media' — chỉ ra nội dung tổng quan về Claude Skills, chưa thấy bài nào review riêng bộ skill này; cần Luan kiểm thêm trong nhóm agency social media VN trước khi khẳng định độ bão hoà."

usabilityRisk: "Repo còn khá non (152 sao, 33 fork, chưa tới 4 tháng tuổi). Phần tạo ảnh và lên lịch tự động phụ thuộc MCP Nano Banana + Blotato — đều là dịch vụ riêng, không tự động có sẵn khi cài skill; phần Stop-Motion cần cài thêm `pip install imageio[ffmpeg]` (cần Python). Nếu không cài các MCP này, bộ skill vẫn chạy được nhưng thiếu phần ảnh và lên lịch tự động. README hoàn toàn tiếng Anh, chưa thấy cộng đồng VN quanh tool."

practitionerGuide:
  outcome: "Sau khi làm theo, bạn có bộ brand-style.md + content-calendar.md đầu tiên cho một khách hàng mẫu, sẵn sàng để viết caption thật."
  prerequisites:
    - "Đã cài Claude Code."
    - "Chạy installer (`install.sh` hoặc `install.bat`) để copy skill vào `~/.claude/skills/`."
    - "Tuỳ chọn: cài MCP Playwright (lấy evidence từ website/Instagram khách) và Nano Banana (tạo ảnh) nếu muốn dùng trọn bộ."
  steps:
    - "Tạo một thư mục riêng cho khách hàng, mở Claude Code trong thư mục đó."
    - "Chạy `/social-media-manager` — vì chưa có brand-style.md, nó sẽ dẫn qua `/brand-onboarding` trước."
    - "Chạy `/content-calendar` để dựng lịch nội dung tháng đầu."
    - "Chạy `/caption-writer` (hoặc `/linkedin-writer`, `/x-writer`...) để ra caption theo từng nền tảng."
    - "Cuối tháng chạy `/social-performance-review` để có báo cáo và cập nhật best-performers.md cho tháng sau."
  expectedResult: "Một bộ file ngữ cảnh (brand-style, content-calendar) và ít nhất một batch caption sẵn sàng đăng — đủ để đánh giá xem quy trình có hợp với cách agency bạn làm việc không."
  commonPitfalls:
    - "Không chạy skill trong đúng thư mục khách hàng, khiến context bị lẫn giữa các khách."
    - "Bỏ qua bước brand-onboarding nên caption ra sai giọng thương hiệu."
    - "Kỳ vọng tool tự đăng bài dù chưa cấu hình Blotato."

greyHatFlag: "in"

suggestedAngle: "Góc cho creator: quay một clip 'chạy /social-media-manager cho một khách hàng mới từ đầu tới lúc ra content calendar tháng đầu' để cho thấy toàn bộ chuỗi điều phối hoạt động."
paidToolReplaced: "Một phần việc các agency nhỏ thường thuê ngoài social media manager hoặc dùng các tool lên lịch/caption AI trả phí (Buffer AI, Later, Ocoya...) — cần thêm MCP Nano Banana/Blotato mới thay được trọn vẹn phần ảnh và lên lịch."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể nói chung chung 'có skill Claude Code cho social media', nhưng việc hiểu đúng chuỗi 9-10 skill nối nhau qua file trung gian, và biết cần MCP nào (Nano Banana, Blotato, Playwright) cho từng bước, đòi hỏi đọc kỹ README — hỏi AI generic sẽ không tự ra được sơ đồ quy trình này."

tags: ["claude-code-skills", "social-media", "agency", "content-calendar", "automation"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 12
  costAdvantage: 8
  deployment: 10
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-04
nextReviewDueAt: 2026-10-02
publishedAt: 2026-07-04
week: "2026-W27"
draft: false
---

Draft foundation sinh trong round pipeline ngày 2026-07-04. Cần Luan kiểm tay việc phụ thuộc MCP Nano Banana/Blotato có phải rào cản lớn với agency VN không, và xác nhận chưa có nội dung tiếng Việt trùng trước khi publish.
