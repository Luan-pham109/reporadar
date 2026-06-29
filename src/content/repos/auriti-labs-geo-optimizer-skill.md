---
name: "Geo Optimizer Skill"
repoUrl: "https://github.com/Auriti-Labs/geo-optimizer-skill"
oneLiner: "Geo Optimizer Skill là bộ công cụ AEO/GEO mã nguồn mở để audit website xem ChatGPT, Perplexity, Gemini, Claude và Google AI Overviews có crawl, hiểu và trích dẫn nội dung của bạn hay không."
media: []

vertical: ["seo"]

maturity: "rising"
repoStats:
  stars: 506
  forks: 60
  note: "~131 ngày tuổi, ~3.9 sao/ngày"
  starsPerDay: 3.9
  ageDays: 131
  pushedAt: 2026-06-27T04:57:44Z
  archived: false
  openIssues: 3
standoutFeatures:
  - "Tập trung vào Answer Engine Optimization và Generative Engine Optimization, tức đo khả năng được AI search hiểu và cite chứ không chỉ SEO truyền thống."
  - "README mô tả nhiều bề mặt dùng: CLI, Python, MCP và Astro, phù hợp cả SEO practitioner lẫn team kỹ thuật."
  - "Có claim test suite lớn, CI, PyPI package, demo site và hướng citation tracking cho ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews."
signalSources:
  - label: "GitHub"
    url: "https://github.com/Auriti-Labs/geo-optimizer-skill"
  - label: "PyPI"
    url: "https://pypi.org/project/geo-optimizer-skill/"
  - label: "Live Demo"
    url: "https://geoready.dev"

useCases:
  - "Audit một website xem đã có robots, sitemap, schema, llms.txt và cấu trúc nội dung đủ thân thiện với AI search chưa."
  - "Theo dõi khả năng thương hiệu hoặc bài viết được ChatGPT, Perplexity, Gemini và Google AI Overviews trích dẫn."
  - "Tạo checklist sửa lỗi GEO/AEO cho team SEO trước khi đổ thêm tiền vào content."
  - "Gắn vào quy trình kỹ thuật qua CLI, Python hoặc MCP để kiểm tra lại sau mỗi lần deploy nội dung."

workflowStepReplaced: "Khâu audit thủ công từng checklist AI SEO/GEO rồi tự hỏi liệu nội dung có được answer engine đọc và cite hay không."
timeOrCostSaved: "Có thể rút ngắn vòng audit AEO/GEO ban đầu từ nhiều giờ checklist thủ công xuống một báo cáo có điểm và hạng mục sửa; phần xác nhận citation thật vẫn cần kiểm tra định kỳ."
localProblem: "Ở Việt Nam, SEO team và agency đang bắt đầu bán dịch vụ AI SEO, AEO, GEO nhưng nhiều nơi vẫn thiếu cách đo cụ thể ngoài cảm tính. Geo Optimizer Skill hữu ích cho nhóm muốn biến câu hỏi 'AI có trích dẫn mình không?' thành checklist và điểm số có thể bàn với khách."
localEvidence: "Các cụm như AI SEO, AEO, GEO, tối ưu AI Overview và ChatGPT trích dẫn website đã xuất hiện trong nội dung SEO Việt. Tool cụ thể này chưa bão hoà tiếng Việt, nên còn đất cho bài hướng dẫn thực hành."

vnMarket:
  insight: "SEO Việt đang chuyển từ 'lên top Google' sang câu hỏi rộng hơn: nội dung có được AI answer engine đọc, hiểu và lấy làm nguồn không. Agency cần cách kiểm toán rõ để không bán GEO bằng cảm giác. Một CLI/open-source checklist như Geo Optimizer Skill có thể thành lớp demo năng lực trước khi triển khai dịch vụ sâu hơn."
  seoKeywords: ["AI SEO", "AEO", "GEO SEO", "tối ưu AI Overview", "ChatGPT trích dẫn website", "llms.txt", "Generative Engine Optimization"]
  notes: "Đã kiểm tra truy vấn tiếng Việt quanh AI SEO, AEO, GEO SEO, tối ưu AI Overview và ChatGPT trích dẫn website. Từ khoá ngành có tín hiệu, còn tool Geo Optimizer Skill chưa thấy bão hoà ở Việt Nam."

usabilityRisk: "Geo Optimizer Skill vẫn cần người hiểu SEO kỹ thuật và cách đọc báo cáo. Một điểm 0-100 không tự biến thành traffic; team phải kiểm chứng lại bằng truy vấn thật, log crawl, nội dung nguồn và thay đổi schema/llms.txt đúng cách."

practitionerGuide:
  outcome: "Bạn có một báo cáo AEO/GEO đầu tiên cho website và một danh sách lỗi ưu tiên để sửa trước khi pitch hoặc triển khai AI SEO."
  prerequisites:
    - "URL website cần audit, quyền sửa nội dung hoặc quyền gửi ticket cho dev."
    - "Máy có Python/CLI theo hướng dẫn README hoặc môi trường kỹ thuật có thể chạy package."
    - "Danh sách 5-10 truy vấn mà khách hàng thật sẽ hỏi AI search về ngành hoặc thương hiệu."
  steps:
    - "Cài package hoặc chạy CLI theo quickstart trong README."
    - "Audit một URL quan trọng trước, ví dụ trang dịch vụ, bài pillar hoặc trang sản phẩm chủ lực."
    - "Đọc điểm tổng và nhóm lỗi: crawlability, metadata, schema, llms.txt, nội dung trả lời câu hỏi."
    - "Chọn 3 lỗi có tác động rõ nhất để sửa trước, thay vì sửa toàn bộ checklist trong một lần."
    - "Kiểm tra lại bằng truy vấn thật trên ChatGPT, Perplexity, Gemini hoặc Google AI Overviews để xem site có được nhắc/cite không."
  expectedResult: "Kết quả đúng là một báo cáo chỉ ra website đang thiếu gì cho AI search, kèm vài việc sửa cụ thể đủ để team SEO và dev cùng hành động."
  commonPitfalls:
    - "Dùng điểm GEO như cam kết traffic hoặc ranking, trong khi citation phụ thuộc cả thương hiệu và nguồn ngoài."
    - "Chỉ thêm llms.txt rồi bỏ qua chất lượng nội dung, schema và khả năng crawl."
    - "Không lưu baseline trước/sau nên không chứng minh được việc tối ưu có tác dụng."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: checklist AI SEO thực dụng cho agency Việt muốn kiểm tra khả năng được ChatGPT/Perplexity/AI Overview trích dẫn."
paidToolReplaced: "Một phần nhu cầu dùng các nền tảng GEO/AEO audit và citation tracking trả phí ở vòng kiểm tra ban đầu"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể giải thích GEO/AEO, nhưng bộ từ khoá Việt và cách đặt tool vào pitch/audit của agency SEO Việt cần lớp tổng hợp riêng."

scoreBreakdown:
  useCaseFit: 25
  projectHealth: 16
  costAdvantage: 14
  deployment: 10
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-29
nextReviewDueAt: 2026-09-27

tags: ["seo", "aeo", "geo", "ai-search", "llms-txt"]
publishedAt: 2026-06-29
week: "2026-W27"
draft: false
---

Draft foundation. Cần Luan review kỹ claim citation tracking và demo bằng một site Việt thật trước khi nâng confidence.
