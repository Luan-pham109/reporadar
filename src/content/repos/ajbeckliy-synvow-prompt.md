---
name: "SynVow-Prompt"
repoUrl: "https://github.com/AJbeckliy/SynVow-prompt"
oneLiner: "SynVow-Prompt là bộ custom node cho ComfyUI chuyên sinh prompt cho trang chi tiết sản phẩm thương mại điện tử: dựng prompt nhiều màn hình, tạo素材 nền trong suốt, và tối ưu prompt text-to-image/image-to-image cho Nano Banana và GPT-Image-2."
media: []

vertical: ["ecom", "creative"]

maturity: "pre-viral"
repoStats:
  stars: 62
  forks: 8
  note: "~224 ngày tuổi, ~0.3 sao/ngày"
  starsPerDay: 0.3
  ageDays: 224
  pushedAt: 2026-07-04T14:48:49Z
  archived: false
  openIssues: 2
standoutFeatures:
  - "Chuyên trị prompt cho trang chi tiết sản phẩm ecom: node sinh prompt nhiều màn hình, nhận tới 8 ảnh sản phẩm + 4 ảnh phong cách tham chiếu."
  - "Có chuỗi tạo素材 (asset) nền trong suốt PNG Alpha qua GPT-Image-2, dùng cho icon, đạo cụ game,素材 lễ hội, tách lớp từ ảnh tham chiếu."
  - "Có controller riêng cho text-to-image và image-to-image với các tùy chọn版式/text policy/độ tối ưu, chạy mặc định qua RunningHub LLM."
  - "Cho phép đấu nối API OpenAI-compatible bất kỳ qua node 'SynVow LLM Settings' thay vì khóa cứng vào một nhà cung cấp."
signalSources:
  - label: "GitHub"
    url: "https://github.com/AJbeckliy/SynVow-prompt"

useCases:
  - "Sinh prompt cho trang chi tiết sản phẩm nhiều màn hình (9:21 dạng long-scroll) từ vài ảnh sản phẩm và mô tả卖点, thay vì tự nghĩ prompt từng khung."
  - "Tạo素材 nền trong suốt (PNG Alpha) như icon, đạo cụ, badge khuyến mãi để ghép lên banner/ảnh sản phẩm mà không phải tách nền tay."
  - "Tối ưu prompt text-to-image/image-to-image cho ảnh chủ đề, ảnh chính sản phẩm và cover mạng xã hội theo tỉ lệ khung định sẵn."

workflowStepReplaced: "Khâu ngồi viết prompt tay và dựng bố cục cho từng màn ảnh chi tiết sản phẩm trên ComfyUI."
timeOrCostSaved: "Với shop/agency đang làm ảnh chi tiết sản phẩm hàng loạt, việc để node sinh sẵn prompt nhiều màn có thể cắt phần lớn thời gian nghĩ prompt và giữ bố cục đồng nhất giữa các trang — ước lượng theo mô tả README, chưa lab-test."
localProblem: "Shop và ekip ecom Việt (Shopee/Lazada/TikTok Shop) phải dựng liên tục ảnh 'trang chi tiết sản phẩm' nhiều màn: ảnh chính, ảnh卖点, ảnh so sánh, ảnh素材 nền trong. Làm tay trên Photoshop hoặc thuê designer thì chậm và tốn, còn tự viết prompt cho AI thì khó giữ bố cục đồng nhất giữa các màn."
localEvidence: "Từ khoá kiểu 'prompt tạo ảnh sản phẩm', 'ảnh chi tiết sản phẩm AI', 'Nano Banana ecom', 'GPT-Image-2 tách nền' đang được dân bán hàng và designer freelance VN tìm. Điểm thiếu là một pipeline sinh prompt có cấu trúc, đúng bài toán detail-page, chứ không phải prompt lẻ."

vnMarket:
  insight: "Ngành ecom VN đang chuyển từ thuê designer/agency dựng ảnh chi tiết sản phẩm sang tự làm bằng AI (ComfyUI + Nano Banana + GPT-Image-2 qua RunningHub). Cái khó nhất không phải model mà là prompt: giữ đúng ngoại hình sản phẩm, dựng bố cục nhiều màn và tách素材 nền trong. SynVow-Prompt đánh trúng đúng khoảng trống prompt-engineering này, nhưng README hoàn toàn tiếng Trung nên rào cản tiếp cận với người Việt còn cao."
  seoKeywords: ["prompt tạo ảnh sản phẩm", "ảnh chi tiết sản phẩm AI", "ComfyUI ecom", "Nano Banana thương mại điện tử", "GPT-Image-2 tách nền", "custom node ComfyUI ecommerce"]
  notes: "Dựa trên README (v1.5) và bảng node chi tiết. Repo nhỏ, mới, chưa thấy bàn ở HN/Reddit; độ chắc chắn về chất lượng output là trung bình-thấp vì chưa lab-test."

usabilityRisk: "Cần môi trường ComfyUI và phần lớn node đi kèm RunningHub (nạp credit trả phí) hoặc một API OpenAI-compatible. README và toàn bộ tên node đều tiếng Trung, chưa có bản tiếng Việt/Anh đầy đủ, nên người mới sẽ khó dò tham số. Một số node透明素材 thực tế chỉ chạy ổn trên kênh 'gpt-image-2-低价通道', kênh官方 có thể trả PNG không có alpha. Repo nhỏ, chưa có cộng đồng VN đỡ khi lỗi."

practitionerGuide:
  outcome: "Sau guide này bạn dựng được một prompt list cho trang chi tiết sản phẩm nhiều màn và thử tạo một素材 nền trong suốt đầu tiên."
  prerequisites:
    - "ComfyUI cài sẵn và biết thao tác node cơ bản."
    - "API key RunningHub (hoặc một endpoint OpenAI-compatible) để chạy LLM và GPT-Image-2."
    - "Vài ảnh sản phẩm chất lượng tốt và danh sách卖点/mô tả để làm input."
  steps:
    - "Clone repo vào thư mục ComfyUI/custom_nodes rồi khởi động lại ComfyUI (không cần cài thêm dependency)."
    - "Mở node '香蕉电商详情页提示词生成器V3-带参考图', điền product_type / selling_points / design_style và nối ảnh sản phẩm tham chiếu."
    - "Nối output prompts_list sang flow tạo ảnh hàng loạt để dựng các màn chi tiết sản phẩm."
    - "Thử chuỗi素材 trong suốt: dùng 'SynVow 透明素材提示词生成器 (RH)' → 'RH GPT-Image-2 Alpha (T_batch)' → node lưu PNG, ưu tiên kênh低价通道."
    - "Nếu cần đổi nhà cung cấp LLM, nối node 'SynVow LLM Settings' với base_url/apikey OpenAI-compatible của bạn."
  expectedResult: "Bạn có một prompt list nhiều màn dùng được cho detail-page và ít nhất một file PNG nền trong suốt tạo từ pipeline, đủ để đánh giá chất lượng trước khi làm hàng loạt."
  commonPitfalls:
    - "Dùng kênh 'gpt-image-2-官方' cho素材 trong suốt rồi nhận PNG không có alpha (node báo 'chưa phát hiện pixel trong suốt')."
    - "Bỏ trống ảnh sản phẩm tham chiếu khiến AI vẽ sai ngoại hình sản phẩm giữa các màn."
    - "Không nạp đủ credit RunningHub nên flow batch dừng giữa chừng."

greyHatFlag: "in"

suggestedAngle: "Creator có thể làm content 'dựng trang chi tiết sản phẩm Shopee/TikTok Shop bằng ComfyUI' và dùng SynVow-Prompt như bộ node chuyên trị phần prompt."
paidToolReplaced: "Thuê designer/agency dựng ảnh chi tiết sản phẩm, các tool tạo ảnh SP trả phí và tool tách nền thủ công"
alternativeTo: []
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Hỏi AI có thể ra prompt lẻ, nhưng biết có sẵn một bộ node ComfyUI chuyên trị detail-page ecom (kèm chuỗi素材 trong suốt qua GPT-Image-2) và các bẫy kênh官方 vs低价 thì cần curation từ người theo dõi hệ sinh thái ComfyUI."

tags: ["comfyui", "ecommerce", "prompt-engineering", "nano-banana", "gpt-image-2", "ecom"]
scoreBreakdown:
  useCaseFit: 17
  projectHealth: 14
  costAdvantage: 12
  deployment: 7
  documentation: 8
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-08
nextReviewDueAt: 2026-10-06
publishedAt: 2026-07-08
week: "2026-W28"
draft: true
---

Draft từ daily pipeline. Ứng viên hợp ngách ecom VN nhất trong batch này, nhưng README 100% tiếng Trung và phụ thuộc RunningHub — cần Luan cân nhắc góc kể và có nên lab-test output trước khi publish. README không nhúng ảnh/video demo nên media để trống.
