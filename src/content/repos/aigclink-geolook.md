---
name: "GeoLook"
repoUrl: "https://github.com/aigclink/geolook"
oneLiner: "GeoLook là nền tảng self-hosted giúp bạn đo và cải thiện việc thương hiệu của mình có được các AI (ChatGPT, Perplexity, Gemini, DeepSeek...) nhắc tên và trích dẫn khi người dùng hỏi hay không, rồi biến chẩn đoán đó thành danh sách việc cần làm có nghiệm thu."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/aigclink/geolook/main/docs/demo.en.gif"
    caption: "Demo GeoLook chạy trọn vòng: đo hiện trạng → chẩn đoán → tạo ticket → nghiệm thu."
  - type: "image"
    url: "https://raw.githubusercontent.com/aigclink/geolook/main/docs/screenshots-en/engines.png"
    caption: "Bảng hiệu suất theo từng AI engine: tỉ lệ được nhắc, thứ hạng, tỉ trọng trích dẫn."
  - type: "image"
    url: "https://raw.githubusercontent.com/aigclink/geolook/main/docs/screenshots-en/siteaudit.png"
    caption: "Site audit dạng chuỗi 4 lớp phụ thuộc: Access → Orientation → Understanding → Quotability."

vertical: ["seo", "agency"]

maturity: "rising"
repoStats:
  stars: 437
  forks: 107
  note: "~13 ngày tuổi, ~33.6 sao/ngày"
  starsPerDay: 33.6
  ageDays: 13
  pushedAt: 2026-08-10T11:16:56Z
  archived: false
  openIssues: 1
standoutFeatures:
  - "Chạy trọn vòng GEO trong một dashboard: đo hiện trạng → chẩn đoán → chiến lược → ticket thực thi → nghiệm thu → gói bàn giao cho khách."
  - "Đo trên 17 engine (10 tự động qua API + 7 thủ công, gồm cả Google AI Overviews), lưu lại raw answer để 'sample replay' và cho phép con người sửa lại metadata khi regex parse sai."
  - "Site audit theo chuỗi 4 lớp (Access → Orientation → Understanding → Quotability), gồm cả dò WAF/CDN chặn AI-crawler bằng đúng UA thật mà trình duyệt không thấy được."
  - "Tạo ticket có tiêu chí nghiệm thu; README nêu 86% (18/21) tự nghiệm thu được trong dự án mẫu, kèm sinh sẵn llms.txt, JSON-LD và bộ đo AI-traffic cho GA4."
  - "Mọi dữ liệu nằm trong thư mục work/ trên máy bạn (JSON/Markdown); README định vị đây là 'implementation platform', không phải monitoring SaaS thu phí tháng."
signalSources:
  - label: "GitHub"
    url: "https://github.com/aigclink/geolook"
  - label: "Website"
    url: "https://geolook.cc"
  - label: "Live demo (read-only)"
    url: "https://geolook.cc/demo/"
  - label: "Product Hunt"
    url: "https://www.producthunt.com/products/geolook"

useCases:
  - "Kiểm tra thương hiệu/sản phẩm của bạn có được ChatGPT, Perplexity, Gemini... nhắc tên khi khách hỏi 'công cụ tốt nhất cho X' hay không, và đối thủ nào đang chiếm chỗ đó."
  - "Chẩn đoán vì sao AI không trích dẫn website của bạn: bị chặn crawl, thiếu đoạn nội dung trích dẫn được, hay vắng mặt ở các kênh mà AI thường dẫn nguồn."
  - "Xuất ticket có tiêu chí nghiệm thu và bộ tài sản triển khai (llms.txt, JSON-LD, checklist phân phối) để đội nội dung/kỹ thuật thực thi và đo lại trước–sau."
  - "Đóng gói báo cáo chẩn đoán, chiến lược, kế hoạch thực thi và CSV bàn giao cho khách nếu bạn làm dịch vụ SEO/GEO cho agency."

workflowStepReplaced: "Khâu đo và theo dõi 'độ hiện diện thương hiệu trên AI search' vốn phải mua monitoring SaaS thu phí tháng, cộng khâu tự chấm điểm và tự tay lập kế hoạch cải thiện."
timeOrCostSaved: "Thay được phí thuê bao tool giám sát GEO; chi phí thật còn lại chủ yếu là tiền gọi API engine khi lấy mẫu tự động (README nói có thể bằng 0 nếu lấy mẫu thủ công). Chưa có số liệu VN để khẳng định mức tiết kiệm cụ thể."
localProblem: "Marketer và agency ở Việt Nam bắt đầu thấy khách hàng hỏi thẳng ChatGPT/Gemini 'app đặt vé nào tốt', 'phần mềm kế toán nào ngon' thay vì search Google, nhưng chưa có cách đo xem thương hiệu mình có lọt vào câu trả lời của AI không, và nếu không thì sửa từ đâu."
localEvidence: "Chủ đề GEO/AEO (tối ưu để AI nhắc tên) đang nổi lên trong cộng đồng SEO/marketing Việt, và môi trường này còn có sẵn nhiều skill GEO/AEO. GeoLook đáng chú ý vì đi xa hơn 'dashboard theo dõi' tới tận ticket + nghiệm thu, nhưng ma trận engine của nó nghiêng về engine phương Tây và Trung Quốc — cần Luan test xem nó xử lý câu hỏi tiếng Việt và tập engine người Việt hay dùng tới đâu."

vnMarket:
  insight: "Ở Việt Nam, phần lớn đội SEO vẫn tối ưu cho Google truyền thống; khái niệm GEO/AEO (để AI chủ động nhắc và trích dẫn thương hiệu) mới ở giai đoạn đầu. Chưa có công cụ Việt hoá đo việc này, nên đa số hoặc làm thủ công (tự hỏi ChatGPT rồi chụp màn hình) hoặc chưa làm gì. Một tool open-source đo được nhiều engine là khoảng trống rõ, với điều kiện đội biết tự host và tự thêm bộ câu hỏi tiếng Việt."
  seoKeywords: ["GEO là gì", "AEO tối ưu hoá", "tối ưu cho ChatGPT", "AI search optimization", "generative engine optimization", "thương hiệu xuất hiện trên AI", "công cụ theo dõi AI visibility", "tối ưu để AI trích dẫn"]
  notes: "Từ khoá dựa trên cách cộng đồng SEO/marketing Việt bắt đầu gọi tên chủ đề GEO/AEO. Chưa kiểm tra volume thực tế, cũng chưa xác nhận GeoLook có bộ engine/ngôn ngữ phù hợp thị trường Việt."

usabilityRisk: "Đây là công cụ dòng lệnh, self-host, chạy trên macOS/Linux (Windows phải qua WSL vì dùng khoá file fcntl) — không hợp với marketer không rành kỹ thuật nếu không có người dựng. Lấy mẫu tự động tốn ngân sách API engine; engine và kênh mặc định nghiêng về thị trường phương Tây/Trung Quốc nên câu hỏi và kênh tiếng Việt phải tự thêm. README nói rõ đây là tool đơn máy, chưa có tài khoản/cộng tác nhóm, và cờ 'nghi ngờ tiêu cực' chỉ là gợi ý cần người kiểm, không phải kết luận."

practitionerGuide:
  outcome: "Bạn dựng được dashboard GeoLook trên localhost, chạy được một vòng lấy mẫu đầu tiên cho một thương hiệu và nhìn thấy thương hiệu đó được (hay không được) các AI engine nhắc tên, kèm chẩn đoán sơ bộ vì sao."
  prerequisites:
    - "Máy macOS hoặc Linux (Windows phải chạy qua WSL); Python 3.9 trở lên; ba gói requests, beautifulsoup4, lxml."
    - "Ít nhất một danh sách câu hỏi mà khách hàng mục tiêu hay hỏi AI (có thể tự thêm câu tiếng Việt); tuỳ chọn một API key engine (vd DeepSeek/GLM) nếu muốn lấy mẫu tự động thay vì thủ công."
    - "Người đọc được README, chạy lệnh terminal và hiểu rủi ro ToS khi dùng chế độ lấy mẫu tự động của extension Chrome."
  steps:
    - "Clone repo, cài ba gói bằng pip3, rồi chạy 'python3 scripts/geo.py ui' để mở dashboard ở http://127.0.0.1:8765."
    - "Tạo một brand/dự án, nhập bộ câu hỏi mục tiêu (thêm câu tiếng Việt nếu khách của bạn ở VN)."
    - "Chạy lấy mẫu: dùng API key nếu có, hoặc dùng luồng lấy mẫu thủ công / extension Chrome cho các engine không có API."
    - "Xem trang Status để đọc tỉ lệ được nhắc, thứ hạng, đối thủ; mở Diagnosis để xem site audit 4 lớp và các điểm chặn."
    - "Sinh thử ticket và bộ tài sản (llms.txt, JSON-LD), rồi đánh giá xem đầu ra có đủ tốt để giao cho đội nội dung/kỹ thuật không."
  expectedResult: "Một dashboard chạy được với ít nhất một vòng mẫu hoàn chỉnh: bạn thấy rõ thương hiệu đứng ở đâu trong câu trả lời của từng engine, đối thủ nào chiếm chỗ, và có danh sách việc cần làm kèm tiêu chí nghiệm thu."
  commonPitfalls:
    - "Chạy trên Windows native rồi lỗi vì code dùng fcntl — cần WSL."
    - "Kỳ vọng có sẵn engine và câu hỏi tiếng Việt; thực tế phải tự thêm bộ câu hỏi và chọn engine phù hợp thị trường VN."
    - "Bật chế độ lấy mẫu tự động của extension Chrome mà bỏ qua cảnh báo rủi ro ToS và giới hạn tốc độ trong README của nó."
    - "Coi cờ 'suspected negative' hay điểm số là kết luận cuối, trong khi README nói đó chỉ là lead cần người kiểm."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: GEO/AEO đang thành từ khoá nóng ở VN — dùng một tool open-source để tự đo xem thương hiệu có được AI nhắc tên không, thay vì đoán hoặc mua SaaS thu phí tháng."
paidToolReplaced: "Thay phần giám sát của các monitoring SaaS về AI visibility/GEO (Peec AI, Otterly, Profound... loại tính phí tháng)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt README GeoLook, nhưng góc thực dụng cho VN — engine nào quan trọng với người Việt, tool có xử lý tiếng Việt không, ma sát WSL, cách agency đóng gói dịch vụ GEO — thì practitioner không lấy được từ việc hỏi AI hay xem Trending."

scoreBreakdown:
  useCaseFit: 22
  projectHealth: 19
  costAdvantage: 18
  deployment: 8
  documentation: 14
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-11
nextReviewDueAt: 2026-11-09

tags: ["geo", "aeo", "ai-search", "ai-visibility", "seo", "self-hosted", "llm"]
publishedAt: 2026-08-11
week: "2026-W33"
draft: true
---

Draft foundation từ pipeline ngày 2026-08-11. Repo rất mới (13 ngày, 437 sao) và README cực chi tiết — cần Luan kiểm hai điều trước khi nâng confidence: (1) GeoLook xử lý câu hỏi/engine tiếng Việt tới đâu, vì ma trận mặc định nghiêng về engine phương Tây + Trung Quốc; (2) ma sát cài đặt thực tế trên máy Windows (phải qua WSL vì fcntl). Media lấy từ đường dẫn ảnh trong README (docs/demo.en.gif, docs/screenshots-en/*) — nên xác nhận ảnh còn sống trước khi publish.
