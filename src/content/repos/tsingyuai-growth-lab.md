---
# === Commodity (cho kèm cho đủ) ===
name: "Growth Lab"
repoUrl: "https://github.com/tsingyuai/growth-lab"
oneLiner: "Growth Lab là bộ Skill chạy trên Claude Code hoặc Codex để làm cả vòng tăng trưởng bằng ngôn ngữ tự nhiên: đọc hiểu sản phẩm, nghiên cứu thị trường, viết và xuất bản nội dung (SEO page, Xiaohongshu), rồi tự đọc kết quả để tính bước tiếp theo."
media: []

# === CỐT LÕI: ngành nhắm tới (4 lăng kính) ===
vertical: ["agency", "ecom", "seo"]

# === HUNT: độ chín + dữ liệu khách quan ===
maturity: "rising"
repoStats:
  stars: 667
  forks: 59
  note: "~14 ngày tuổi, ~47.6 sao/ngày"
  starsPerDay: 47.6
  ageDays: 14
  pushedAt: 2026-08-03T07:04:03Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Dùng chính Codex hoặc Claude Code làm runtime: điều khiển toàn bộ workflow tăng trưởng bằng hội thoại, không cần học lệnh riêng."
  - "Kiến trúc Skill + Client + filesystem memory: mỗi 'Model' là một vòng quan sát → hành động → phục dựng có bộ nhớ lưu qua nhiều phiên."
  - "Hiện có sẵn 2 vòng: SEO page growth loop, và vòng sao chép + phục dựng nội dung Xiaohongshu (采集, tạo nội dung, render thẻ, kiểm tra tuân thủ, phục dựng kết quả)."
  - "Mã nguồn mở Apache-2.0, dữ liệu sản phẩm và Memory nằm trong workspace của người dùng, không đưa vào repo."
signalSources:
  - label: "GitHub"
    url: "https://github.com/tsingyuai/growth-lab"

# === CỐT LÕI: usecase-first (reader-facing) ===
useCases:
  - "Chạy vòng SEO page: cho agent đọc sản phẩm, suy ra kịch bản người dùng sẽ search, rồi sinh trang SEO có thông tin thật và điều hướng về sản phẩm."
  - "Nghiên cứu nội dung viral trên Xiaohongshu, chọn cấu trúc có thể tái sử dụng, và dựng bản nháp bài đăng + hình cho team tự chỉnh và tự đăng."
  - "Giữ toàn bộ ngữ cảnh sản phẩm, dữ liệu vận hành và kết quả trong một workspace file để lần chạy sau không mất bối cảnh như khi nhảy giữa nhiều tool."
  - "Cho một agency/ekip growth một khung 'quan sát → hành động → phục dựng' để làm việc lặp lại thay vì mỗi lần lại brief AI từ đầu."

# === CỐT LÕI: curation hợp ngành + bằng chứng ===
workflowStepReplaced: "Khâu nối rời rạc giữa nghiên cứu thị trường, viết nội dung, xuất bản và đọc số liệu — thường mỗi khâu một tool khác nhau và mất ngữ cảnh sản phẩm."
timeOrCostSaved: "Có thể gộp nhiều bước brief-viết-đăng-báo cáo vào một luồng hội thoại; mức tiết kiệm thật phụ thuộc vào việc bạn đã có sẵn Claude Code/Codex và chi phí API, chưa có số đo cho thị trường VN."
localProblem: "Nhiều agency và team growth nhỏ ở VN chạy nội dung SEO + social bằng cách chắp vá: một người research, một người viết, một người đăng, số liệu nằm ở dashboard khác — ngữ cảnh sản phẩm rơi rụng qua từng khâu và khó lặp lại quy trình."
localEvidence: "Nhu cầu 'agent tự làm SEO/social', 'growth automation bằng Claude Code/Codex' đang được bàn nhiều trong nhóm làm growth và AI coding. Repo tăng ~47 sao/ngày trong 2 tuần đầu, nhưng phần social hiện chỉ mạnh cho Xiaohongshu — cần Luan kiểm chứng độ hợp với kênh VN (Facebook, TikTok, Threads) trước khi khuyên dùng."

# === CỐT LÕI: insight thực tế ngành VN ===
vnMarket:
  insight: "Ở VN, growth nội dung phần lớn vẫn chạy trên Facebook/TikTok/Threads và Google, không phải Xiaohongshu. Vòng SEO page của Growth Lab là phần dễ áp dụng ngay; còn vòng Xiaohongshu chủ yếu hợp team làm nội dung tiếng Trung hoặc bán hàng xuyên biên giới. Giá trị lớn nhất với người Việt là khung điều phối agent + memory, không phải một connector kênh cụ thể."
  seoKeywords: ["agent tự động làm SEO", "AI marketing automation", "growth hacking AI", "tự động viết bài SEO", "Claude Code làm marketing", "agent tăng trưởng", "marketing automation mã nguồn mở"]
  notes: "Từ khóa suy từ cách team growth/SEO VN mô tả nhu cầu tự động hóa. Chưa có bằng chứng cộng đồng VN dùng riêng repo này; đánh giá ở mức discovery."

# === CỐT LÕI: cảnh báo cạm bẫy ===
usabilityRisk: "Cần biết dùng Claude Code hoặc Codex và chuẩn bị API key (OpenAI/Gemini cho phần tạo ảnh, MCP cho Xiaohongshu). Phần social hiện gắn với Xiaohongshu chứ chưa hỗ trợ Facebook/TikTok — team VN sẽ phải tự map sang kênh khác. Vòng 'phục dựng bài viral' và bước 'giảm AI味' dễ trượt sang copy nội dung — cần đặt ranh giới biên tập rõ ràng. Đăng thật vẫn do người làm."

# === MEMBER VALUE: hướng dẫn áp dụng cho practitioner ===
practitionerGuide:
  outcome: "Bạn chạy được vòng tăng trưởng đầu tiên: agent đọc hiểu sản phẩm, đề xuất một hành động growth (thường là một trang SEO), và ghi kết quả + bước tiếp theo vào workspace."
  prerequisites:
    - "Claude Code hoặc Codex cài sẵn và mở được thư mục repo."
    - "API key cho phần cần dùng: OpenAI hoặc Gemini nếu muốn tạo ảnh; MCP xiaohongshu chạy local nếu làm phần Xiaohongshu."
    - "Link repo/tài liệu sản phẩm của bạn để agent đọc được sự thật về sản phẩm."
  steps:
    - "Clone repo: `git clone https://github.com/tsingyuai/growth-lab.git` rồi mở thư mục bằng Claude Code hoặc Codex."
    - "Hỏi agent 'bạn làm được gì?' và chạy onboarding Skill để nó audit xem còn thiếu cấu hình/API key nào."
    - "Chỉ cho agent nguồn sản phẩm (repo hoặc tài liệu), yêu cầu nó chạy vòng SEO page đầu tiên; bỏ qua phần Xiaohongshu nếu không dùng."
    - "Đọc lại output và Memory agent ghi ra, rồi yêu cầu nó phục dựng kết quả và đề xuất bước kế tiếp."
  expectedResult: "Agent tạo được ít nhất một sản phẩm growth (vd một trang SEO nháp) kèm ghi chú lý do, và lưu ngữ cảnh + bước tiếp theo vào workspace để lần sau đọc lại."
  commonPitfalls:
    - "Kỳ vọng agent tự đăng và tự chạy nền — thực tế nó vẫn cần người xác nhận và tự đăng thật."
    - "Bật phần Xiaohongshu dù không có nhu cầu, dẫn tới kẹt ở cấu hình MCP và đăng nhập tài khoản."
    - "Để agent 'phục dựng' nội dung viral quá sát bản gốc — cần biên tập lại để tránh copy và giữ đúng brand."

# === CỐT LÕI: kỷ luật IN/OUT ===
greyHatFlag: "borderline"

# === Bán-cốt-lõi ===
suggestedAngle: "Creator/agency có thể kể góc 'dựng một growth agent bằng Claude Code' — quay lại quy trình đọc sản phẩm → ra trang SEO → đọc số, thay vì hứa hẹn tự động hoàn toàn."
paidToolReplaced: "Chắp vá các tool growth rời (research + viết content + lịch đăng + báo cáo) ↔ một luồng agent thống nhất."
creatorWhitespace: true

# === Kiểm chứng hơn-AI (KR#5) ===
aiCheck:
  canAIGetThis: false
  note: "Hỏi AI chung chung sẽ ra 'dùng AI làm marketing', không chỉ ra được repo cụ thể này còn non (2 tuần tuổi), phần social mới chỉ có Xiaohongshu, và ranh giới grey-hat ở bước phục dựng viral. Đây là quan sát timing + độ chín, không có sẵn trên Trending."

# === Signal Score v1 ===
scoreBreakdown:
  useCaseFit: 16
  projectHealth: 19
  costAdvantage: 12
  deployment: 8
  documentation: 11
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-07
nextReviewDueAt: 2026-11-05

# === Metadata ===
tags: ["ai", "marketing", "growth", "seo", "agent", "claude-code", "open-source"]
publishedAt: 2026-08-07
week: "2026-W32"
draft: false
---

## Ghi chú cho biên tập (chưa publish)

**Bối cảnh khách quan (HUNT).** Repo `tsingyuai/growth-lab` mới ~14 ngày tuổi, ~667 sao, ~47.6 sao/ngày — tín hiệu tăng nhanh nhưng còn rất non, chưa thấy bàn ở HN/Reddit (nguồn thủ công có thể bỏ sót). suggestedHealthScore = 19. Ngôn ngữ chính Python; homepage growthlab.tsingyuai.com. Có README đa ngôn ngữ (kể cả `README.vi.md`) và `CONFIGURATION.md`, nên tài liệu tương đối tốt so với tuổi repo.

**Mô hình sản phẩm (SYNTHESIZE).** Điểm khác biệt là dùng Coding Agent (Codex / Claude Code) làm runtime cho growth: Skill = phương pháp, Client = năng lực thực thi bên ngoài (browser, API, nền tảng nội dung), filesystem = bộ nhớ dài hạn. Mỗi "Model" là một vòng quan sát–hành động–phục dựng có Memory riêng. Hiện có 2 năng lực: SEO page growth loop và Xiaohongshu replicate loop.

**Điểm cần Luan quyết trước khi publish:**
- Xác nhận `greyHatFlag: borderline` — lý do: vòng "爆款复刻" (phục dựng bài viral) + bước "降 AI味" (giảm chất AI) có thể trượt sang copy/né phát hiện AI. Đăng thật vẫn do người, nên chưa xếp "out", nhưng cần khung kể cẩn thận.
- Phần Xiaohongshu ít giá trị trực tiếp cho kênh VN — có nên chỉ lên bài nhấn vào vòng SEO + khung agent, và ghi rõ giới hạn kênh?
- Chưa có media hotlink sạch từ README (README dùng badge + link ngoài); nếu muốn thumbnail cần tự chụp UI/ảnh từ homepage.
- Điểm số là ước lượng discovery (evidenceLevel C, confidence low); useCaseFit/costAdvantage/deployment/documentation do skill tự chấm, cần Luan hiệu chỉnh nếu test thật.
