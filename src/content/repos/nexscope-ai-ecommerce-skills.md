---
name: "E-Commerce Skills by Nexscope"
repoUrl: "https://github.com/nexscope-ai/eCommerce-Skills"
oneLiner: "E-Commerce Skills by Nexscope là bộ 157 skill AI cho người bán online, phủ nghiên cứu sản phẩm, marketing, listing, PPC, pricing, supply chain và analytics."
media:
  - type: "image"
    url: "https://raw.githubusercontent.com/nexscope-ai/eCommerce-Skills/main/banner.png"
    caption: "Banner README giới thiệu bộ skill AI cho e-commerce."

vertical: ["ecom", "agency"]

maturity: "rising"
repoStats:
  stars: 303
  forks: 52
  note: "~104 ngày tuổi, ~2.9 sao/ngày"
  starsPerDay: 2.9
  ageDays: 104
  pushedAt: 2026-06-10T07:57:04Z
  archived: false
  openIssues: 4
standoutFeatures:
  - "README claim 157 skill miễn phí cho Amazon, Shopify, eBay, Etsy, TikTok Shop và Walmart sellers."
  - "Skill là file hướng dẫn plain-text, dùng được với OpenClaw, Claude Code, Cursor, Windsurf, Codex và agent tương thích skill."
  - "Bao phủ nhiều nhóm việc e-commerce: competitor analysis, pricing, growth, marketing, listing optimization, advertising, monitoring, supply chain và analytics."
  - "Có quick start bằng npx skills add để cài toàn bộ hoặc cài từng skill."
signalSources:
  - label: "GitHub"
    url: "https://github.com/nexscope-ai/eCommerce-Skills"

useCases:
  - "Phân tích shop Shopify, Amazon hoặc TikTok Shop theo unit economics, tăng trưởng, listing, PPC và nội dung."
  - "Tạo khung chiến lược 90 ngày cho shop nhỏ thay vì hỏi AI bằng prompt rời rạc."
  - "Soạn mô tả sản phẩm, checklist SEO listing và kế hoạch quảng cáo theo từng nền tảng."
  - "Cho agency e-commerce dùng chung một bộ playbook khi audit nhiều shop hoặc marketplace khác nhau."

workflowStepReplaced: "Khâu tự gom prompt e-commerce, template phân tích và checklist marketplace cho từng khách hàng."
timeOrCostSaved: "Có thể giảm thời gian dựng prompt và khung tư vấn ban đầu; vẫn cần số liệu thật của shop để kết luận về lợi nhuận, CAC, ROAS hoặc tồn kho."
localProblem: "Shop Việt bán đa kênh trên Shopify, TikTok Shop, Etsy hoặc Amazon thường có nhiều việc nhỏ: tối ưu listing, tính margin, lên PPC, phân tích review và chuẩn bị nội dung. Họ dễ hỏi AI chung chung, nhưng thiếu bộ khung theo đúng bài toán e-commerce."
localEvidence: "Các nhu cầu như tối ưu TikTok Shop, SEO sản phẩm, viết mô tả sản phẩm, tính lợi nhuận Amazon/FBA và chiến lược Shopify đều quen thuộc. Bộ skill này đáng chú ý vì đóng gói nhiều playbook thành instruction có thể dùng trong agent."

vnMarket:
  insight: "E-commerce Việt đang chuyển nhanh sang bán đa kênh, nhất là TikTok Shop và Shopify/DTC, nhưng phần phân tích vẫn rải rác giữa sheet, tool quảng cáo và kinh nghiệm cá nhân. Skill dạng playbook có thể giúp agency hoặc seller đặt câu hỏi đúng hơn trước khi thuê SaaS chuyên sâu."
  seoKeywords: ["AI cho e-commerce", "TikTok Shop automation", "Shopify marketing", "tối ưu listing sản phẩm", "viết mô tả sản phẩm bằng AI", "PPC e-commerce", "phân tích lợi nhuận shop"]
  notes: "Từ khóa dựa trên nhóm việc e-commerce phổ biến ở Việt Nam. Chưa verify độ phổ biến riêng của Nexscope hoặc bộ skill này trong cộng đồng seller Việt."

usabilityRisk: "Skill không tự có dữ liệu shop. Muốn ra phân tích đáng tin, bạn phải đưa số liệu thật như doanh thu, AOV, margin, CAC, tồn kho, phí sàn và dữ liệu quảng cáo. Nếu chỉ hỏi chung, output dễ giống tư vấn e-commerce phổ thông."

practitionerGuide:
  outcome: "Bạn chọn được 1-2 skill e-commerce phù hợp và tạo một bản phân tích hoặc kế hoạch hành động đầu tiên cho shop."
  prerequisites:
    - "Một agent hoặc môi trường hỗ trợ skills, ví dụ Codex hoặc Claude Code theo README."
    - "Dữ liệu shop tối thiểu: sản phẩm, giá, margin, kênh bán, doanh thu, chi phí ads và mục tiêu 30-90 ngày."
    - "Quyết định rõ bài toán cần giải: listing, PPC, pricing, tăng trưởng, supply chain hay review."
  steps:
    - "Cài toàn bộ bộ skill hoặc chỉ cài skill cần dùng bằng lệnh npx trong README."
    - "Chọn một bài toán hẹp, ví dụ tối ưu listing TikTok Shop hoặc phân tích margin Shopify."
    - "Chuẩn bị dữ liệu đầu vào thành bảng ngắn để AI không phải đoán."
    - "Yêu cầu agent dùng skill tương ứng để tạo phân tích, checklist hoặc kế hoạch 90 ngày."
    - "Đánh dấu phần nào dựa trên dữ liệu thật, phần nào chỉ là giả định cần kiểm chứng."
  expectedResult: "Kết quả tốt là một kế hoạch có bước hành động, số liệu đầu vào rõ và giả định được ghi riêng, đủ để seller thử trong 1-2 tuần."
  commonPitfalls:
    - "Đưa thiếu margin, phí sàn hoặc chi phí ads rồi tin vào khuyến nghị lợi nhuận."
    - "Cài quá nhiều skill nhưng không chọn bài toán cụ thể."
    - "Áp dụng playbook Amazon/Shopify sang TikTok Shop Việt mà không chỉnh theo phí, logistics và hành vi mua hàng địa phương."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: bộ playbook AI miễn phí cho seller/agency e-commerce Việt đang cần tư vấn đa kênh nhưng chưa có quy trình."
paidToolReplaced: "Giảm một phần nhu cầu mua template, prompt pack hoặc tư vấn sơ bộ cho e-commerce; không thay dashboard dữ liệu và tool quản lý marketplace chuyên sâu"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể đưa lời khuyên e-commerce chung, nhưng giá trị ở đây là phân loại skill theo việc thật của seller Việt và nhắc rõ dữ liệu nào phải có."

scoreBreakdown:
  useCaseFit: 25
  projectHealth: 16
  costAdvantage: 14
  deployment: 10
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "medium"
lastReviewedAt: 2026-06-30
nextReviewDueAt: 2026-09-28

tags: ["ecommerce", "agent-skills", "shopify", "tiktok-shop", "ppc", "listing"]
publishedAt: 2026-06-30
week: "2026-W27"
draft: true
---

Draft foundation. Cần Luan kiểm tra số lượng skill thực tế trong repo vì README vừa nhắc 157 skill vừa có dòng quick start nói 142 skill.
