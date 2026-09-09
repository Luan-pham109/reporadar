---
name: "colibrì"
repoUrl: "https://github.com/justvugg/colibri"
oneLiner: "colibrì là một 'động cơ' chạy model ngôn ngữ khổng lồ GLM-5.2 (744 tỉ tham số) trên máy tính thường chỉ ~25GB RAM, bằng cách viết thuần C, không phụ thuộc gì và nạp dần các 'expert' từ ổ đĩa."
media: []

vertical: []

maturity: "pre-viral"
repoStats:
  stars: 2560
  forks: 180
  note: "~10 ngày tuổi, ~256 sao/ngày"
  starsPerDay: 256
  ageDays: 10
  pushedAt: 2026-07-10T23:26:02Z
  archived: false
  openIssues: 17
standoutFeatures:
  - "Chạy model MoE 744B (GLM-5.2) trên máy phổ thông ~25GB RAM bằng cách giữ phần dense trong RAM (~9.9GB int4) và stream 21.504 routed expert từ ổ đĩa theo nhu cầu."
  - "Toàn bộ engine là một file C (~2.400 dòng) cộng vài header: không BLAS, không Python lúc chạy, không bắt buộc GPU (có tier CUDA tuỳ chọn)."
  - "Theo README: forward GLM-5.2 được kiểm token-exact với oracle transformers; có MLA attention nén KV-cache (nhỏ hơn 57×) và speculative decoding bằng chính MTP head của model."
signalSources:
  - label: "GitHub"
    url: "https://github.com/justvugg/colibri"

useCases:
  - "Thử chạy một model ngôn ngữ 744B ngay trên máy CPU cá nhân để nghiên cứu/học, thay vì phải thuê GPU đám mây."
  - "Nghiên cứu kỹ thuật inference (stream expert từ đĩa, nén KV-cache) trên một codebase C gọn để hiểu cách chạy model MoE khổng lồ ở RAM thấp."
  - "Làm nền để tự thí nghiệm chạy LLM local ở phần cứng hạn chế cho ai chấp nhận đánh đổi tốc độ để chạy được model lớn."

workflowStepReplaced: "Khâu phải có GPU/VRAM lớn hoặc thuê cloud để chạy thử một model ngôn ngữ cực lớn."
timeOrCostSaved: "Về lý thuyết bỏ được chi phí thuê GPU khủng để chạy model 744B; đổi lại cần ~370GB ổ đĩa cho expert và tốc độ chậm hơn nhiều so với GPU."
localProblem: "Đây là công cụ nghiên cứu hạ tầng inference, không nhắm creative/agency/ecom/seo. Nhóm liên quan hiếm hoi ở VN là dev/ML enthusiast muốn nghịch chạy LLM lớn trên máy cá nhân."
localEvidence: "Chủ đề 'chạy LLM local trên máy yếu' được cộng đồng AI Việt quan tâm, nhưng chạy một model 744B thực tế cần ~370GB đĩa và tốc độ thấp — nên giá trị chủ yếu là thử nghiệm/học thuật, không phải để làm việc hằng ngày."

vnMarket:
  insight: "Ở VN, gần như không có tệp practitioner creative/agency/ecom/seo nào cần chạy model 744B tại chỗ. Đây là tín hiệu 'nóng trong giới ML/dev' (một kỳ tích kỹ thuật đáng nể), không phải công cụ nghề. Người làm nội dung cần LLM sẽ dùng API hoặc model local nhỏ, không dùng thứ này."
  seoKeywords: ["chạy LLM local RAM thấp", "chạy GLM trên CPU", "inference model MoE trên máy thường", "chạy model 744B không cần GPU"]
  notes: "Fit với 4 lăng kính gần như bằng 0; lọt queue vì tăng sao rất nhanh (~256 sao/ngày) và kỳ tích kỹ thuật. Độ chắc chắn về mức độ dùng được thực tế: thấp."

usabilityRisk: "Rất kén: phải build C, cần ~370GB dung lượng đĩa cho expert, và tốc độ trên CPU chậm hơn nhiều so với GPU. Repo mới ~10 ngày, còn thử nghiệm, số liệu 'token-exact' là tuyên bố của tác giả. Không liên quan trực tiếp tới công việc của creative/agency/ecom/seo — đây là lý do chính khiến nó khó vào scope RepoRadar."

practitionerGuide:
  outcome: "Build được colibrì và chạy thử một phiên chat với model GLM-5.2 trên máy CPU để tự cảm nhận tốc độ và tính khả thi cho nhu cầu của bạn."
  prerequisites:
    - "Máy có ~25GB RAM trở lên và ~370GB dung lượng đĩa trống cho các expert."
    - "Biết build/chạy chương trình C trên terminal."
    - "Kiên nhẫn: tốc độ trên CPU chậm, chỉ hợp thử nghiệm."
  steps:
    - "Clone repo và build engine C theo hướng dẫn trong README."
    - "Tải các trọng số/expert của GLM-5.2 (dung lượng lớn) về ổ đĩa."
    - "Chạy ./coli chat và thử một câu hỏi để đo thời gian phản hồi."
    - "Đánh giá tốc độ và độ chính xác so với nhu cầu — thường chỉ đủ cho học/nghiên cứu."
  expectedResult: "Model tải xong (README ví dụ ~32s, thường trú ~9.9GB) và trả lời được câu hỏi; tốc độ sinh token chậm hơn rõ so với chạy GPU."
  commonPitfalls:
    - "Thiếu ~370GB đĩa cho expert nên không chạy được đầy đủ."
    - "Kỳ vọng tốc độ như dịch vụ API; thực tế chạy CPU chậm."
    - "Dùng cho việc sản xuất nội dung hằng ngày — sai mục đích, đây là công cụ thử nghiệm/nghiên cứu."

greyHatFlag: "in"

suggestedAngle: "Nếu viết, nhắm cộng đồng dev/ML Việt với góc 'kỳ tích chạy model 744B trên máy thường', kể như tin công nghệ, KHÔNG đóng gói như tool cho creative/ecom/seo."
paidToolReplaced: "Thuê GPU cloud để chạy model lớn ↔ chạy CPU với colibrì (đánh đổi tốc độ)"
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "Repo mới ~10 ngày nên AI chưa nắm chi tiết GLM-5.2/colibrì. Tuy vậy giá trị thực tế cho tệp độc giả chính (creative/agency/ecom/seo) gần như bằng 0 — đây là tín hiệu dev, không phải tool nghề. Cần Luan cân nhắc loại khỏi scope."

scoreBreakdown:
  useCaseFit: 4
  projectHealth: 21
  costAdvantage: 6
  deployment: 5
  documentation: 9
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-07-11
nextReviewDueAt: 2026-10-09

tags: ["llm", "inference", "moe", "c", "local-ai", "open-source"]
publishedAt: 2026-07-11
week: "2026-W28"
draft: true
---

Draft foundation từ daily queue (~256 sao/ngày, repo ~10 ngày). CẢNH BÁO FIT: công cụ hạ tầng inference cho dev/ML, gần như không phục vụ creative/agency/ecom/seo. Đã để `vertical: []`. Kỳ tích kỹ thuật đáng chú ý nhưng đề xuất Luan cân nhắc để tin công nghệ thay vì tool nghề.
