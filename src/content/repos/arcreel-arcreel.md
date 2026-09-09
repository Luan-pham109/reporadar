---
name: "ArcReel"
repoUrl: "https://github.com/ArcReel/ArcReel"
oneLiner: "ArcReel là xưởng dựng video AI tự host: nạp tiểu thuyết, kịch bản hoặc ảnh sản phẩm vào, nó tự tách nhân vật, cảnh, đạo cụ, phân cảnh rồi ra clip và cả bản nháp CapCut/CapCut (Jianying) để biên tập tiếp."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/ArcReel/ArcReel/main/docs/assets/hero-screenshot.png"
    caption: "Giao diện xưởng dựng video ArcReel."

vertical: ["creative", "agency", "ecom"]

maturity: "rising"
repoStats:
  stars: 3893
  forks: 782
  note: "~180 ngày tuổi, ~21.6 sao/ngày"
  starsPerDay: 21.6
  ageDays: 180
  pushedAt: "2026-08-06"
  archived: false
  openIssues: 115
standoutFeatures:
  - "Biến tiểu thuyết, kịch bản hoàn chỉnh hoặc ảnh sản phẩm thành nhân vật, cảnh, đạo cụ, phân cảnh, video và bản nháp CapCut (Jianying) trong cùng một pipeline."
  - "Giữ nhất quán xuyên cảnh bằng cách chốt trước tài sản nhân vật/cảnh/đạo cụ rồi cho các shot sau tham chiếu lại, giảm trôi tạo hình."
  - "Điều phối bằng Claude Agent SDK (Skill + Subagent) với luồng có thể tạm dừng, khôi phục và rollback từng phiên bản."
  - "Quản lý nhiều nhà cung cấp model (Gemini, OpenAI, Grok, Kling, MiniMax, 阿里百炼, 火山方舟, Vidu...) và theo dõi chi phí ở mức dự án, tập, shot."
signalSources:
  - label: "GitHub"
    url: "https://github.com/ArcReel/ArcReel"

useCases:
  - "Chuyển tiểu thuyết hoặc truyện dài thành phim/anime ngắn nhiều tập với nhân vật giữ được ngoại hình xuyên suốt các cảnh."
  - "Dựng video kể chuyện, review sách hoặc nội dung 'đọc truyện' dạng dọc kèm phân cảnh và voice, rồi xuất bản nháp CapCut để chỉnh phụ đề, nhạc, nhịp."
  - "Từ vài ảnh sản phẩm dựng short quảng cáo/bán hàng có kịch bản và khung hình bám sản phẩm, ước tính và theo dõi chi phí trước khi chạy loạt."
  - "Chạy nhiều biến thể một cảnh (storyboard-to-video, ảnh-to-video, reference-to-video) để so cách kể trước khi đầu tư dựng kỹ."

workflowStepReplaced: "Khâu tiền kỳ và dựng thô của video kể chuyện/short drama: bóc nhân vật – cảnh – đạo cụ, chia tập, chuẩn hoá kịch bản, ra phân cảnh, sinh clip và xuất bản nháp để editor xử tiếp."
timeOrCostSaved: "Có thể cắt nhiều giờ ở khâu chuẩn bị tài sản và dựng nháp cho mỗi tập; chi phí thực tế phụ thuộc số shot, model video đang dùng và mức chất lượng cần duyệt."
localProblem: "Ekip làm phim AI / short drama và shop ecom Việt muốn ra series nhiều tập hoặc loạt video bán hàng nhưng nghẽn ở chỗ giữ nhân vật/sản phẩm nhất quán giữa các cảnh và kiểm soát chi phí gọi model. Làm thủ công qua nhiều tool rời rất dễ trôi tạo hình và đội chi phí."
localEvidence: "Nhu cầu 'AI làm phim từ truyện', 'tạo video từ tiểu thuyết', 'AI dựng short drama' và 'xuất bản nháp CapCut' đang rõ trong cộng đồng creator Việt. Riêng độ bão hoà nội dung tiếng Việt về ArcReel vẫn cần kiểm tay thêm."

vnMarket:
  insight: "Dân làm nội dung Việt đang chạy short drama / phim AI kể truyện bằng cách ghép nhiều tool (viết kịch bản một nơi, tạo hình một nơi, dựng CapCut một nơi), nên rất khổ ở việc giữ nhân vật giống nhau qua từng cảnh và đội chi phí gọi API. ArcReel gom cả chuỗi vào một pipeline có tài sản nhân vật/cảnh tái sử dụng và có theo dõi chi phí — lợi thế nội dung Việt nằm ở hướng dẫn workflow thực chiến (giữ nhất quán, chọn nhà cung cấp model rẻ, xuất CapCut) hơn là chỉ dịch cách cài."
  seoKeywords: ["AI làm phim từ truyện", "tạo video từ tiểu thuyết", "AI dựng short drama", "tạo video AI tự host", "xuất bản nháp CapCut từ AI", "AI tạo storyboard"]
  notes: "Suy luận từ README, topic GitHub và nhu cầu tìm kiếm quanh phim AI/short drama tại VN. Cần kiểm tay YouTube/Facebook/TikTok Việt trước khi publish."

usabilityRisk: "ArcReel không phải bấm một phát ra phim. Bạn cần Docker, credential cho AI assistant và ít nhất một bộ năng lực text/hình/video (Gemini, Kling, OpenAI...), nên vẫn tốn chi phí model theo lượt. Windows native chỉ chạy được luồng cơ bản, sandbox agent bị giảm — repo khuyến nghị Linux/macOS/WSL2/Docker. Tài liệu chủ yếu tiếng Trung/Anh, chưa có cộng đồng VN. Bản SQLite mặc định không cô lập người dùng, không hợp cho nhiều người dùng chung một instance."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một tập/short ngắn dựng từ một đoạn truyện hoặc vài ảnh sản phẩm, với nhân vật/sản phẩm giữ được nhất quán, đủ để đánh giá cách kể trước khi làm cả series."
  prerequisites:
    - "Docker và Docker Compose, khuyến nghị từ 2 GB RAM trống trở lên."
    - "Credential cho AI assistant của ArcReel và ít nhất một nhà cung cấp text/hình/video (ví dụ Gemini hoặc Kling); cấu hình TTS nếu cần voice."
    - "Một mẩu nội dung thật: một chương truyện ngắn, một kịch bản 30–60 giây, hoặc một bộ ảnh sản phẩm."
  steps:
    - "Clone repo, vào thư mục deploy, copy .env.example thành .env rồi chạy docker compose up -d; kiểm tra http://localhost:1241/health và đăng nhập bằng tài khoản admin."
    - "Vào Settings cấu hình credential cho AI assistant và các nhà cung cấp text/hình/video, bắt đầu bằng một nhà cung cấp để dễ kiểm soát chi phí."
    - "Tạo project nhỏ với một đoạn nội dung ngắn, để ArcReel bóc nhân vật/cảnh/đạo cụ và chốt tài sản tham chiếu trước khi sinh phân cảnh."
    - "Sinh storyboard rồi chạy một cách tạo video (storyboard-to-video hoặc reference-to-video) cho vài shot, duyệt lại từng shot và regenerate chỗ bị trôi tạo hình."
    - "Xuất bản nháp CapCut (Jianying) hoặc ghép thành phẩm, xem lại chi phí thực tế theo shot/tập trước khi quyết định nhân rộng cả series."
  expectedResult: "Một tập/short xem được từ đầu tới cuối với nhân vật hoặc sản phẩm giữ được nhất quán tương đối, kèm số liệu chi phí đủ để bạn ước lượng khi chạy loạt."
  commonPitfalls:
    - "Bật quá nhiều nhà cung cấp và tuỳ chọn ngay lần đầu, lỗi cấu hình và chi phí nhiều hơn giá trị thu được."
    - "Bỏ qua bước chốt tài sản nhân vật/cảnh nên các shot sau trôi ngoại hình, mất công regenerate."
    - "Chạy nội dung dài mà không duyệt tay phần chia tập, nhân vật và các nút cốt truyện, dẫn tới thành phẩm lệch."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Dùng ArcReel dựng một tập short drama từ một chương truyện, giữ nhân vật nhất quán và xuất bản nháp CapCut' thay vì chỉ làm bài cài đặt Docker."
paidToolReplaced: "Các SaaS dựng video/short drama từ truyện (Runway/Pika + quy trình CapCut thủ công)"
alternativeTo:
  - name: "Runway"
    slug: "runway"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt ArcReel là công cụ tạo video từ truyện, nhưng góc dùng cho ekip short drama/ecom Việt, cách giữ nhất quán nhân vật, kiểm soát chi phí model và đưa vào workflow CapCut là phần cần biên tập theo ngữ cảnh VN."

tags: ["ai-video", "creative", "agency", "ecom", "short-drama", "storyboard", "novel-to-video", "self-hosted"]
scoreBreakdown:
  useCaseFit: 19
  projectHealth: 21
  costAdvantage: 11
  deployment: 5
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-08-06
nextReviewDueAt: 2026-11-04
publishedAt: 2026-08-06
week: "2026-W32"
draft: true
---

Record nháp sinh trong daily pipeline ngày 2026-08-06 (queue score 1294.65). Trước khi publish cần: kiểm tay độ bão hoà nội dung tiếng Việt về ArcReel; xác nhận media hero-screenshot render đúng trên trang chi tiết (media không có trong queue, lấy từ README repo); và cân nhắc bổ sung 1–2 ảnh/clip demo nếu tìm được hotlink ổn định. Repo dùng AGPL-3.0 — nếu có ý định nhắc tới khía cạnh thương mại/white-label thì lưu ý điều khoản license.
