---
name: "Aaron Marketing Skills"
repoUrl: "https://github.com/aaron-he-zhu/aaron-marketing-skills"
oneLiner: "Aaron Marketing Skills là một bộ 69 skill dùng trong Claude Code, biến agent AI thành cả một phòng marketing thu nhỏ — làm được SEO/GEO, chọn KOL, audit quảng cáo trả phí và email marketing, tất cả theo cùng một khung chấm điểm chất lượng."
media: []

vertical: ["agency", "seo"]

maturity: "rising"
repoStats:
  stars: 2308
  forks: 318
  note: "~198 ngày tuổi, ~11.7 sao/ngày"
  starsPerDay: 11.7
  ageDays: 198
  pushedAt: "2026-07-03T16:56:01Z"
  archived: false
  openIssues: 1
standoutFeatures:
  - "69 skill chia thành 4 mảng marketing (SEO/GEO, influencer, paid ads, email) cộng 5 skill nền tảng dùng chung, thay vì chỉ làm mỗi SEO như phần lớn bộ skill Claude Code khác cùng chủ đề."
  - "5 khung chấm điểm chất lượng có 'veto' riêng (CORE-EEAT, CITE, C³, ROAS, SEND) — mỗi output đều bị một skill 'auditor' kiểm tra và ra verdict SHIP/FIX/BLOCK trước khi coi là xong."
  - "Chạy được ở mức Tier 1 hoàn toàn bằng dữ liệu bạn tự dán vào (không bắt buộc API key trả phí) — kết nối paid tool/MCP chỉ là tuỳ chọn tăng tốc, không phải điều kiện bắt buộc."
  - "Có bộ nhớ 3 tầng HOT/WARM/COLD giữ lại kết quả và điểm số qua nhiều phiên làm việc, nên không phải giải thích lại ngữ cảnh brand mỗi lần mở Claude Code."
signalSources:
  - label: "GitHub"
    url: "https://github.com/aaron-he-zhu/aaron-marketing-skills"

useCases:
  - "Audit tài khoản Google Ads/Facebook Ads trước khi tăng ngân sách, ra điểm RQS và danh sách lỗi cần sửa trước khi chạy tiếp."
  - "Chấm điểm và lọc KOL/influencer theo 9 tiêu chí (độ phù hợp, chất lượng nội dung, hiệu quả chiến dịch) trước khi ký hợp đồng, thay vì chọn theo cảm tính follower."
  - "Kiểm tra một bài viết SEO/GEO có đạt chuẩn E-E-A-T và khả năng được AI trích dẫn hay chưa, trước khi publish."
  - "Rà soát một chiến dịch email trước khi gửi theo khung SEND (người gửi, tương tác, nuôi dưỡng, phản hồi trực tiếp) để tránh bị đánh dấu spam."
  - "Gộp một brief sản phẩm thành SEO post, email bán hàng và caption mạng xã hội cùng giọng thương hiệu chỉ trong một phiên làm việc."

workflowStepReplaced: "Một phần khâu audit/chấm điểm chất lượng thủ công mà agency hay giao cho từng chuyên viên riêng (SEO, ads, KOL, email) — không thay được người ra quyết định cuối, nhưng gộp bước kiểm tra ban đầu."
timeOrCostSaved: "README không đưa ra số giờ/tiền cụ thể tiết kiệm được; lợi ích chính là gộp 4 vai trò chuyên môn (SEO/ads/KOL/email) vào một agent chạy miễn phí ở Tier 1, thay vì trả phí riêng cho từng tool SaaS chuyên biệt."
localProblem: "Agency nhỏ ở Việt Nam thường phải thuê/nuôi nhiều người khác nhau (SEO, chạy ads, quản lý KOL, viết email) hoặc dùng nhiều tool SaaS riêng biệt cho từng mảng — chi phí dồn lại khá nặng cho agency 5-10 người, và không có ai audit chéo chất lượng giữa các mảng trước khi giao khách."
localEvidence: "Chưa tìm thấy bài viết/thảo luận tiếng Việt nhắc trực tiếp tới repo này; bằng chứng gián tiếp là không gian 'SEO/GEO bằng Claude Code' đã khá đông ở Việt Nam (nhiều bài hướng dẫn từ AZDIGI, CentriX, viblo.asia về Claude Agent Skills nói chung, và ít nhất 2-3 repo SEO/GEO tương tự — kể cả một repo SEO/GEO khác của cùng tác giả — đã có mặt), cho thấy nhu cầu tự động hoá SEO/GEO là có thật, nhưng mảng gộp thêm ads + KOL + email như tool này thì chưa thấy ai bàn riêng."

vnMarket:
  insight: "Ở Việt Nam, mảng 'SEO/GEO bằng Claude Code' đã bắt đầu bão hoà (nhiều repo tương tự đã được viết bài tiếng Việt, kể cả một bản SEO/GEO-only riêng của cùng tác giả). Nhưng 3 mảng còn lại của Aaron Marketing Skills — chọn/đánh giá KOL, audit tài khoản ads, và chấm điểm email marketing bằng Claude Code — gần như chưa ai viết tiếng Việt, có thể là góc trống thực sự thay vì lặp lại nội dung SEO đã cũ."
  seoKeywords: ["skill claude code cho agency", "tự động hoá marketing bằng AI", "claude code seo geo", "chấm điểm chiến dịch KOL AI", "audit tài khoản quảng cáo AI", "claude code email marketing"]
  notes: "Đã tra 'claude code skill agency', 'claude code seo geo tiếng Việt' qua web search — thấy nhiều bài về skill SEO/GEO Claude Code nói chung và vài repo SEO/GEO tương tự, nhưng chưa thấy nội dung tiếng Việt nhắc riêng phần influencer/ads/email của Aaron Marketing Skills — cần Luan xác nhận thêm trong nhóm agency/marketing VN."

usabilityRisk: "Đây là bộ skill Markdown cài trong Claude Code (không phải web app), nên cần biết dùng Claude Code trước; theo README chỉ có 1 script Bash + vài script Python chuẩn thư viện (không cần cài gì nặng), nhưng để dùng đúng 69 skill này hiệu quả cần hiểu rõ luồng 4 giai đoạn (research→build→optimize→monitor) mỗi mảng — không hợp cho người chưa quen Claude Code muốn 'bật là chạy ngay'. README hoàn toàn tiếng Anh."

practitionerGuide:
  outcome: "Sau khi làm theo hướng dẫn, bạn có một báo cáo audit (SEO, ads, hoặc email) đầu tiên chấm theo đúng khung chất lượng của bộ skill, kèm verdict SHIP/FIX/BLOCK."
  prerequisites:
    - "Đã cài Claude Code (hoặc host Agent Skills tương thích)."
    - "Có dữ liệu thật để dán vào (vd export tài khoản ads, danh sách từ khoá, hoặc nội dung email) — không bắt buộc API key trả phí."
  steps:
    - "Cài plugin: `/plugin marketplace add aaron-he-zhu/aaron-marketing-skills` rồi `/plugin install aaron-marketing@aaron`."
    - "Mô tả mục tiêu bằng ngôn ngữ tự nhiên (vd 'audit tài khoản Google Ads này trước khi tăng ngân sách') hoặc gọi thẳng lệnh, vd `/aaron-marketing:ad`."
    - "Dán dữ liệu xuất từ nền tảng thật (CSV/export) khi skill hỏi — không cần kết nối API."
    - "Đọc verdict cuối (SHIP/FIX/BLOCK) và các điểm bị veto để biết chỗ cần sửa trước."
  expectedResult: "Một báo cáo có điểm số theo khung tương ứng (RQS/EQS/CVI...) và danh sách lỗi veto cụ thể — đủ để biết chiến dịch/tài khoản có nên chạy tiếp không."
  commonPitfalls:
    - "Không chạy `/aaron-marketing:auto` trước nên bỏ lỡ bước định tuyến đúng skill cần dùng."
    - "Dán dữ liệu không đầy đủ (thiếu cột) khiến điểm chấm bị lệch."
    - "Nhầm 'marketplace add' đã là cài xong — vẫn phải chạy thêm '/plugin install' mới thật sự bật skill."

greyHatFlag: "in"

suggestedAngle: "Góc cho agency: quay demo 'audit một tài khoản ads bằng /aaron-marketing:ad trong 5 phút' để cho thấy khung ROAS chấm điểm và veto hoạt động ra sao — vì đây là phần mới nhất, ít người viết."
paidToolReplaced: "Một phần việc mà agency hay thuê ngoài rời rạc cho SEO agency, KOL agency, ad agency, và nền tảng email (Klaviyo/Mailchimp) — vì bộ skill này gộp cả 4 mảng vào một agent, không thay hoàn toàn nhưng giảm số công cụ SaaS riêng lẻ phải trả phí."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể xác nhận đây là bộ skill Claude Code cho marketing, nhưng việc hiểu 5 khung chấm điểm (CORE-EEAT/CITE/C³/ROAS/SEND) khác nhau ra sao, khi nào dùng veto, và mảng nào (SEO/ads/KOL/email) còn ít người Việt khai thác — cần người biên tập tổng hợp, hỏi AI chung chung sẽ không tự ra được góc này."

tags: ["claude-code-skills", "seo", "geo", "marketing-automation", "agency"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 20
  costAdvantage: 14
  deployment: 15
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-04
nextReviewDueAt: 2026-10-02
publishedAt: 2026-07-04
week: "2026-W27"
draft: false
---

Draft foundation sinh trong round pipeline ngày 2026-07-04. Cần Luan kiểm tay xem mảng influencer/ads/email có thực sự khác biệt so với các skill SEO/GEO đã có trên site chưa, và xác nhận độ bão hoà VN trước khi publish.
