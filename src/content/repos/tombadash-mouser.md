---
name: "Mouser"
repoUrl: "https://github.com/TomBadash/Mouser"
oneLiner: "Mouser là phần mềm mã nguồn mở thay cho Logitech Options+ để tuỳ biến chuột Logitech (dòng MX Master, MX Anywhere): gán lại nút, đổi tốc độ con trỏ, bật SmartShift... Chạy hoàn toàn cục bộ, không cần tài khoản Logitech, không telemetry."
media: []

vertical: ["creative"]

maturity: "pre-viral"
repoStats:
  stars: 4864
  forks: 168
  note: "~138 ngày tuổi, ~35.2 sao/ngày"
  starsPerDay: 35.2
  ageDays: 138
  pushedAt: 2026-06-24T12:27:23Z
  archived: false
  openIssues: 107
standoutFeatures:
  - "Gán lại nút chuột và tạo profile theo từng ứng dụng (tự đổi mapping khi chuyển giữa Chrome, VS Code...); có 40+ hành động dựng sẵn và cả phím tắt tuỳ chỉnh."
  - "Chạy trên Windows, macOS (Intel + Apple Silicon) và Linux — không cần cài, tải về giải nén là chạy; hỗ trợ Bluetooth và Logi Bolt."
  - "Hoàn toàn cục bộ: cấu hình là file JSON trên máy, không telemetry, không cloud, không cần tài khoản Logitech."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=47368033"
  - label: "GitHub"
    url: "https://github.com/TomBadash/Mouser"

useCases:
  - "Gán nút phụ trên chuột MX Master thành phím tắt hay dùng khi làm việc (copy, paste, chuyển desktop, back/forward trình duyệt)."
  - "Đặt profile riêng cho từng app: chuột hành xử khác nhau khi bạn ở trình duyệt so với khi ở phần mềm dựng/thiết kế."
  - "Tuỳ biến chuột Logitech mà không cần cài Logitech Options+ (nặng, cần tài khoản) — nhất là trên Linux nơi Options+ không có."

workflowStepReplaced: "Khâu cài Logitech Options+ (nặng, cần tài khoản, không có bản Linux) chỉ để gán lại nút và chỉnh chuột."
timeOrCostSaved: "Không phải khoản tiết kiệm tiền trực tiếp (Options+ vốn miễn phí); giá trị là nhẹ hơn, cục bộ, không tài khoản, và chạy được trên cả Linux. Lợi ích tuỳ mức bạn dùng nút phụ của chuột."
localProblem: "Dân creative/editor VN hay dùng chuột MX Master và muốn gán nút phụ thành phím tắt cho phần mềm dựng/thiết kế, nhưng Logitech Options+ khá nặng, đòi tài khoản và không có bản Linux. Mouser là bản thay nhẹ, cục bộ."
localEvidence: "Show HN đạt ~443 điểm, ~151 bình luận quanh nhu cầu 'thay Logitech Options+ bằng bản mở, nhẹ, chạy Linux'. Đây là nhu cầu chung của power-user, chưa có tín hiệu riêng từ tệp Việt."

vnMarket:
  insight: "Nhiều người dùng chuột MX Master ở VN chỉ cần gán vài nút phụ và chỉnh scroll, nhưng ngại Options+ nặng và đòi đăng nhập. Mouser hợp power-user/creative kỹ tính, nhưng đây là tiện ích chung chứ không phải công cụ đặc thù cho quy trình creative/ecom/seo."
  seoKeywords: ["thay thế Logitech Options+", "gán lại nút chuột MX Master", "phần mềm chỉnh chuột Logitech mã nguồn mở", "remap chuột Logitech Linux", "Mouser Logitech"]
  notes: "Fit với 4 lăng kính khá yếu — đây là tiện ích năng suất chung. Đặt tạm `vertical: ['creative']` vì đối tượng dùng MX Master nhiều nhất là creative/editor. Độ chắc chắn: thấp; cần Luan xác nhận có nằm trong scope không."

usabilityRisk: "Chỉ hỗ trợ chuột Logitech dùng giao thức HID++ (tốt nhất trên dòng MX Master/MX Anywhere); chuột hãng khác không dùng được. Windows SmartScreen có thể cảnh báo lần đầu; macOS cần cấp quyền Accessibility; Linux cần chạy script cấp quyền hidraw/uinput. Phải tắt Logitech Options+ vì hai app tranh quyền truy cập chuột. Mapping profile hiện vẫn dùng chung (chưa tách hẳn theo từng thiết bị). ~107 issue mở. Chưa có cộng đồng Việt."

practitionerGuide:
  outcome: "Bạn gán lại được vài nút trên chuột Logitech của mình thành phím tắt hữu ích và tạo profile riêng cho một app hay dùng."
  prerequisites:
    - "Một chuột Logitech dùng HID++ (lý tưởng là MX Master hoặc MX Anywhere), kết nối qua Bluetooth hoặc receiver."
    - "Máy Windows 10/11, macOS 12+, hoặc Linux (X11/KDE Wayland)."
    - "Tắt Logitech Options+ nếu đang chạy (hai app xung đột)."
  steps:
    - "Tải bản zip cho hệ điều hành của bạn từ trang Releases, giải nén và chạy (không cần cài)."
    - "Cấp quyền nếu được hỏi (macOS: Accessibility; Linux: chạy install-linux-permissions.sh rồi cắm lại chuột)."
    - "Vào trang Mouse & Profiles, chọn một nút phụ và gán một hành động dựng sẵn hoặc phím tắt tuỳ chỉnh."
    - "Tạo một profile theo app (vd trình duyệt) để chuột tự đổi mapping khi bạn chuyển qua app đó."
    - "Kiểm tra lại: bấm nút vừa gán trong app tương ứng xem có ra đúng hành động không."
  expectedResult: "Nút phụ thực thi đúng hành động bạn gán; mapping tự đổi theo app khi bật per-application profile. Cấu hình được lưu vào file JSON cục bộ."
  commonPitfalls:
    - "Quên tắt Logitech Options+ khiến hai app tranh quyền, remap chập chờn."
    - "Trên Linux bỏ bước cấp quyền hidraw/uinput nên app không nhận chuột."
    - "Kỳ vọng dùng được với chuột không phải Logitech HID++ — hiện không hỗ trợ."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm power-user/creative dùng MX Master với góc 'thay Logitech Options+ bằng bản mở, nhẹ, chạy cả Linux' — kèm lưu ý phải tắt Options+ và chỉ hợp chuột Logitech."
paidToolReplaced: "Không thay tool trả phí (Logitech Options+ vốn miễn phí); là bản thay mã nguồn mở, cục bộ"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Mouser, nhưng phần đánh giá thật (fit với 4 lăng kính yếu tới đâu, các bẫy cấp quyền theo OS, có đáng đưa vào scope không) là lớp tổng hợp Luan cần kiểm trước khi publish."

scoreBreakdown:
  useCaseFit: 8
  projectHealth: 21
  costAdvantage: 6
  deployment: 12
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-13
nextReviewDueAt: 2026-10-11

tags: ["productivity", "logitech", "mouse", "open-source", "cross-platform"]
publishedAt: 2026-07-13
week: "2026-W29"
draft: true
---

Draft foundation từ daily queue (Show HN ~443 điểm). CẢNH BÁO FIT: đây là tiện ích năng suất CHUNG (remap chuột), fit với 4 lăng kính creative/agency/ecom/seo khá yếu — đặt tạm `vertical: ["creative"]` vì tệp dùng MX Master nhiều nhất là creative/editor. Điểm cộng: cross-platform, chạy cả Linux, không tài khoản. Confidence thấp. Cần Luan xác nhận có nằm trong scope không trước khi publish.
