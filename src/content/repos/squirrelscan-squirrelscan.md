---
name: "SquirrelScan"
repoUrl: "https://github.com/squirrelscan/squirrelscan"
oneLiner: "SquirrelScan là công cụ QA website cho coding agent: quét một site theo hơn 260 quy tắc về SEO, tốc độ, bảo mật, accessibility và mức độ 'thân thiện với AI', rồi trả về báo cáo lỗi cần sửa."
media: []

vertical: ["seo", "agency"]

maturity: "rising"
repoStats:
  stars: 253
  note: "Số sao lấy từ snapshot discovery của pipeline (GitHub API chưa fetch được trong lần soi này, chưa có tuổi repo/sao/ngày)."
standoutFeatures:
  - "Hơn 260 quy tắc audit chia theo ~21 nhóm: SEO, performance, security, accessibility và 'agent experience'."
  - "Có nhóm audit riêng cho mức độ AI-ready (kiểm tra tương thích với GPTBot, Claude-User...), không chỉ SEO truyền thống."
  - "Chạy được trên macOS, Linux, Windows; cài qua npm hoặc script cài sẵn."
  - "Xuất nhiều định dạng báo cáo (JSON, HTML, Markdown, XML, bản tối ưu cho LLM) và có MCP server để gắn vào Cursor / Claude Code / Codex."
signalSources:
  - label: "GitHub"
    url: "https://github.com/squirrelscan/squirrelscan"

useCases:
  - "Quét nhanh một website để lấy danh sách lỗi SEO, tốc độ, bảo mật và accessibility trước khi bàn giao cho khách."
  - "Kiểm tra site có 'AI-ready' chưa: bot của ChatGPT/Claude có crawl và đọc được nội dung không."
  - "Gắn vào Cursor hoặc Claude Code qua MCP để agent tự audit rồi đề xuất fix trong lúc code."
  - "Tạo báo cáo audit định dạng gọn (Markdown/HTML) để đính kèm proposal hoặc report hàng tháng cho client."

workflowStepReplaced: "Khâu audit kỹ thuật website thủ công bằng nhiều tool rời (SEO checklist, kiểm tra tốc độ, kiểm tra accessibility) trước khi bàn giao hoặc pitch."
timeOrCostSaved: "Có thể gom nhiều lượt kiểm tra rời thành một lần quét cho ra báo cáo có cấu trúc; thời gian tiết kiệm tuỳ kích thước site và số hạng mục cần sửa, cần đo lại bằng site thật."
localProblem: "Agency và freelancer SEO/web ở Việt Nam thường phải kiểm tra site bằng nhiều tool rời rạc rồi tổng hợp tay thành báo cáo cho khách. Một CLI quét một lần ra báo cáo đa hạng mục có thể rút ngắn khâu này và tạo bằng chứng để pitch."
localEvidence: "Nhu cầu 'audit website', 'kiểm tra chuẩn SEO', 'tối ưu tốc độ web' vốn phổ biến trong dịch vụ agency Việt; phần 'AI-ready / agent experience' là góc mới chưa nhiều tool tiếng Việt nói tới. Cần Luan xác nhận bằng một lần quét site Việt thật."

vnMarket:
  insight: "Dịch vụ audit website ở Việt Nam đang có nhu cầu ổn định (SEO onpage, tốc độ, chuẩn kỹ thuật), nhưng phần lớn team vẫn ghép nhiều tool và làm báo cáo tay. Điểm mới của SquirrelScan là nhóm audit 'AI-ready' và tích hợp MCP cho coding agent — đúng lúc câu chuyện 'site có được AI đọc/cite không' bắt đầu nóng. Đây có thể là lớp demo năng lực kỹ thuật cho agency."
  seoKeywords: ["audit website", "kiểm tra chuẩn SEO", "công cụ audit SEO", "kiểm tra tốc độ website", "website QA tool", "SEO technical audit", "AI ready website"]
  notes: "Từ khoá audit/technical SEO có tín hiệu rõ ở VN; riêng tool SquirrelScan và góc 'agent experience' chưa thấy bão hoà tiếng Việt. Độ chắc chắn: trung bình-thấp, cần kiểm bằng site thật."

usabilityRisk: "Là công cụ dòng lệnh (CLI/MCP), người dùng cần quen terminal và biết đọc báo cáo kỹ thuật. Chưa có cộng đồng tiếng Việt; script cài qua curl/PowerShell nên team cần cân nhắc bảo mật khi chạy trên máy khách. Báo cáo chỉ ra lỗi, việc sửa vẫn cần người hiểu SEO/web."

practitionerGuide:
  outcome: "Bạn có báo cáo audit đầu tiên cho một website (SEO + tốc độ + bảo mật + AI-ready) và một danh sách lỗi ưu tiên để bàn với dev hoặc client."
  prerequisites:
    - "URL website cần quét và quyền để chạy audit (site công khai là đủ)."
    - "Máy có Node/npm hoặc môi trường chạy được CLI theo README; nếu dùng MCP thì cần Cursor/Claude Code."
    - "Biết trước 3-5 hạng mục quan trọng nhất với khách (vd tốc độ, schema, crawlability) để đọc báo cáo có trọng tâm."
  steps:
    - "Cài SquirrelScan theo hướng dẫn (npm install -g hoặc script cài) trên một máy bạn kiểm soát."
    - "Chạy lệnh audit cho một URL quan trọng trước, ví dụ trang chủ hoặc trang dịch vụ chủ lực."
    - "Xuất báo cáo dạng Markdown/HTML để đọc và đính kèm cho khách."
    - "Chọn 3-5 lỗi tác động rõ nhất (tốc độ, metadata, schema, crawlability) để sửa trước thay vì sửa hết cùng lúc."
    - "Nếu làm nhiều site, cân nhắc gắn MCP vào coding agent để lặp lại quy trình nhanh hơn."
  expectedResult: "Một báo cáo có cấu trúc chỉ ra site đang thiếu/lỗi gì theo từng nhóm, đủ cụ thể để team SEO và dev cùng hành động."
  commonPitfalls:
    - "Chạy script cài từ internet mà không kiểm tra — nên đọc kỹ trước khi chạy trên máy client."
    - "Coi mọi cảnh báo là lỗi nghiêm trọng; cần lọc theo tác động thật với dự án."
    - "Bỏ qua nhóm 'agent experience' dù đây là điểm khác biệt so với các audit tool cũ."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: hướng dẫn dùng một CLI để audit website đa hạng mục (SEO + tốc độ + bảo mật + AI-ready) và biến báo cáo thành proposal cho client."
paidToolReplaced: "Một phần nhu cầu dùng các nền tảng audit SEO/technical trả phí ở vòng kiểm tra ban đầu (vd Screaming Frog, Sitebulb, Ahrefs Site Audit)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể liệt kê checklist SEO chung, nhưng việc chỉ ra tool này, điểm khác biệt 'agent experience' và cách gắn vào quy trình audit của agency Việt cần lớp tổng hợp riêng."

scoreBreakdown:
  useCaseFit: 20
  projectHealth: 14
  costAdvantage: 14
  deployment: 12
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-13
nextReviewDueAt: 2026-11-11

tags: ["seo", "website-audit", "technical-seo", "ai-ready", "mcp", "cli"]
publishedAt: 2026-08-13
week: "2026-W33"
draft: true
---

Draft foundation (auto). Nguồn dữ liệu: description + số sao từ queue discovery, đối chiếu trang GitHub công khai (star 253). GitHub API chưa fetch trong pipeline nên chưa có tuổi repo, sao/ngày, forks chính thức trong record. Cần Luan: (1) chạy thử một site Việt thật để xác nhận chất lượng báo cáo và claim '260+ rules / agent experience', (2) kiểm tra script cài curl/PowerShell trước khi khuyến nghị, (3) bổ sung repoStats đầy đủ bằng fetch-signals trước khi nâng confidence/publish.
