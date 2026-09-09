---
name: "term.everything"
repoUrl: "https://github.com/mmulet/term.everything"
oneLiner: "term.everything cho phép chạy bất kỳ ứng dụng giao diện đồ hoạ (GUI) nào ngay bên trong cửa sổ terminal — kể cả qua SSH — bằng cách biến terminal thành 'màn hình' hiển thị app."
media: []

vertical: []

maturity: "pre-viral"
repoStats:
  stars: 8029
  forks: 192
  note: "~306 ngày tuổi, ~26.2 sao/ngày"
  starsPerDay: 26.2
  ageDays: 306
  pushedAt: 2026-03-18T19:19:31Z
  archived: false
  openIssues: 9
standoutFeatures:
  - "Là một Wayland compositor viết từ đầu (bằng Go, thêm chút C) nhưng xuất hình ra terminal thay vì màn hình vật lý."
  - "Chạy được trên cả host X11 lẫn Wayland; với terminal hỗ trợ ảnh (kitty, iTerm2) có thể render cửa sổ ở full resolution."
  - "Hoạt động qua SSH: mở app đồ hoạ trên máy từ xa và xem trực tiếp trong terminal, không cần dựng X-forwarding hay VNC."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=45181535"
  - label: "GitHub"
    url: "https://github.com/mmulet/term.everything"

useCases:
  - "Mở nhanh một app GUI trên VPS/server chỉ có SSH mà không phải cấu hình X-forwarding hay cài remote desktop."
  - "Xem ảnh, file bằng trình xem đồ hoạ có sẵn ngay trong terminal thay vì cài thêm terminal file viewer riêng."
  - "Dùng để demo/nghịch kỹ thuật: chạy trình duyệt, thậm chí game, gọn trong một khung terminal để quay clip gây chú ý."

workflowStepReplaced: "Khâu dựng X-forwarding, VNC hoặc remote desktop chỉ để nhìn một cửa sổ GUI trên máy từ xa qua SSH."
timeOrCostSaved: "Bỏ được bước cài/cấu hình một lớp remote desktop riêng cho các thao tác GUI lẻ tẻ qua SSH; giá trị chủ yếu cho người kỹ thuật, khó quy ra giờ cho dân creative/ecom."
localProblem: "Đây là công cụ dành cho dev/sysadmin. Với RepoRadar, người có thể quan tâm là thành viên kỹ thuật trong agency/team đôi khi cần thao tác một app GUI trên VPS Linux chỉ có SSH mà ngại dựng cả VNC. Ngoài nhóm này, tool ít liên quan trực tiếp tới creative/agency/ecom/seo."
localEvidence: "Bài Show HN đạt ~1094 điểm với 144 bình luận — chứng tỏ sức hút kỹ thuật, nhưng là hiệu ứng 'ngầu về mặt hack' hơn là nhu cầu công việc của 4 ngách chính."

vnMarket:
  insight: "Ở VN đây là dạng tool 'wow' về kỹ thuật hơn là công cụ sản xuất nội dung/bán hàng. Nhu cầu thực tế (chạy GUI qua SSH) rất hẹp và chủ yếu ở nhóm dev/DevOps. Không thấy dấu hiệu ngành creative/ecom/seo Việt cần tới nó."
  seoKeywords: ["chạy app GUI trong terminal", "GUI over SSH", "term.everything là gì", "chạy giao diện đồ hoạ qua terminal"]
  notes: "Fit với 4 lăng kính rất yếu. Đưa vào chủ yếu vì lọt queue theo tín hiệu HN. Cần Luan cân nhắc có nên nằm trong scope RepoRadar hay không. Độ chắc chắn: thấp."

usabilityRisk: "Chỉ chạy GUI của app Linux (host X11/Wayland) — KHÔNG dùng để chạy app Windows/macOS. Đang ở giai đoạn beta, nhiều app có thể không mở được hoặc crash. Chất lượng hình phụ thuộc số dòng/cột của terminal, hiệu năng có thể tụt khi tăng độ phân giải. Chưa có cộng đồng Việt. Quan trọng nhất: gần như không phục vụ trực tiếp công việc của creative/agency/ecom/seo."

practitionerGuide:
  outcome: "Bạn mở được một cửa sổ GUI của app Linux hiển thị ngay trong terminal, kể cả khi kết nối qua SSH."
  prerequisites:
    - "Một máy/VPS Linux (host X11 hoặc Wayland) để chạy app GUI cần hiển thị."
    - "Biết thao tác cơ bản với terminal và SSH; ưu tiên terminal hỗ trợ ảnh như kitty hoặc iTerm2 để có chất lượng cao."
    - "Tải bản beta từ trang Releases của repo."
  steps:
    - "Tải và giải nén bản beta term.everything cho hệ của bạn."
    - "Chạy term.everything kèm lệnh mở app GUI muốn hiển thị (xem help.md trong repo)."
    - "Nếu qua SSH, chạy trên máy đích rồi xem kết quả trong terminal phía bạn."
    - "Dùng phím tăng/giảm cỡ chữ của terminal để cân bằng giữa độ nét và tốc độ khung hình."
  expectedResult: "App GUI hiện lên trong terminal ở mức đủ nhìn; với kitty/iTerm2 có thể đạt full resolution."
  commonPitfalls:
    - "Kỳ vọng chạy app Windows/macOS — tool chỉ dựng cho app Linux."
    - "Một số app crash hoặc không mở được vì đang ở giai đoạn 'term some things' theo roadmap."
    - "Đặt độ phân giải quá cao khiến khung hình giật."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, chỉ nên ở góc 'tool kỹ thuật vui' cho dân dev — không nên đóng gói như công cụ tăng năng suất cho creative/ecom."
creatorWhitespace: true

aiCheck:
  canAIGetThis: true
  note: "Đây là tool đã viral trên HN, AI mô tả được ngay. Phần synthesize góc Việt gần như không thêm giá trị vì tool không gắn với nhu cầu của 4 ngách. Cờ commodity."

scoreBreakdown:
  useCaseFit: 6
  projectHealth: 17
  costAdvantage: 8
  deployment: 6
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-10
nextReviewDueAt: 2026-10-08

tags: ["cli", "terminal", "dev-tools", "wayland", "ssh"]
publishedAt: 2026-07-10
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue (tín hiệu Show HN ~1094 điểm). CẢNH BÁO FIT: đây là tool dev/novelty, gần như không phục vụ creative/agency/ecom/seo. Đã để `vertical: []` và `canAIGetThis: true` (cờ commodity). Đề xuất Luan cân nhắc loại khỏi scope RepoRadar thay vì publish.
