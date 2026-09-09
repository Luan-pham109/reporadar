---
name: "Vouch"
repoUrl: "https://github.com/mitchellh/vouch"
oneLiner: "Vouch là hệ thống quản lý 'tin cậy' cho dự án mã nguồn mở: chỉ người được thành viên bảo lãnh (vouch) mới được tham gia (mở issue/PR), giúp chặn đóng góp rác — đặc biệt là 'AI slop' — từ người lạ."
media: []

vertical: []

maturity: "pre-viral"
repoStats:
  stars: 4953
  forks: 91
  note: "~154 ngày tuổi, ~32.2 sao/ngày"
  starsPerDay: 32.2
  ageDays: 154
  pushedAt: 2026-06-21T03:12:15Z
  archived: false
  openIssues: 17
standoutFeatures:
  - "Danh sách tin cậy lưu trong một file phẳng .td ('Trustdown'), parse được bằng công cụ POSIX chuẩn và mọi ngôn ngữ, không cần thư viện ngoài."
  - "Bộ GitHub Actions sẵn dùng: tự kiểm tra tác giả issue/PR đã được vouch chưa, có thể tự đóng/khoá issue/PR từ người chưa bảo lãnh hoặc bị denounce."
  - "Đang được dự án Ghostty dùng thật; CLI là một module Nushell, chỉ cần Nushell để chạy, không phụ thuộc gì thêm."
signalSources:
  - label: "Hacker News"
    url: "https://news.ycombinator.com/item?id=46930961"
  - label: "GitHub"
    url: "https://github.com/mitchellh/vouch"

useCases:
  - "Bảo vệ một repo mã nguồn mở khỏi PR/issue rác do AI tạo hàng loạt bằng cách chỉ nhận đóng góp từ người đã được thành viên bảo lãnh."
  - "Cho phép maintainer vouch/denounce cộng tác viên ngay trong comment issue/discussion, tự động cập nhật file danh sách."
  - "Đồng bộ CODEOWNERS vào danh sách vouch để người có quyền sẵn được tin cậy mà không cần khai lại."

workflowStepReplaced: "Khâu lọc thủ công đóng góp rác/AI-slop từ người lạ trên repo OSS trước khi review."
timeOrCostSaved: "Giảm thời gian maintainer sàng lọc PR/issue kém chất lượng; giá trị chỉ hiện thực với ai đang thực sự maintain một dự án OSS công khai."
localProblem: "Đây là công cụ cho maintainer dự án mã nguồn mở, không phải cho quy trình creative/agency/ecom/seo. Nhóm hiếm hoi liên quan là dev Việt đang maintain một repo OSS công khai và bị ngập PR/issue do AI sinh ra."
localEvidence: "Chủ đề đạt ~1077 điểm với ~486 bình luận trên HN vì chạm đúng nỗi đau 'AI slop' của giới maintainer; nhưng đó là nỗi đau của cộng đồng OSS toàn cầu, không riêng gì các ngách RepoRadar nhắm tới."

vnMarket:
  insight: "Ở VN, số người thực sự maintain một dự án OSS đủ lớn để cần cơ chế vouch là rất nhỏ. Với creative/agency/ecom/seo thì gần như không áp dụng. Đây là tín hiệu 'nóng trong giới dev' hơn là công cụ nghề cho tệp độc giả chính."
  seoKeywords: ["chặn AI slop trên GitHub", "quản lý cộng tác viên open source", "vouch mitchellh", "GitHub Actions kiểm tra contributor"]
  notes: "Fit với 4 lăng kính rất yếu; lọt queue vì tín hiệu HN mạnh. Cần Luan cân nhắc scope. Độ chắc chắn: thấp."

usabilityRisk: "Chỉ hữu ích nếu bạn maintain một dự án OSS trên GitHub và bị đóng góp rác. Cần biết GitHub Actions và (cho CLI) Nushell. Mô hình còn được chính tác giả gọi là 'thử nghiệm'. Không liên quan trực tiếp tới công việc của creative/agency/ecom/seo — đây là lý do chính khiến nó khó vào scope RepoRadar."

practitionerGuide:
  outcome: "Repo OSS của bạn tự động chặn hoặc đánh dấu issue/PR từ người chưa được vouch."
  prerequisites:
    - "Một repo GitHub bạn có quyền admin để thêm GitHub Actions."
    - "Hiểu cơ bản về workflow GitHub Actions; nếu dùng CLI thì cài Nushell."
    - "Chính sách rõ ràng: ai được quyền vouch và hệ quả với người chưa vouch/bị denounce."
  steps:
    - "Thêm các action từ thư mục action/ của repo vouch (ví dụ check-pr, check-issue) vào workflow."
    - "Tạo file VOUCHED.td (hoặc .github/VOUCHED.td) liệt kê người được tin cậy."
    - "Bật manage-by-issue/discussion để maintainer vouch/denounce ngay trong comment."
    - "Chạy thử ở chế độ dry-run trước khi cho phép tự đóng issue/PR."
  expectedResult: "Issue/PR từ người chưa vouch bị đánh dấu (hoặc tự đóng nếu bật) đúng theo chính sách bạn đặt."
  commonPitfalls:
    - "Bật auto-close ngay mà chưa dry-run, vô tình chặn người đóng góp thật."
    - "Quên đồng bộ CODEOWNERS nên người có quyền vẫn bị coi là 'chưa vouch'."
    - "Áp dụng cho dự án quá nhỏ, nơi lọc tay còn nhanh hơn cấu hình."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nên nhắm cộng đồng dev/OSS Việt với góc 'chống AI slop cho repo', không đóng gói như tool cho creative/ecom."
creatorWhitespace: true

aiCheck:
  canAIGetThis: true
  note: "Tool của mitchellh đã nổi trên HN, AI mô tả được ngay. Góc Việt gần như không thêm giá trị vì tệp độc giả chính không maintain OSS. Cờ commodity."

scoreBreakdown:
  useCaseFit: 6
  projectHealth: 21
  costAdvantage: 8
  deployment: 9
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-10
nextReviewDueAt: 2026-10-08

tags: ["open-source", "github-actions", "moderation", "trust", "cli"]
publishedAt: 2026-07-10
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue (HN ~1077 điểm). CẢNH BÁO FIT: công cụ dành cho maintainer OSS, gần như không phục vụ creative/agency/ecom/seo. Đã để `vertical: []` và `canAIGetThis: true` (cờ commodity). Đề xuất Luan cân nhắc loại khỏi scope thay vì publish.
