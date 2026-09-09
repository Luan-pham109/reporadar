---
name: "OpenSEO"
repoUrl: "https://github.com/every-app/open-seo"
oneLiner: "OpenSEO là bộ công cụ SEO mã nguồn mở: nghiên cứu từ khoá, theo dõi thứ hạng, phân tích đối thủ, kiểm tra backlink và audit site — bạn chỉ trả tiền theo lượng dữ liệu dùng thay vì thuê bao Semrush/Ahrefs."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/fd208249-44ea-4849-bb4b-5fc896aeab73"
    caption: "Giao diện OpenSEO."

vertical: ["seo", "agency", "ecom"]

maturity: "rising"
repoStats:
  stars: 17957
  forks: 2264
  note: "~193 ngày tuổi, ~93 sao/ngày"
  starsPerDay: 93
  ageDays: 193
  pushedAt: "2026-09-03T15:54:34Z"
  archived: false
  openIssues: 158
standoutFeatures:
  - "Định vị thẳng là bản open-source thay cho Semrush/Ahrefs, gom keyword research, rank tracking, competitor analysis, backlink và site audit vào một chỗ."
  - "Mô hình pay-as-you-go qua DataForSEO API — không thuê bao tháng, chỉ trả theo số request (~$1–$11/100 request tuỳ loại)."
  - "Có MCP server cho AI agent (vd Claude Code) truy cập dữ liệu SEO, kèm agent skills dựng sẵn như keyword clustering, competitive analysis, link prospecting."
  - "Triển khai linh hoạt: Docker (single-user local), Cloudflare (team/internet-facing có backup), hoặc bản hosted tại openseo.so."
signalSources:
  - label: "GitHub"
    url: "https://github.com/every-app/open-seo"
  - label: "Homepage"
    url: "https://openseo.so"

useCases:
  - "Tự dựng tool SEO của riêng team trên VPS hoặc Cloudflare, không trả thuê bao tháng và không phụ thuộc account share Ahrefs/Semrush dễ bị khoá."
  - "Nghiên cứu từ khoá, kiểm backlink và theo dõi thứ hạng cho nhiều site khách trong một chỗ, chỉ trả tiền theo số lần truy vấn thực tế."
  - "Phân tích đối thủ và audit site trước khi nhận dự án, để báo giá dựa trên dữ liệu thật thay vì đoán."
  - "Cắm vào Claude Code qua MCP để ra lệnh kiểu 'gom cụm 200 từ khoá này' hay 'tìm cơ hội backlink' ngay trong workflow AI, không phải mở dashboard riêng."
  - "Fork và chỉnh lại đúng quy trình SEO của team — thêm bước, đổi báo cáo — điều mà tool đóng như Ahrefs không cho làm."

workflowStepReplaced: "Khâu nghiên cứu từ khoá, kiểm backlink, theo dõi rank và audit site — vốn đang phụ thuộc thuê bao Ahrefs/Semrush hoặc account share."
timeOrCostSaved: "Ahrefs/Semrush bản chính hãng ~$100–$200+/tháng. OpenSEO không thuê bao, trả theo lượng query qua DataForSEO (~$1–$11/100 request), nhưng phải nạp tối thiểu $50 và tự vận hành — tiết kiệm thật với team query ít/đều, nhưng không 'free'."
localProblem: "Team SEO/agency Việt phần lớn không mua Ahrefs/Semrush chính hãng vì giá cao, nên xài account share ('mua chung tool') — bấp bênh, hay bị khoá, không kiểm soát dữ liệu, không tích hợp được vào workflow/automation riêng."
localEvidence: "Tồn tại cả một thị trường 'mua chung tool Ahrefs/Semrush' tại VN (vd muachungtool.com) và hàng loạt bài 'công cụ thay thế Ahrefs' — cho thấy nhu cầu né phí thuê bao là có thật. OpenSEO chưa có nội dung tiếng Việt nào."

vnMarket:
  insight: "SEO VN đang kẹt giữa 3 lựa chọn: (1) account share Ahrefs/Semrush rẻ nhưng bấp bênh/dễ khoá; (2) tool free rời rạc (Google Search Console, Trends, Ubersuggest free); (3) chính hãng quá đắt. OpenSEO là phương án thứ 4: tự chủ dữ liệu, trả theo dùng, fork/tích hợp được vào automation — hợp nhất với agency/team có chút năng lực kỹ thuật, muốn dữ liệu sạch + đưa SEO vào agent workflow (MCP). Điểm cấn lớn nhất khi reflect cho VN: chất lượng dữ liệu DataForSEO cho keyword/SERP tiếng Việt cần kiểm thật trước khi khuyên thay Ahrefs."
  seoKeywords: ["OpenSEO", "công cụ thay thế Ahrefs", "thay thế Semrush", "công cụ SEO open source", "công cụ SEO miễn phí", "tool SEO tự host", "mua chung tool Ahrefs", "DataForSEO", "MCP SEO"]
  notes: "Verify qua WebSearch (2026-06-30): nhiều bài VN về 'thay thế Ahrefs/Semrush' và thị trường mua chung tool, nhưng KHÔNG có bài tiếng Việt nào về OpenSEO → creator whitespace cao. Cần Luan kiểm tay: (a) chất lượng data DataForSEO cho keyword VN; (b) group SEO VN (FB) đã ai nhắc OpenSEO chưa."

usabilityRisk: "Phụ thuộc DataForSEO API — vẫn tốn tiền theo query, top-up tối thiểu $50, và độ phủ dữ liệu/keyword cho thị trường tiếng Việt cần kiểm trước khi tin. Self-host Docker/Cloudflare cần người quen kỹ thuật; bản Docker mặc định single-user, không xác thực."

practitionerGuide:
  outcome: "Sau guide này bạn có một bản OpenSEO chạy được, đã cắm DataForSEO, và làm được lượt nghiên cứu từ khoá đầu tiên cho một site thật."
  prerequisites:
    - "Một tài khoản DataForSEO đã nạp credit (tối thiểu $50) để lấy API key."
    - "Một VPS hoặc tài khoản Cloudflare nếu muốn tự host; hoặc dùng thẳng bản hosted tại openseo.so nếu ngại kỹ thuật."
    - "Người quen Docker/dòng lệnh nếu chọn tự host."
  steps:
    - "Quyết định trước: dùng bản hosted openseo.so cho nhanh, hay tự host bằng Docker/Cloudflare để giữ toàn quyền dữ liệu."
    - "Lấy API key DataForSEO và nạp credit; đây là phần thực sự tốn tiền, OpenSEO chỉ là vỏ miễn phí bọc ngoài."
    - "Cài theo README (Docker cho máy/VPS, hoặc deploy Cloudflare cho cả team), rồi dán API key vào cấu hình."
    - "Chạy thử một truy vấn từ khoá tiếng Việt và một site VN bạn biết rõ, đối chiếu với số liệu Ahrefs/Search Console để xem data có đáng tin không."
    - "Nếu định dùng trong AI workflow, bật MCP server và nối vào Claude Code rồi thử một lệnh kiểu gom cụm từ khoá."
  expectedResult: "Bạn ra được báo cáo từ khoá/backlink cơ bản, và biết rõ data DataForSEO cho thị trường Việt đủ dùng tới đâu trước khi đổ việc thật vào."
  commonPitfalls:
    - "Tưởng OpenSEO miễn phí hoàn toàn — thực ra mọi truy vấn đều tốn tiền DataForSEO, top-up tối thiểu $50."
    - "Data keyword/SERP tiếng Việt của DataForSEO có thể mỏng hơn Ahrefs ở vài ngách — phải kiểm trước khi tin tuyệt đối."
    - "Bản Docker mặc định single-user, không xác thực; đừng phơi thẳng ra internet mà chưa khoá lại."

greyHatFlag: "in"

suggestedAngle: "Góc creator: 'Bỏ account share Ahrefs, tự dựng tool SEO của riêng team' — hướng dẫn self-host OpenSEO + cắm DataForSEO + nối MCP vào Claude Code, kèm đánh giá thật chất lượng data keyword tiếng Việt."
paidToolReplaced: "Semrush / Ahrefs"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Hỏi AI/Trending chỉ ra được 'OpenSEO là bản open-source thay Ahrefs'. Cái AI không cho: nó hợp với thế kẹt account-share của SEO VN ra sao, và liệu data DataForSEO có đủ tốt cho keyword tiếng Việt — phải kiểm thực địa."

scoreBreakdown:
  useCaseFit: 18
  projectHealth: 21
  costAdvantage: 14
  deployment: 10
  documentation: 15
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-30
nextReviewDueAt: 2026-09-28

tags: ["seo", "agency", "ecom", "mcp", "keyword-research", "backlink", "site-audit"]
publishedAt: 2026-06-30
week: "2026-W27"
draft: false
---

Nháp HUNT (khách quan). Số liệu từ `fetch-signals.mjs` (2026-06-30): 3873 sao, 421 fork, ~31.5 sao/ngày, push 2026-06-29, health 21/25.

Bước tiếp: chạy `repo-radar-synthesize` để nghiên cứu từ khoá tiếng Việt + góc Việt (đặc biệt: độ phủ DataForSEO cho keyword tiếng Việt, so với cách team SEO VN đang dùng Ahrefs/Semrush share account).
