---
name: "iLab GPT Conjure"
repoUrl: "https://github.com/kadevin/ilab-gpt-conjure"
oneLiner: "iLab GPT Conjure là WebUI/CLI để tạo và chỉnh ảnh với GPT-image-2, có gallery tham chiếu, prompt template, queue local và nhiều chế độ kết nối gồm Codex local hoặc OpenAI-compatible API."
media: []

vertical: ["creative", "ecom"]

maturity: "rising"
repoStats:
  stars: 586
  forks: 80
  note: "~20 ngày tuổi, ~29.3 sao/ngày"
standoutFeatures:
  - "WebUI FastAPI cho GPT-image-2, kèm CLI để tự động hóa tác vụ tạo ảnh."
  - "Có public gallery, ảnh tham chiếu gần đây, color chip, prompt snippet chip và prompt template."
  - "Hỗ trợ nhiều task song song, queue local, lịch sử có phân trang, tìm kiếm và lọc."
  - "Có bản portable cho Windows/macOS và chế độ OpenAI-compatible API bên cạnh Codex local/OAuth nâng cao."
signalSources:
  - label: "GitHub"
    url: "https://github.com/kadevin/ilab-gpt-conjure"

useCases:
  - "Dựng một bàn làm việc tạo ảnh GPT-image-2 có lịch sử, template và ảnh tham chiếu thay vì prompt rời rạc trong chat."
  - "Quản lý nhiều job tạo ảnh cùng lúc cho social, sản phẩm hoặc concept visual."
  - "Lưu prompt template và public gallery để team dùng lại style, màu, nhân vật hoặc ảnh sản phẩm."
  - "Chạy WebUI local khi bạn muốn kiểm soát file đầu vào, output và lịch sử tác vụ trên máy."

workflowStepReplaced: "Khâu quản lý prompt, ảnh tham chiếu, lịch sử tạo ảnh và nhiều task thủ công trong từng phiên chat riêng."
timeOrCostSaved: "Có thể giảm thời gian tìm lại prompt/ảnh cũ và chạy lại job, nhất là khi team tạo nhiều biến thể ảnh trong cùng một ngày."
localProblem: "Creative và shop Việt dùng GPT-image-2 thường bị rơi vào cảnh prompt nằm rải rác, ảnh tham chiếu lẫn trong chat, khó tái sử dụng style cho batch tiếp theo. Một WebUI có template, gallery và queue giúp biến việc tạo ảnh thành quy trình hơn."
localEvidence: "Queue ghi repo chỉ 20 ngày tuổi nhưng đã có 586 sao, 80 fork và tốc độ ~29.3 sao/ngày. README mô tả chi tiết WebUI, CLI, prompt templates, gallery, task history và portable release."

vnMarket:
  insight: "Góc Việt nên đặt iLab GPT Conjure vào workflow sản xuất ảnh AI bằng GPT-image-2: không phải model mới, mà là lớp vận hành cho team cần template, ảnh tham chiếu, queue và lịch sử. Đặc biệt hợp shop/creative tạo nhiều biến thể ảnh, nhưng cần cảnh báo rõ về API key/OAuth và dữ liệu local."
  seoKeywords: ["GPT-image-2 WebUI", "tạo ảnh GPT-image-2", "prompt template tạo ảnh AI", "quản lý ảnh tham chiếu AI", "WebUI tạo ảnh AI", "AI image generation workflow"]
  notes: "Từ khóa suy luận từ README song ngữ và các tính năng chính; chưa verify nội dung tiếng Việt ngoài queue."

usabilityRisk: "iLab GPT Conjure có chế độ API ổn định hơn cho dùng chung, còn chế độ Codex/ChatGPT OAuth local được README mô tả là nâng cao và có thể thay đổi. Team dùng chung không nên lưu nhầm API key, OAuth file, ảnh đầu vào hoặc output nhạy cảm vào repo."

practitionerGuide:
  outcome: "Bạn có một WebUI local để chạy vài job GPT-image-2, lưu template và kiểm tra cách quản lý ảnh tham chiếu."
  prerequisites:
    - "Python 3.11+ hoặc bản portable phù hợp hệ điều hành nếu bạn không muốn cài thủ công."
    - "API key/provider OpenAI-compatible cho chế độ ổn định, hoặc hiểu rõ rủi ro nếu dùng chế độ Codex/OAuth local."
    - "Một bộ prompt, ảnh tham chiếu hoặc yêu cầu tạo ảnh cụ thể cho social/sản phẩm."
  steps:
    - "Chọn chế độ chạy: portable nếu muốn thử nhanh, cài source nếu cần chỉnh hoặc phát triển thêm."
    - "Cấu hình provider API trong WebUI và chạy một prompt đơn giản để kiểm tra kết nối."
    - "Tải lên vài ảnh tham chiếu hoặc lưu chúng vào gallery nếu bạn cần dùng lại nhiều lần."
    - "Tạo một prompt template cho case lặp lại, ví dụ ảnh sản phẩm, poster social hoặc nhân vật cố định."
    - "Chạy nhiều biến thể, xem lịch sử và đánh dấu output đủ tốt để dùng tiếp."
  expectedResult: "Bạn có một bộ output thử, một prompt template tái sử dụng được và biết WebUI có giúp team quản lý quy trình tạo ảnh tốt hơn chat thường không."
  commonPitfalls:
    - "Dùng chế độ OAuth nâng cao cho workflow chung mà chưa hiểu rủi ro thay đổi và bảo mật."
    - "Không tách dữ liệu local như input/output/API key khỏi git hoặc thư mục chia sẻ."
    - "Tạo quá nhiều template vụn khiến team khó tìm lại template thật sự dùng được."

greyHatFlag: "in"

suggestedAngle: "Viết theo góc 'biến GPT-image-2 thành xưởng ảnh có template và queue', không tập trung vào tranh luận API/OAuth."
paidToolReplaced: "Một phần nhu cầu dùng giao diện tạo ảnh SaaS có history/template, hoặc quản lý thủ công trong ChatGPT"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI tóm tắt được tính năng, nhưng insight cần là cách đặt nó vào quy trình creative/ecom Việt: template, gallery, queue và cảnh báo key/OAuth."

tags: ["gpt-image-2", "image-generation", "webui", "prompt-template", "creative-workflow"]
publishedAt: 2026-06-28
week: "2026-W26"
draft: false
---

Draft foundation. Cần Luan kiểm thêm trải nghiệm portable, cách dự án xử lý API/OAuth và mức độ phù hợp với team creative Việt trước khi publish.
