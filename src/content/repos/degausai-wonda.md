---
name: "Wonda CLI"
repoUrl: "https://github.com/degausai/wonda"
oneLiner: "Wonda là một CLI trả phí theo credit, cho agent AI (Claude Code, Cursor, Codex...) tự tạo ảnh, video, nhạc, giọng nói và đăng thẳng lên Instagram/TikTok/LinkedIn/X ngay từ terminal, không cần mở app riêng cho từng việc."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/degausai/wonda/main/assets/banner.png"
    caption: "Banner giới thiệu Wonda CLI — tạo nội dung AI ngay từ terminal."
  - type: "image"
    url: "https://raw.githubusercontent.com/degausai/wonda/main/assets/terminal.gif"
    caption: "Demo chạy lệnh Wonda ngay trong terminal."
  - type: "image"
    url: "https://raw.githubusercontent.com/degausai/wonda/main/assets/example-5.webp"
    caption: "Một mẫu ad creative dựng bằng Wonda."

vertical: ["agency", "creative"]

maturity: "rising"
repoStats:
  stars: 133
  forks: 20
  note: "~106 ngày tuổi, ~1.3 sao/ngày"
  starsPerDay: 1.3
  ageDays: 106
  pushedAt: "2026-07-03T14:03:27Z"
  archived: false
  openIssues: 2
standoutFeatures:
  - "Một CLI duy nhất gộp cả sinh nội dung (ảnh/video/nhạc/giọng nói), chỉnh sửa video kiểu TikTok (phụ đề động, ghép nhạc nền, cắt cảnh tự động...) và đăng bài lên Instagram/TikTok/LinkedIn/X/Reddit — không phải dán qua nhiều tool rời."
  - "Ra mắt dưới dạng plugin gốc cho agent code (Claude Code, Cursor, Codex, Windsurf, Copilot, Cline, OpenCode, Zed) — cài một lần là agent tự đọc lệnh `--help` và biết cách dùng, không cần học cú pháp CLI riêng."
  - "Có sẵn lệnh soi đối thủ: `scrape ads` tra Meta Ads Library, `scrape social` lấy bài/engagement/bio đối thủ trên Instagram-TikTok-Reddit, `analytics` xem hiệu suất tài khoản đã kết nối."
  - "Toàn bộ output là JSON qua stdout (lỗi qua stderr) và có `--jq` dựng sẵn, nên ghép được thẳng vào script/pipeline mà không cần cài thêm jq ngoài."
signalSources:
  - label: "GitHub"
    url: "https://github.com/degausai/wonda"

useCases:
  - "Tạo video sản phẩm từ một tấm ảnh có sẵn chỉ bằng một câu lệnh, kèm nhạc nền và phụ đề động kiểu TikTok, không cần mở phần mềm dựng video."
  - "Soi quảng cáo đối thủ đang chạy trên Meta Ads Library hoặc bài đăng Instagram/TikTok của họ ngay trong terminal, trước khi lên ý tưởng content mới."
  - "Ghép sẵn cả chuỗi tạo video → thêm nhạc → phụ đề động → đăng TikTok/Instagram trong một script, chạy lại được cho nhiều khách hàng khác nhau."
  - "Đăng carousel nhiều ảnh (2-35 ảnh) lên Instagram/TikTok trực tiếp từ CLI mà không cần mở app điện thoại."
  - "Xem báo cáo hiệu suất Instagram/TikTok của tài khoản đã kết nối ngay trong terminal, không cần đăng nhập từng nền tảng riêng."

workflowStepReplaced: "Một phần khâu dàn dựng, hậu kỳ và đăng bài nội dung ngắn (video sản phẩm, nội dung kiểu UGC, ad creative) mà agency vẫn tách ra nhiều tool/nhiều người làm riêng."
timeOrCostSaved: "Không có số cụ thể; lợi ích là gộp nhiều bước (tạo ảnh/video/nhạc, ghép phụ đề, đăng bài) đang phải trả cho nhiều tool riêng vào một hoá đơn credit duy nhất — nhưng bản thân Wonda cũng tính phí theo lượt tạo, không phải giải pháp miễn phí."
localProblem: "Agency/freelancer chạy nội dung mạng xã hội cho nhiều khách ở Việt Nam thường phải dùng riêng: một tool tạo ảnh AI, một tool dựng video ngắn, một tool ghép phụ đề động kiểu TikTok, và một tool lên lịch đăng — mỗi tool một tài khoản, một hoá đơn, khó ghép thành một quy trình tự động chạy qua agent AI."
localEvidence: "Chưa tìm thấy bài/review tiếng Việt về Wonda; các nguồn tìm được đều bằng tiếng Anh (trang chủ wonda.sh, Trustpilot, hai video YouTube giới thiệu, một bài blog liệt kê các CLI AI marketing 2026 có nhắc Wonda) — cho thấy tool còn khá mới ở thị trường nói chung, chưa có tín hiệu riêng ở VN."

vnMarket:
  insight: "Chưa thấy nội dung tiếng Việt nào về Wonda CLI — đây gần như là vùng trắng để viết trước, nhưng cũng có nghĩa là chưa kiểm chứng được liệu agency VN có thực sự cần một CLI (thay vì app có giao diện) để tạo/đăng nội dung hay không; nhóm dùng được ngay là agency/freelancer đã quen thao tác qua terminal hoặc qua agent code, không phải social media manager thông thường."
  seoKeywords: ["cli tạo nội dung AI", "công cụ AI đăng bài tự động từ terminal", "tạo video quảng cáo AI từ dòng lệnh", "AI tạo phụ đề động tiktok", "công cụ AI cho agency social media"]
  notes: "Đã tra 'wonda.sh tiếng Việt', 'wonda CLI review tiếng Việt' qua web search — không ra kết quả tiếng Việt nào, chỉ có nguồn tiếng Anh (trang chủ, Trustpilot, YouTube, một bài blog liệt kê top CLI AI marketing 2026). Cần Luan xác nhận thêm vì đây gần như chưa có ai kiểm chứng ở VN — độ tin cậy thấp cho tới khi có thêm bằng chứng."

usabilityRisk: "Bắt buộc tạo tài khoản ở wonda.sh và trả bằng credit theo lượt tạo — không có bản tự host/miễn phí; hầu hết lệnh mạng xã hội (LinkedIn, X, Reddit) dùng 'session credentials' tự lưu trữ, nên cần hiểu rõ rủi ro bảo mật khi lưu cookie/session của tài khoản thật vào một CLI bên thứ ba. Chạy được trên Windows/macOS/Linux nhưng README hoàn toàn tiếng Anh, chưa thấy cộng đồng VN."

practitionerGuide:
  outcome: "Sau khi làm theo, bạn tạo được một ảnh hoặc video đầu tiên qua CLI và biết cách kiểm tra chi phí trước khi tạo hàng loạt."
  prerequisites:
    - "Máy đã cài Node.js (để cài qua npm) hoặc Homebrew (macOS)."
    - "Tài khoản wonda.sh đã đăng ký và có credit."
  steps:
    - "Cài CLI: `npm i -g @degausai/wonda` (hoặc `brew tap degausai/tap && brew install wonda`)."
    - "Đăng nhập: `wonda auth login` (mở trình duyệt xác thực)."
    - "Cài skill cho agent đang dùng: `wonda skill install -o .` rồi nhờ agent (vd Claude Code) 'dùng wonda tạo video sản phẩm từ ảnh này'."
    - "Kiểm chi phí trước khi tạo hàng loạt bằng `wonda pricing estimate`."
    - "Xem kết quả JSON trả về, dùng `--jq` để lấy đúng field cần (vd URL media)."
  expectedResult: "Một file ảnh/video xuất ra kèm JSON mô tả job (trạng thái, output, chi phí) — đủ để đánh giá chất lượng trước khi chạy hàng loạt cho khách."
  commonPitfalls:
    - "Quên kiểm `wonda balance`/`pricing estimate` trước, tạo hàng loạt rồi mới biết tốn nhiều credit."
    - "Lưu session mạng xã hội thật (LinkedIn/X) vào CLI mà chưa cân nhắc rủi ro bảo mật tài khoản."
    - "Nhầm lệnh `skill install -o .` (cài local) với cài toàn cục, khiến agent ở project khác không thấy skill."

greyHatFlag: "in"

suggestedAngle: "Góc cho creator: quay demo pipeline đầy đủ trong README (tạo video → thêm nhạc → phụ đề động → đăng TikTok) chạy trong một câu lệnh duy nhất, vì đây là ví dụ ấn tượng nhất và ít công cụ AI khác gộp được trọn vẹn như vậy."
paidToolReplaced: "Một phần việc của các tool dựng content nhanh + tool lên lịch đăng bài trả phí (kiểu Buffer, Later, các tool tạo video AI riêng lẻ) — vì Wonda gộp cả tạo nội dung lẫn đăng bài vào một CLI theo credit."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể xác nhận Wonda là CLI tạo nội dung AI, nhưng việc biết nó cần tài khoản trả phí theo credit, lưu session mạng xã hội thế nào, và ghép lệnh ra sao để chạy trọn vẹn từ tạo tới đăng — cần đọc kỹ README/thử thật, không tự suy ra được từ mô tả ngắn."

tags: ["ai-content", "cli", "social-media-automation", "video-editing", "agency"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 15
  costAdvantage: 8
  deployment: 15
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-04
nextReviewDueAt: 2026-10-02
publishedAt: 2026-07-04
week: "2026-W27"
draft: true
---

Draft foundation sinh trong round pipeline ngày 2026-07-04. Cần Luan kiểm tay: (1) rủi ro bảo mật khi Wonda lưu session LinkedIn/X/Reddit của khách hàng, (2) xác nhận media hotlink còn tải được, và (3) tìm thêm bằng chứng VN trước khi publish vì hiện tại độ tin cậy còn thấp.
