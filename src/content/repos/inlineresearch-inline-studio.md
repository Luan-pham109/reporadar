---
name: "Inline Studio"
repoUrl: "https://github.com/inlineresearch/Inline-Studio"
oneLiner: "Inline Studio là app dựng phim AI trên một canvas dạng sơ đồ: bạn xếp từng cảnh, nối cảnh này sang cảnh kia, mỗi lần render ra một bản mới được giữ lại chứ không đè lên bản cũ — nên không bao giờ mất bản đẹp đã lỡ tạo trước đó."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/inlineresearch/Inline-Studio/main/screenshots/screenshot-dashboard-2.png"
    caption: "Canvas node: các khung hình, các bản take và đường nối giữa chúng."
  - type: "image"
    url: "https://raw.githubusercontent.com/inlineresearch/Inline-Studio/main/screenshots/zit.png"
    caption: "Chạy model Z-Image Turbo render cục bộ bằng engine Inline Core."
  - type: "image"
    url: "https://raw.githubusercontent.com/inlineresearch/Inline-Studio/main/screenshots/screenshot-dashboard.png"
    caption: "Màn hình dự án phim AI gần đây."

vertical: ["creative"]

maturity: "pre-viral"
repoStats:
  stars: 168
  forks: 35
  note: "~39 ngày tuổi, ~4.3 sao/ngày"
  starsPerDay: 4.3
  ageDays: 39
  pushedAt: 2026-07-20T05:14:20Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Mọi lần render đều được giữ thành một 'take' riêng có đánh version — tạo lại là thêm bản mới, không ghi đè bản cũ."
  - "Nối output của khung này thành input của khung kia; sửa một cảnh gốc thì các cảnh phía sau chạy lại theo."
  - "Có node Video Director đóng vai timeline ngay trong canvas: ghép các khung đã render thành một bản cắt, chồng nhạc/lời đọc, chỉnh âm lượng từng lớp rồi xuất bản độ phân giải cao."
  - "Chạy một process duy nhất trên một cổng (Python phục vụ luôn giao diện web) — không Electron, không cần dựng backend riêng."
  - "Hai đường render trộn được trong cùng một phim: engine Inline Core chạy model diffusion trên GPU của bạn (hiện hỗ trợ Z-Image Turbo), hoặc API Nodes gọi model hosted qua fal khi không có GPU."
  - "Cài node cộng đồng từ repo GitHub bằng một click; theo README mỗi lần cài đều qua bước rà soát bảo mật và cài phụ thuộc vào thư mục riêng để không đụng runtime torch chung."
  - "Giấy phép MIT, chạy trên macOS, Windows và Linux."
signalSources:
  - label: "GitHub"
    url: "https://github.com/inlineresearch/Inline-Studio"
  - label: "Trang chủ + hướng dẫn bắt đầu"
    url: "https://inlinestudio.art/getting-started"
  - label: "Registry extension"
    url: "https://github.com/inlineresearch/Inline-Registry"

useCases:
  - "Dựng cả một short film AI trên một canvas: bày moodboard, phân cảnh, render, rồi ghép bản cắt cuối — không phải nhảy qua lại giữa 3-4 tool."
  - "Thử nhiều phương án cho cùng một cảnh mà vẫn giữ nguyên tất cả bản đã render, đánh dấu bản ưng ý rồi cho nó chảy tiếp xuống các cảnh sau."
  - "Ghép các khung đã render thành video hoàn chỉnh ngay trong app, thêm nhạc nền và lời đọc, cắt gọt bằng node Trim rồi xuất — khỏi mở thêm Premiere/CapCut cho bản nháp."
  - "Đóng gói cả pipeline (asset đầu vào, các bản render, sơ đồ nối) thành một file zip gửi cho đồng nghiệp hoặc khách, người nhận mở ra chạy lại được đúng quy trình."
  - "Chạy model hosted qua API Nodes bằng key fal của bạn khi máy không có GPU, và đổi sang render cục bộ khi muốn tiết kiệm chi phí."

workflowStepReplaced: "Khâu quản lý bản dựng và version khi làm video AI — thường đang phải tự đặt tên file, tự lưu folder và tự nhớ bản nào là bản đẹp."
timeOrCostSaved: "Repo không công bố con số tiết kiệm cụ thể. Lợi thế rõ nhất là bản self-host miễn phí (MIT) và việc mọi bản render được lưu tự động thay vì phải quản lý file thủ công; nếu dùng API Nodes thì vẫn trả tiền theo từng lần render cho nhà cung cấp (hiện là fal), mỗi node có báo giá ước tính trước khi chạy."
localProblem: "Ekip làm video AI ở Việt Nam (studio nhỏ, freelancer làm TVC/branded content) hiện chắp vá nhiều tool rời: sinh ảnh ở một chỗ, sinh video ở chỗ khác, dựng ở CapCut/Premiere. Hệ quả thực tế là mất dấu bản render đẹp — file nằm rải rác trong nhiều folder tên kiểu final_v3_real.mp4 — và khi khách yêu cầu quay lại phiên bản trước thì phải render lại từ đầu."
localEvidence: "Repo mới ~39 ngày tuổi, 168 sao, chưa thấy nội dung tiếng Việt nào nhắc tới Inline Studio. Trong khi đó ComfyUI — tool mà repo này định thay thế ở khâu render cục bộ — đã có cộng đồng tiếng Việt tương đối đông, cho thấy nhóm người dùng mục tiêu ở VN là có thật và đang dùng giải pháp phức tạp hơn."

vnMarket:
  insight: "Nhóm làm video AI ở VN phần lớn đang đi hai hướng: hoặc dùng SaaS trả phí theo tháng (Runway, Kling, Hailuo) cho nhanh, hoặc tự dựng ComfyUI trên máy có GPU để tiết kiệm. Cả hai hướng đều thiếu lớp quản lý bản dựng — Inline Studio nhắm đúng khoảng trống đó. Nhưng đây là repo rất mới, chưa có ai ở VN kiểm chứng, và bản render cục bộ hiện mới hỗ trợ đúng một model (Z-Image Turbo) nên chưa thể coi là thay thế trọn gói cho ComfyUI."
  seoKeywords: ["dựng phim bằng AI", "làm video AI trên máy tính", "tool AI làm short film", "thay thế ComfyUI", "công cụ AI filmmaking", "render video AI bằng GPU cá nhân"]
  notes: "Nhận định dựa trên README, trang chủ inlinestudio.art và bối cảnh chung của cộng đồng AI video VN. Chưa có khảo sát từ khoá định lượng và chưa cài thử. Độ chắc chắn: low."

usabilityRisk: "Muốn render cục bộ thì cần GPU rời (README nói engine tự co model cho vừa card, kể cả 6 GB VRAM hoặc CPU, nhưng chưa có ai ở VN kiểm chứng tốc độ thực tế). Engine cục bộ hiện mới hỗ trợ một model là Z-Image Turbo — hẹp hơn ComfyUI rất nhiều. Đường ComfyUI cũ đang bị khai tử dần nên đừng xây quy trình dựa vào nó. Muốn dùng model hosted phải tự đăng ký key fal và trả tiền theo từng lần render. Cài đặt vẫn là chạy Python từ dòng lệnh, chưa có installer bấm-là-xong. Repo mới ~39 ngày, chưa có cộng đồng tiếng Việt, hỗ trợ chủ yếu qua Discord tiếng Anh."

practitionerGuide:
  outcome: "Bạn dựng được một chuỗi 3-5 khung hình trên canvas, render thử bằng API Node (hoặc GPU nếu có), rồi ghép thành một đoạn video ngắn xuất ra file."
  prerequisites:
    - "Python 3.11 trở lên trên máy (macOS, Windows hoặc Linux)."
    - "Một trong hai: GPU rời để chạy Inline Core cục bộ, hoặc một API key fal.ai để dùng model hosted (trả tiền theo lần render)."
    - "Nếu chọn render cục bộ: file model Z-Image Turbo dạng .safetensors, tải sẵn hoặc để app tải qua popup trong node."
    - "Ý tưởng phân cảnh sơ bộ — công cụ này giúp quản lý quá trình dựng, không nghĩ hộ kịch bản."
  steps:
    - "Clone repo rồi chạy theo phần Install & run trong README (bản web UI đã build sẵn nên không cần dựng Node)."
    - "Chạy `python core/main.py` và mở trình duyệt vào cổng mà app in ra."
    - "Nếu dùng model hosted: vào Settings, dán API key fal."
    - "Tạo project mới, thêm vài Frame trên canvas, viết prompt cho từng khung."
    - "Thêm Generate node (API) hoặc node Z-Image (cục bộ), nối vào frame rồi bấm Run; mỗi lần chạy sinh ra một take mới, đánh dấu sao ở bản ưng ý."
    - "Nối output của frame trước sang input frame sau để giữ mạch hình ảnh xuyên suốt."
    - "Thêm node Video Director, kéo các frame đã render vào, chồng nhạc/lời đọc rồi xuất video."
  expectedResult: "Một file video ngắn ghép từ các khung bạn render, và trong project vẫn còn nguyên toàn bộ lịch sử take của từng khung để quay lại bất kỳ phiên bản nào."
  commonPitfalls:
    - "Kỳ vọng engine cục bộ chạy được mọi model như ComfyUI — hiện mới có Z-Image Turbo; các model khác phải đi qua API Nodes và trả phí."
    - "Xây quy trình dựa trên đường kết nối ComfyUI cũ, trong khi README nói rõ nó đang bị khai tử."
    - "Chạy API Nodes mà không để ý phần ước tính giá của từng node — render thử nhiều lần dễ đội chi phí fal ngoài dự tính."
    - "Cài node cộng đồng từ repo lạ: README có mô tả bước rà soát bảo mật, nhưng vẫn nên tự đọc nguồn trước khi cài vào máy làm việc."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: đặt Inline Studio cạnh ComfyUI cho ekip video AI Việt — không phải 'thay thế', mà là 'lớp quản lý bản dựng mà ComfyUI không có', kèm cảnh báo thẳng rằng engine cục bộ mới hỗ trợ đúng một model."
paidToolReplaced: "Runway / Kling ở khâu dựng phim AI có quản lý phiên bản; và một phần vai trò của ComfyUI ở khâu render cục bộ"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Hỏi AI về 'tool AI filmmaking' sẽ ra danh sách SaaS quen thuộc. Việc biết có một repo MIT 39 ngày tuổi đặt cược vào 'take không ghi đè' làm điểm khác biệt — và biết luôn giới hạn thật của nó (một model cục bộ duy nhất, đường ComfyUI đang khai tử) — cần đọc README tay."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 15
  costAdvantage: 13
  deployment: 6
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-20
nextReviewDueAt: 2026-10-18

tags: ["ai", "creative", "video", "filmmaking", "node-editor", "self-host"]
publishedAt: 2026-07-20
week: "2026-W30"
draft: true
---

Draft từ pipeline daily ngày 2026-07-20, viết hoàn toàn từ README + metadata GitHub, chưa cài thử.

Cần Luan xác minh trước khi publish:
- Cài thử thật để đo thời gian render Z-Image Turbo trên GPU phổ thông ở VN (3060/4060) — README nói low-VRAM friendly nhưng không có số.
- Kiểm tra chi phí thực tế một lần render qua fal, để phần `timeOrCostSaved` có con số thay vì mô tả định tính.
- Cân nhắc mức độ nên nhấn "thay thế ComfyUI": repo tự nói đường ComfyUI đang bị khai tử, nhưng engine cục bộ mới hỗ trợ một model nên khung so sánh dễ gây hiểu nhầm nếu viết mạnh tay.
