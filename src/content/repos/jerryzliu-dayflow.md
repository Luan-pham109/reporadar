---
name: "Dayflow"
repoUrl: "https://github.com/JerryZLiu/Dayflow"
oneLiner: "Dayflow là 'nhật ký công việc' tự động cho máy Mac: nó âm thầm ghi lại màn hình của bạn rồi dựng thành một dòng thời gian kể lại bạn đã thực sự làm gì trong ngày — không cần bấm giờ hay ghi chú tay. Chạy local-first, có thể dùng AI chạy ngay trên máy."
media: []

vertical: ["agency"]

maturity: "pre-viral"
repoStats:
  stars: 6677
  forks: 385
  note: "~293 ngày tuổi, ~22.8 sao/ngày"
  starsPerDay: 22.8
  ageDays: 293
  pushedAt: 2026-07-03T20:55:05Z
  archived: false
  openIssues: 78
standoutFeatures:
  - "Tự dựng dòng thời gian ngày làm việc từ hoạt động màn hình: hiểu bạn đang làm gì (code, xem YouTube, họp Slack) chứ không chỉ ghi tên app đang mở."
  - "Local-first, mã nguồn mở (MIT): recording và dữ liệu nằm trên máy bạn; có thể chọn chạy AI cục bộ qua Ollama/LM Studio thay vì gửi lên cloud."
  - "Có Daily standup (tổng hợp việc hôm qua/hôm nay/blocker), Weekly review, và chat hỏi lại 'tuần này thời gian đi đâu' dựa trên timeline."
signalSources:
  - label: "Show HN"
    url: "https://news.ycombinator.com/item?id=45361268"
  - label: "GitHub"
    url: "https://github.com/JerryZLiu/Dayflow"

useCases:
  - "Dựng lại 'hôm nay mình đã làm gì' để viết báo cáo/standup cho khách hoặc sếp mà không phải nhớ lại thủ công."
  - "Theo dõi thời gian thực tế đổ vào từng dự án/khách để đối chiếu khi tính giờ công (billable hours)."
  - "Xem lại tuần làm việc: lúc nào tập trung, thời gian rơi vào app nào, việc gì kéo mình khỏi guồng."

workflowStepReplaced: "Khâu tự bấm giờ và ghi chú tay 'mình vừa làm gì' để tính giờ công hoặc viết báo cáo tiến độ."
timeOrCostSaved: "Bỏ được thao tác start/stop timer và ghi log thủ công mỗi ngày; đổi lại phải chấp nhận app ghi hình màn hình liên tục. Lợi ích thực tế phụ thuộc mức độ bạn tin tưởng để nó chạy nền."
localProblem: "Freelancer và agency nhỏ ở VN thường tính giờ công hoặc phải báo cáo tiến độ cho khách, nhưng hay quên bấm giờ và cuối ngày ngồi cố nhớ 'sáng nay mình làm gì' để viết cập nhật. Dayflow tự ghi lại giúp khâu này."
localEvidence: "Show HN đạt ~480 điểm, ~130 bình luận quanh ý 'git log cho một ngày làm việc' — cho thấy nhu cầu tự động ghi nhật ký công việc có thật ở giới làm việc trên máy. Chưa có tín hiệu cụ thể từ tệp Việt."

vnMarket:
  insight: "Dân freelancer/agency Việt vốn dùng Toggl, Clockify hoặc bảng tính để log giờ, nhưng hay bỏ bấm giờ. Một tool tự ghi lại như Dayflow là hướng hấp dẫn — nhưng rào cản lớn ở VN là nó CHỈ chạy trên macOS, trong khi phần đông đang dùng Windows."
  seoKeywords: ["app tự động chấm công", "theo dõi thời gian làm việc tự động", "time tracker cho freelancer", "nhật ký công việc tự động", "Dayflow là gì"]
  notes: "Fit với 'agency' ở nhánh freelancer/quản lý thời gian. Rào cản lớn nhất là macOS-only và việc phải cấp quyền ghi hình màn hình. Độ chắc chắn: thấp."

usabilityRisk: "CHỈ chạy macOS 14+ — loại phần lớn người dùng Windows ở VN. Cần cấp quyền Screen & System Audio Recording (app quay lại màn hình của bạn liên tục), nên có rào cản tâm lý về riêng tư dù dữ liệu để local. Muốn AI chạy hoàn toàn cục bộ cần Ollama/LM Studio; nếu dùng Gemini/Claude/ChatGPT thì dữ liệu hoạt động được gửi lên nhà cung cấp đó. Chưa có cộng đồng Việt."

practitionerGuide:
  outcome: "Bạn có một dòng thời gian tự động của ngày làm việc trên Mac và thử xuất nó ra Markdown để làm báo cáo/standup."
  prerequisites:
    - "Máy Mac chạy macOS 14 trở lên."
    - "Sẵn sàng cấp quyền Screen & System Audio Recording cho app."
    - "Chọn nguồn AI: Gemini API key, hoặc Ollama/LM Studio nếu muốn chạy cục bộ 100%."
  steps:
    - "Tải Dayflow.dmg từ GitHub Releases (hoặc brew install --cask dayflow), kéo vào Applications."
    - "Cấp quyền ghi màn hình khi macOS hỏi, rồi để app chạy nền một buổi làm việc."
    - "Chọn nhà cung cấp AI trong cài đặt (local hoặc cloud) theo mức độ riêng tư bạn muốn."
    - "Mở timeline cuối buổi để xem app dựng lại ngày làm việc; thử phần Daily standup."
    - "Xuất timeline ra Markdown cho một khoảng ngày để làm báo cáo/cập nhật cho khách."
  expectedResult: "Timeline phản ánh tương đối đúng các hoạt động chính trong buổi; phần standup và weekly review dựng được từ dữ liệu đó. Độ chính xác phụ thuộc mô hình AI bạn chọn."
  commonPitfalls:
    - "Kỳ vọng chạy trên Windows — hiện chưa có, chỉ macOS."
    - "Lo ngại riêng tư mà bỏ qua tuỳ chọn chạy AI cục bộ (Ollama/LM Studio)."
    - "Để dung lượng recording phình to — cần đặt giới hạn lưu trữ và bật tự dọn."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm freelancer/agency dùng Mac với góc 'tự động dựng nhật ký công việc để viết báo cáo/standup' — kèm cảnh báo rõ macOS-only và chuyện cấp quyền ghi màn hình."
paidToolReplaced: "Một phần nhu cầu của các time-tracker trả phí tự động (vd Rize, Timing) ở khâu ghi lại hoạt động"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được Dayflow, nhưng phần đánh giá thật (macOS-only chặn tệp Việt ra sao, đánh đổi riêng tư khi cho quay màn hình, có đáng thay Toggl/Clockify không) là lớp tổng hợp Luan cần kiểm trước khi publish."

scoreBreakdown:
  useCaseFit: 12
  projectHealth: 23
  costAdvantage: 13
  deployment: 9
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-13
nextReviewDueAt: 2026-10-11

tags: ["productivity", "time-tracking", "local-first", "macos", "ai"]
publishedAt: 2026-07-13
week: "2026-W29"
draft: true
---

Draft foundation từ daily queue (Show HN ~480 điểm). CẢNH BÁO FIT & NỀN TẢNG: tool hay nhưng CHỈ chạy macOS, loại phần lớn người dùng Windows ở VN; đặt tạm `vertical: ["agency"]` ở nhánh freelancer/quản lý thời gian. Điểm nhạy cảm: app quay màn hình liên tục — cần nhấn mạnh tuỳ chọn chạy AI cục bộ. Confidence thấp. Cần Luan xác nhận scope trước khi publish.
