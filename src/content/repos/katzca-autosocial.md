---
name: "AutoSocial"
repoUrl: "https://github.com/Katzca/AutoSocial"
oneLiner: "AutoSocial là dashboard chạy cục bộ để tự động hoá đăng/quản lý nội dung trên TikTok, Instagram và YouTube từ một chỗ, thay vì mở từng app đăng tay."
media: []

vertical: ["agency"]

maturity: "rising"
repoStats:
  stars: 512
  note: "GitHub search cho thấy ~512 sao; pipeline chưa lấy được forks/tuổi repo/health score ở lần này."
standoutFeatures:
  - "Dashboard tự host, chạy cục bộ để gom quản lý nhiều kênh TikTok, Instagram, YouTube."
  - "Định hướng tự động hoá thao tác đăng/quản lý nội dung mạng xã hội thay vì làm tay từng nền tảng."
signalSources:
  - label: "GitHub"
    url: "https://github.com/Katzca/AutoSocial"

useCases:
  - "Gom lịch đăng TikTok, Instagram và YouTube của nhiều kênh vào một dashboard cục bộ để đỡ mở từng app."
  - "Tự động hoá các thao tác đăng/quản lý lặp đi lặp lại khi chạy nhiều tài khoản mạng xã hội cùng lúc."
  - "Dựng thử một bảng điều khiển social nội bộ cho team, chạy trên máy mình thay vì phụ thuộc tool SaaS trả phí."

workflowStepReplaced: "Khâu đăng và quản lý bài thủ công trên từng nền tảng TikTok/Instagram/YouTube."
timeOrCostSaved: "Chưa đo được cụ thể ở giai đoạn discovery — kỳ vọng cắt thời gian đăng tay lặp lại khi vận hành nhiều kênh, nhưng cần thử thực tế mới ước lượng được."
localProblem: "Agency và team ecom VN chạy song song nhiều tài khoản TikTok/IG/YouTube thường phải đăng tay từng nền tảng, hoặc trả phí tool lập lịch nước ngoài; việc đăng lặp lại tốn giờ nhân sự mỗi ngày."
localEvidence: "Quan sát chung: nhiều team social/agency VN dùng Buffer/Later/Publer hoặc đăng tay khi tool không hỗ trợ tốt TikTok — đây là ghi nhận ngành, chưa phải case cụ thể đã kiểm chứng cho repo này."

vnMarket:
  insight: "Đội social VN hiện đăng đa kênh bằng cách trộn đăng tay + tool lập lịch trả phí (Buffer, Later, Publer, Fanpage Karma) hoặc dịch vụ nội địa; TikTok thường là mắt xích yếu nhất vì nhiều tool hỗ trợ hạn chế. Một dashboard tự host miễn phí là hướng đáng để ý, nhưng đổi lại là chi phí tự vận hành."
  seoKeywords: ["tự động đăng bài mạng xã hội", "công cụ quản lý đa kênh tiktok instagram youtube", "tool lập lịch đăng bài miễn phí", "dashboard social media tự host"]
  notes: "Insight ngành ở mức quan sát chung, độ chắc chắn thấp. Chưa đọc được README/tài liệu repo để xác nhận tính năng thực tế."

usabilityRisk: "Chưa đọc được README nên chưa rõ yêu cầu cài đặt (Docker? cần khai báo API/token của từng nền tảng?), mức độ ổn định và cộng đồng. Rủi ro lớn hơn: tự động hoá đăng/tương tác trên TikTok/Instagram/YouTube có thể vi phạm điều khoản nền tảng và dẫn tới khoá/hạn chế tài khoản — cần kiểm tra kỹ trước khi dùng cho tài khoản thật. Chưa thấy cộng đồng VN quanh tool này."

practitionerGuide:
  outcome: "Dựng thử được dashboard AutoSocial trên máy cục bộ và kết nối tối thiểu một kênh để đánh giá có đáng đưa vào quy trình đăng đa nền tảng hay không."
  prerequisites:
    - "Đọc kỹ README/tài liệu repo để biết cách cài (nhiều khả năng cần môi trường dev hoặc Docker) và cách khai báo tài khoản/API của TikTok, Instagram, YouTube."
    - "Dùng tài khoản phụ/thử nghiệm, KHÔNG kết nối tài khoản chính khi chưa rõ tool có vi phạm điều khoản nền tảng hay không."
  steps:
    - "Clone repo và cài theo hướng dẫn trong README."
    - "Khởi động dashboard cục bộ và kết nối một kênh thử nghiệm."
    - "Đăng thử một bài để kiểm chứng luồng hoạt động và độ ổn định."
  expectedResult: "Dashboard chạy được cục bộ, kết nối và đăng thử thành công ít nhất một nền tảng mà không lỗi rõ ràng."
  commonPitfalls:
    - "Kết nối tài khoản chính rồi bị nền tảng gắn cờ tự động hoá/khoá tạm thời."
    - "Yêu cầu API/token của từng nền tảng phức tạp hoặc thay đổi, khiến kết nối gãy."

greyHatFlag: "borderline"

suggestedAngle: "So sánh 'tự host một dashboard social miễn phí' với các tool lập lịch trả phí phổ biến ở VN — nhấn rõ đánh đổi giữa chi phí tool và rủi ro ToS/tự vận hành."
paidToolReplaced: "Buffer / Later / Publer (tool lập lịch social trả phí)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: true
  note: "Ở mức discovery này thông tin còn mỏng (mới có mô tả + số sao), AI/Trending có thể tự thấy. Giá trị chỉ tăng khi đọc kỹ repo, kiểm chứng cài đặt và rủi ro ToS — phần đó cần practitioner làm tay."

scoreBreakdown:
  costAdvantage: 12
scoringVersion: "v1"
evidenceLevel: "D"
confidence: "low"

tags: ["automation", "social-media", "agency", "self-hosted"]
publishedAt: 2026-07-30
week: "2026-W31"
draft: true
---

## Ghi chú cho biên tập (Luan review)

- **Dữ liệu rất mỏng ở lần chạy này**: queue chỉ trả về `description` + `⭐ 512` (nguồn github-search). Trường `github` = null nên KHÔNG có forks, tuổi repo, ngày push, hay `suggestedHealthScore`; không có README excerpt, không có media. Vì vậy `scoreBreakdown.projectHealth`, `useCaseFit`, `deployment`, `documentation` để trống — chưa đủ căn cứ chấm.
- **Cần verify thủ công trước khi publish**: mở repo đọc README thật để xác nhận (1) cách cài & yêu cầu hệ thống, (2) tool thực sự tự động hoá tới đâu, (3) mức rủi ro vi phạm điều khoản TikTok/IG/YouTube. Toàn bộ standoutFeatures/useCases hiện suy ra từ đúng một câu mô tả repo.
- **greyHatFlag = borderline** vì "social media automation" có thể chạm ToS nền tảng (auto-post/auto-engage). Nếu sau khi đọc README thấy tool đi sâu vào tự động tương tác/farming, cân nhắc nâng lên `out`.
- Số liệu trong `repoStats` chỉ gồm đúng con số queue cung cấp (512 sao) — không tự bịa thêm metric.
