---
name: "AI Visual Prompt Cookbook"
repoUrl: "https://github.com/VigoZhao/AI-Visual-Prompt-Cookbook"
oneLiner: "AI Visual Prompt Cookbook là bộ style pack dạng JSON copy-paste (118+ mẫu) cho Nano Banana Pro, GPT Image và Midjourney: chép một khối JSON là ra một phong cách ảnh, khỏi mò prompt từ đầu."
media: []

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 574
  note: "Chỉ có số sao từ hàng đợi khám phá (574★); forks, tuổi repo và sao/ngày chưa fetch được ở lần quét này."
standoutFeatures:
  - "118+ style pack dạng JSON 'cắm là chạy', dùng chung được cho Nano Banana Pro, GPT Image và Midjourney (theo mô tả repo)."
  - "Mô hình dùng đơn giản: copy một JSON là có một style, không cần viết lại prompt dài."
  - "Repo cho biết được cập nhật hằng ngày, phù hợp làm thư viện style tham chiếu."
signalSources:
  - label: "GitHub"
    url: "https://github.com/VigoZhao/AI-Visual-Prompt-Cookbook"

useCases:
  - "Chọn nhanh một style pack JSON để ra ngay một hướng ảnh cho post, thumbnail hoặc key visual nhỏ."
  - "Thử nhiều phong cách khác nhau trong một buổi brainstorm bằng cách đổi qua lại các khối JSON."
  - "Chuẩn hoá style cho team: lưu vài JSON làm preset nội bộ để mọi người ra ảnh đồng nhất hơn."

workflowStepReplaced: "Khâu tự viết và tinh chỉnh prompt style từ đầu mỗi lần cần một look mới."
timeOrCostSaved: "Rút ngắn thời gian khâu tìm và diễn đạt style; con số cụ thể tuỳ nhu cầu, chưa đo thực tế."
localProblem: "Designer và social team Việt thường mất thời gian ở khâu diễn đạt 'style' cho ảnh AI. Một bộ JSON copy-paste giúp họ chốt nhanh phong cách rồi thay nội dung, thay vì gõ lại prompt style dài mỗi lần."
localEvidence: "Quan sát chung: cộng đồng creative Việt hay chia sẻ và xin 'prompt style' cho Midjourney/ảnh AI. Chưa tìm thấy nội dung tiếng Việt gọi đích danh repo này — suy luận theo hành vi ngành, cần Luan kiểm chứng."

vnMarket:
  insight: "Đây là thư viện tham chiếu style, không phải công cụ tạo ảnh. Với team Việt, giá trị là giảm thời gian mò look: lấy JSON làm điểm xuất phát rồi tinh chỉnh theo brand/SKU. Kết quả vẫn phụ thuộc model bạn dùng (Nano Banana Pro / GPT Image / Midjourney) và chi phí của model đó."
  seoKeywords: ["prompt style ảnh ai", "prompt midjourney", "style pack json ai", "thư viện prompt tạo ảnh", "prompt nano banana"]
  notes: "Dựa trên mô tả repo. Chưa fetch README đầy đủ; chưa thấy nội dung tiếng Việt bám repo này. Độ chắc chắn thấp."

usabilityRisk: "Chỉ là bộ JSON tham chiếu — bạn vẫn cần tài khoản/credit của model tạo ảnh (Nano Banana Pro, GPT Image hoặc Midjourney). Copy nguyên style về dễ ra ảnh lệch brand nếu không chỉnh. Chưa có cộng đồng VN và chưa xác minh được chất lượng từng pack vì thiếu dữ liệu chi tiết."

practitionerGuide:
  outcome: "Sau khi thử, bạn có vài style pack JSON đã tinh chỉnh theo brand để tạo bộ ảnh thử cho social hoặc sản phẩm."
  prerequisites:
    - "Tài khoản/credit của ít nhất một model được hỗ trợ (Nano Banana Pro, GPT Image hoặc Midjourney)."
    - "Một bài toán ảnh cụ thể: post social, thumbnail hoặc key visual."
    - "Vài ghi chú brand: màu, mood, sản phẩm, bố cục mong muốn."
  steps:
    - "Duyệt repo và chọn 3-5 style pack gần với hướng bạn cần."
    - "Copy một JSON vào model đang dùng và sinh thử ảnh đầu tiên."
    - "Đổi nội dung/sản phẩm trong prompt, giữ phần style JSON để xem look có ổn không."
    - "Lưu lại JSON nào ra đúng ý làm preset nội bộ cho team."
  expectedResult: "Bạn có preset style riêng cho team/shop, ra ảnh nhất quán hơn thay vì chỉ bookmark một repo đẹp."
  commonPitfalls:
    - "Bê nguyên style JSON rồi thất vọng vì ảnh không khớp brand hoặc sản phẩm thật."
    - "Quên rằng vẫn phải trả phí cho model tạo ảnh — repo chỉ cung cấp phần style."
    - "Thử quá nhiều pack cùng lúc nên không đọng lại được preset nào hữu ích."

greyHatFlag: "in"

suggestedAngle: "Góc cho creator: 'dùng style pack JSON như moodboard có công thức' cho designer/social team, kèm demo đổi 1 SKU giữ nguyên style."
paidToolReplaced: "Một phần thời gian research style/prompt trên Pinterest hoặc các chợ prompt."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể liệt kê style pack, nhưng cách đưa vào quy trình ra ảnh của team Việt và keyword địa phương cần lớp biên tập riêng."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 12
  costAdvantage: 8
  deployment: 14
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"

tags: ["prompt", "image-generation", "creative", "midjourney", "gpt-image"]
publishedAt: 2026-08-28
week: "2026-W35"
draft: true
---

Draft foundation (auto). Chỉ có mô tả repo + số sao (574★); chưa fetch README/ảnh preview. Cần Luan kiểm chứng: chất lượng thực tế của các style pack, mức cập nhật 'daily' như repo tự nêu, và trùng lặp chủ đề với các record thư viện prompt/style khác trước khi publish.
