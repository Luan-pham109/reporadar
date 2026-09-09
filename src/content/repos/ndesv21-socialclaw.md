---
name: "SocialClaw"
repoUrl: "https://github.com/ndesv21/socialclaw"
oneLiner: "SocialClaw là CLI kèm skill cho AI agent (Claude Code, Cursor, Codex, OpenClaw) để hẹn lịch và đăng bài lên nhiều mạng xã hội — X, LinkedIn, Instagram, Facebook Pages, TikTok, YouTube, Reddit, Pinterest, Discord, Telegram, WordPress — thông qua một dịch vụ hosted duy nhất."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/ndesv21/socialclaw/main/.github/readme/workflow-light.png"
    caption: "SocialClaw biến prompt/workflow của agent thành lịch đăng bài, retry, kiểm tra và analytics trên nhiều kênh."

vertical: ["agency"]

maturity: "rising"
repoStats:
  stars: 61
  forks: 17
  note: "~116 ngày tuổi, ~0.5 sao/ngày"
  starsPerDay: 0.5
  ageDays: 116
  pushedAt: 2026-07-12T20:18:21Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Một CLI (`npm install -g socialclaw`) đăng/hẹn lịch bài lên 13 kênh: X, Facebook Pages, Instagram Business, LinkedIn (profile + page), Pinterest, TikTok, YouTube, Reddit, Discord, Telegram, WordPress."
  - "Đóng gói sẵn dưới dạng agent skill: cài qua `npx skills add`, có MCP server 17 tool, plugin Claude Code, slash command `/socialclaw`, và bundle OpenClaw/ClawHub."
  - "Workflow 'validation-first': validate → preview campaign → apply với idempotency key, kèm inspect post/attempt/run/analytics/usage/health."
  - "Có ghi chú provider khá chi tiết (giới hạn TikTok photo gallery, Pinterest board-centric) — dấu hiệu tác giả thực sự chạy qua API các nền tảng."
signalSources:
  - label: "GitHub"
    url: "https://github.com/ndesv21/socialclaw"
  - label: "Website chính thức"
    url: "https://getsocialclaw.com"

useCases:
  - "Cho một AI agent tự đăng/hẹn lịch content lên nhiều fanpage/kênh mà không phải tự viết integration cho từng nền tảng."
  - "Dựng luồng 'agent viết caption → validate lịch → apply' để tự động hoá lịch đăng cho nhiều tài khoản khách trong agency."
  - "Cắm khả năng publishing đa kênh vào một workflow Claude Code/Cursor/Codex qua MCP hoặc CLI, thay cho thao tác đăng tay từng nền tảng."

workflowStepReplaced: "Khâu đăng/hẹn lịch bài thủ công trên từng nền tảng, hoặc tự viết integration API cho mỗi mạng xã hội."
timeOrCostSaved: "Gộp 13 kênh vào một CLI/skill giúp bỏ công đấu nối API từng nền tảng — nhưng đây là dịch vụ tính phí theo gói, nên 'tiết kiệm' phải trừ đi chi phí subscription; README không nêu benchmark thời gian cụ thể."
localProblem: "Agency và team quản lý nhiều fanpage ở Việt Nam thường phải đăng/hẹn lịch tay trên từng nền tảng hoặc mua tool lịch đăng riêng. Khi muốn để AI agent tự động lo khâu đăng bài, họ thiếu một 'cổng publishing' chuẩn mà agent gọi được bằng lệnh — đúng chỗ SocialClaw nhắm tới."
localEvidence: "Nhu cầu 'tool lên lịch đăng bài đa nền tảng', 'quản lý nhiều fanpage', 'tự động đăng bài mạng xã hội' xuất hiện đều trong nhóm agency/MMO VN. Cái mới ở SocialClaw là đóng gói cho AI agent (MCP + skill), không phải dashboard người dùng bấm tay."

vnMarket:
  insight: "Điểm cần nói thẳng: SocialClaw KHÔNG phải tool self-host. Repo chỉ chứa CLI + skill + docs; toàn bộ việc kết nối tài khoản, đăng bài và analytics chạy qua dịch vụ hosted tại getsocialclaw.com. API key thôi chưa đủ — workspace phải có trial hoặc GÓI TRẢ PHÍ đang hoạt động thì agent mới chạy được (lệnh sẽ trả `plan_required`/`subscription_*`). Với thị trường VN, đây là một SaaS nước ngoài tính phí, cạnh tranh trực tiếp với các tool lịch đăng nội địa và với việc tự đấu API — nên giá trị chính là 'agent-native publishing', không phải 'miễn phí/tự chủ dữ liệu'."
  seoKeywords: ["tool lên lịch đăng bài đa nền tảng", "AI agent đăng mạng xã hội", "socialclaw", "MCP đăng bài social", "tự động đăng bài nhiều fanpage", "social media scheduler cho AI agent"]
  notes: "Dựa trên README + getsocialclaw.com. Chưa thấy tín hiệu HN/Reddit; repo còn nhỏ (61 sao). Điểm cần Luan xác minh trước khi publish: cơ chế/giá gói trả phí và độ ổn định thực tế của dịch vụ hosted."

usabilityRisk: "Đây là client cho một dịch vụ hosted trả phí, không tự host được: cần tài khoản getsocialclaw.com và một gói trial/paid đang chạy thì agent mới đăng được. Tài khoản mạng xã hội kết nối qua dashboard bên thứ ba (cân nhắc rủi ro uỷ quyền OAuth cho nhiều fanpage khách). Một số nền tảng có giới hạn/pitfall riêng (TikTok photo gallery dễ fail `picture_size_check_failed` sau publish, Pinterest chủ yếu board-centric). Repo mới, chưa có cộng đồng VN, chưa có tín hiệu bên thứ ba."

practitionerGuide:
  outcome: "Sau guide này bạn cho một AI agent đăng thử một bài lên ít nhất một kênh, và có kết luận rõ SocialClaw có đáng trả phí so với tool lịch đăng bạn đang dùng hay không."
  prerequisites:
    - "Tài khoản getsocialclaw.com + một workspace API key, và một gói trial/paid đang hoạt động (API key không thôi sẽ báo plan_required)."
    - "Ít nhất một tài khoản mạng xã hội (nên dùng tài khoản test) đã kết nối trong dashboard SocialClaw."
    - "Node.js để cài `socialclaw` toàn cục, hoặc một agent runtime (Claude Code/Cursor/Codex/OpenClaw) nếu dùng dạng skill/MCP."
  steps:
    - "Cài CLI: `npm install -g socialclaw`, rồi `socialclaw login` để mở dashboard, kết nối tài khoản và lấy workspace API key."
    - "Kiểm tra kết nối: `socialclaw accounts list --json` và `socialclaw workspace health --json`."
    - "Soạn một file schedule (yaml/json), chạy `socialclaw validate -f schedule.json` rồi `socialclaw campaigns preview` để xem trước."
    - "Đăng thử bằng `socialclaw apply -f schedule.json --json` lên một kênh test, rồi inspect bằng `socialclaw status`/`socialclaw analytics post`."
    - "Nếu dùng cho agent: thêm MCP (`claude mcp add socialclaw ...`) hoặc plugin Claude Code, để agent tự gọi luồng validate→apply."
  expectedResult: "Một bài test được đăng/hẹn lịch thành công lên ít nhất một nền tảng, kiểm tra được trạng thái và analytics, và bạn nắm rõ chi phí gói cần trả để chạy thật."
  commonPitfalls:
    - "Tưởng đây là tool open-source tự host — thực chất phải trả phí dịch vụ hosted mới đăng được."
    - "Có API key nhưng chưa kích hoạt gói → lệnh trả `plan_required`/`subscription_*`."
    - "Đăng TikTok photo gallery với ảnh sai kích thước: qua được validate nhưng fail sau publish (`picture_size_check_failed`) — cần chuẩn hoá ảnh 1080x1920 trước."

greyHatFlag: "in"

suggestedAngle: "Góc kể hợp lý: 'để AI agent tự lo khâu đăng bài đa kênh' — so sánh SocialClaw (agent-native, trả phí hosted) với tool lịch đăng truyền thống và với việc tự đấu API, kèm lưu ý phải có gói trả phí."
paidToolReplaced: "Buffer, Hootsuite, Ayrshare, các tool lịch đăng đa nền tảng khác (nhưng bản thân SocialClaw cũng là dịch vụ trả phí)."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI liệt kê được danh sách kênh, nhưng cảnh báo 'đây là client cho SaaS trả phí, không self-host, cần gói active' và trade-off cho agency VN cần curation của người thực sự đọc kỹ điều khoản dịch vụ."

tags: ["social-media", "scheduler", "ai-agent", "mcp", "cli", "agency"]
scoreBreakdown:
  useCaseFit: 14
  projectHealth: 14
  costAdvantage: 6
  deployment: 8
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-14
nextReviewDueAt: 2026-10-12
publishedAt: 2026-07-14
week: "2026-W29"
draft: true
---

Draft từ daily pipeline (2026-07-14). Điểm cần Luan kiểm trước khi publish: SocialClaw là CLI/skill làm client cho dịch vụ hosted trả phí getsocialclaw.com (KHÔNG self-host, cần gói trial/paid active). Cần xác minh mô hình giá và độ ổn định dịch vụ, cũng như rủi ro uỷ quyền OAuth khi kết nối nhiều tài khoản khách. Repo còn nhỏ (61 sao), chưa có tín hiệu HN/Reddit.
