---
name: "eGEOagents (E-GEO)"
repoUrl: "https://github.com/mverab/eGEOagents"
oneLiner: "E-GEO là bộ agent AI mã nguồn mở tự động phân tích, chấm điểm và VIẾT LẠI nội dung website để tăng khả năng được ChatGPT, Perplexity, Gemini và Google AI Overviews trích dẫn — không chỉ audit như phần lớn tool GEO/AEO khác."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/mverab/eGEOagents/main/assets/egeo-agents.png"
    caption: "Kiến trúc 4 agent của E-GEO: Analyzer, Ranker, Rewriter, Indexer."

vertical: ["seo", "agency"]

maturity: "rising"
repoStats:
  stars: 125
  forks: 37
  note: "~174 ngày tuổi, ~0.7 sao/ngày"
  starsPerDay: 0.7
  ageDays: 174
  pushedAt: 2026-07-02T09:13:31Z
  archived: false
  openIssues: 4
standoutFeatures:
  - "Một lệnh /geo <url> chạy trọn pipeline 4 agent: Analyzer (phân tích) → Ranker (mô phỏng xếp hạng AI) → Rewriter (viết lại nội dung) → Indexer (sinh JSON-LD schema) — khác các tool GEO khác chỉ dừng ở audit."
  - "Có CLI độc lập (egeo) chạy ngoài Claude Code, dùng chung lõi xử lý với agent — không khoá cứng vào một runtime."
  - "Có bộ eval harness đo cải thiện thứ hạng bằng LLM-ranker, chạy trong CI, và tự nói rõ đây là proxy chứ không phải số liệu ranking ChatGPT/Perplexity thật."
  - "Dựa trên paper nghiên cứu GEO riêng (arXiv:2511.20867), kế thừa nghiên cứu GEO gốc của Princeton (KDD 2024)."
signalSources:
  - label: "GitHub"
    url: "https://github.com/mverab/eGEOagents"
  - label: "arXiv paper"
    url: "https://arxiv.org/abs/2511.20867"
  - label: "skills.sh"
    url: "https://skills.sh/mverab/egeoagents"

useCases:
  - "Chạy /geo <url> để có ngay báo cáo điểm GEO/AEO, bản nội dung đã viết lại tối ưu, và schema JSON-LD sẵn để dán vào trang."
  - "Dùng /geo:audit khi chỉ cần biết trang đang thiếu gì mà chưa muốn sửa ngay — hợp lúc pitch khách."
  - "Dùng /geo:batch để quét cả một thư mục nội dung (nhiều trang dịch vụ, nhiều bài blog) trong một lần thay vì làm tay từng trang."
  - "Dùng /geo:compete để so sánh cách đối thủ đang được AI trích dẫn, tìm góc còn trống để viết đè lên."

workflowStepReplaced: "Khâu agency tự đọc từng trang, đoán xem ChatGPT/Perplexity có trích dẫn được không, rồi viết lại nội dung bằng tay theo cảm tính."
timeOrCostSaved: "Repo không công bố số giờ/tiền tiết kiệm cụ thể — giá trị chính là gộp 4 bước (audit, mô phỏng rank, viết lại, sinh schema) vào một lệnh thay vì làm tay tuần tự; mức tiết kiệm thật còn phụ thuộc số trang cần xử lý."
localProblem: "Agency SEO ở Việt Nam đang bắt đầu bán gói 'dịch vụ GEO/AEO' (ví dụ các gói GEO/SEO AIO đã thấy quảng cáo công khai) nhưng phần lớn dừng ở audit và viết tay lại nội dung — chưa có công cụ tự động hoá cả bước viết lại + sinh schema để giao khách nhanh hơn."
localEvidence: "Tìm kiếm tiếng Việt cho GEO/AEO/Claude Code cho thấy đã có ít nhất một bài viết tiếng Việt review một Claude Code skill GEO khác (geo-seo-claude, đăng trên Viblo và một blog cá nhân) — nghĩa là khái niệm 'Claude Code skill làm GEO' đã bắt đầu được cộng đồng dev Việt biết tới, dù chưa phải chính repo eGEOagents này."

vnMarket:
  insight: "Nhu cầu 'dịch vụ GEO' đã xuất hiện công khai ở agency Việt (ví dụ gói GEO/SEO AIO được rao bán), và khái niệm Claude Code skill cho GEO cũng đã có bài viết tiếng Việt riêng cho một tool khác (geo-seo-claude) — cho thấy đây là ngách đang nóng nhưng vẫn thiếu tool nào làm trọn gói audit + rewrite + schema được cộng đồng Việt biết rộng. eGEOagents còn rất mới (125 sao) nên chưa có ai review tiếng Việt, là khoảng trống thật để viết trước."
  seoKeywords: ["GEO SEO", "AEO", "tối ưu AI Overview", "ChatGPT trích dẫn website", "dịch vụ GEO", "AI visibility", "llms.txt"]
  notes: "Đã search 'GEO AEO Claude Code skill tối ưu ChatGPT trích dẫn Việt Nam' — thấy bài Viblo/blog cá nhân review một Claude Code GEO skill KHÁC (geo-seo-claude), không phải eGEOagents. Hệ thống RepoRadar cũng đã có 1 record cùng ngách (Geo Optimizer Skill) — cần Luan cân nhắc kỹ để không trùng góc: điểm khác biệt của eGEOagents là tự động REWRITE nội dung + sinh schema, không chỉ audit."

usabilityRisk: "Cần cài Python (pip install -e .) hoặc copy thư mục .claude/ vào Claude Code — không phải công cụ web kéo-thả. Muốn dùng thật cần API key của một LLM provider (bản mock GEO_EVAL_MOCK=1 chỉ để test offline, không tạo nội dung thật). Điểm số ranking trong báo cáo là mô phỏng bằng LLM khác, KHÔNG phải số liệu ChatGPT/Perplexity thật — phải nói rõ với khách để tránh cam kết quá tay."

practitionerGuide:
  outcome: "Bạn có báo cáo GEO đầu tiên cho một URL, kèm bản nội dung đã viết lại và file schema JSON-LD sẵn để đưa cho dev dán vào trang."
  prerequisites:
    - "Máy có Python 3, cài được package qua pip; hoặc có sẵn Claude Code để copy thư mục .claude/."
    - "API key của một LLM provider được hỗ trợ (theo README) để chạy pipeline thật, không phải chế độ mock."
    - "Một URL trang dịch vụ hoặc bài blog quan trọng để thử trước."
  steps:
    - "Cài qua pip install -e . rồi chạy egeo optimize <url/file> --out-dir ./geo-output; hoặc copy .claude/ vào project và gõ /geo <url> trong Claude Code."
    - "Đọc report.md để xem điểm GEO hiện tại và nhóm lỗi (crawlability, schema, cấu trúc nội dung)."
    - "So sánh bản gốc với optimized/*.md — kiểm tra AI có giữ đúng giọng thương hiệu không trước khi dùng."
    - "Copy schema/*.json vào trang thật (qua dev) rồi kiểm tra lại bằng Rich Results Test hoặc công cụ kiểm schema khác."
    - "Hỏi thử ChatGPT/Perplexity vài câu liên quan tới trang đó để xem có được nhắc/cite không — đây là bước xác nhận thật, không thay được bằng điểm số nội bộ của tool."
  expectedResult: "Kết quả đúng là một bộ 3 file (report, nội dung viết lại, schema) đủ để dev/agency triển khai ngay, không phải chỉ một điểm số chung chung."
  commonPitfalls:
    - "Tin điểm ranking mô phỏng trong report như số liệu ranking ChatGPT/Perplexity thật — đây chỉ là proxy theo chính tài liệu evaluation.md của repo."
    - "Dán thẳng bản Rewriter viết ra lên site mà không kiểm tra giọng thương hiệu, dễ bị lệch tone so với phần còn lại của site."
    - "Bỏ qua bước xác nhận cite thật trên ChatGPT/Perplexity sau khi triển khai — nếu không đo, không biết tool có tác dụng hay không."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: so sánh eGEOagents với các tool GEO/AEO audit-only khác đã có trên RepoRadar — nhấn vào điểm khác biệt là tự động rewrite + sinh schema trong một lệnh."
paidToolReplaced: "Một phần công việc mà các nền tảng AI visibility/GEO trả phí (ví dụ Profound, Otterly.AI, add-on AI SEO của Semrush/Ahrefs) đang bán ở khâu audit + gợi ý sửa nội dung"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể giải thích khái niệm GEO/AEO chung, nhưng việc biết cụ thể eGEOagents khác gì các Claude Code GEO skill khác đã có bài tiếng Việt (như geo-seo-claude) và cách định vị nó trong ngách đã hơi đông ở VN cần người tổng hợp tay."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 14
  costAdvantage: 14
  deployment: 10
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-05
nextReviewDueAt: 2026-10-03

tags: ["ai", "seo", "aeo", "geo", "content-optimization"]
publishedAt: 2026-07-05
week: "2026-W28"
draft: false
---

Draft từ pipeline daily. Cùng ngách với record "Geo Optimizer Skill" đã có trong hệ thống — Luan cần quyết định có publish cả hai hay chỉ chọn 1, và kiểm tra thật xem eGEOagents chạy pipeline rewrite có ra kết quả tốt trên một site tiếng Việt thật không trước khi để draft: false.
