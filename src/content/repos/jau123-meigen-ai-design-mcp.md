---
name: "MeiGen AI Design MCP"
repoUrl: "https://github.com/jau123/MeiGen-AI-Design-MCP"
oneLiner: "MeiGen AI Design MCP biến Claude Code, Codex, Cursor hoặc các công cụ hỗ trợ MCP thành trợ lý tạo thiết kế, giúp bạn gọi nhiều model ảnh/video và thư viện prompt ngay trong môi trường làm việc."
media:
  - type: "image"
    url: "https://img.youtube.com/vi/JQ3DZ1DXqvs/maxresdefault.jpg"
    caption: "Thumbnail video demo MeiGen AI Design MCP."

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 1500
  forks: 193
  note: "~141 ngày tuổi, ~10.6 sao/ngày"
standoutFeatures:
  - "README mô tả MCP server có 8 tool, thư viện 1,446 prompt và khả năng điều phối nhiều biến thể song song."
  - "Hỗ trợ nhiều model/provider như GPT Image 2, Nano Banana 2, Seedream, Midjourney, Flux, Grok, Seedance, Veo và ComfyUI local."
  - "Chạy được trong Claude Code, Cursor, Codex, Windsurf, Roo Code, OpenClaw, Hermes Agent và host tương thích MCP."
  - "Có cả chế độ MCP và CLI, phù hợp cho người muốn sinh asset thiết kế từ môi trường code/agent."
signalSources:
  - label: "GitHub"
    url: "https://github.com/jau123/MeiGen-AI-Design-MCP"

useCases:
  - "Tạo nhanh nhiều hướng logo, poster, product shot hoặc visual ads ngay trong phiên làm việc với AI coding tool."
  - "Gọi cùng lúc nhiều model ảnh/video để so sánh output thay vì mở từng website riêng."
  - "Dùng thư viện prompt có sẵn để ra bản nháp thiết kế đều hơn khi team chưa có prompt writer riêng."
  - "Kết nối ComfyUI local với agent làm việc hằng ngày để chạy batch biến thể cho moodboard hoặc A/B visual."

workflowStepReplaced: "Khâu chuyển qua lại giữa chat AI, website sinh ảnh, prompt library và ComfyUI khi cần tạo nhiều biến thể thiết kế."
timeOrCostSaved: "Có thể bớt nhiều thao tác copy prompt và tải file qua lại trong vòng tạo visual nháp, nhất là với team đã dùng Claude Code, Codex hoặc Cursor mỗi ngày."
localProblem: "Agency và team creative ở Việt Nam đang dùng nhiều công cụ sinh ảnh/video cùng lúc, nhưng việc quản lý prompt, provider, biến thể và file output thường bị rời rạc."
localEvidence: "Các cụm như prompt tạo ảnh AI, tạo poster AI, GPT Image, ComfyUI workflow và MCP xuất hiện trong nhóm người dùng AI nâng cao; riêng MeiGen vẫn còn là góc sớm, hợp cho creator muốn viết hướng dẫn trước."

vnMarket:
  insight: "MeiGen có ích nhất với nhóm creative đã sống trong môi trường agent/coding tool. Với người làm thiết kế thuần giao diện, nó có thể quá kỹ thuật; với team đã dùng Codex/Claude Code để làm nội dung, nó giúp gom prompt, provider và batch biến thể vào một lệnh."
  seoKeywords: ["MCP tạo ảnh AI", "prompt tạo ảnh AI", "GPT Image 2", "ComfyUI workflow", "tạo poster AI", "AI design tool"]
  notes: "Dựa trên README và tìm nhanh quanh MCP, prompt tạo ảnh AI, ComfyUI workflow, GPT Image. Độ phủ tiếng Việt theo tên MeiGen còn thấp."

usabilityRisk: "MeiGen không dành cho người chỉ muốn một web app bấm là chạy. Bạn cần hiểu MCP host, API key của từng provider, cách cấu hình tool trong Claude Code/Codex/Cursor và chi phí từng model."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn gọi được MeiGen từ một MCP host và tạo một bộ visual nháp đầu tiên cho một brief thật."
  prerequisites:
    - "Một MCP host đang dùng, ví dụ Claude Code, Codex, Cursor hoặc công cụ tương thích."
    - "API key hoặc endpoint cho provider ảnh/video bạn muốn thử; nếu dùng ComfyUI local thì cần ComfyUI đã chạy."
    - "Một brief ngắn có format rõ, ví dụ 5 biến thể poster, 3 product shot hoặc 1 moodboard."
  steps:
    - "Chọn trước provider ít rủi ro nhất để test, đừng bật quá nhiều model ở lần đầu."
    - "Cài MeiGen theo README và khai báo server trong MCP host bạn dùng."
    - "Chạy một prompt nhỏ để kiểm tra server nhận lệnh, trả file và ghi log đúng."
    - "Dùng thư viện prompt hoặc slash command có sẵn để tạo vài biến thể cho brief thật."
    - "So sánh output theo tiêu chí công việc: độ đúng brief, tốc độ, chi phí và mức dễ đưa file sang designer chỉnh tiếp."
  expectedResult: "Bạn có một bộ visual nháp hoặc vài biến thể video/ảnh được sinh từ cùng môi trường agent, đủ để quyết định có đưa MeiGen vào quy trình creative nội bộ hay không."
  commonPitfalls:
    - "Cấu hình nhiều provider cùng lúc nên khó biết lỗi đến từ MCP, API key hay model."
    - "Quên kiểm soát chi phí khi chạy batch biến thể qua model trả phí."
    - "Dùng prompt quá chung nên thư viện prompt mạnh nhưng output vẫn không đúng brand hoặc format."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: MCP cho đội creative đã dùng agent, gom tạo ảnh/video và prompt library vào một chỗ."
paidToolReplaced: "Một phần thao tác thủ công giữa Midjourney, GPT Image, ComfyUI, Veo/Kling và các prompt library riêng"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể nêu MeiGen là MCP server, nhưng góc dùng cho đội creative Việt đã dùng agent và cần quản trị provider/chi phí là lớp biên tập riêng."

tags: ["mcp", "design-ai", "image-ai", "video-ai", "creative", "agency"]
publishedAt: 2026-06-28
week: "2026-W26"
draft: false
---

Ghi chú biên tập: nên kiểm lại cách định vị MeiGen với độc giả không dùng MCP, tránh làm bài quá hẹp cho nhóm coder.
