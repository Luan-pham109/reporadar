---
name: "Agency Agents"
repoUrl: "https://github.com/msitarzewski/agency-agents"
oneLiner: "Agency Agents là bộ 232 'nhân sự AI' chia theo 16 phòng ban (Marketing, SEO, Paid Media, Content, Sales...) — nạp vào Claude Code, Cursor, Copilot… để mỗi tác vụ có một chuyên gia AI riêng thay vì prompt chung chung."
media: []

vertical: ["agency", "seo", "ecom"]

maturity: "established"
repoStats:
  stars: 120429
  forks: 19678
  note: "~260 ngày tuổi, ~463 sao/ngày"
  starsPerDay: 463.2
  ageDays: 260
  pushedAt: "2026-06-30"
  archived: false
  openIssues: 82
standoutFeatures:
  - "232 agent chuyên biệt chia 16 division — riêng Marketing 40+ agent (SEO Specialist, Content Creator, Growth Hacker, Social Media Strategist) và Paid Media 8 agent (PPC, Search Query Analyst, Ad Creative)."
  - "Cài native vào 13+ công cụ: Claude Code, Cursor, Copilot, Gemini CLI, Codex, Windsurf, Aider… qua app desktop hoặc script convert/install."
  - "Mỗi agent có 'personality' + quy trình + deliverable mẫu, nhấn mạnh chuyên sâu thay vì prompt generic."
  - "Có cả agent cho thị trường Trung (Xiaohongshu, Douyin, Baidu SEO, WeChat) và Cross-Border E-Commerce — đáng chú ý cho team làm hàng xuyên biên."
signalSources:
  - label: "GitHub"
    url: "https://github.com/msitarzewski/agency-agents"
  - label: "Hacker News"
    url: "https://news.ycombinator.com/item?id=47347158"

useCases:
  - "Nạp sẵn agent SEO, Content Creator và Social Media vào Claude Code hay Cursor để mỗi đầu việc có một 'chuyên gia' riêng, khỏi ngồi viết prompt lại từ đầu."
  - "Dựng một 'agency ảo' cho team nhỏ: một người điều phối nhiều agent marketing thay vì thuê thêm freelancer cho từng mảng."
  - "Kéo nhóm agent Paid Media (PPC, phân tích search query, ad creative) vào để soát nhanh một campaign trước khi lên tiền."
  - "Dùng agent Cross-Border E-Commerce và nhóm thị trường Trung (Xiaohongshu, Douyin, Baidu) cho team bán hàng xuyên biên."
  - "Lấy persona dựng sẵn làm khung, rồi chỉnh lại prompt cho đúng giọng và ngữ cảnh tiếng Việt — nhanh hơn nhiều so với viết mới."

workflowStepReplaced: "Khâu tự viết prompt/subagent từ đầu cho từng đầu việc marketing/SEO/content — thay bằng bộ persona dựng sẵn nạp thẳng vào Claude Code/Cursor."
timeOrCostSaved: "Không thay một SaaS trả phí cụ thể; tiết kiệm gián tiếp ở công viết và tinh chỉnh subagent từ đầu, và ở chỗ một team nhỏ ôm được nhiều đầu việc chuyên môn hơn thay vì thuê thêm freelancer cho từng mảng."
localProblem: "Dân agency/marketing VN đang đổ xô học subagents Claude Code nhưng phần lớn phải tự mò viết agent cho từng đầu việc. Thiếu một bộ persona marketing/SEO/paid-media dựng sẵn, đã chuẩn hoá để nạp vào là dùng."
localEvidence: "Có rất nhiều bài tiếng Việt về 'subagents Claude Code' (vietnix, azdigi, ongboit, ybox) và về Claude Code SEO skills — chứng tỏ nhu cầu agent hoá workflow marketing/SEO có thật và đang nóng. Nhưng KHÔNG có bài tiếng Việt nào về riêng repo agency-agents."

vnMarket:
  insight: "Thị trường VN đang ở giai đoạn 'đã biết subagents là gì, đang tìm bộ agent tốt để xài'. agency-agents trám đúng khoảng đó cho mảng marketing: 40+ agent Marketing + 8 Paid Media + Cross-Border E-Commerce, nạp được vào 13+ công cụ. Góc reflect cho VN: KHÔNG bán cả 232 agent, mà chỉ một nhóm nhỏ thực dụng — vd SEO Specialist, Content Creator, Social Media/PPC, và Cross-Border E-Commerce cho dân bán hàng xuyên biên. Cấn lớn: agent viết theo bối cảnh Âu-Mỹ/Trung, cần chỉnh prompt cho ngữ cảnh + tiếng Việt; chất lượng từng agent không đồng đều."
  seoKeywords: ["subagents Claude Code", "agent marketing Claude Code", "Claude Code SEO agent", "bộ subagent marketing", "AI agent cho agency", "Claude Code agency", "agent content AI", "cài subagent Claude Code"]
  notes: "Verify qua WebSearch (2026-06-30): chủ đề 'subagents Claude Code' đã bão hoà nội dung tiếng Việt ở mức nhập môn, nhưng repo agency-agents thì chưa ai viết tiếng Việt → whitespace ở góc 'bộ agent cụ thể nào đáng nạp cho marketing VN'. Cần Luan kiểm tay group Claude Code/marketing VN xem repo này đã được nhắc chưa."

usabilityRisk: "Collection rất rộng (232 agent đủ ngành) — không nhắm 1 bài toán cụ thể, dễ loãng nếu không chọn lọc. Chất lượng từng agent không đồng đều và là prompt/persona, không phải tool chạy ra output; vẫn cần người dùng quen làm việc trong Claude Code/Cursor. Phần lớn agent viết theo bối cảnh thị trường Âu-Mỹ/Trung, cần điều chỉnh cho ngữ cảnh VN."

practitionerGuide:
  outcome: "Sau guide này bạn nạp được vài agent marketing chọn lọc vào Claude Code và chạy thử một đầu việc thật bằng tiếng Việt."
  prerequisites:
    - "Đã cài Claude Code, Cursor hoặc một công cụ tương thích (repo hỗ trợ 13+ công cụ)."
    - "Biết sơ cách subagent hoạt động trong Claude Code (có nhiều hướng dẫn tiếng Việt)."
  steps:
    - "Đừng nạp cả 232 agent. Chọn trước 3-5 cái đúng việc bạn làm: vd SEO Specialist, Content Creator, Social Media, PPC."
    - "Cài bằng app desktop của repo hoặc chạy script convert/install, chọn đúng công cụ bạn dùng khi được hỏi."
    - "Chạy thử một agent với một đầu việc thật, ra lệnh kiểu 'dùng agent SEO Specialist soát bài này'."
    - "Đọc output rồi chỉnh lại prompt của agent cho đúng giọng và ngữ cảnh tiếng Việt — đây là bước quan trọng nhất."
    - "Giữ lại agent nào hợp, bỏ agent nào trả kết quả chung chung; dựng dần bộ riêng cho team."
  expectedResult: "Bạn có một nhóm nhỏ agent marketing chạy được trong công cụ quen, đã Việt hoá đủ để dùng cho việc thật."
  commonPitfalls:
    - "Nạp cả kho 232 agent rồi loạn, không biết dùng cái nào — chọn lọc trước."
    - "Agent viết theo bối cảnh Âu-Mỹ/Trung; dùng thẳng cho khách Việt dễ lệch giọng và ví dụ."
    - "Tưởng agent là tool ra output sẵn — thực ra là persona/prompt, chất lượng phụ thuộc cách bạn ra đề và chỉnh lại."

greyHatFlag: "in"

suggestedAngle: "Góc creator: '5 agent marketing đáng nạp nhất từ bộ 232 của agency-agents cho team Việt' — chọn lọc + Việt hoá prompt, thay vì review cả kho."
paidToolReplaced: "Một phần việc thuê freelancer/specialist hoặc agency con cho từng đầu việc marketing/SEO/content"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI/Trending nói được 'có repo 232 agent cho coding tool'. Cái cần biên tập: trong 232 agent đó, nhóm nào thực sự đáng nạp cho marketing/SEO/ecom VN, và phải chỉnh gì cho ngữ cảnh tiếng Việt — đây là chọn lọc theo ngành, không phải mô tả repo."

scoreBreakdown:
  useCaseFit: 12
  projectHealth: 25
  costAdvantage: 8
  deployment: 15
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-30
nextReviewDueAt: 2026-09-28

tags: ["agency", "seo", "ecom", "marketing", "claude-code", "cursor", "ai-agents"]
publishedAt: 2026-06-30
week: "2026-W27"
draft: false
---

Nháp HUNT (khách quan). Số liệu từ `fetch-signals.mjs` (2026-06-30): 120.429 sao, 19.678 fork, ~463 sao/ngày, push 2026-06-30, health 25/25.

Lưu ý cho synthesize/edit: KHÔNG giới thiệu cả 232 agent. Chọn 3-5 agent thực sự fit dân agency/ecom/SEO VN (Marketing + Paid Media + Cross-Border E-Commerce) rồi viết usecase-first quanh đó, nếu không record sẽ loãng và rớt điểm Use Case Fit.

Bước tiếp: chạy `repo-radar-synthesize`.
