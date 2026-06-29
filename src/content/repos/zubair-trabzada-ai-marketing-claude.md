---
name: "AI Marketing Claude"
repoUrl: "https://github.com/zubair-trabzada/ai-marketing-claude"
oneLiner: "AI Marketing Claude là bộ skill marketing cho Claude Code, giúp bạn audit website, viết copy, lên email sequence, content calendar và xuất report ngay trong terminal thay vì ghép nhiều prompt lẻ tẻ."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/zubair-trabzada/ai-marketing-claude/main/banner.svg"
    caption: "Banner giới thiệu AI Marketing Suite for Claude Code."

vertical: ["agency", "seo"]

maturity: "rising"
repoStats:
  stars: 1992
  forks: 611
  note: "~117 ngày tuổi, ~17 sao/ngày"
standoutFeatures:
  - "Gom khoảng 15 skill marketing khác nhau trong cùng một repo, từ audit website tới viết email, social calendar, ads và proposal."
  - "Bài audit chính dùng nhiều subagent chạy song song rồi chấm điểm website theo 6 nhóm như messaging, CRO, SEO và positioning."
  - "Có sẵn template và script Python để xuất Markdown hoặc PDF client-ready, hợp với nhịp làm pre-sales và báo cáo vòng đầu."
  - "Là một gói skill cho coding assistant chứ không phải SaaS marketing độc lập, nên ai quen terminal sẽ khai thác được sâu hơn."
signalSources:
  - label: "GitHub"
    url: "https://github.com/zubair-trabzada/ai-marketing-claude"

useCases:
  - "Audit nhanh website khách hàng trước buổi gọi đầu để có checklist vấn đề về messaging, CRO và SEO."
  - "Tạo bản nháp copy, email sequence hoặc content calendar cho chiến dịch nhỏ ngay trong cùng một workspace."
  - "Xuất report marketing vòng đầu để sales hoặc strategist có cái mang đi chốt khách trước khi làm sâu bằng tay."
  - "Nghiên cứu đối thủ và dựng proposal dịch vụ nhanh hơn khi team đang ôm nhiều lead cùng lúc."

workflowStepReplaced: "Khâu ghép nhiều prompt rời, checklist audit rời và template report rời cho từng đầu việc marketing."
timeOrCostSaved: "Có thể rút ngắn mạnh vòng chuẩn bị audit và proposal ban đầu, nhất là với agency nhỏ hoặc freelancer phải xoay nhiều lead. Nhưng mọi output vẫn cần người làm nghề kiểm lại trước khi gửi khách."
localProblem: "Freelancer và agency nhỏ ở Việt Nam thường không thiếu ý tưởng audit, mà thiếu thời gian để biến chúng thành report đủ gọn cho buổi bán hàng hoặc bàn giao nhanh. AI Marketing Claude hợp với bài toán tăng tốc vòng chẩn đoán đầu và làm nháp deliverable trong một chỗ."
localEvidence: "Các truy vấn như audit website, AI viết email marketing, content calendar AI, proposal khách hàng và audit SEO đều là nhu cầu thật ở thị trường Việt. Khi tìm nhanh theo tên repo, độ phủ tiếng Việt cho bộ skill này còn khá sớm."

vnMarket:
  insight: "Điểm đáng chú ý của repo này không phải ở chỗ nó 'làm marketing bằng AI', mà ở chỗ nó đóng gói nhiều việc pre-sales và strategy nháp vào coding assistant. Với team Việt đã quen dùng Claude Code hoặc môi trường tương tự, nó có thể trở thành bộ khung audit và soạn deliverable nhanh; với người chỉ quen web app no-code, rào cản terminal vẫn còn cao."
  seoKeywords: ["Claude Code marketing", "AI audit website", "AI viết email marketing", "AI làm content calendar", "AI proposal khách hàng", "marketing audit AI"]
  notes: "Dựa trên README, danh sách command, scoring methodology và phần use cases. Repo-specific coverage tiếng Việt còn mỏng; các từ khóa bài toán thì đã có nhu cầu nền."

usabilityRisk: "AI Marketing Claude không phải app click là chạy. Nó đòi bạn làm việc trong Claude Code hoặc môi trường coding assistant tương tự, biết cách nạp context website đúng và đủ, và chấp nhận việc output đầu tiên thường generic nếu không có ngữ cảnh kinh doanh. Nếu team không quen terminal, hiệu quả thực tế sẽ giảm mạnh."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một bản audit đầu hoặc một report nháp đủ dùng cho vòng pre-sales hay internal review."
  prerequisites:
    - "Claude Code hoặc môi trường coding assistant tương tự mà team bạn đang dùng thật."
    - "Một website hoặc sản phẩm cụ thể để audit, không nên test trên case tưởng tượng."
    - "Thông tin nền tối thiểu về khách như ngành, offer chính và mục tiêu chiến dịch để tránh output quá chung."
  steps:
    - "Cài repo theo README rồi chọn một command hẹp trước, như audit website hoặc quick snapshot, thay vì gọi cả bộ skill cùng lúc."
    - "Nạp URL thật và vài ghi chú nền về khách để hệ thống không chỉ chấm điểm theo bề mặt."
    - "Đọc kỹ các nhóm điểm và finding đầu tiên để xem repo đang mạnh ở khâu nào: messaging, SEO, CRO hay positioning."
    - "Nếu bản audit có giá trị, mới đi tiếp sang các command tạo copy, email sequence, proposal hoặc report PDF cho cùng case đó."
    - "Cho strategist hoặc người chạy account rà lại toàn bộ output trước khi đưa ra ngoài, nhất là các kết luận mang tính ưu tiên kinh doanh."
  expectedResult: "Bạn có một bản audit hoặc report nháp giúp tiết kiệm giờ chuẩn bị đầu ca, đồng thời biết rõ repo này có thật sự hợp workflow agency của mình hay không."
  commonPitfalls:
    - "Ném vào URL trống ngữ cảnh rồi chê output chung chung."
    - "Dùng report AI như deliverable cuối cùng mà không qua mắt người làm nghề."
    - "Cố áp bộ skill này cho team chỉ quen giao diện web, không có ai chịu phần terminal và context management."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: bộ skill tăng tốc pre-sales audit và report nháp cho agency nhỏ đã quen coding assistant."
paidToolReplaced: "Một phần checklist audit tay, prompt stack rời và template report vòng đầu của agency"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể kể command của repo, nhưng góc đặt nó vào nhịp pre-sales và internal audit của agency Việt vẫn cần lớp curation thủ công."

tags: ["marketing", "claude-code", "agency", "seo", "audit", "copywriting"]
publishedAt: 2026-06-27
week: "2026-W26"
draft: false
---

Draft foundation. Cần Luan review xem có nên tiếp tục mở line các skill-pack cho coding assistant hay giữ khoảng cách để tránh mặt tiền quá nặng terminal.
