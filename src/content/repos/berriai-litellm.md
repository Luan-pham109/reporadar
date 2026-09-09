---
name: "LiteLLM"
repoUrl: "https://github.com/BerriAI/litellm"
oneLiner: "LiteLLM là cổng AI (AI gateway) mã nguồn mở giúp gọi hơn 100 mô hình LLM (OpenAI, Anthropic, Gemini, Bedrock, Azure...) bằng một chuẩn API duy nhất theo format OpenAI, kèm theo dõi chi phí, virtual key, guardrail và cân bằng tải — self-host được."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/c5ee0412-6fb5-4fb6-ab5b-bafae4209ca6"
    caption: "Sơ đồ LiteLLM AI Gateway (từ README)."

vertical: ["agency"]

maturity: "established"
repoStats:
  stars: 53152
  forks: 9631
  note: "~1079 ngày tuổi, ~49.3 sao/ngày"
  starsPerDay: 49.3
  ageDays: 1079
  pushedAt: 2026-07-10T06:46:00Z
  archived: false
  openIssues: 3827
standoutFeatures:
  - "Một interface thống nhất gọi 100+ LLM theo format OpenAI: đổi nhà cung cấp mà gần như không phải viết lại code."
  - "Bản proxy/gateway self-host có virtual key, spend tracking, guardrail, load balancing và dashboard quản trị sẵn."
  - "Có SDK Python lẫn MCP/A2A gateway; README liệt kê nhiều tổ chức lớn dùng (Stripe, Netflix, Google ADK...)."
signalSources:
  - label: "Hacker News (cảnh báo bảo mật)"
    url: "https://news.ycombinator.com/item?id=47501426"
  - label: "GitHub"
    url: "https://github.com/BerriAI/litellm"
  - label: "Documentation"
    url: "https://docs.litellm.ai/docs/"

useCases:
  - "Gắn một cổng chung cho team để gọi nhiều LLM (OpenAI, Claude, Gemini...) qua một API, đổi model không phải sửa code sản phẩm."
  - "Cấp virtual key và theo dõi chi phí theo từng dự án/khách hàng thay vì chia sẻ thẳng API key gốc."
  - "Cân bằng tải và fallback giữa nhiều nhà cung cấp để giảm rủi ro quá tải/rate limit khi chạy tính năng AI cho khách."

workflowStepReplaced: "Khâu tự viết và bảo trì lớp tích hợp riêng cho từng nhà cung cấp LLM, cộng phần quản lý key và tính chi phí thủ công."
timeOrCostSaved: "Gộp việc tích hợp nhiều LLM về một chuẩn và có sẵn quản lý key/chi phí; là bản self-host miễn phí thay cho một số AI gateway trả phí. Lợi ích thực tế phụ thuộc năng lực vận hành của team."
localProblem: "Agency/studio Việt bắt đầu nhận dự án có tính năng AI (chatbot, tạo nội dung, xử lý ảnh) và phải gọi nhiều LLM khác nhau cho từng khách. Không có lớp gateway chung thì mỗi dự án lại tích hợp và quản lý key/chi phí riêng, rất khó kiểm soát ngân sách token."
localEvidence: "Nhu cầu 'quản lý API key và chi phí khi dùng nhiều LLM' đang xuất hiện ở các team build sản phẩm AI; tuy nhiên tín hiệu đưa repo này vào queue lại là một sự cố bảo mật (xem cảnh báo bên dưới), không phải một câu chuyện tăng trưởng."

vnMarket:
  insight: "Team dev/agency Việt làm sản phẩm AI đang cần một điểm gọi LLM tập trung để kiểm soát chi phí và key. LiteLLM là lựa chọn self-host phổ biến, nhưng đây là hạ tầng cho người kỹ thuật, không phải công cụ dùng ngay cho người làm nội dung/bán hàng."
  seoKeywords: ["AI gateway là gì", "gọi nhiều LLM một API", "self-host LLM proxy", "quản lý chi phí API OpenAI", "LiteLLM tiếng Việt"]
  notes: "Fit với 'agency' chỉ ở nhánh kỹ thuật build sản phẩm. Quan trọng: repo lọt queue vì thread cảnh báo package PyPI bị chèn mã độc — cần đọc phần usabilityRisk. Độ chắc chắn: thấp."

usabilityRisk: "CẢNH BÁO BẢO MẬT: các bản litellm 1.82.7 và 1.82.8 trên PyPI từng bị chèn mã độc đánh cắp credential (thảo luận Hacker News tháng 3/2026) — đây chính là tín hiệu đưa repo vào queue. Bản thân dự án là hợp pháp và rất phổ biến, nhưng ai dùng phải PIN đúng phiên bản sạch, kiểm tra nguồn cài và không cài bừa phiên bản mới nhất. Ngoài ra: đây là hạ tầng cho dev, cần Docker/vận hành để self-host, không phải tool bấm-là-chạy cho creative/ecom/seo. Repo có ~3800 issue mở."

practitionerGuide:
  outcome: "Bạn dựng được một gateway self-host gọi nhiều LLM qua một API OpenAI-format, có virtual key và theo dõi chi phí."
  prerequisites:
    - "Người biết Docker/vận hành server và một máy/VPS để self-host proxy."
    - "API key của các nhà cung cấp LLM bạn muốn gắn (OpenAI, Anthropic...)."
    - "Kiểm tra kỹ phiên bản cài đặt để tránh dính bản PyPI từng bị compromise."
  steps:
    - "Pin một phiên bản litellm[proxy] sạch, đã kiểm chứng (KHÔNG cài mù bản mới nhất)."
    - "Chạy proxy với model muốn expose và cấu hình các nhà cung cấp trong config."
    - "Tạo virtual key cho từng dự án/khách và bật spend tracking."
    - "Trỏ code sản phẩm vào base_url của proxy thay vì gọi thẳng từng nhà cung cấp."
    - "Theo dõi dashboard chi phí và đặt guardrail/limit theo nhu cầu."
  expectedResult: "Các request AI của sản phẩm đi qua một endpoint chung, chi phí và key được quản lý tập trung theo virtual key."
  commonPitfalls:
    - "Cài đúng phiên bản bị compromise và rò rỉ credential — luôn kiểm tra version và nguồn."
    - "Self-host mà không giới hạn quyền/secret, biến gateway thành điểm rò key tập trung."
    - "Kỳ vọng đây là tool cho người non-tech; thực chất cần kỹ năng vận hành."

greyHatFlag: "borderline"

suggestedAngle: "Nếu viết, khung an toàn nhất là 'bài học supply-chain: cách pin và kiểm tra package AI', không phải bài quảng bá tool. Nhắm nhóm dev/agency."
paidToolReplaced: "Một phần nhu cầu dùng AI gateway/LLM proxy trả phí (managed) ở khâu định tuyến và quản lý key"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được LiteLLM, nhưng lớp giá trị ở đây là ghép bối cảnh sự cố bảo mật + cách pin phiên bản an toàn cho team Việt — đó là phần Luan cần review kỹ trước khi để nó xuất hiện."

scoreBreakdown:
  useCaseFit: 13
  projectHealth: 25
  costAdvantage: 15
  deployment: 9
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-10
nextReviewDueAt: 2026-10-08

tags: ["llm", "ai-gateway", "openai", "self-hosted", "devtools", "security-note"]
publishedAt: 2026-07-10
week: "2026-W28"
draft: false
---

Draft foundation từ daily queue. LƯU Ý QUAN TRỌNG: repo lọt queue vì thread HN cảnh báo bản PyPI 1.82.7/1.82.8 bị chèn mã độc đánh cắp credential — KHÔNG phải tín hiệu tăng trưởng. Bản thân LiteLLM là dự án hợp pháp, phổ biến (53k sao), nhưng đã đặt `greyHatFlag: borderline` và đưa cảnh báo bảo mật lên đầu usabilityRisk. Fit với độc giả chính chỉ ở nhánh dev/agency. Đề xuất Luan: hoặc không publish, hoặc chỉ publish dưới khung "bài học supply-chain security".
