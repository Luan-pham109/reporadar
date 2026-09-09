---
name: "comfyui-mcp"
repoUrl: "https://github.com/artokun/comfyui-mcp"
oneLiner: "comfyui-mcp cho phép bạn điều khiển ComfyUI bằng câu nói tiếng người — 'tạo ảnh hoàng hôn trên núi' — thay vì tự kéo nối node. Nó là một MCP server cắm vào Claude/ChatGPT/Gemini hoặc model chạy local (Ollama), tự dựng workflow, chạy và trả ảnh/video/audio về cho bạn."
media: []

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 565
  forks: 90
  note: "~178 ngày tuổi, ~3.2 sao/ngày"
  starsPerDay: 3.2
  ageDays: 178
  pushedAt: 2026-08-12T05:14:58Z
  archived: false
  openIssues: 21
standoutFeatures:
  - "Là 'control plane' cho ComfyUI: không chỉ chuyển prompt đi rồi trả ảnh về, mà tự dựng và sửa graph node theo từng bước, chạy/lặp workflow, quản lý model và custom node, tạo ảnh + video + audio bằng ngôn ngữ tự nhiên."
  - "Model-agnostic: chạy với Claude/ChatGPT trên subscription, Gemini qua login Google, model local miễn phí qua Ollama (offline hoàn toàn, không cần tài khoản), hoặc bất kỳ endpoint OpenAI-compatible nào."
  - "Theo README: 37 MCP tools, 38 AI skills (hướng dẫn theo từng dòng model: Flux, WAN, LTX 2.3, Qwen, Z-Image, Ideogram 4, ERNIE, ANIMA...), 56 installer pack, 11 slash command, 4 agent tự động và 3 hook; cũng đóng gói thành Claude Code plugin."
  - "Local-first nhưng không local-only: một config chạy được trên máy bạn (macOS/Linux/Windows), LAN, VPS, RunPod hay Comfy Cloud; có chế độ remote connector mở tunnel qua cloudflared để client từ xa gọi vào."
signalSources:
  - label: "GitHub"
    url: "https://github.com/artokun/comfyui-mcp"
  - label: "Docs"
    url: "https://comfyui-mcp.artokun.io/docs"
  - label: "npm"
    url: "https://www.npmjs.com/package/comfyui-mcp"

useCases:
  - "Ra lệnh bằng tiếng người cho ComfyUI dựng workflow và tạo ảnh/video mà không phải tự kéo nối từng node trên canvas."
  - "Nhờ agent tự chọn checkpoint đúng, tải model còn thiếu, chọn sampler/CFG/độ phân giải hợp với từng dòng model (Flux, WAN, Qwen...) thay vì mò thử."
  - "Điều khiển một ComfyUI đặt trên RunPod/VPS từ máy cá nhân qua một config, dùng chính subscription Claude/ChatGPT của bạn."
  - "Chạy hoàn toàn offline bằng model local qua Ollama khi không muốn (hoặc không thể) gọi API cloud."
  - "Debug khi workflow lỗi: agent đọc log + history, chỉ ra node hỏng và đề xuất cách sửa."

workflowStepReplaced: "Khâu tự tay dựng và chỉnh workflow node-by-node trong ComfyUI, và khâu mò thông số (sampler/CFG/resolution/model) cho từng dòng model."
timeOrCostSaved: "Với người đã dùng ComfyUI, phần lớn thời gian tốn vào việc nối node và tra thông số đúng cho mỗi model; agent gợi ý sẵn giúp giảm số lần thử-sai. Chưa có số liệu định lượng chính thức từ dự án."
localProblem: "Dân làm ảnh/video AI ở VN (freelancer thiết kế, ekip làm ảnh sản phẩm/thumbnail, người chạy Stable Diffusion/ComfyUI local) mê sức mạnh của ComfyUI nhưng ngại đường cong học node: một workflow đẹp thường phải copy từ người khác rồi sửa mù, và mỗi model mới lại phải mò lại sampler/CFG/độ phân giải."
localEvidence: "Cộng đồng ComfyUI/Stable Diffusion VN rất đông và thường xuyên xin/chia sẻ file workflow, hỏi nhau 'thông số model này chỉnh sao' — đây là quan sát chung về hành vi, chưa phải khảo sát một team VN cụ thể."

vnMarket:
  insight: "Người dùng ComfyUI ở VN chủ yếu vận hành bằng cách import workflow JSON có sẵn rồi chỉnh tay; ý tưởng 'điều khiển ComfyUI bằng chat + agent tự dựng graph' còn rất mới và ít người biết. Điểm hợp gu là có thể xài model local miễn phí (Ollama) nên không phát sinh chi phí API, đúng tâm lý cộng đồng self-host."
  seoKeywords: ["điều khiển ComfyUI bằng AI", "ComfyUI MCP server", "ComfyUI tự động tạo workflow", "dùng Claude điều khiển ComfyUI", "comfyui-mcp là gì"]
  notes: "Fit với nhánh creative đã quen ComfyUI/Stable Diffusion; không hợp người mới hoàn toàn hoặc người chỉ dùng tool cloud (Midjourney web). Lọt queue từ tín hiệu GitHub (chưa thấy bàn ở HN/Reddit). Độ chắc chắn: thấp."

usabilityRisk: "Đây là tool cho người ĐÃ dùng ComfyUI, không phải để thay ComfyUI: bạn vẫn phải tự cài ComfyUI và có GPU đủ mạnh (nhiều model cảnh báo OOM). Cần Node.js >= 22 để chạy qua npx. Muốn dùng agent 'xịn' (Claude/ChatGPT) thì tốn subscription hoặc API; bản offline qua Ollama miễn phí nhưng chất lượng phụ thuộc model local. Config remote (RunPod/VPS + tunnel) phức tạp hơn nhiều so với chạy local. Chưa có cộng đồng Việt; tài liệu và giao diện đều tiếng Anh."

practitionerGuide:
  outcome: "Bạn cắm comfyui-mcp vào một client hỗ trợ MCP (vd Claude Code) và ra lệnh bằng tiếng người để ComfyUI tạo ra tấm ảnh đầu tiên mà không phải tự dựng workflow."
  prerequisites:
    - "Đã cài và chạy được ComfyUI trên máy (macOS/Linux/Windows), có GPU đủ VRAM cho model định dùng."
    - "Đã cài Node.js >= 22 (tool chạy qua npx)."
    - "Một client hỗ trợ MCP, ví dụ Claude Code; nếu muốn miễn phí/offline thì cài Ollama và một model local."
  steps:
    - "Bật ComfyUI và để nó chạy nền."
    - "Thêm MCP server vào config của client, ví dụ trong ~/.claude/settings.json với command `npx -y comfyui-mcp` (theo README)."
    - "Trong client, ra một lệnh đơn giản như 'Generate an image of a sunset over mountains'."
    - "Để agent tự tìm/tải checkpoint, dựng workflow, chạy và trả ảnh về."
    - "Khi quen, thử các slash command (vd /comfy:gen, /comfy:debug) hoặc cài Agent Panel để điều khiển ngay trong sidebar ComfyUI."
  expectedResult: "Sau một lệnh tiếng người, ComfyUI chạy xong một workflow và trả về ảnh đúng mô tả, không cần bạn kéo nối node thủ công."
  commonPitfalls:
    - "GPU yếu/thiếu VRAM khiến job báo OOM — nhiều model nặng cần cấu hình đủ mạnh."
    - "Quên bật ComfyUI hoặc sai port khiến MCP không kết nối được."
    - "Kỳ vọng nó thay hẳn ComfyUI: thực chất bạn vẫn phải tự cài và vận hành ComfyUI bên dưới."
    - "Chạy agent cloud (Claude/ChatGPT) mà không để ý credit API bị tiêu khi tạo nhiều ảnh."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm nhóm chơi ComfyUI/Stable Diffusion ở VN với góc 'điều khiển ComfyUI bằng câu nói, khỏi kéo node' — nêu rõ vẫn cần GPU + ComfyUI cài sẵn, và mẹo dùng model local qua Ollama để chạy miễn phí offline."
paidToolReplaced: "Không thay tool trả phí cụ thể; thay công sức tự dựng workflow ComfyUI và các dịch vụ agent-cho-ComfyUI dạng hosted."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được comfyui-mcp, nhưng lớp giá trị là đặt nó vào bối cảnh cộng đồng ComfyUI VN, phân định rõ 'không thay ComfyUI mà điều khiển ComfyUI', và cảnh báo yêu cầu GPU/Node/subscription — phần Luan cần kiểm trước khi publish."

scoreBreakdown:
  useCaseFit: 15
  projectHealth: 16
  costAdvantage: 11
  deployment: 9
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-12
nextReviewDueAt: 2026-11-10

tags: ["ai", "creative", "comfyui", "mcp", "image-generation", "local-first", "agent"]
publishedAt: 2026-08-12
week: "2026-W33"
draft: true
---

Draft foundation từ daily queue (chỉ tín hiệu GitHub: 565 sao, 90 fork, ~3.2 sao/ngày, 178 ngày tuổi; chưa thấy bàn ở HN/Reddit). Tool là MCP server + Agent Panel điều khiển ComfyUI bằng ngôn ngữ tự nhiên, model-agnostic (Claude/ChatGPT/Gemini/Ollama), local-first. Con số tính năng (37 MCP tools / 38 skills / 56 packs) lấy theo phần đầu README; mô tả repo ghi số khác (178 tools / 36 skills / 55 packs) — cần Luan chốt lại khi review. Không có media raw trong README excerpt nên để media rỗng, không bịa ảnh. projectHealth = suggestedHealthScore (16) từ queue. Fit mạnh với người đã dùng ComfyUI, yếu với người mới/chỉ dùng cloud. Confidence thấp — cần Luan xác nhận trước khi publish.
