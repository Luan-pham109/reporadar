---
name: "Potato (AI Visibility Easy Tool)"
repoUrl: "https://github.com/onism1767-creator/potato"
oneLiner: "Potato là công cụ chạy trên máy bạn để đo xem thương hiệu của bạn có được Claude nhắc tên và trích dẫn trong câu trả lời web-search hay không, rồi xuất báo cáo HTML có khoảng tin cậy — chấm điểm bằng luật cố định chứ không để AI tự phán."
media: []

vertical: ["seo"]

maturity: "rising"
repoStats:
  stars: 168
  forks: 0
  note: "~58 ngày tuổi, ~2.9 sao/ngày"
  starsPerDay: 2.9
  ageDays: 58
  pushedAt: 2026-06-22T17:29:01Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Đo độ hiện diện thương hiệu bên trong câu trả lời web-search của Claude: hỏi một bộ câu hỏi cố định (đóng băng), gom mọi lần nhắc tên và mọi link trích dẫn, rồi chấm điểm."
  - "Chấm điểm hoàn toàn bằng luật xác định (deterministic), KHÔNG có 'AI judge': AI chỉ dùng để soạn nháp câu hỏi (bạn duyệt và đóng băng) và để viết lời cho báo cáo — không quyết định con số nào."
  - "Đếm bảo thủ: chỉ tên thương hiệu rõ ràng mới được tính; viết tắt/tên mập mờ được ghi lại nhưng KHÔNG tính, và tách riêng trích dẫn 'owned' (domain của bạn) với 'earned' (bên thứ ba)."
  - "Bản Windows portable đóng gói sẵn Python ký bởi python.org (không phải .exe tự chế) nên Smart App Control không chặn — người không rành kỹ thuật chỉ cần giải nén và double-click, không cần cài Python."
  - "Chạy 100% cục bộ; có chế độ mock preview $0 không cần API key; báo cáo là một file HTML offline, mọi con số kèm khoảng tin cậy Wilson 95% và một 'health light'."
signalSources:
  - label: "GitHub"
    url: "https://github.com/onism1767-creator/potato"

useCases:
  - "Kiểm tra xem khi người dùng hỏi Claude 'công cụ/dịch vụ tốt nhất cho X', thương hiệu của bạn có được nhắc tên và trích dẫn hay không, và đối thủ nào đang chiếm chỗ đó."
  - "Chạy lại cùng một bộ câu hỏi đã đóng băng theo định kỳ để theo dõi 'share of voice' và độ ổn định của thương hiệu trong câu trả lời Claude qua nhiều vòng."
  - "Phân biệt trích dẫn từ chính website bạn (owned) với trích dẫn từ trang bên thứ ba (earned) để biết nên đầu tư vào nội dung nhà hay đi PR/booking ở kênh ngoài."
  - "Xuất một báo cáo HTML một-file có khoảng tin cậy để đưa cho sếp/khách như bằng chứng khách quan, thay vì tự hỏi ChatGPT rồi chụp màn hình lẻ tẻ."

workflowStepReplaced: "Khâu tự tay hỏi AI rồi chụp màn hình để 'đoán' thương hiệu có xuất hiện không — thay bằng một phép đo lặp lại được, có luật rõ ràng và khoảng tin cậy."
timeOrCostSaved: "Chế độ mock preview là $0 và không cần key; chi phí thật chỉ phát sinh khi chạy 'real run' gọi Claude bằng API key của bạn. Chưa có số liệu VN để khẳng định mức tiết kiệm cụ thể."
localProblem: "Đội marketing/SEO ở VN bắt đầu thấy khách hàng hỏi thẳng ChatGPT/Claude 'app đặt vé nào tốt', 'phần mềm kế toán nào ngon' thay vì search Google, nhưng chưa có cách đo lặp lại được xem thương hiệu mình có lọt vào câu trả lời AI không — hiện đa số chỉ tự hỏi rồi chụp màn hình, mỗi lần ra một kết quả khác nhau."
localEvidence: "Chủ đề GEO/AEO (tối ưu để AI nhắc tên) đang nổi trong cộng đồng SEO/marketing Việt, và môi trường này có sẵn nhiều skill GEO/AEO. Điểm khác biệt của Potato so với các dashboard theo dõi là nó chỉ đo đúng một engine (Claude web-search) nhưng làm rất kỷ luật về tính lặp lại — hợp để làm bằng chứng, kém hợp nếu bạn cần bao phủ nhiều engine. Cần Luan test xem nó xử lý câu hỏi và thương hiệu tiếng Việt tới đâu."

vnMarket:
  insight: "Ở VN khái niệm GEO/AEO mới ở giai đoạn đầu; phần lớn đội SEO vẫn tối ưu cho Google truyền thống và khi muốn kiểm tra 'AI có nhắc mình không' thì làm thủ công. Potato lấp một khoảng hẹp nhưng cụ thể: đo đúng Claude, chạy trên máy, không cần hạ tầng — phù hợp người muốn một phép đo bằng chứng lặp lại được hơn là một dashboard đa-engine. Điều kiện là đội chịu tự thêm bộ câu hỏi tiếng Việt và có (hoặc chấp nhận không có) API key Claude."
  seoKeywords: ["GEO là gì", "AEO tối ưu hoá", "tối ưu cho Claude", "AI visibility là gì", "đo thương hiệu trên AI", "generative engine optimization", "thương hiệu xuất hiện trên ChatGPT", "công cụ theo dõi AI visibility"]
  notes: "Từ khoá dựa trên cách cộng đồng SEO/marketing Việt bắt đầu gọi tên chủ đề GEO/AEO. Chưa kiểm tra volume thực tế, cũng chưa xác nhận Potato xử lý tốt câu hỏi/thương hiệu tiếng Việt. Repo mới, 0 fork — cộng đồng chưa hình thành."

usabilityRisk: "Chỉ đo MỘT engine (Claude web-search), không phải ChatGPT/Gemini/Perplexity — nếu bạn cần bức tranh đa-engine thì đây không phải công cụ đủ. Bản Windows portable dễ cho người không rành kỹ thuật, nhưng macOS/Linux phải cài qua pip. 'Real run' cần API key Claude và tốn tiền; chế độ $0 chỉ là mock preview với dữ liệu giả để xem thử giao diện báo cáo. Repo mới (58 ngày, 168 sao, 0 fork), tác giả một mình, chưa có cộng đồng VN."

practitionerGuide:
  outcome: "Bạn chạy được một vòng đo đầu tiên cho một thương hiệu và mở được báo cáo HTML cho thấy thương hiệu đó được (hay không được) Claude nhắc tên và trích dẫn, kèm share-of-voice so với vài đối thủ."
  prerequisites:
    - "Windows: tải file zip portable ở trang Releases là đủ, không cần cài Python. macOS/Linux: cần Python 3.12+ và cài bằng 'pip install -e \".[dev]\"'."
    - "Một danh sách thương hiệu (của bạn + vài đối thủ) và, nếu muốn chạy thật thay vì mock, một API key Claude của riêng bạn."
    - "Chấp nhận rằng chế độ $0 là mock (dữ liệu giả để xem giao diện); muốn số thật thì phải tốn tiền gọi API."
  steps:
    - "Windows: tải 'AI-Visibility-Easy-Tool-windows.zip' từ Releases, GIẢI NÉN cả thư mục ra trước (đừng chạy trong file zip), rồi double-click 'AI-Visibility-Easy-Tool.bat'."
    - "Một cửa sổ console đen mở ra và trình duyệt tự bật wizard; giữ cửa sổ đó mở trong lúc dùng."
    - "Bước Brand: nhập tên thương hiệu, domain chính thức, ngành hàng (tuỳ chọn thêm alias và đối thủ)."
    - "Bước Draft & review: tạo bộ câu hỏi (template miễn phí $0 không cần key, hoặc để AI soạn bằng key của bạn), sửa lại rồi chạy quality check để đóng băng."
    - "Bước Run & open report: chọn mock preview $0 để xem giao diện, hoặc real run gọi Claude bằng key, rồi mở báo cáo HTML."
  expectedResult: "Một file HTML offline hiển thị: tỉ lệ được nhắc tên, độ hợp lệ của các link trích dẫn, tách owned/earned, share of voice, độ ổn định và một bảng xếp hạng có khoảng tin cậy 95%. Với mock preview, các con số là dữ liệu giả — chỉ dùng để đánh giá xem giao diện báo cáo có đủ tốt không."
  commonPitfalls:
    - "Chạy file .bat ngay bên trong file zip (chưa giải nén) khiến tool lỗi — phải giải nén cả thư mục trước."
    - "Nhầm mock preview $0 là số đo thật; đó là dữ liệu giả, số thật cần real run có tính phí API."
    - "Kỳ vọng đo được ChatGPT/Gemini/Perplexity; Potato hiện chỉ đo Claude web-search."
    - "Bộ câu hỏi để mặc định tiếng Anh trong khi khách của bạn ở VN — cần tự thêm câu hỏi tiếng Việt trước khi đóng băng."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: thay vì tự hỏi Claude rồi chụp màn hình để đoán thương hiệu có xuất hiện không, dùng một tool đo lặp lại được, chấm bằng luật cố định và có khoảng tin cậy — làm bằng chứng GEO đưa cho sếp/khách."
paidToolReplaced: "Thay phần đo AI visibility của các monitoring SaaS (Peec AI, Otterly, Profound... loại tính phí tháng), nhưng chỉ ở phạm vi engine Claude."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt README Potato, nhưng góc thực dụng cho VN — tool này chỉ đo Claude nên hợp/không hợp bài toán nào, ma sát mock-vs-real, chi phí API thật, và việc phải tự thêm câu hỏi tiếng Việt — thì practitioner không lấy được từ việc hỏi AI hay xem Trending."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 12
  costAdvantage: 16
  deployment: 11
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-19
nextReviewDueAt: 2026-11-17

tags: ["geo", "aeo", "ai-visibility", "ai-search", "seo", "brand-monitoring", "claude", "self-hosted", "llm"]
publishedAt: 2026-08-19
week: "2026-W34"
draft: true
---

Draft foundation từ pipeline ngày 2026-08-19. Repo mới (58 ngày, 168 sao, 0 fork), tác giả một mình — cộng đồng chưa hình thành, nên để confidence "low".

Cần Luan kiểm trước khi nâng confidence/publish:
1. Phạm vi hẹp có chủ đích: Potato CHỈ đo Claude web-search, không đa-engine như GeoLook/OneGlanse. Cần định vị rõ trong bài để không gây hiểu lầm là tool GEO toàn diện.
2. Media: queue trả về media rỗng nên record để `media: []`. README có ảnh ở `docs/assets/potato-banner.svg`, `docs/assets/gui-wizard.png`, `docs/assets/report-multi-brand.png` — nếu muốn thumbnail, cần xác nhận nhánh mặc định của repo rồi hotlink thủ công (chưa làm để tránh ảnh vỡ).
3. Chưa xác nhận tool xử lý câu hỏi/thương hiệu tiếng Việt tới đâu.
4. scoreBreakdown.projectHealth = 12 lấy từ suggestedHealthScore của queue (repo rất mới, 0 fork). Các điểm còn lại do skill chấm sơ bộ, cần review khi test thật.
