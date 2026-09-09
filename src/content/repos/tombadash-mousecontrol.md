---
name: "Mouser"
repoUrl: "https://github.com/TomBadash/Mouser"
oneLiner: "Mouser là app miễn phí, chạy hoàn toàn offline để đổi chức năng các nút chuột Logitech (MX Master, MX Anywhere...), thay cho phần mềm Logitech Options+ nặng và đòi tài khoản."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/TomBadash/Mouser/main/images/Screenshot_mouse.png"
    caption: "Trang Mouse & Profiles: sơ đồ chuột MX Master với các điểm nhấn có thể gán lại."
  - type: "image"
    url: "https://raw.githubusercontent.com/TomBadash/Mouser/main/images/Screenshot_settings.png"
    caption: "Trang cài đặt Point & Scroll để chỉnh DPI, SmartShift và hướng cuộn."

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 5020
  forks: 177
  note: "~158 ngày tuổi, ~31.8 sao/ngày"
  starsPerDay: 31.8
  ageDays: 158
  pushedAt: 2026-07-28T22:48:49Z
  archived: false
  openIssues: 102
standoutFeatures:
  - "Gán lại mọi nút chuột lập trình được: middle click, gesture, back/forward, mode shift, DPI switch — kèm hơn 40 action dựng sẵn."
  - "Profile theo từng ứng dụng: tự đổi mapping khi bạn chuyển giữa Chrome, VS Code... ở foreground."
  - "Chạy native trên Windows, macOS (bản Intel và Apple Silicon riêng) và Linux; tải zip về chạy, không cần cài."
  - "Chủ trương privacy: không telemetry, không cloud, không cần tài khoản Logitech; config chỉ là một file JSON local."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=47368033"
  - label: "GitHub"
    url: "https://github.com/TomBadash/Mouser"

useCases:
  - "Gán nút gesture / back-forward của MX Master thành copy, paste, undo hoặc phím tắt riêng để dựng ảnh, cắt video nhanh hơn."
  - "Đặt profile riêng cho từng app: một mapping cho trình duyệt, một mapping khác cho phần mềm edit."
  - "Chỉnh DPI, đảo hướng cuộn và bật/tắt SmartShift mà không phải mở phần mềm Logitech nặng nề."
  - "Thay Logitech Options+ trên máy làm việc cần sạch, không muốn app chạy nền gọi cloud hay đòi đăng nhập."

workflowStepReplaced: "Khâu cấu hình chuột và phím tắt cho máy làm sáng tạo — thay phần mềm hãng bằng một tiện ích nhẹ, offline."
timeOrCostSaved: "Không tiết kiệm tiền trực tiếp (Options+ vốn miễn phí), giá trị nằm ở máy nhẹ hơn, không telemetry và mapping theo app giúp thao tác nhanh hơn từng chút mỗi ngày."
localProblem: "Nhiều designer, editor và dân dựng phim ở VN dùng MX Master nhưng ngán Logitech Options+ vì nặng, hay treo và bắt đăng nhập tài khoản. Họ muốn một tool nhẹ chỉ để đổi nút và DPI."
localEvidence: "Cộng đồng dùng MX Master ở VN khá đông (hội nhóm review chuột, dân đồ hoạ). Than phiền về Options+ nặng/đòi account là chủ đề quen thuộc. Riêng nội dung tiếng Việt về Mouser thì chưa có, cần kiểm thêm."

vnMarket:
  insight: "Ở VN chưa có mấy nội dung tiếng Việt về app thay Options+; đa số người dùng MX Master vẫn cài Options+ mặc định hoặc chịu đựng nó. Đây là ngách công cụ nhỏ nhưng có nhu cầu thật trong nhóm sáng tạo và dân văn phòng dùng chuột xịn."
  seoKeywords: ["thay thế Logitech Options+", "app đổi nút chuột MX Master", "phần mềm chuột Logitech nhẹ", "remap chuột Logitech", "MX Master không cần Options+"]
  notes: "Suy luận từ README và độ phổ biến của MX Master. Chưa kiểm được nội dung/thảo luận tiếng Việt cụ thể về Mouser."

usabilityRisk: "Chỉ hỗ trợ tốt dòng chuột Logitech HID++ (MX Master / MX Anywhere), chuột hãng khác không dùng được. macOS cần cấp quyền Accessibility, Linux cần chỉnh quyền hidraw/uinput. Windows có thể bị SmartScreen cảnh báo lần đầu. Chưa có cộng đồng hỗ trợ tiếng Việt."

practitionerGuide:
  outcome: "Sau guide này bạn có Mouser chạy ở khay hệ thống, đã gán lại ít nhất một nút chuột và chỉnh DPI theo ý mình, không còn cần Logitech Options+."
  prerequisites:
    - "Một con chuột Logitech HID++ (tốt nhất là MX Master hoặc MX Anywhere) kết nối qua Bluetooth hoặc receiver."
    - "Đã thoát hẳn Logitech Options+ (hai app tranh quyền HID++ nếu chạy cùng lúc)."
    - "Trên macOS: sẵn sàng cấp quyền Accessibility; trên Linux: chạy được script cấp quyền thiết bị."
  steps:
    - "Vào trang release mới nhất, tải đúng bản zip cho hệ điều hành (Windows / macOS Apple Silicon / macOS Intel / Linux)."
    - "Giải nén và chạy file thực thi (Mouser.exe / Mouser.app / ./Mouser); app sẽ hiện icon ở khay hệ thống."
    - "Trong trang Mouse & Profiles, chọn một nút (ví dụ nút gesture) rồi gán một action như copy/paste hoặc một phím tắt tự ghi."
    - "Sang trang Point & Scroll chỉnh DPI, thử bật SmartShift và đảo hướng cuộn xem có hợp tay không."
    - "Tạo thêm profile theo app nếu cần (ví dụ mapping riêng cho phần mềm edit), rồi để app chạy nền ở khay."
  expectedResult: "Nút bạn gán hoạt động đúng ngay, DPI đổi mượt, và khi chuyển app thì mapping tự đổi theo profile (nếu đã cấu hình)."
  commonPitfalls:
    - "Quên tắt Logitech Options+ nên hai app tranh quyền, mapping chập chờn."
    - "Trên Linux chưa chạy script cấp quyền hidraw/uinput nên app không nhận chuột."
    - "Kỳ vọng dùng được cho chuột không phải Logitech HID++ — Mouser sẽ không nhận."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'App miễn phí thay Logitech Options+ cho dân đồ hoạ' — nhấn máy nhẹ, không telemetry, mapping theo app."
paidToolReplaced: "Logitech Options+ (miễn phí nhưng nặng, đòi tài khoản)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được repo, nhưng góc 'thay Options+ cho dân sáng tạo VN' và các cảnh báo cài đặt theo từng OS là phần cần người biên tập và trải nghiệm thật."

tags: ["productivity", "mouse", "logitech", "open-source", "utility", "creative"]
scoreBreakdown:
  useCaseFit: 14
  projectHealth: 23
  costAdvantage: 8
  deployment: 12
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-08-02
nextReviewDueAt: 2026-10-31
publishedAt: 2026-08-02
week: "2026-W31"
draft: true
---

Record nháp foundation (pipeline 2026-08-02). Repo đã đổi tên slug: candidate là `tombadash/mousecontrol` nhưng repo thật nằm ở `TomBadash/Mouser`, tên sản phẩm là **Mouser**.

Cần Luan review trước khi publish:
- Vertical đang để `creative` vì nhóm designer/editor dùng MX Master nhiều, nhưng đây là tiện ích năng suất chung — cân nhắc có nên đưa lên site hay không.
- Media dùng đường dẫn raw từ README (`images/Screenshot_mouse.png`, `images/Screenshot_settings.png`) — cần kiểm hotlink có sống không trước khi publish.
