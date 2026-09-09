---
name: "witr"
repoUrl: "https://github.com/pranshuparmar/witr"
oneLiner: "witr là công cụ dòng lệnh trả lời một câu hỏi: 'Vì sao tiến trình này đang chạy?' — nó truy ngược một process/service/cổng đang mở đến gốc rễ đã khởi động ra nó, trong một bản in dễ đọc hoặc bảng TUI tương tác."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/e9c19ef0-1391-4a5f-a015-f4003d3697a9"
    caption: "Banner giới thiệu witr — 'Why is this running?'."

vertical: []

maturity: "pre-viral"
repoStats:
  stars: 18208
  forks: 568
  note: "~204 ngày tuổi, ~89.3 sao/ngày; đang được bàn ở Show HN (526 điểm)"
  starsPerDay: 89.3
  ageDays: 204
  pushedAt: 2026-07-06T06:29:04Z
  archived: false
  openIssues: 1
standoutFeatures:
  - "Giải thích quan hệ nhân-quả của một tiến trình: nó đến từ đâu, được khởi động thế nào, và chuỗi hệ thống (supervisor, container, service, shell) nào chịu trách nhiệm cho việc nó đang chạy."
  - "Gom việc mà bình thường phải ghép tay từ nhiều lệnh (ps, top, lsof, ss, systemctl, docker ps) vào một output duy nhất, hoặc một dashboard TUI tương tác."
  - "Một binary tĩnh, chạy trên Linux, macOS, FreeBSD và Windows; đóng gói cực rộng (brew, apt, conda, winget, AUR, scoop, nix... — xem Repology)."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=46392910"
  - label: "GitHub"
    url: "https://github.com/pranshuparmar/witr"

useCases:
  - "Truy nhanh vì sao một tiến trình lạ đang chiếm CPU/cổng trên server mà không phải ghép tay nhiều lệnh."
  - "Debug vì sao một service tự chạy lại sau khi kill: lần ngược tới supervisor/systemd/container đứng sau."
  - "Dùng dashboard TUI để quan sát trực quan quan hệ tiến trình khi troubleshoot sự cố hạ tầng."

workflowStepReplaced: "Khâu ghép thủ công output của ps/lsof/ss/systemctl/docker ps để suy ra 'vì sao' một tiến trình tồn tại."
timeOrCostSaved: "Rút ngắn thời gian debug tiến trình/hạ tầng cho người kỹ thuật; giá trị chủ yếu là thời gian sysadmin/DevOps, khó quy ra lợi ích trực tiếp cho creative/ecom/seo."
localProblem: "Đây là công cụ dev/sysadmin/DevOps. Trong hệ RepoRadar, nhóm có thể chạm tới là thành viên kỹ thuật của agency/team vận hành VPS, server cần debug tiến trình lạ. Ngoài nhóm đó, tool gần như không liên quan tới công việc creative/agency/ecom/seo."
localEvidence: "Show HN đạt 526 điểm, 105 bình luận và ~18k sao — sức hút kỹ thuật rõ, nhưng là nhu cầu của dân vận hành hệ thống, không phải của 4 ngách chính."

vnMarket:
  insight: "Ở VN nhóm DevOps/sysadmin vẫn quen dùng ps/htop/systemctl/lsof và tự ghép thông tin; witr là cải tiến trải nghiệm chứ không mở ra thị trường mới. Không thấy dấu hiệu ngành creative/ecom/seo Việt cần tới nó. Đây là tool 'nice-to-have' cho người kỹ thuật."
  seoKeywords: ["vì sao tiến trình đang chạy linux", "công cụ debug process", "witr là gì", "thay thế ps lsof", "why is this running"]
  notes: "Fit với 4 lăng kính rất yếu, chỉ chạm nhóm kỹ thuật. Đưa vào vì lọt queue theo tín hiệu HN. Độ chắc chắn: thấp."

usabilityRisk: "Là CLI/TUI cho người kỹ thuật — cần quen terminal; không có giao diện cho người không rành dòng lệnh. Không phục vụ trực tiếp công việc sản xuất nội dung/bán hàng. Chưa có cộng đồng Việt. Điểm cộng: cài rất dễ (một binary, nhiều package manager) và chạy đa nền tảng."

practitionerGuide:
  outcome: "Bạn chạy một lệnh và thấy chuỗi nguyên nhân vì sao một tiến trình/cổng đang tồn tại trên máy, thay vì phải ghép nhiều lệnh."
  prerequisites:
    - "Một máy Linux/macOS/FreeBSD/Windows và quyền chạy lệnh trong terminal."
    - "Biết thao tác terminal cơ bản."
    - "Không cần API key hay dịch vụ ngoài."
  steps:
    - "Cài witr qua package manager quen thuộc (vd `brew install witr`) hoặc script cài nhanh trong README."
    - "Chạy `witr` để xem tóm tắt các tiến trình và nguyên nhân."
    - "Chạy chế độ TUI để duyệt tương tác, hoặc `witr --json` nếu muốn ghép vào script."
    - "Khoanh vùng một tiến trình cụ thể để đọc chuỗi supervisor/container/shell đứng sau nó."
  expectedResult: "Một bản in (hoặc dashboard) rõ ràng về việc tiến trình đến từ đâu và cái gì đang giữ cho nó chạy."
  commonPitfalls:
    - "Kỳ vọng đây là công cụ cho người không kỹ thuật — witr là CLI/TUI cho dev/sysadmin."
    - "Bản package manager có thể chậm hơn bản GitHub mới nhất (theo README)."
    - "Dùng như tool giám sát dài hạn — witr trả lời 'vì sao đang chạy' tại thời điểm, không thay hệ observability đầy đủ."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, chỉ nên nhắm nhóm kỹ thuật trong agency/team vận hành hệ thống — góc 'thay ghép tay ps/lsof bằng một lệnh'. Không đóng gói như công cụ năng suất cho creative/ecom."
paidToolReplaced: ""
creatorWhitespace: true

aiCheck:
  canAIGetThis: true
  note: "Tool đã viral trên HN (~18k sao), AI mô tả được ngay. Phần synthesize góc Việt gần như không thêm giá trị vì tool không gắn với nhu cầu của 4 ngách. Cờ commodity + fit yếu."

scoreBreakdown:
  useCaseFit: 6
  projectHealth: 23
  costAdvantage: 7
  deployment: 13
  documentation: 14
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-12
nextReviewDueAt: 2026-10-10

tags: ["cli", "tui", "dev-tools", "sysadmin", "observability"]
publishedAt: 2026-07-12
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue (Show HN 526 điểm, ~18k sao). CẢNH BÁO FIT: tool dev/sysadmin, gần như không phục vụ creative/agency/ecom/seo. Đã để `vertical: []` và `canAIGetThis: true` (cờ commodity). Đề xuất Luan cân nhắc loại khỏi scope hoặc chỉ giữ như tham khảo kỹ thuật. Số liệu chỉ lấy từ signals của queue.
