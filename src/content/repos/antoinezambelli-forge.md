---
name: "forge"
repoUrl: "https://github.com/antoinezambelli/forge"
oneLiner: "forge là lớp 'giữ ổn định' cho các model LLM tự host khi gọi tool: bạn khai báo bộ công cụ, model tự chọn gọi cái nào, còn forge lo phần bắt lỗi, thử lại và kiểm tra kết quả để việc gọi tool ít hỏng hơn."
media: []

vertical: ["agency"]

maturity: "pre-viral"
repoStats:
  stars: 2167
  forks: 164
  note: "~145 ngày tuổi, ~14.9 sao/ngày"
  starsPerDay: 14.9
  ageDays: 145
  pushedAt: 2026-07-10T15:30:45Z
  archived: false
  openIssues: 3
standoutFeatures:
  - "Lớp tin cậy cho tool-calling của LLM tự host: rescue parsing, retry nudges và validation kết quả áp dụng ngay cả khi bạn không ràng buộc bước nào."
  - "Ràng buộc quy trình là tuỳ chọn: required_steps, prerequisites, terminal_tool để siết vòng lặp khi cần, không bắt buộc."
  - "Theo README, nâng một model local 8B từ vài % lên 84% trên bộ eval 26 kịch bản v0.7.0; có proxy mode nói giao thức OpenAI để lắp vào harness sẵn có mà không cần viết lại."
signalSources:
  - label: "GitHub"
    url: "https://github.com/antoinezambelli/forge"
  - label: "PyPI"
    url: "https://pypi.org/project/forge-guardrails/"

useCases:
  - "Làm cho model LLM tự host (Ollama/llama.cpp) gọi tool ổn định hơn khi xây tự động hoá nội bộ, giảm lỗi 'model gọi sai tool / sai định dạng'."
  - "Lắp forge ở chế độ proxy trước một harness/agent sẵn có để thêm guardrails mà không phải viết lại code."
  - "Ràng buộc thứ tự các bước (required_steps, terminal_tool) cho một quy trình nghiệp vụ có tool cố định, ví dụ tra dữ liệu rồi mới trả lời."

workflowStepReplaced: "Khâu tự viết code xử lý lỗi/thử lại/kiểm tra định dạng quanh việc gọi tool của LLM tự host."
timeOrCostSaved: "Cho phép dùng model local nhỏ (rẻ, chạy tại chỗ) thay cho model API đắt tiền mà vẫn đạt độ tin cậy tool-calling cao hơn — tiết kiệm chi phí gọi API nếu quy trình chạy nhiều."
localProblem: "Agency/team tech Việt đang tự dựng automation bằng LLM local (để khỏi trả phí API và giữ dữ liệu tại chỗ) hay gặp cảnh model gọi sai tool, sai JSON, phải tự chắp vá code retry rất tốn công."
localEvidence: "Trong các nhóm dev/AI Việt, chủ đề 'chạy LLM local với Ollama/llama.cpp' và 'function calling hay lỗi' xuất hiện thường xuyên; nhu cầu một lớp guardrails sẵn có là hợp lý, dù đây là công cụ cho người viết code chứ không phải người dùng cuối."

vnMarket:
  insight: "Ở VN, nhóm thực sự dùng được forge là các agency/studio tech và dev tự dựng tool AI nội bộ trên model local. Đa số creative/ecom/seo không tự host LLM nên không chạm tới. Đây là công cụ tầng hạ tầng cho người xây, không phải tool bấm-là-dùng cho người làm nghề."
  seoKeywords: ["chạy LLM local function calling", "self-hosted LLM tool calling", "guardrails cho model local", "Ollama tool calling ổn định", "framework agent tự host"]
  notes: "Fit chỉ ở nhánh agency/team kỹ thuật. Với tệp creative/ecom/seo phổ thông thì gần như không áp dụng. Độ chắc chắn: thấp."

usabilityRisk: "Là framework Python cho lập trình viên (Python 3.12+), cần biết code và phải có sẵn một LLM tự host để gọi. Không phải sản phẩm có giao diện cho người dùng cuối. Số liệu eval (84%, 98%) là do tác giả tự công bố, chưa được bên thứ ba kiểm chứng — nên hiểu là tuyên bố của repo."

practitionerGuide:
  outcome: "Chạy được một vòng tool-calling ổn định với model local qua forge, và tự đo xem tỉ lệ gọi tool đúng có cải thiện so với gọi trực tiếp không."
  prerequisites:
    - "Python 3.12+ và biết lập trình cơ bản."
    - "Một LLM tự host chạy được (ví dụ qua Ollama/llama.cpp) hoặc một endpoint kiểu OpenAI."
    - "Một vài tool (hàm) để model gọi thử."
  steps:
    - "Cài forge từ PyPI (pip install forge-guardrails)."
    - "Khai báo bộ tool và cắm model local vào theo hướng dẫn README."
    - "Chạy thử một kịch bản không ràng buộc bước để xem guardrails (retry, validation) hoạt động."
    - "Nếu cần, bật proxy mode để đặt forge trước harness/agent sẵn có."
  expectedResult: "Model local gọi tool đúng định dạng và tự thử lại khi lỗi, cho ra kết quả ổn định hơn so với gọi trực tiếp — đo bằng chính kịch bản của bạn."
  commonPitfalls:
    - "Tin ngay con số eval trong README mà không tự đo trên workload thật của mình."
    - "Kỳ vọng forge điều phối nhiều agent — nó chỉ lo độ tin cậy trong MỘT vòng agentic, không phải orchestrator."
    - "Chưa có LLM tự host mà đã cài, dẫn tới không có gì để chạy."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm dev/agency Việt đang dựng automation trên LLM local, góc 'giảm lỗi tool-calling khi chạy model local rẻ'. Không đóng gói như tool cho creative/ecom."
paidToolReplaced: "Chi phí gọi API model lớn (để đạt tool-calling tin cậy) ↔ model local + forge"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Repo còn nhỏ (~2.1k sao, ~145 ngày), practitioner khó tự tìm ra qua Trending. Nhưng tệp áp dụng hẹp (chỉ agency/dev tự host LLM), nên giá trị cho độc giả chính của RepoRadar giới hạn — cần Luan cân nhắc scope."

scoreBreakdown:
  useCaseFit: 8
  projectHealth: 20
  costAdvantage: 10
  deployment: 8
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-11
nextReviewDueAt: 2026-10-09

tags: ["llm", "tool-calling", "agents", "self-hosted", "python", "open-source"]
publishedAt: 2026-07-11
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue. Công cụ hạ tầng cho dev/agency tự host LLM — fit hẹp, chỉ nhánh agency/team kỹ thuật. Số liệu eval là tuyên bố của tác giả, chưa kiểm chứng độc lập. Cần Luan cân nhắc có thuộc scope RepoRadar (thiên về practitioner creative/ecom/seo) hay không.
