---
name: "WhatCable"
repoUrl: "https://github.com/darrylmorley/whatcable"
oneLiner: "WhatCable là app nhỏ nằm trên thanh menu của máy Mac, nói bằng tiếng người sợi cáp USB-C đang cắm thật ra làm được gì (tốc độ, công suất sạc) và vì sao máy có thể đang sạc chậm."
media: []

vertical: ["creative"]

maturity: "pre-viral"
repoStats:
  stars: 6406
  forks: 196
  note: "~72 ngày tuổi, ~89 sao/ngày; đang được bàn ở Show HN (566 điểm)"
  starsPerDay: 89
  ageDays: 72
  pushedAt: 2026-07-10T20:19:25Z
  archived: false
  openIssues: 14
standoutFeatures:
  - "Đọc thẳng dữ liệu IOKit của macOS để hiển thị theo từng cổng: loại cáp (Thunderbolt/USB4, sạc-only...), tốc độ (USB 2.0 → 40/80 Gbps), dòng/công suất (tới 240W) và chip e-marker của cáp."
  - "Chẩn đoán sạc/dữ liệu bằng tiếng người: chỉ rõ nút thắt là do cáp, do cổng Mac hay do thiết bị — ví dụ 'cáp đang giới hạn tốc độ sạc' hay 'màn hình chạy 10 Gbps, đây là mức cao nhất nó hỗ trợ'."
  - "Có cả CLI (`whatcable`, `--json`, `--watch`), widget desktop và bản Pro trả phí (£9.99) cho lịch sử cáp, đo điện năng trực tiếp, chẩn đoán màn hình."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=47972511"
  - label: "GitHub"
    url: "https://github.com/darrylmorley/whatcable"

useCases:
  - "Kiểm tra vì sao MacBook sạc chậm: biết ngay lỗi do sợi cáp yếu, do củ sạc hay do máy đang chủ động rút ít điện."
  - "Xác minh một sợi cáp/hub/dock có thật sự chạy đủ tốc độ Thunderbolt/USB4 khi cắm ổ SSD ngoài hay màn hình rời."
  - "Hiểu vì sao màn hình ngoài không lên đúng độ phân giải/tần số — WhatCable Pro so mode thật của màn với những gì đường DisplayPort đang tải."

workflowStepReplaced: "Khâu đoán mò/tra cứu thủ công khi Mac sạc chậm hoặc màn hình/ổ ngoài chạy dưới tốc độ — thay bằng một câu chẩn đoán rõ ràng."
timeOrCostSaved: "Chủ yếu tiết kiệm thời gian troubleshoot vặt và tránh mua nhầm cáp/dock; không thay thế một tool sản xuất nào nên khó quy ra giờ công cho creative/ecom."
localProblem: "Đây là tiện ích phần cứng cho người dùng Mac, không phải công cụ sản xuất nội dung. Nhóm có thể quan tâm trong hệ RepoRadar là editor video/nhiếp ảnh/designer xài MacBook cắm nhiều dock, SSD ngoài, màn hình rời — hay gặp cảnh sạc chậm hoặc màn không lên full res mà không rõ do đâu."
localEvidence: "Show HN đạt 566 điểm, 168 bình luận — cho thấy 'ma trận cáp USB-C' là nỗi đau thật, nhưng là nỗi đau chung của dân dùng Mac chứ không riêng 4 ngách RepoRadar."

vnMarket:
  insight: "Ở VN nhu cầu này có thật nhưng phân mảnh và thường được xử lý bằng cách hỏi nhóm Facebook, thử cáp khác hoặc mua cáp/dock xịn hơn. Chưa có thói quen dùng một app chẩn đoán cáp. Quan trọng: đây là tool chỉ chạy trên Mac Apple Silicon, nên đối tượng VN thu hẹp về nhóm creative/agency xài MacBook đời mới."
  seoKeywords: ["macbook sạc chậm", "kiểm tra cáp USB-C", "cáp thunderbolt là gì", "màn hình ngoài không lên full res mac", "app kiểm tra cáp mac"]
  notes: "Fit với 4 lăng kính khá yếu, chỉ chạm nhóm creative dùng Mac. Đưa vào vì lọt queue theo tín hiệu HN. Độ chắc chắn: thấp."

usabilityRisk: "CHỈ chạy trên macOS 14+ và CHỈ Apple Silicon (Intel Mac không hỗ trợ vì thiếu dữ liệu IOKit). Không có bản Windows/Linux. Nhiều tính năng chẩn đoán sâu nằm sau bản Pro trả phí (£9.99). Không cài qua App Store (phải tải notarised app hoặc Homebrew). Chưa có cộng đồng Việt. Không phục vụ trực tiếp công việc sản xuất nội dung/bán hàng — chỉ là tiện ích phần cứng."

practitionerGuide:
  outcome: "Bạn nhìn thấy ngay từng cổng USB-C trên Mac đang chạy loại cáp/tốc độ/công suất gì, và câu trả lời vì sao đang sạc chậm hoặc màn hình chưa full res."
  prerequisites:
    - "Một máy Mac chạy macOS 14 (Sonoma) trở lên, Apple Silicon (M1 trở đi)."
    - "Cáp/dock/thiết bị muốn kiểm tra để cắm thử."
    - "Không cần API key; bản miễn phí đủ để xem cơ bản."
  steps:
    - "Cài WhatCable qua Homebrew (`brew install --cask darrylmorley/whatcable/whatcable`) hoặc tải app đã notarised từ Releases."
    - "Mở app, xem popover trên thanh menu để đọc trạng thái từng cổng."
    - "Cắm sợi cáp/dock cần kiểm tra, đọc banner chẩn đoán (ví dụ 'cáp đang giới hạn tốc độ sạc')."
    - "Muốn dùng trong terminal/script thì chạy `whatcable` hoặc `whatcable --json`."
  expectedResult: "Mỗi cổng hiện loại cáp, tốc độ, công suất và một câu chẩn đoán rõ ràng về nút thắt (cáp/cổng/thiết bị)."
  commonPitfalls:
    - "Dùng Intel Mac hoặc macOS cũ — tool không chạy."
    - "Kỳ vọng thấy e-marker cho mọi cáp — cáp dưới 60W thường không có e-marker, phải cắm thiết bị đầu kia mới lộ thông tin."
    - "Tưởng mọi tính năng đều miễn phí — chẩn đoán màn hình, đo điện năng, lịch sử cáp nằm ở bản Pro."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, chỉ nên ở góc 'mẹo phần cứng cho creative dùng MacBook' (vì sao sạc chậm, vì sao màn không full res) — không đóng gói như công cụ tăng năng suất chính."
paidToolReplaced: ""
creatorWhitespace: true

aiCheck:
  canAIGetThis: true
  note: "Tool đã viral trên HN, AI mô tả được ngay. Phần synthesize góc Việt thêm ít giá trị vì công cụ không gắn với quy trình sản xuất của 4 ngách. Cờ commodity + fit yếu."

scoreBreakdown:
  useCaseFit: 7
  projectHealth: 23
  costAdvantage: 6
  deployment: 8
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-12
nextReviewDueAt: 2026-10-10

tags: ["macos", "usb-c", "hardware", "utility", "menubar"]
publishedAt: 2026-07-12
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue (Show HN 566 điểm). CẢNH BÁO FIT: tiện ích phần cứng cho Mac, chỉ chạm nhóm creative dùng MacBook Apple Silicon; không phục vụ trực tiếp agency/ecom/seo. Đề xuất Luan cân nhắc kỹ scope trước khi publish. Số liệu chỉ lấy từ signals của queue.
