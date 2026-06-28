---
name: "Google Meta Ads GA4 MCP"
repoUrl: "https://github.com/irinabuht12-oss/google-meta-ads-ga4-mcp"
oneLiner: "Google Meta Ads GA4 MCP giúp agency điều khiển Google Ads, Meta Ads và GA4 từ ChatGPT, Claude, Cursor hoặc n8n: kéo số liệu, audit tài khoản, chỉnh chiến dịch và xuất báo cáo mà không phải nhảy qua từng dashboard."
media:
  - type: "image"
    url: "https://github.com/user-attachments/assets/2f931292-a3af-4010-a72e-38b8cf6e62ba"
    caption: "Demo audit tài khoản quảng cáo bằng Claude và MCP."

vertical: ["agency", "ecom"]

maturity: "rising"
repoStats:
  stars: 1028
  forks: 46
  note: "~83 ngày tuổi, ~12.4 sao/ngày"
standoutFeatures:
  - "Gom Google Ads, Meta Ads và Google Analytics 4 vào một MCP server thay vì cài riêng từng connector."
  - "README nói có hơn 250 công cụ cho quản lý chiến dịch, keyword, ngân sách, audience, creative, báo cáo và GA4."
  - "Hỗ trợ nhiều môi trường làm việc như ChatGPT, Claude, Cursor, Windsurf, n8n, Codex CLI và Gemini CLI."
  - "Có cả thao tác đọc và ghi trên các nền tảng quảng cáo, không chỉ kéo báo cáo."
signalSources:
  - label: "GitHub"
    url: "https://github.com/irinabuht12-oss/google-meta-ads-ga4-mcp"

useCases:
  - "Audit nhanh tài khoản Google Ads và Meta Ads rồi nhờ AI gom thành checklist tối ưu cho client."
  - "Kéo số liệu GA4 cạnh dữ liệu ad spend để xem campaign nào đang tạo chuyển đổi thật, không chỉ tạo click."
  - "Tạo hoặc chỉnh campaign, ad group, keyword, negative keyword và budget từ cùng một trợ lý AI."
  - "Dựng báo cáo so sánh Google Ads với Meta Ads cho agency trước buổi review tuần."

workflowStepReplaced: "Khâu mở nhiều dashboard quảng cáo, copy số liệu thủ công và tự ghép báo cáo audit cho client."
timeOrCostSaved: "Có thể rút ngắn phần kéo số liệu và lập báo cáo audit từ vài giờ xuống một phiên làm việc có cấu trúc, nếu tài khoản đã kết nối đúng."
localProblem: "Agency Việt chạy performance thường phải quản lý Google Ads, Meta Ads và GA4 cùng lúc. Khi mỗi nền tảng nằm ở một giao diện riêng, việc audit ngân sách, ROAS và tracking cho nhiều client rất dễ chậm và lệch số."
localEvidence: "Queue ghi repo mới 83 ngày nhưng đã có 1,028 sao và 46 fork, mô tả rõ bài toán agency: quản lý Google Ads, Meta Ads và GA4 bằng AI assistant. Chưa có tín hiệu HN/Reddit chắc chắn, nên cần Luan kiểm tay thêm cộng đồng media buyer Việt trước khi publish."

vnMarket:
  insight: "Góc Việt nên đặt vào bài toán agency/performance team đang phải kéo số liệu quảng cáo thủ công từ Google Ads, Meta Ads và GA4. Giá trị không nằm ở chuyện 'có MCP' mà ở việc gom audit, tối ưu ngân sách và báo cáo client về một luồng làm việc với AI."
  seoKeywords: ["MCP Google Ads", "MCP Meta Ads", "GA4 MCP", "audit tài khoản quảng cáo bằng AI", "tự động báo cáo quảng cáo", "AI cho media buyer"]
  notes: "Từ khóa suy luận từ README và nhu cầu agency; chưa chạy web keyword research tiếng Việt trong lượt này."

usabilityRisk: "Google Meta Ads GA4 MCP đụng trực tiếp tài khoản quảng cáo thật, nên cần kiểm soát quyền OAuth, quyền ghi và lịch sử thao tác rất kỹ. Team chưa quen MCP có thể nên bắt đầu ở chế độ đọc báo cáo trước khi cho AI chỉnh campaign."

practitionerGuide:
  outcome: "Bạn có một luồng thử nghiệm kéo số liệu quảng cáo và tạo bản audit đầu tiên từ Google Ads, Meta Ads và GA4."
  prerequisites:
    - "Tài khoản Google Ads, Meta Ads và GA4 mà bạn có quyền truy cập hợp lệ."
    - "Một AI assistant có hỗ trợ MCP như Claude, ChatGPT connector, Cursor, Windsurf hoặc n8n."
    - "Một client hoặc tài khoản test để audit trước khi dùng trên tài khoản đang chi ngân sách lớn."
  steps:
    - "Kết nối MCP server theo hướng dẫn phù hợp với assistant bạn dùng, ưu tiên môi trường test trước."
    - "Bắt đầu bằng prompt chỉ đọc: liệt kê campaign, spend, conversion và ROAS trong 7 hoặc 30 ngày gần nhất."
    - "Yêu cầu AI so sánh Google Ads, Meta Ads và GA4 để tìm campaign có spend cao nhưng chuyển đổi thấp."
    - "Tạo báo cáo audit dạng bullet cho client, ghi rõ insight nào lấy từ dữ liệu và đề xuất nào là suy luận."
    - "Chỉ bật thao tác ghi như pause, update budget hoặc add negative keyword sau khi đã có bước duyệt tay."
  expectedResult: "Bạn có một bản audit quảng cáo đủ để review nội bộ: số liệu chính, vấn đề nổi bật và đề xuất tối ưu có nguồn từ tài khoản."
  commonPitfalls:
    - "Cho AI quyền ghi quá sớm trên tài khoản đang chạy tiền thật."
    - "Tin đề xuất tối ưu mà không kiểm tra attribution và tracking trong GA4."
    - "Không ghi log prompt và thao tác, khiến team khó truy lại vì sao campaign bị đổi."

greyHatFlag: "in"

suggestedAngle: "Viết theo góc 'media buyer có trợ lý audit đa nền tảng', không viết như bài giới thiệu MCP khô."
paidToolReplaced: "Một phần thao tác trong Supermetrics, Looker Studio workflow, Ads Manager reporting và các tool audit quảng cáo"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể tóm tắt README, nhưng góc agency Việt cần rào quyền ghi, tracking GA4 và quy trình duyệt tay trước khi đụng ngân sách thật."

tags: ["mcp", "google-ads", "meta-ads", "ga4", "agency", "marketing-automation"]
publishedAt: 2026-06-28
week: "2026-W26"
draft: true
---

Draft foundation từ daily queue. Cần Luan kiểm thêm cộng đồng media buyer Việt, mức độ bão hòa nội dung MCP quảng cáo và rủi ro quyền ghi trước khi publish.
