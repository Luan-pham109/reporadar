---
name: "Easel"
repoUrl: "https://github.com/ZJU-REAL/Easel"
oneLiner: "Easel là một AI agent nguồn mở lo trọn quy trình làm nội dung mạng xã hội — từ bắt trend, lên kế hoạch, sản xuất (chữ/ảnh/video) đến đăng bài và đo hiệu quả — nhưng đang nhắm vào các nền tảng Trung Quốc (Xiaohongshu, Douyin, Zhihu, Bilibili)."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/ZJU-REAL/Easel/main/assets/readme/features/trend-radar.png"
    caption: "Trend radar: dò xu hướng để gợi ý chủ đề nội dung."

vertical: ["agency", "creative"]

maturity: "rising"
repoStats:
  stars: 84
  note: "Số sao lấy ở thời điểm discovery qua GitHub search; chưa fetch được metric GitHub đầy đủ (tuổi repo, sao/ngày)."
standoutFeatures:
  - "Gộp cả 5 khâu làm nội dung vào một luồng: dò trend → lên lịch → sản xuất → đăng → phân tích attribution."
  - "Có hệ 'account profiling' giữ giọng thương hiệu và hiểu tệp khán giả xuyên suốt các bài."
  - "Kèm 112+ 'skill' dựng sẵn để sinh nội dung ở nhiều định dạng: text, ảnh, audio, video."
  - "Đăng bài & lấy số liệu thật trên Xiaohongshu, Douyin, Kuaishou, Zhihu, Bilibili, WeChat (nền tảng Trung Quốc)."
signalSources:
  - label: "GitHub"
    url: "https://github.com/ZJU-REAL/Easel"

useCases:
  - "Dựng bộ khung nội dung đa nền tảng từ một ý tưởng: agent tự tách thành bài dạng chữ, ảnh và video theo từng kênh."
  - "Giữ giọng thương hiệu đồng nhất khi chạy nhiều tài khoản, nhờ hồ sơ account lưu personality và tệp khán giả."
  - "Thử nghiệm tự động hoá khâu lên lịch + đăng bài nếu team bạn có làm nội dung cho thị trường Trung Quốc."

workflowStepReplaced: "Khâu vận hành nội dung social đa nền tảng — thay việc lên lịch, viết caption và cắt định dạng thủ công bằng một agent điều phối."
timeOrCostSaved: "Có thể cắt kha khá giờ dựng khung nội dung và cắt định dạng theo kênh, nhưng chưa có số liệu thực nghiệm cho tệp VN; cần tự đo."
localProblem: "Agency và team content ở VN thường phải tự chế pipeline (Trello + AI viết + designer + người đăng) cho nhiều kênh cùng lúc, tốn người điều phối. Một agent gộp cả luồng nghe hấp dẫn với mô hình này."
localEvidence: "Nhiều agency nhỏ ở VN vận hành 5-10 kênh khách hàng song song và than về khâu điều phối; tuy nhiên Easel đăng bài vào nền tảng Trung Quốc chứ chưa hỗ trợ Facebook/TikTok/Instagram nên phần 'publish' gần như không dùng trực tiếp được ở VN — mới quan sát qua README, chưa test."

vnMarket:
  insight: "Ở VN nhu cầu 'một chỗ lo cả pipeline content' là có thật, nhưng các đội đang xoay quanh Facebook/TikTok/Instagram/YouTube. Easel mạnh phần agent điều phối + sinh nội dung, còn phần đăng/đo lại khoá vào hệ sinh thái Trung Quốc — nên ở VN giá trị chủ yếu là học kiến trúc agent và tận dụng khâu sản xuất, không phải plug-and-play."
  seoKeywords: ["ai agent làm content mạng xã hội", "tự động hoá đăng bài đa nền tảng", "công cụ quản lý nội dung social nguồn mở", "ai viết content đa kênh", "agent ai social media"]
  notes: "Suy luận từ README và danh sách nền tảng hỗ trợ. Chưa thấy thảo luận tiếng Việt về Easel; chưa test trên tệp VN."

usabilityRisk: "Publish/analytics khoá vào nền tảng Trung Quốc — không dùng trực tiếp cho Facebook/TikTok/IG như dân VN cần. Cài đặt cần Python 3.10+, Node 22.19+, Git (tùy chọn FFmpeg) và ít nhất một API key LLM (Claude/tương thích) — có chi phí LLM chạy dài hạn. Chưa có cộng đồng VN, giao diện/tài liệu thiên tiếng Anh/Trung."

practitionerGuide:
  outcome: "Sau guide này bạn dựng được Easel chạy local ở localhost:7860, tạo một hồ sơ account và cho agent sinh thử một khung nội dung nhiều định dạng — để đánh giá phần sản xuất có hợp workflow của bạn không."
  prerequisites:
    - "Máy Linux hoặc macOS, cài Python 3.10+, Node.js 22.19+ và Git."
    - "Một API key Claude (Anthropic) hoặc LLM tương thích; chuẩn bị ngân sách token."
    - "Tùy chọn: FFmpeg nếu muốn xử lý video, và API key dịch vụ voice/music/video nếu định thử các skill đó."
  steps:
    - "Clone repo và cài phụ thuộc theo README (backend FastAPI/Python, frontend React/Node)."
    - "Cấu hình API key LLM trong file env theo hướng dẫn."
    - "Chạy server rồi mở giao diện web ở http://localhost:7860."
    - "Tạo một 'account profile' (giọng, tệp khán giả) và giao cho agent một chủ đề để nó dựng khung nội dung."
    - "Bỏ qua/để trống phần publish tới nền tảng Trung Quốc; chỉ đánh giá chất lượng nội dung sinh ra."
  expectedResult: "Agent trả về một khung nội dung đa định dạng (chữ/ảnh/video) bám theo hồ sơ account bạn khai; đủ để bạn xét xem phần sản xuất có tiết kiệm thời gian thật không."
  commonPitfalls:
    - "Kỳ vọng đăng thẳng lên Facebook/TikTok — Easel không hỗ trợ, phần publish nhắm nền tảng Trung Quốc."
    - "Quên giới hạn ngân sách LLM nên tốn token khi chạy nhiều skill liên tục."
    - "Thiếu Node/Python đúng phiên bản khiến cài đặt gãy giữa chừng."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Nhìn kiến trúc một AI agent lo trọn pipeline content social' — dùng Easel làm case study để dân agency VN hình dung mô hình, thay vì bán như tool dùng ngay."
paidToolReplaced: "Các nền tảng quản lý & sản xuất nội dung social trả phí (kiểu Buffer/Later + công cụ AI viết content), nhưng Easel chỉ thay được phần điều phối + sản xuất, không thay phần đăng cho kênh VN."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được repo, nhưng đánh giá 'phần publish khoá vào nền tảng Trung Quốc nên không dùng trực tiếp ở VN' và cách tận dụng riêng khâu sản xuất là phần cần người biên tập soi và test thật."

tags: ["ai-agent", "social-media", "content", "open-source", "agency", "creative"]
scoreBreakdown:
  useCaseFit: 11
  projectHealth: 12
  costAdvantage: 10
  deployment: 8
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-09-01
nextReviewDueAt: 2026-11-30
publishedAt: 2026-09-01
week: "2026-W36"
draft: true
---

Record nháp foundation (pipeline 2026-09-01).

Cần Luan review trước khi publish:
- **Rào cản nền tảng:** Easel publish/analytics vào nền tảng Trung Quốc (Xiaohongshu, Douyin, Bilibili...), không hỗ trợ Facebook/TikTok/IG. Cân nhắc kỹ có nên lên site không, hay chỉ dùng làm case study kiến trúc agent cho dân agency.
- **repoStats:** chỉ có stars (84) từ discovery-time GitHub search; chưa fetch được forks/sao-ngày/tuổi repo qua signals. Nên chạy fetch-signals để bổ sung trước khi publish.
- **media:** đường dẫn raw README (`assets/readme/features/trend-radar.png`) mang tính suy đoán theo mô tả README — cần kiểm hotlink có sống không trước khi publish.
- **scoreBreakdown.projectHealth (12):** do mình tự ước lượng vì queue không kèm suggestedHealthScore/projectHealth; nên chấm lại sau khi có metric GitHub.
