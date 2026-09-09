---
name: "Mix-Studio"
repoUrl: "https://github.com/BlackMixture/Mix-Studio"
oneLiner: "Mix-Studio là một giao diện AI workspace gọn gàng, chạy được cả trên máy tính lẫn điện thoại, để chạy các workflow tạo ảnh và video dựng sẵn — bản thân nó dựng trên ComfyUI."
media: []

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 183
  note: "GitHub search cho thấy ~183 sao; pipeline lần này KHÔNG lấy được dữ liệu GitHub (forks/tuổi repo/ngày push/health score đều trống)."
standoutFeatures:
  - "Giao diện AI workspace nhấn mạnh sự gọn gàng và responsive — chạy được cả trên desktop lẫn điện thoại."
  - "Dựng trên ComfyUI, chạy các workflow tạo ảnh/video đã được tinh chỉnh sẵn thay vì bắt người dùng tự nối node từ đầu."
signalSources:
  - label: "GitHub"
    url: "https://github.com/BlackMixture/Mix-Studio"

useCases:
  - "Chạy các workflow ComfyUI tạo ảnh/video dựng sẵn qua một giao diện gọn hơn thay vì thao tác trực tiếp trên node graph."
  - "Điều khiển và xem kết quả tạo ảnh/video từ điện thoại khi ComfyUI chạy trên một máy khác (desktop/GPU) trong nhà."
  - "Dựng một AI workspace tự host cho nhóm creative nhỏ, giữ workflow tập trung một chỗ thay vì mỗi người mở ComfyUI riêng."

workflowStepReplaced: "Khâu thao tác trực tiếp trên giao diện node của ComfyUI khi chỉ muốn chạy lại workflow tạo ảnh/video có sẵn."
timeOrCostSaved: "Chưa đo được ở giai đoạn discovery — kỳ vọng giảm ma sát khi chạy lại workflow (đỡ phải mở node graph, dùng được trên điện thoại), nhưng cần thử thực tế mới ước lượng được."
localProblem: "Dân làm content/creative VN dùng ComfyUI để tạo ảnh/video thường thấy giao diện node rối, khó thao tác nhanh và gần như không dùng được trên điện thoại; khi cần chạy lại một workflow quen thuộc thì vẫn phải ngồi trước màn hình lớn."
localEvidence: "Quan sát chung: ComfyUI phổ biến trong cộng đồng AI art VN nhưng nổi tiếng dốc và kém thân thiện với người không rành kỹ thuật — đây là ghi nhận ngành, chưa phải case cụ thể đã kiểm chứng cho repo này."

vnMarket:
  insight: "Nhóm creative/AI art VN hiện chủ yếu dùng thẳng ComfyUI (miễn phí, mạnh nhưng rối) hoặc trả phí cho Midjourney/các web tạo ảnh có sẵn để đổi lấy giao diện dễ. Một lớp UI gọn, responsive phủ lên ComfyUI đánh đúng khoảng trống 'muốn sức mạnh ComfyUI mà không muốn nhìn node graph', nhưng đổi lại là chi phí tự cài và tự vận hành."
  seoKeywords: ["giao diện comfyui dễ dùng", "tạo ảnh ai tự host", "workspace ai tạo ảnh video", "comfyui trên điện thoại"]
  notes: "Insight ở mức quan sát chung, độ chắc chắn thấp. Queue KHÔNG trả về README excerpt lẫn dữ liệu GitHub nên chưa xác nhận được tính năng thực tế, mức độ hoàn thiện hay cách cài."

usabilityRisk: "Chưa đọc được README nên chưa rõ cách cài (cần cài kèm ComfyUI? Docker? tự host server?), yêu cầu GPU và độ ổn định. Vì dựng trên ComfyUI, gần như chắc chắn cần một máy có GPU đủ mạnh để chạy các workflow ảnh/video, và phần 'dùng trên điện thoại' nhiều khả năng là điều khiển từ xa chứ không phải chạy tạo ảnh ngay trên máy. Chưa thấy cộng đồng VN quanh tool này."

practitionerGuide:
  outcome: "Dựng thử được Mix-Studio trên máy có ComfyUI và chạy được ít nhất một workflow tạo ảnh để đánh giá giao diện có gọn/nhanh hơn ComfyUI gốc hay không, và phần dùng trên điện thoại thực tế tới đâu."
  prerequisites:
    - "Đọc kỹ README/tài liệu repo để biết cách cài và mối quan hệ với ComfyUI (cài đè lên bản ComfyUI có sẵn hay đi kèm bản riêng)."
    - "Một máy có GPU đủ mạnh để chạy workflow ảnh/video của ComfyUI; nếu muốn thử trên điện thoại thì cần máy và điện thoại chung mạng nội bộ."
  steps:
    - "Clone repo và cài theo hướng dẫn trong README (nhiều khả năng cần một cài đặt ComfyUI đang chạy)."
    - "Mở Mix-Studio và nạp một workflow tạo ảnh có sẵn để chạy thử."
    - "Truy cập giao diện từ điện thoại trong cùng mạng để kiểm chứng phần responsive."
  expectedResult: "Giao diện chạy được, tạo ra ảnh từ một workflow ComfyUI mà không lỗi rõ ràng, và mở được trên điện thoại ở mức xem/điều khiển cơ bản."
  commonPitfalls:
    - "Nhầm rằng tool tự chạy được tạo ảnh trên điện thoại — thực tế phần nặng vẫn cần máy có GPU."
    - "Xung đột phiên bản/custom node với bản ComfyUI đang có, khiến workflow không nạp được."

greyHatFlag: "in"

suggestedAngle: "So sánh 'giao diện gọn phủ lên ComfyUI' với việc dùng thẳng ComfyUI node graph — cho người xem thấy khi nào một lớp UI như vậy đáng dựng, và giới hạn khi muốn dùng trên điện thoại."
paidToolReplaced: "Midjourney / các web tạo ảnh AI trả phí (đổi lấy giao diện dễ dùng)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: true
  note: "Ở mức discovery này thông tin còn mỏng (mới có đúng một câu mô tả + số sao), AI/Trending có thể tự thấy. Giá trị chỉ tăng khi đọc kỹ repo, kiểm chứng cách cài, yêu cầu GPU và mức độ dùng được trên điện thoại — phần đó cần practitioner làm tay."

scoreBreakdown:
  costAdvantage: 12
scoringVersion: "v1"
evidenceLevel: "D"
confidence: "low"

tags: ["ai", "creative", "comfyui", "image-generation", "video-generation", "self-hosted"]
publishedAt: 2026-07-31
week: "2026-W31"
draft: true
---

## Ghi chú cho biên tập (Luan review)

- **Dữ liệu rất mỏng ở lần chạy này**: queue chỉ trả về `description` + `⭐ 183` (nguồn github-search). Trường `github` = null nên KHÔNG có forks, tuổi repo, ngày push, hay `suggestedHealthScore`; không có README excerpt, không có media. Vì vậy `scoreBreakdown.projectHealth`, `useCaseFit`, `deployment`, `documentation` để trống — chưa đủ căn cứ chấm.
- **Cần verify thủ công trước khi publish**: mở repo đọc README thật để xác nhận (1) quan hệ với ComfyUI và cách cài, (2) yêu cầu GPU, (3) phần "dùng trên điện thoại" thực chất là chạy tạo ảnh trên máy hay chỉ điều khiển từ xa. Toàn bộ standoutFeatures/useCases hiện suy ra từ đúng một câu mô tả repo.
- **greyHatFlag = in**: đây là tool creative sạch (giao diện tạo ảnh/video dựng trên ComfyUI), không có yếu tố chạm ToS.
- Số liệu trong `repoStats` chỉ gồm đúng con số queue cung cấp (183 sao) — không tự bịa thêm metric.
