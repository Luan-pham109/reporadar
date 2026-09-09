---
name: "Texel Studio"
repoUrl: "https://github.com/EYamanS/texel-studio"
oneLiner: "Texel Studio là công cụ AI vẽ pixel art bằng cách thật sự đặt từng pixel lên canvas như một họa sĩ — không phải model diffusion đoán mù — nên ra sprite đúng bảng màu, cạnh sắc nét, dùng thẳng được vào game."
media:
  - type: "video"
    url: "https://github.com/user-attachments/assets/63e2fdde-3f15-4ffd-8b27-60acaef9a9c5"
    caption: "Demo agent vẽ pixel art từng bước trên canvas."

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 116
  forks: 21
  note: "~95 ngày tuổi, ~1.2 sao/ngày"
  starsPerDay: 1.2
  ageDays: 95
  pushedAt: 2026-07-02T11:57:12Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Agent vẽ bằng công cụ thật (draw_pixel, fill_rect, noise_fill, voronoi_fill...) từng bước một, xem lại rồi tự sửa — khác hẳn model diffusion tạo ảnh mờ rồi scale xuống."
  - "Chat để chỉnh tiếp trên đúng sprite đang có (\"làm phần trên tối hơn\") thay vì phải tạo lại từ đầu mỗi lần chỉnh."
  - "Tự sinh 16 biến thể autotile (cạnh, góc bo) từ một sprite gốc, xuất thẳng dùng cho tilemap."
  - "Chạy miễn phí hoàn toàn qua Ollama local (không cần API key), hoặc dùng Gemini/OpenAI khi cần chất lượng cao hơn."
signalSources:
  - label: "GitHub"
    url: "https://github.com/EYamanS/texel-studio"
  - label: "Cloud demo"
    url: "https://texel.studio"

useCases:
  - "Mô tả một sprite bằng câu chữ (\"khối đá rêu phong\"), agent vẽ trực tiếp rồi bạn chat chỉnh tiếp đến khi vừa ý."
  - "Xuất bộ 16 biến thể autotile cho một khối tilemap chỉ bằng một click, khỏi ngồi vẽ tay từng cạnh, từng góc."
  - "Chuyển ảnh chụp thật thành pixel art đúng bảng màu game bằng job sprite.from_photo, thay vì tự quy đổi màu tay."
  - "Tự host bằng Ollama chạy local nếu muốn dùng free hoàn toàn thay vì trả credit theo tháng cho bản cloud."

workflowStepReplaced: "Khâu tự vẽ tay hoặc thuê pixel artist làm sprite/tileset cho game 2D indie."
timeOrCostSaved: "Repo không công bố số giờ cụ thể; điểm lợi thế chi phí rõ nhất là bản self-host chạy free hoàn toàn qua Ollama, so với bản cloud texel.studio tính phí theo credit ($9/tháng cho 200 credit) hoặc thuê artist theo sprite."
localProblem: "Studio game indie và freelancer làm game 2D ở Việt Nam thường không có ngân sách thuê riêng một pixel artist, trong khi các tool AI vẽ ảnh phổ biến kiểu diffusion (Midjourney và tương tự) cho ra ảnh trông giống pixel art nhưng sai lưới pixel, sai bảng màu, không dùng thẳng vào game engine được."
localEvidence: "Các công cụ pixel art AI đang được biết tới ở thị trường quốc tế (PixelLab, Pokecut, Sprite-AI) đều là SaaS trả phí theo credit; chưa tìm thấy bài viết hay cộng đồng tiếng Việt nào nhắc riêng tới Texel Studio — đây là khoảng trống thật cho người làm nội dung game dev Việt."

vnMarket:
  insight: "Nhu cầu vẽ pixel art bằng AI cho game 2D là có thật và đã có nhiều SaaS quốc tế phục vụ (PixelLab, Pokecut, Sprite-AI), nhưng tất cả đều thu phí theo credit và không mã nguồn mở. Texel Studio là lựa chọn hiếm hoi vừa mã nguồn mở vừa tự host free được — hợp nhóm indie muốn kiểm soát chi phí, miễn là có người biết code Python để tự cài."
  seoKeywords: ["tạo pixel art AI", "vẽ sprite game AI", "công cụ tạo asset game 2D", "AI vẽ pixel art", "sprite generator"]
  notes: "Đã search các cụm tiếng Việt quanh 'vẽ pixel art AI sprite game 2D' — kết quả chủ yếu là các SaaS cạnh tranh (PixelLab, Pokecut, Sprite-AI, Homiwork), chưa thấy nội dung tiếng Việt nào nhắc riêng Texel Studio. Độ chắc chắn: medium."

usabilityRisk: "Cần tự cài Python + Node (frontend Next.js) hoặc chạy script start.sh; muốn miễn phí hoàn toàn phải cài thêm Ollama và có máy đủ mạnh chạy model local, nếu không phải trả phí Gemini/OpenAI. Muốn chạy nhiều worker song song cần Redis Stack (không phải Redis thường) — dễ vướng nếu không đọc kỹ tài liệu. Chưa thấy cộng đồng hỗ trợ tiếng Việt."

practitionerGuide:
  outcome: "Bạn tạo được một sprite pixel art đầu tiên từ mô tả chữ, và biết cách xuất bộ autotile 16 biến thể để dùng ngay trong game engine."
  prerequisites:
    - "Máy chạy được Python 3 và Node.js, hoặc sẵn sàng dùng script start.sh trong repo."
    - "Ít nhất một trong: Ollama cài local (free), hoặc API key Gemini/OpenAI."
    - "Bảng màu (palette) game của bạn nếu muốn sprite ra đúng phong cách sẵn có."
  steps:
    - "Clone repo, chạy ./start.sh (hoặc cài tay theo README) rồi mở http://localhost:8500."
    - "Cấu hình provider (Ollama/Gemini/OpenAI) trong .env."
    - "Mô tả sprite cần tạo, chọn loại Block (tileable) hoặc Item Icon (nền trong suốt)."
    - "Xem agent vẽ trực tiếp, chat chỉnh sửa tiếp nếu chưa vừa ý (ví dụ 'viền dày hơn')."
    - "Với sprite dạng Block, bấm Generate Tileset để xuất 16 biến thể autotile, tải folder về dùng trong game."
  expectedResult: "Kết quả đúng là một file PNG sprite đúng lưới pixel, đúng palette, và nếu là Block thì có thêm bộ 16 file autotile sẵn dùng cho tilemap — không cần chỉnh tay thêm."
  commonPitfalls:
    - "Chạy Ollama trên máy yếu khiến bước vẽ chậm hoặc treo — nên thử model nhỏ (gemma, qwen3:8b) trước."
    - "Bật nhiều worker song song mà dùng Redis thường thay vì Redis Stack — checkpointer sẽ lỗi vì thiếu module RediSearch."
    - "Quên set palette/style trước khi tạo hàng loạt sprite, dẫn tới bộ asset không đồng bộ phong cách."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: so sánh Texel Studio (mã nguồn mở, tool-based) với các SaaS pixel art AI trả phí (PixelLab, Pokecut) cho indie dev Việt muốn tự host."
paidToolReplaced: "PixelLab.ai, Pokecut hoặc thuê pixel artist làm sprite/tileset game thủ công"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể liệt kê các tool pixel art AI phổ biến, nhưng việc biết Texel Studio dùng cách vẽ tool-based (không phải diffusion) và có bản self-host free qua Ollama — rồi đặt nó cạnh nhu cầu thật của indie dev Việt — cần người tổng hợp tay."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 15
  costAdvantage: 14
  deployment: 10
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-05
nextReviewDueAt: 2026-10-03

tags: ["ai", "creative", "game-dev", "pixel-art"]
publishedAt: 2026-07-05
week: "2026-W28"
draft: true
---

Draft từ pipeline daily. Cần Luan tự chạy thử ./start.sh với Ollama để xác nhận chất lượng sprite thật trước khi publish, và cân nhắc thử nghiệm tiếng Việt cho phần mô tả prompt (README chỉ ví dụ tiếng Anh).
