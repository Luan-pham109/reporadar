---
name: "ODS (Osmantic Deployment System)"
repoUrl: "https://github.com/Osmantic/ODS"
oneLiner: "ODS biến chiếc máy tính (Windows/Mac/Linux) của bạn thành một máy chủ AI riêng: chỉ một câu lệnh là cài xong bộ chat, giọng nói, agent, workflow, tìm kiếm (RAG) và tạo ảnh — chạy hoàn toàn local, không cần cloud."
media: []

vertical: ["creative", "agency"]

maturity: "rising"
repoStats:
  stars: 4645
  forks: 704
  note: "~195 ngày tuổi, ~23.8 sao/ngày"
  starsPerDay: 23.8
  ageDays: 195
  pushedAt: 2026-08-21T17:18:44Z
  archived: false
  openIssues: 925
standoutFeatures:
  - "Cài bằng một câu lệnh: tự nhận GPU, chọn model phù hợp phần cứng, tạo credential và khởi động cả stack; chat được trong khoảng 2 phút."
  - "Gộp sẵn và nối dây cho nhau cả bộ công cụ AI local: llama-server (inference), Open WebUI (chat), n8n (workflow), ComfyUI (tạo ảnh), Whisper/Kokoro (giọng nói), Qdrant + SearXNG (RAG/tìm kiếm)."
  - "Chạy local mặc định (dữ liệu ở lại máy) nhưng có chế độ cloud/hybrid tuỳ chọn qua API OpenAI/Anthropic/Together khi cần."
  - "Hỗ trợ Linux (NVIDIA/AMD/Intel Arc), Windows (Docker Desktop + WSL2) và macOS Apple Silicon; mỗi service là một 'extension' có thể bật/tắt."
signalSources:
  - label: "GitHub"
    url: "https://github.com/Osmantic/ODS"
  - label: "Video demo"
    url: "https://youtu.be/nO8xFNHX-HA"

useCases:
  - "Dựng một máy chủ AI riêng cho cả team agency: chat, RAG tài liệu nội bộ, workflow tự động — dữ liệu khách hàng không rời máy."
  - "Chạy ComfyUI + model ảnh local qua giao diện có sẵn để tạo ảnh mà không gửi prompt lên dịch vụ trả phí."
  - "Tự động hoá quy trình bằng n8n nối với LLM local: tóm tắt, phân loại, trả lời theo tài liệu công ty."
  - "Thay thế việc trả tiền API OpenAI hàng tháng bằng inference local trên máy/PC có GPU sẵn."

workflowStepReplaced: "Cắt khâu tự tay lắp ghép và cấu hình Docker cho hàng chục service AI rời (Ollama, Open WebUI, n8n, ComfyUI...) — gộp thành một trình cài đặt."
timeOrCostSaved: "Rút việc dựng stack AI local từ nhiều ngày mày mò Docker/driver xuống còn một câu lệnh; về lâu dài tiết kiệm phí API cloud nếu đã có phần cứng GPU."
localProblem: "Nhiều agency và team creative ở VN muốn dùng AI nhưng ngại đẩy tài liệu/khách hàng lên cloud nước ngoài, đồng thời không đủ người kỹ thuật để tự dựng và nối một dàn service AI local. Họ cần một cách 'cài phát chạy ngay'."
localEvidence: "Chủ đề 'chạy AI local', 'self-host LLM để bảo mật dữ liệu' đang được cộng đồng dev và một số agency VN quan tâm, nhất là khi lo ngại lộ dữ liệu khách hàng. Nội dung tiếng Việt hướng dẫn cụ thể về ODS thì chưa thấy — cần kiểm thêm."

vnMarket:
  insight: "Ở VN, nhu cầu AI local đang tăng ở nhóm agency/doanh nghiệp nhỏ vì lý do bảo mật dữ liệu và cắt phí API. Nhưng rào cản lớn nhất là công sức dựng hệ thống. Một installer gộp sẵn như ODS đánh trúng điểm nghẽn đó, dù vẫn cần máy có GPU và người biết vận hành Docker."
  seoKeywords: ["chạy AI local", "tự host LLM", "máy chủ AI cá nhân", "self-host ChatGPT", "AI không cần cloud", "cài Open WebUI n8n ComfyUI"]
  notes: "Suy luận từ README và xu hướng self-host AI. Chưa kiểm được nội dung/thảo luận tiếng Việt cụ thể về ODS."

usabilityRisk: "Bắt buộc có Docker (Windows cần Docker Desktop + WSL2); trải nghiệm tốt cần GPU, máy không GPU phải chạy chế độ cloud (mất ý nghĩa 'local'). Repo còn 925 issue mở và nhánh main 'chạy nhanh, đổi liên tục' — nên pin bản release ổn định. Trình cài dùng kiểu `curl ... | bash` / tải zip rồi chạy script: cần đọc kỹ script trước khi chạy. Tài liệu tiếng Anh, chưa có cộng đồng VN."

practitionerGuide:
  outcome: "Sau guide này bạn có một máy chủ AI local chạy được: mở trình duyệt vào Open WebUI và chat với model chạy trên chính máy mình, kèm dashboard quản lý service."
  prerequisites:
    - "Docker đã cài và đang chạy (Windows: Docker Desktop bật WSL2 backend, chạy PowerShell thường không phải Administrator)."
    - "Nên có GPU (NVIDIA/AMD/Intel Arc trên Linux/Windows, hoặc Apple Silicon trên macOS); không có GPU thì dùng chế độ --cloud với API key."
    - "Dung lượng đĩa trống cho model và thời gian tải model lần đầu."
  steps:
    - "Chọn đúng lệnh cài theo hệ điều hành ở README (Linux/macOS dùng script cài, Windows dùng khối PowerShell tải zip rồi chạy install.ps1). Đọc kỹ script trước khi chạy."
    - "Chờ trình cài nhận GPU, chọn model theo phần cứng, tạo credential và khởi động các service."
    - "Mở http://localhost:3000 (Open WebUI) và bắt đầu chat để kiểm tra inference local hoạt động."
    - "Vào dashboard xem trạng thái GPU/service, bật thêm các extension cần dùng (n8n, ComfyUI, RAG...)."
    - "Nếu không có GPU, cài lại với cờ --cloud để dùng API OpenAI/Anthropic/Together thay cho inference local."
  expectedResult: "Open WebUI mở được ở localhost:3000, chat trả lời từ model local (hoặc cloud nếu chọn), và dashboard hiển thị các service đang chạy khoẻ."
  commonPitfalls:
    - "Docker chưa chạy hoặc Windows chưa bật WSL2 → trình cài lỗi ngay từ đầu."
    - "Chạy trình cài bằng quyền Administrator trên Windows → sai quyền thư mục dữ liệu (.env, data/)."
    - "Máy không GPU nhưng cố chạy local → inference rất chậm; nên chuyển sang chế độ --cloud."
    - "Dùng thẳng nhánh main cho việc quan trọng thay vì pin một release ổn định (v2.6.0)."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Dựng máy chủ AI riêng cho agency chỉ với một câu lệnh' — nhấn chuyện dữ liệu khách hàng ở lại máy và cắt phí API OpenAI, kèm cảnh báo cần GPU và Docker."
paidToolReplaced: "Phí API OpenAI/Anthropic hàng tháng và các dịch vụ AI cloud (chat, RAG, tạo ảnh) — thay bằng stack tự host."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được danh sách service, nhưng đánh giá thực tế (cài trên phần cứng VN phổ biến có mượt không, 925 issue ảnh hưởng ra sao, có ổn định để agency dùng thật không) cần người thử và biên tập."

tags: ["ai", "self-hosted", "local-ai", "llm", "rag", "docker", "agency", "creative", "open-source"]
scoreBreakdown:
  useCaseFit: 16
  projectHealth: 21
  costAdvantage: 17
  deployment: 9
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-08-23
nextReviewDueAt: 2026-11-21
publishedAt: 2026-08-23
week: "2026-W34"
draft: true
---

Record nháp foundation (pipeline 2026-08-23).

Cần Luan review trước khi publish:
- **Media trống:** README dùng ảnh trong repo (`ods/docs/images/osmantic-lockup.png`) và video YouTube; chưa gắn media vào record vì cần chọn ảnh hero phù hợp và kiểm hotlink. Cân nhắc thêm ảnh dashboard nếu tìm được đường dẫn raw sống.
- **Độ ổn định:** 925 issue mở và nhánh main đổi nhanh — nếu viết bài nên khuyên người đọc pin release ổn định (v2.6.0), và cần thử cài thật trước khi khẳng định 'chạy mượt'.
- **Vertical:** đang để `creative` + `agency` theo candidate; đây là hạ tầng AI chung, cân nhắc góc nào phù hợp nhất với độc giả site.
- Điểm số là ước lượng discovery, chưa lab-test.
