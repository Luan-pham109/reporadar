---
name: "SEOBuild Onpage"
repoUrl: "https://github.com/gbessoni/seobuild-onpage"
oneLiner: "SEOBuild Onpage là agent AI (chạy qua Claude Code/Codex) nhận một từ khoá, tự kéo dữ liệu SERP và đối thủ đang xếp hạng rồi viết ra một trang landing/blog hoàn chỉnh có heading, FAQ và schema, nhắm cả xếp hạng Google lẫn được AI Overview/ChatGPT trích dẫn."

vertical: ["seo"]

maturity: "rising"
repoStats:
  stars: 222
  forks: 37
  note: "~107 ngày tuổi, ~2.1 sao/ngày"
  starsPerDay: 2.1
  ageDays: 107
  pushedAt: "2026-06-25T12:40:00Z"
  archived: false
  openIssues: 0
standoutFeatures:
  - "Một lệnh (`/seoagi \"từ khoá\"`) chạy hết quy trình: kéo SERP, phân tích đối thủ, tìm khoảng trống nội dung, rồi viết hẳn một trang có heading, FAQ từ dữ liệu People Also Ask thật và schema JSON-LD."
  - "Có checklist chất lượng 55 điểm (ngưỡng đạt 46/55) trước khi xuất bản, thay vì chỉ đưa ra một bản nháp không kiểm chứng."
  - "BYOK: dùng chính tài khoản Google Search Console và DataForSEO của bạn, nên dữ liệu SERP/từ khoá là dữ liệu thật của riêng bạn chứ không phải số liệu mẫu."
  - "Có tính năng đánh giá URL cũ nên giữ (301 redirect) hay nên xoá (410) khi viết lại nội dung cũ, giúp dọn site thay vì chỉ chồng thêm bài mới."
signalSources:
  - label: "GitHub"
    url: "https://github.com/gbessoni/seobuild-onpage"

useCases:
  - "Nhập một từ khoá đang nhắm (ví dụ dịch vụ hoặc sản phẩm chủ lực) và nhận về một bản nháp trang landing/blog đầy đủ heading, FAQ, schema — dựa trên đúng những gì top 10 Google đang xếp hạng."
  - "Kiểm tra nhanh những 'khoảng trống' mà đối thủ đang xếp hạng chưa nói tới, để viết trang bao quát hơn thay vì đoán ý người tìm."
  - "Viết lại một trang cũ đang xếp hạng kém: agent so nó với top 3 đối thủ hiện tại và liệt kê chính xác đang thiếu phần nào."
  - "Dùng danh sách gợi ý liên kết nội bộ tự trích từ đối thủ để bổ sung các trang 'còn thiếu' trong cụm chủ đề của mình."
  - "Chạy checklist 55 điểm để tự chấm điểm một trang trước khi xuất bản, thay vì đăng lên rồi mới biết thiếu gì."

workflowStepReplaced: "Khâu viết brief SEO + soạn nội dung on-page: kéo dữ liệu SERP, phân tích đối thủ, viết brief, viết bài, gắn schema — vốn thường tách thành nhiều bước/nhiều người."
timeOrCostSaved: "Có thể gộp một quy trình vốn cần SEO + content writer làm nhiều giờ (brief + viết + schema) thành một lệnh; README không nêu số giờ cụ thể, và bạn vẫn phải trả phí API cho DataForSEO/Search Console theo lượng dùng."
localProblem: "Agency SEO và đội content ở Việt Nam đang phải làm thêm một lớp việc mới — viết sao để vừa lên Google vừa được ChatGPT/AI Overview trích dẫn — nhưng phần lớn tài liệu tiếng Việt về GEO vẫn dừng ở mức khái niệm, thiếu công cụ thao tác cụ thể."
localEvidence: "Có hàng loạt agency Việt (SEO Center, SEO Dao, Phố SEO, Fast Marketing, GOHA...) đã mở dịch vụ GEO/AIO ngay trong 2026, cho thấy nhu cầu 'được AI trích dẫn' đang thành dịch vụ thật ở thị trường Việt — nhưng phần lớn đang bán dưới dạng dịch vụ trọn gói hơn là công cụ tự chạy."

vnMarket:
  insight: "GEO đang được các agency SEO Việt Nam đóng gói thành gói dịch vụ riêng (audit, entity building, tối ưu trích dẫn) thay vì công cụ tự vận hành — nghĩa là còn nhiều đất để giới thiệu một agent mã nguồn mở làm được một phần việc đó. Nhưng cần nói rõ đây là repo cho người biết kỹ thuật (cần tự cấu hình API DataForSEO/GSC), không phải dịch vụ 'giao chìa khoá' như các gói agency đang bán."
  seoKeywords: ["GEO là gì", "tối ưu nội dung cho AI Overview", "SEO cho ChatGPT", "viết content chuẩn SEO bằng AI", "content được AI trích dẫn", "audit SEO onpage tự động"]
  notes: "Đã tra Google các cụm 'GEO SEO tiếng Việt', 'tối ưu ChatGPT trích dẫn' và thấy nhiều agency Việt đã bán dịch vụ GEO/AIO (seocenter.vn, seodao.vn, phoseo.com, fastmarketing.com.vn...) — xác nhận nhu cầu thật, nhưng chưa tìm thấy ai ở Việt Nam nhắc cụ thể tới repo seobuild-onpage này."

usabilityRisk: "Đây là script Python cần tự cấu hình: API key DataForSEO (trả phí theo lượng dùng), quyền Google Search Console, và chạy qua Claude Code/Codex — không hợp với người không quen dòng lệnh. Đáng chú ý hơn: một số kỹ thuật trong changelog (như tự chèn schema Organization/Person lên trang bên thứ ba để tác động thứ hạng, hay cố tình xếp thương hiệu của khách #1 trong một bài listicle) là các chiến thuật SEO/GEO khá rắn — nếu dùng sai khung, đây là vùng dễ bị Google coi là spam hoặc thao túng, không phải content marketing sạch thuần tuý. Nên đọc kỹ và cân nhắc trước khi áp dụng nguyên văn."

practitionerGuide:
  outcome: "Chạy xong guide này, bạn có một bản nháp trang landing/blog đầy đủ heading + FAQ + schema cho một từ khoá cụ thể, dựa trên dữ liệu SERP thật."
  prerequisites:
    - "Máy có Python và đã cài Claude Code hoặc Codex CLI."
    - "API key DataForSEO (trả phí) và quyền truy cập Google Search Console cho domain cần tối ưu."
    - "Một từ khoá/chủ đề cụ thể muốn nhắm, kèm điểm khác biệt thật của thương hiệu (để agent không viết chung chung)."
  steps:
    - "Cài skill theo hướng dẫn (`claude install-skill gbessoni/seobuild-onpage`) và điền API key vào file cấu hình."
    - "Chạy `/seoagi \"từ khoá của bạn\"` và để agent kéo SERP, phân tích top 10 đối thủ."
    - "Cung cấp cho agent điểm khác biệt thật của thương hiệu khi được hỏi, thay vì để nó tự bịa ưu điểm chung chung."
    - "Đọc bản nháp trang được sinh ra, đối chiếu checklist 55 điểm và tự quyết có xuất bản không."
    - "Với trang cũ cần viết lại, chạy agent ở chế độ rewrite để nhận khuyến nghị 301/410 trước khi sửa thật trên site."
  expectedResult: "Bạn có một bản nháp trang chi tiết, đã đối chiếu với đối thủ thật, kèm điểm chấm chất lượng — đủ để biên tập viên duyệt tiếp thay vì viết từ số 0."
  commonPitfalls:
    - "Đăng thẳng bản nháp AI sinh ra mà không có ai đọc lại giọng văn và tính chính xác của thông tin."
    - "Dùng các chiến thuật rắn (schema bên thứ ba, tự xếp hạng #1 trong listicle) mà không hiểu rủi ro bị Google coi là thao túng."
    - "Bỏ qua chi phí API DataForSEO khi tính toán mức tiết kiệm so với thuê ngoài."

greyHatFlag: "borderline"

suggestedAngle: "Nên kể theo khung 'công cụ tăng tốc brief + viết content SEO/GEO cho người đã hiểu SEO', không kể như phép màu SEO tự động — và nên nói rõ ranh giới giữa phần viết nội dung sạch với các chiến thuật rắn trong changelog."
paidToolReplaced: "Agency viết content SEO/GEO, hoặc các tool brief nội dung như Surfer SEO/Clearscope kết hợp thuê ngoài viết bài"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể mô tả tool này làm gì, nhưng đánh giá ranh giới giữa kỹ thuật GEO hợp lệ và chiến thuật thao túng trong chính changelog của repo là phần cần con người đọc kỹ và cảnh báo."

tags: ["seo", "geo", "ai-agent", "claude-code-skill", "content-generation"]
scoreBreakdown:
  useCaseFit: 18
  projectHealth: 16
  costAdvantage: 14
  deployment: 6
  documentation: 10
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-03
nextReviewDueAt: 2026-10-01
publishedAt: 2026-07-03
week: "2026-W27"
draft: true
---

Draft foundation sinh trong round pipeline ngày 2026-07-03. Cần Luan quyết định có publish record này hay chỉ giữ ở mức cảnh báo, vì repo có vài kỹ thuật SEO/GEO khá rắn (greyHatFlag: borderline) cần khung kể rõ ràng.
