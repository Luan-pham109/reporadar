---
name: "ComfyUI-OpenClaw"
repoUrl: "https://github.com/rookiestar28/ComfyUI-OpenClaw"
oneLiner: "ComfyUI-OpenClaw biến ComfyUI thành một xưởng tạo ảnh/video có điều khiển từ xa, API bảo mật hơn và kết nối qua các kênh như Discord, Telegram, WhatsApp, LINE, WeChat, Slack hoặc Feishu/Lark."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/rookiestar28/ComfyUI-OpenClaw/main/assets/run.png"
    caption: "Ví dụ lệnh chạy workflow ComfyUI qua OpenClaw."
  - type: "image"
    url: "https://raw.githubusercontent.com/rookiestar28/ComfyUI-OpenClaw/main/assets/adminMobileConsole.png"
    caption: "Console quản trị từ xa của OpenClaw trên giao diện mobile."

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 551
  forks: 54
  note: "~144 ngày tuổi, ~3.8 sao/ngày"
  starsPerDay: 3.8
  ageDays: 144
  pushedAt: 2026-06-24T08:22:06Z
  archived: false
  openIssues: 4
standoutFeatures:
  - "Đóng vai trò orchestration layer cho ComfyUI, không chỉ là một node tạo ảnh đơn lẻ."
  - "Có embedded panel, remote admin console, HTTP API, webhook, trigger, schedule, approval, preset và model manager."
  - "README nhấn mạnh hướng bảo mật và control-plane split để đưa ComfyUI vào môi trường vận hành thật hơn."
  - "Hỗ trợ nhiều kênh nhắn tin lớn như Discord, Telegram, WhatsApp, LINE, WeChat, KakaoTalk, Slack và Feishu/Lark."
signalSources:
  - label: "GitHub"
    url: "https://github.com/rookiestar28/ComfyUI-OpenClaw"

useCases:
  - "Nhận brief tạo ảnh từ Telegram, Discord hoặc Slack rồi đẩy vào ComfyUI mà không bắt cả team mở giao diện node."
  - "Dựng một quy trình duyệt preset, trigger, lịch chạy và approval cho studio cần tạo nhiều visual lặp lại mỗi tuần."
  - "Cho account hoặc team marketing gọi workflow ComfyUI qua API/webhook thay vì gửi prompt thủ công cho người vận hành máy."
  - "Theo dõi và điều khiển ComfyUI từ remote admin console khi máy render đặt ở văn phòng hoặc trên workstation riêng."

workflowStepReplaced: "Khâu nhận brief, copy prompt, mở ComfyUI thủ công và gửi lại output qua chat cho từng request nhỏ."
timeOrCostSaved: "Có thể giảm thời gian điều phối giữa creative, account và người vận hành ComfyUI, nhất là khi một workflow phải chạy lặp lại cho nhiều kênh. Lợi ích lớn nhất nằm ở tổ chức quy trình, không phải ở chất lượng model."
localProblem: "Agency và studio Việt thường có một vài người biết ComfyUI, còn phần còn lại chỉ cần gửi brief và nhận ảnh/video. ComfyUI-OpenClaw hợp với nhóm muốn biến workstation ComfyUI thành dịch vụ nội bộ có API, bot và quyền duyệt rõ hơn."
localEvidence: "Các truy vấn tiếng Việt về ComfyUI workflow, bot Telegram và tự động hoá tạo ảnh có tín hiệu nền, nhưng OpenClaw cụ thể gần như chưa có nội dung Việt. Đây là record cần review kỹ về bảo mật trước khi public rộng."

vnMarket:
  insight: "ComfyUI ở Việt Nam đang được dùng nhiều theo kiểu cá nhân hoặc nhóm nhỏ: một người cầm workflow, nhiều người nhờ render. Điểm nghẽn là vận hành: nhận prompt, chọn preset, gửi file, kiểm soát token/API, tránh người ngoài chạm vào máy render. OpenClaw có thể trở thành lớp điều phối nếu team đã có người kỹ thuật."
  seoKeywords: ["ComfyUI bot Telegram", "ComfyUI API", "tự động hoá ComfyUI", "ComfyUI workflow", "ComfyUI remote", "OpenClaw"]
  notes: "Đã kiểm tra truy vấn tiếng Việt quanh ComfyUI API, ComfyUI bot Telegram và tự động hoá ComfyUI. Nội dung OpenClaw tiếng Việt còn rất ít; cần Luan kiểm thêm nếu muốn đánh giá mức adoption thật."

usabilityRisk: "ComfyUI-OpenClaw chạm vào API, bot, webhook và quyền điều khiển từ xa, nên rủi ro không chỉ là cài lỗi. Team cần người hiểu bảo mật cơ bản, token bot, quyền truy cập mạng và cách giới hạn ai được chạy workflow; không nên mở public vội."

practitionerGuide:
  outcome: "Bạn có một bản thử nghiệm OpenClaw chạy trên ComfyUI nội bộ, nhận được một request đơn giản qua kênh điều khiển và trả lại output đúng workflow."
  prerequisites:
    - "Một bản ComfyUI đang chạy ổn với workflow/preset mà team đã dùng thật."
    - "Quyết định kênh điều khiển đầu tiên, ví dụ Telegram, Discord, Slack hoặc chỉ API nội bộ."
    - "Token bot, quyền admin và mạng nội bộ đủ an toàn để không mở ComfyUI ra ngoài bừa bãi."
  steps:
    - "Cài OpenClaw theo README và xác nhận panel/console xuất hiện trong môi trường ComfyUI."
    - "Chọn một workflow đơn giản đã ổn định, ví dụ tạo ảnh theo prompt với preset cố định."
    - "Cấu hình kênh gọi thử nhỏ nhất: một lệnh, một webhook hoặc một request API."
    - "Chạy request từ người không mở ComfyUI trực tiếp và kiểm tra output, log, quyền duyệt."
    - "Chỉ sau khi test nội bộ ổn, mới mở thêm schedule, approval hoặc bot cho nhiều người."
  expectedResult: "Kết quả đúng là một request bên ngoài ComfyUI có thể kích hoạt workflow đã chọn, trả output kiểm soát được và không lộ quyền điều khiển quá rộng."
  commonPitfalls:
    - "Mở API hoặc bot ra internet trước khi khoá quyền và token."
    - "Đưa quá nhiều workflow vào ngày đầu, khiến lỗi khó truy nguyên."
    - "Nhầm OpenClaw là công cụ cải thiện ảnh; giá trị chính của nó là điều phối và vận hành."

greyHatFlag: "borderline"

suggestedAngle: "Góc nên viết: biến ComfyUI từ tool cá nhân thành xưởng nội bộ có bot/API, nhưng phải kể rõ rào cản bảo mật."
paidToolReplaced: "Một phần nhu cầu dùng Make, Zapier, bot nội bộ hoặc dashboard tự viết để điều phối request tạo ảnh/video"
alternativeTo:
  - name: "Make"
    slug: "make"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể đọc README và kể feature, nhưng khó tự đánh giá rủi ro vận hành cho agency Việt đang mở ComfyUI qua bot/API."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 16
  costAdvantage: 8
  deployment: 6
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-29
nextReviewDueAt: 2026-09-27

tags: ["comfyui", "automation", "bot", "api", "creative-ops"]
publishedAt: 2026-06-29
week: "2026-W27"
draft: true
---

Draft foundation. Cần Luan review greyHatFlag: bản chất sạch nếu dùng nội bộ, nhưng mọi lớp remote/API/bot cho ComfyUI cần cảnh báo bảo mật rõ trước khi publish.
