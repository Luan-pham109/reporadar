---
name: "AI Image Prompt Cookbook"
repoUrl: "https://github.com/gpt-img-2/ai-image-prompt-cookbook"
oneLiner: "AI Image Prompt Cookbook là thư viện prompt mẫu (tiếng Trung, có bản đa ngôn ngữ) để tạo ảnh AI cho thời trang nữ/trẻ em, ảnh main sản phẩm TMĐT, ảnh chụp sản phẩm, bìa Xiaohongshu và poster quảng cáo."
media:
  - type: "image"
    url: "https://cdn.nano-banana-2-ai.com/uploads/prompt-library/gpt-image-2/media/ai-womens-fashion/ai-womens-fashion-001/0-v2.png"
    caption: "Ví dụ ảnh thời trang nữ tạo từ prompt trong cookbook."
  - type: "image"
    url: "https://cdn.nano-banana-2-ai.com/uploads/prompt-library/gpt-image-2/media/ai-womens-fashion/ai-womens-fashion-002/0-v2.png"
    caption: "Ví dụ prompt thời trang nữ phong cách mùa hè."
  - type: "image"
    url: "https://cdn.nano-banana-2-ai.com/uploads/prompt-library/gpt-image-2/media/ai-womens-fashion/ai-womens-fashion-003/0-v2.png"
    caption: "Ví dụ prompt thời trang nữ phong cách mùa thu."

vertical: ["ecom", "creative"]

maturity: "rising"
repoStats:
  stars: 70
  forks: 19
  note: "~53 ngày tuổi, ~1.3 sao/ngày"
  starsPerDay: 1.3
  ageDays: 53
  pushedAt: 2026-06-07T10:24:30Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "README liệt kê thư viện prompt theo ngách: 40 prompt thời trang nữ, 34 trẻ em, 10 ảnh main TMĐT, 10 ảnh chụp sản phẩm, 10 bìa Xiaohongshu, 10 poster quảng cáo."
  - "Có file dữ liệu máy đọc được (prompts.zh.json, categories.zh.json, visuals.zh.json) để tái sử dụng làm gallery/phân phối lại."
  - "Có trang hướng dẫn đa ngôn ngữ, gồm cả bản tiếng Việt (docs/languages/vi.md), sắp xếp theo cách hỏi của từng nhóm ngôn ngữ chứ không dịch câu-chữ."
  - "Cách dùng đơn giản: copy template Markdown rồi thay biến trong ngoặc (sản phẩm, trang phục, bối cảnh, màu, khung ảnh, tiêu đề); README có phần cảnh báo tránh giả mạo người thật và trẻ em."
signalSources:
  - label: "GitHub"
    url: "https://github.com/gpt-img-2/ai-image-prompt-cookbook"

useCases:
  - "Copy prompt mẫu để tạo ảnh sản phẩm, ảnh thời trang nữ/trẻ em cho shop mà không phải thuê buổi chụp riêng."
  - "Làm ảnh bìa kiểu Xiaohongshu và poster quảng cáo bằng cách thay biến trong template có sẵn."
  - "Tạo ảnh main sản phẩm cho sàn TMĐT nhanh, thử nhiều phong cách trước khi chốt bản đăng."
  - "Dùng bản tiếng Việt trong docs/languages/vi.md để tra cách viết prompt theo thói quen người Việt."

workflowStepReplaced: "Khâu nghĩ prompt từ đầu (và một phần khâu chụp ảnh sản phẩm/mẫu) khi làm ảnh cho shop và nội dung TMĐT."
timeOrCostSaved: "Giảm thời gian tự viết prompt và có thể thay một phần chi phí thuê chụp mẫu/sản phẩm; con số cụ thể phụ thuộc ngành hàng, model tạo ảnh dùng và yêu cầu độ thật của ảnh."
localProblem: "Shop thời trang và người bán trên Shopee/TikTok Shop ở Việt Nam tốn tiền và thời gian cho mỗi buổi chụp sản phẩm/mẫu, còn khi tự tạo ảnh AI thì lại bí prompt nên ảnh ra thiếu chuyên nghiệp, sai bố cục ảnh main."
localEvidence: "Nhu cầu tạo ảnh sản phẩm/thời trang bằng AI để tiết kiệm chi phí chụp đang rất nóng với shop TMĐT Việt. Cookbook này gom sẵn prompt theo đúng các ngách shop hay cần (ảnh main, ảnh mẫu, bìa MXH, poster), lại có sẵn bản tiếng Việt — nhưng cần Luan kiểm tra chất lượng ảnh thật khi chạy prompt qua model."

vnMarket:
  insight: "Người bán online Việt đang chuyển mạnh sang ảnh sản phẩm/mẫu tạo bằng AI (GPT Image, Nano Banana, Midjourney) để cắt chi phí chụp. Điểm nghẽn là prompt: đa số copy prompt lẻ trên hội nhóm, thiếu bộ mẫu chuẩn theo ngách. Một cookbook phân theo thời trang nữ/trẻ em/ảnh main/bìa MXH đúng thứ shop cần, và đã có bản tiếng Việt, là lợi thế ngôn ngữ đáng chú ý."
  seoKeywords: ["prompt tạo ảnh sản phẩm", "prompt ảnh thời trang AI", "tạo ảnh mẫu bằng AI", "prompt ảnh main sản phẩm", "prompt chụp sản phẩm AI", "prompt ảnh AI bán hàng"]
  notes: "Từ khoá dựa trên cách shop Việt gọi nhu cầu tạo ảnh sản phẩm/mẫu bằng AI. Repo có sẵn trang tiếng Việt nên lợi thế SEO ngôn ngữ rõ; độ chắc chắn trung bình."

usabilityRisk: "Đây là thư viện prompt, không phải app tạo ảnh — bạn vẫn cần một model tạo ảnh (GPT Image/Nano Banana...) và tài khoản trả phí tương ứng để chạy. Nội dung gốc tiếng Trung, có nhiều link UTM về trang generator gptimg2.art (mang tính quảng bá). Cần cẩn trọng khi tạo ảnh mẫu người: tránh giả mạo người thật, trẻ em và nhầm lẫn thương hiệu như README đã lưu ý."

practitionerGuide:
  outcome: "Bạn chọn được prompt theo đúng ngách (ảnh main, thời trang, bìa MXH), thay biến cho sản phẩm của mình và tạo ra vài ảnh nháp để đánh giá độ dùng được."
  prerequisites:
    - "Một công cụ tạo ảnh AI (GPT Image / Nano Banana hoặc model tương thích) và tài khoản/credit tương ứng."
    - "Ảnh sản phẩm hoặc mô tả cụ thể (loại hàng, chất liệu, màu, bối cảnh muốn có)."
    - "Nếu cần giữ đúng sản phẩm/bao bì: ảnh tham chiếu để upload kèm prompt như README hướng dẫn."
  steps:
    - "Mở repo, chọn danh mục phù hợp (thời trang nữ, trẻ em, ảnh main TMĐT, ảnh chụp sản phẩm, bìa Xiaohongshu, poster)."
    - "Nếu tiện, xem thêm bản tiếng Việt trong docs/languages/vi.md để nắm cách viết prompt."
    - "Copy template Markdown và thay các biến trong ngoặc bằng thông tin sản phẩm của bạn."
    - "Chạy prompt qua model tạo ảnh; nếu cần giữ nguyên sản phẩm thật thì upload ảnh tham chiếu và nêu rõ chi tiết không được đổi."
    - "So sánh vài ảnh, chỉnh biến (bối cảnh/màu/khung ảnh) rồi lặp lại tới khi đạt chuẩn ảnh đăng."
  expectedResult: "Kết quả đạt là ảnh sản phẩm/mẫu đủ sạch để làm ảnh nháp cho listing hoặc post, với bố cục hợp ngách (ví dụ ảnh main gọn, nền sạch)."
  commonPitfalls:
    - "Tưởng repo tự tạo ảnh, trong khi nó chỉ cung cấp prompt — vẫn cần model trả phí ở cuối chuỗi."
    - "Dùng ảnh AI cho sản phẩm thật mà không upload ảnh tham chiếu, khiến chi tiết sản phẩm bị model bịa lệch."
    - "Bỏ qua lưu ý về giả mạo người thật/trẻ em và bản quyền thương hiệu khi tạo ảnh mẫu."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: bộ prompt tạo ảnh sản phẩm/mẫu cho shop Việt theo từng ngách (ảnh main, thời trang, bìa MXH), kèm mẹo giữ đúng sản phẩm thật bằng ảnh tham chiếu."
paidToolReplaced: "Thay một phần chi phí thuê chụp ảnh sản phẩm/mẫu và các gói prompt trả phí, bằng thư viện prompt mã nguồn mở (CC BY 4.0)."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI tự sinh được prompt, nhưng giá trị ở đây là bộ prompt đã gom theo đúng ngách shop Việt cần + bản tiếng Việt sẵn, và việc đánh giá chất lượng ảnh thật/giữ đúng sản phẩm thì cần người chạy thử."

scoreBreakdown:
  useCaseFit: 20
  projectHealth: 15
  costAdvantage: 15
  deployment: 12
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-07
nextReviewDueAt: 2026-10-05

tags: ["ai", "ecommerce", "image-generation", "prompt-engineering", "fashion", "product-photography"]
publishedAt: 2026-07-07
week: "2026-W28"
draft: false
---

Draft foundation từ hàng đợi discovery ngày 2026-07-07. Đây là thư viện prompt (không phải app tạo ảnh) và có nhiều link UTM về generator riêng gptimg2.art — mang màu quảng bá, Luan nên lưu ý khi biên tập. Điểm cộng cho VN: đã có sẵn trang tiếng Việt và các ngách đúng nhu cầu shop TMĐT. Cần test chất lượng ảnh thật qua model và kiểm tra mảng giữ đúng sản phẩm bằng ảnh tham chiếu trước khi nâng confidence.
