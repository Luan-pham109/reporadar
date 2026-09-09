---
name: "OneGlanse"
repoUrl: "https://github.com/aryamantodkar/oneglanse"
oneLiner: "OneGlanse là công cụ open-source self-hosted theo dõi thương hiệu của bạn hiện diện thế nào trong câu trả lời của ChatGPT, Gemini, Perplexity, Claude và Google AI Overview — bằng cách mở đúng giao diện thật của từng AI như một người dùng, rồi ghi lại câu trả lời, trích dẫn và thứ hạng."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/d5438aff-67bc-4556-baa8-939906a59c02"
    caption: "Dashboard OneGlanse: AI visibility, rank, nguồn trích dẫn và phân tích prompt."
  - type: "image"
    url: "https://github.com/user-attachments/assets/09fae3f5-4e3c-4920-9d19-c32d9a1da0d5"
  - type: "image"
    url: "https://github.com/user-attachments/assets/caace32a-1e68-44e8-9b71-f582e9dc9de0"

vertical: ["seo", "agency"]

maturity: "rising"
repoStats:
  stars: 152
  forks: 27
  note: "~344 ngày tuổi, ~0.4 sao/ngày"
  starsPerDay: 0.4
  ageDays: 344
  pushedAt: 2026-05-10T07:47:10Z
  archived: false
  openIssues: 3
standoutFeatures:
  - "Đo trên 5 bề mặt AI thật: ChatGPT, Gemini, Perplexity, Claude và Google AI Overview — không gọi model API mà mở đúng giao diện sản phẩm trong trình duyệt thật (qua Camoufox) như một người dùng."
  - "Điểm khác biệt cốt lõi: câu trả lời hiển thị trên UI thường khác với output API thô (UI có thể thêm/bớt trích dẫn, sắp lại thứ tự, đổi cách trình bày đối thủ) — OneGlanse bắt đúng cái người dùng thật nhìn thấy."
  - "Sau khi bắt câu trả lời, dùng OpenAI hoặc Anthropic (key của bạn) để trích xuất điểm GEO, sentiment, visibility, thứ hạng, đối thủ được nhắc và nguồn trích dẫn."
  - "Dữ liệu ở lại trên máy bạn: lưu trong Postgres + ClickHouse do bạn tự vận hành (Docker local hoặc VPS riêng); đăng nhập vào các AI bằng chính tài khoản của bạn, không dùng credential chia sẻ."
  - "MIT licensed, miễn phí chạy; landing (Vercel) và docs (Mintlify) tách riêng, repo này chỉ deploy phần app runtime."
signalSources:
  - label: "GitHub"
    url: "https://github.com/aryamantodkar/oneglanse"
  - label: "Website"
    url: "https://oneglanse.com"
  - label: "Docs"
    url: "https://docs.oneglanse.com"

useCases:
  - "Theo dõi thương hiệu/sản phẩm của bạn xuất hiện thế nào khi khách hỏi ChatGPT, Gemini, Perplexity, Claude hay Google AI Overview 'công cụ tốt nhất cho X', và đối thủ nào đang được AI ưu tiên nhắc."
  - "So sánh câu trả lời trên GIAO DIỆN thật với output API để thấy chỗ UI thêm/bớt trích dẫn hay sắp lại thứ tự — điều mà tool chỉ gọi API sẽ bỏ sót."
  - "Chấm điểm GEO, sentiment, thứ hạng và phân tích 'AI perception' của thương hiệu qua nhiều prompt, lưu lịch sử để đo trước–sau khi triển khai nội dung."
  - "Dựng một dashboard GEO nội bộ cho agency/khách mà toàn bộ dữ liệu và tài khoản AI nằm trên hạ tầng do mình kiểm soát, không đẩy qua server bên thứ ba."

workflowStepReplaced: "Khâu giám sát 'độ hiện diện thương hiệu trên AI search' vốn phải mua monitoring SaaS thu phí tháng — và cụ thể là khâu bắt đúng câu trả lời hiển thị trên UI thật thay vì chỉ output API."
timeOrCostSaved: "Thay được phí thuê bao tool giám sát GEO; chi phí thật còn lại là tiền gọi OpenAI/Anthropic để phân tích (dùng key của bạn) cộng hạ tầng tự host. Chưa có số liệu VN để khẳng định mức tiết kiệm cụ thể."
localProblem: "Agency và đội in-house ở VN bắt đầu bị khách hỏi 'sao search ChatGPT không thấy brand mình' nhưng chưa có cách theo dõi có hệ thống trên nhiều engine; đặc biệt câu trả lời khách thật nhìn trên app ChatGPT/Gemini thường khác output API, nên đo bằng API dễ ra kết luận sai."
localEvidence: "GEO/AEO đang thành chủ đề nóng trong cộng đồng SEO/marketing Việt, và môi trường này có sẵn nhiều skill GEO/AEO. OneGlanse đáng chú ý vì nhắm đúng 'câu trả lời trên UI thật' — một khác biệt kỹ thuật thực chất — nhưng cái giá là hạ tầng nặng (Postgres + ClickHouse + Redis + Docker, tự động hoá trình duyệt Camoufox) và KHÔNG hỗ trợ WSL. Cần Luan test khả năng xử lý câu hỏi tiếng Việt và độ ổn định khi tự động hoá đăng nhập vào các AI."

vnMarket:
  insight: "Ở VN phần lớn đội SEO vẫn tối ưu Google truyền thống; GEO/AEO (để AI nhắc và trích dẫn thương hiệu) mới ở giai đoạn đầu và đa số đo thủ công. Chưa có công cụ Việt hoá đo đa-engine, nên một tool open-source bắt đúng UI thật là khoảng trống rõ — với điều kiện đội có người kỹ thuật dựng nổi Docker + Postgres + ClickHouse và chấp nhận rủi ro tự động hoá trình duyệt đăng nhập vào các AI."
  seoKeywords: ["GEO là gì", "AEO tối ưu hoá", "AI visibility tracker", "theo dõi thương hiệu trên ChatGPT", "generative engine optimization", "tối ưu cho AI Overview", "công cụ GEO open source", "self-hosted AI tracker"]
  notes: "Từ khoá dựa trên cách cộng đồng SEO/marketing Việt gọi tên chủ đề GEO/AEO. Chưa kiểm tra volume thực tế. Repo tuổi khá cao (344 ngày) nhưng sao/ngày thấp (~0.4) và push gần nhất 2026-05-10 — nhịp phát triển chậm, cần xem còn được duy trì tích cực không."

usabilityRisk: "Hạ tầng nặng: cần Node.js 20+, pnpm 10+ và Docker; chạy Postgres + ClickHouse + Redis. KHÔNG hỗ trợ WSL (Camoufox cần cửa sổ trình duyệt thật để đăng nhập/UI capture) — phải chạy trên macOS/Linux/Windows native. Cần API key OpenAI hoặc Anthropic để phân tích. Rủi ro pháp lý/ToS: tool tự động hoá đăng nhập và đọc giao diện các sản phẩm AI bằng chính tài khoản của bạn — có thể vi phạm ToS của nhà cung cấp và khiến tài khoản gặp rủi ro, cần cân nhắc trước khi dùng cho khách. Push gần nhất cách đây khá lâu (2026-05-10), sao/ngày thấp — chưa có cộng đồng VN."

practitionerGuide:
  outcome: "Bạn dựng được OneGlanse chạy ở localhost:3000, đăng nhập ít nhất một AI (vd ChatGPT), chạy một prompt run đầu tiên và nhìn thấy thương hiệu của mình xuất hiện (hay không) trong câu trả lời AI thật, kèm điểm GEO và đối thủ được nhắc."
  prerequisites:
    - "Máy macOS / Linux / Windows native (KHÔNG dùng WSL); cài Node.js 20+, pnpm 10+ và Docker."
    - "Một API key OpenAI hoặc Anthropic của riêng bạn để phân tích câu trả lời."
    - "Tài khoản đăng nhập sẵn trên các AI bạn muốn đo (ChatGPT/Gemini/Perplexity/Claude/Google); người đọc được README, chạy lệnh terminal và hiểu rủi ro ToS khi tự động hoá đăng nhập."
  steps:
    - "Clone repo, 'cp .env.example .env', mở .env đặt OPENAI_API_KEY hoặc ANTHROPIC_API_KEY (kèm ANALYSIS_LLM_PROVIDER=claude nếu dùng Claude)."
    - "Chạy 'pnpm local' — script tự sinh secret, khởi động Postgres/ClickHouse/Redis, chạy migration và bootstrap browser runtime."
    - "Mở http://localhost:3000, đăng ký bằng email (Google OAuth tuỳ chọn)."
    - "Kết nối tài khoản AI bạn muốn đo qua cửa sổ trình duyệt Camoufox mà tool mở ra, rồi tạo bộ prompt (thêm câu tiếng Việt nếu khách của bạn ở VN)."
    - "Chạy một prompt run, đợi bắt xong câu trả lời, rồi mở dashboard xem visibility, rank, nguồn trích dẫn và phân tích đối thủ."
  expectedResult: "Dashboard hiển thị: thương hiệu đứng ở đâu trong câu trả lời của từng engine, các trích dẫn/nguồn được AI dẫn, thứ hạng và điểm GEO/sentiment. Dữ liệu nằm trong Postgres/ClickHouse trên máy bạn."
  commonPitfalls:
    - "Cố chạy trong WSL — Camoufox có thể hiện icon taskbar mà không có cửa sổ đăng nhập dùng được; phải chạy native macOS/Linux/Windows."
    - "Thiếu Docker hoặc không đủ RAM cho Postgres + ClickHouse + Redis chạy cùng lúc."
    - "Bỏ qua rủi ro ToS khi để tool tự động hoá đăng nhập vào tài khoản AI của mình — có thể ảnh hưởng tài khoản."
    - "Kỳ vọng có sẵn engine/câu hỏi tiếng Việt; thực tế phải tự thêm prompt phù hợp thị trường VN."

greyHatFlag: "borderline"

suggestedAngle: "Góc nên viết: câu trả lời khách thật nhìn trên app ChatGPT/Gemini khác với output API — nếu bạn làm GEO thì phải đo đúng UI thật. Kèm cảnh báo thẳng về hạ tầng nặng và rủi ro ToS khi tự động hoá đăng nhập."
paidToolReplaced: "Thay phần giám sát của các monitoring SaaS về AI visibility/GEO (Peec AI, Otterly, Profound... loại tính phí tháng)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt README OneGlanse, nhưng góc thực dụng cho VN — sự khác biệt UI-vs-API có thật sự đáng để chịu hạ tầng nặng không, rủi ro ToS khi tự động hoá đăng nhập, ma sát cài đặt (không WSL), nhịp bảo trì chậm — thì practitioner không lấy được từ việc hỏi AI hay xem Trending."

scoreBreakdown:
  useCaseFit: 20
  projectHealth: 8
  costAdvantage: 15
  deployment: 6
  documentation: 13
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-19
nextReviewDueAt: 2026-11-17

tags: ["geo", "aeo", "ai-visibility", "ai-search", "seo", "brand-monitoring", "self-hosted", "llm", "typescript"]
publishedAt: 2026-08-19
week: "2026-W34"
draft: true
---

Draft foundation từ pipeline ngày 2026-08-19. Media lấy từ 3 ảnh github user-attachments trong README (đường dẫn có sẵn trong queue) — nên xác nhận ảnh còn sống trước khi publish.

Cần Luan kiểm trước khi nâng confidence/publish:
1. greyHatFlag để "borderline" vì tool tự động hoá đăng nhập và đọc UI các sản phẩm AI — có thể chạm ToS nhà cung cấp. Cần quyết định khung kể trước khi đưa lên (record đã nêu rủi ro thẳng ở usabilityRisk và commonPitfalls).
2. Sức khoẻ dự án: 344 ngày tuổi nhưng ~0.4 sao/ngày và push gần nhất 2026-05-10 → projectHealth từ queue = 8 (thấp). Cần xem repo còn được duy trì tích cực không.
3. Hạ tầng nặng (Postgres + ClickHouse + Redis + Docker, không WSL) → deployment chấm thấp (6); không hợp marketer không có người kỹ thuật.
4. Chưa xác nhận xử lý câu hỏi/engine tiếng Việt và độ ổn định của Camoufox khi đăng nhập các AI.
