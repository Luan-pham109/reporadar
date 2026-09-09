---
name: "H3 Motion Context"
repoUrl: "https://github.com/NikoDemon80/ComfyUI-H3-Motion-Context"
oneLiner: "Bộ node ComfyUI giúp nối nhiều clip video MiniMax H3 lại với nhau sao cho chuyển động và âm thanh chạy tiếp liền mạch qua điểm ghép, thay vì bị khựng hay đổi nhịp ở mỗi mối nối."
media: []

vertical: ["creative"]

maturity: "rising"
repoStats:
  stars: 594
  forks: 64
  note: "~10 ngày tuổi, ~59.4 sao/ngày"
  starsPerDay: 59.4
  ageDays: 10
  pushedAt: "2026-08-15T21:17:20Z"
  archived: false
  openIssues: 1
standoutFeatures:
  - "Chuỗi clip MiniMax H3 để chuyển động và tiếng tiếp diễn qua điểm ghép, không phải 'take mới nghe na ná'."
  - "Cắt phần đuôi clip trước thẳng từ latent (không decode/resize/re-encode), nên hạn chế lệch màu và mờ dần khi nối chuỗi dài."
  - "Cửa sổ âm thanh được ghim kết thúc đúng tại điểm nối và kéo ngược lại, giúp model tiếp nối nhạc/tiếng thay vì bắt đầu bản mới."
  - "Node tự kiểm tra giả định với code ComfyUI đang chạy mỗi lần khởi động: nếu bản cập nhật làm sai, node từ chối chạy và báo lý do thay vì render hỏng âm thầm."
  - "Đi kèm bộ script test (seam_probe, level_step, freeze_detect...) chạy được không cần GPU để tự kiểm chất lượng mối nối."
signalSources:
  - label: "GitHub"
    url: "https://github.com/NikoDemon80/ComfyUI-H3-Motion-Context"

useCases:
  - "Nối nhiều clip MiniMax H3 thành một video dài mà chuyển động và âm thanh chạy tiếp qua điểm ghép, không bị giật hay đổi nhịp."
  - "Dựng cảnh dài hơn giới hạn một lần gen (kể chuyện, MV, quảng cáo) bằng cách chuỗi từng đoạn liên tục ngay trong ComfyUI."
  - "Giữ nhạc/tiếng nền liền mạch giữa các đoạn thay vì mỗi clip lại tạo một bản nghe giống nhưng khác bản gốc."
  - "Kiểm tra chất lượng mối nối bằng các script test đi kèm trước khi ghép bản cuối, để phát hiện seam hoặc lệch tiếng sớm."

workflowStepReplaced: "Khâu ghép nối clip AI thủ công: dựng từng đoạn rồi cắt ghép trong editor và chấp nhận seam ở mối nối — thay bằng chuỗi clip liên tục ngay trong ComfyUI."
timeOrCostSaved: "Giảm thời gian sửa seam và đồng bộ lại âm thanh giữa các đoạn khi làm video AI dài; con số cụ thể tùy độ dài chuỗi, độ phân giải và cấu hình máy."
localProblem: "Ekip làm video AI ở VN muốn ra clip dài hơn vài giây (giới hạn một lần gen của H3) nhưng khi ghép nhiều đoạn thì chuyển động khựng lại và nhạc/tiếng bị 'nhảy' ở mỗi mối nối, phải ngồi sửa tay trong editor cho đỡ lộ."
localEvidence: "Cộng đồng ComfyUI và AI video Việt đang thử nhiều model video (Wan, Kling, MiniMax H3...) và thường xuyên vướng bài toán nối clip cho đủ độ dài. Riêng nội dung tiếng Việt cho H3 Motion Context gần như chưa có vì repo mới ra khoảng 10 ngày; độ phủ này cần kiểm thêm trước khi publish."

vnMarket:
  insight: "Dân làm AI video ở VN phần lớn dừng ở clip ngắn vì nối clip cho mượt là việc khó, đặc biệt phần âm thanh. Nhóm dùng ComfyUI + MiniMax H3 là ngách nhỏ nhưng đang lớn theo trào lưu video model mở. Lợi thế nội dung Việt nằm ở hướng dẫn thực chiến — cách nối dây node, chọn context_length/audio_context_length, dùng đường latent và tránh các tối ưu làm hỏng tiếng — chứ không phải dịch lại README."
  seoKeywords: ["ComfyUI nối clip video", "làm video AI dài", "MiniMax H3 ComfyUI", "chuỗi clip AI liền mạch", "video AI không bị giật khi ghép", "ComfyUI custom node video"]
  notes: "Suy luận từ README và topic GitHub (comfyui, minimax, video-generation). Chưa kiểm tay độ bão hòa nội dung tiếng Việt và mức phổ biến thực tế của MiniMax H3 trong cộng đồng VN — cần rà thêm trước khi publish."

usabilityRisk: "Rất kén người dùng: cần đã chạy được ComfyUI + model MiniMax H3 trên GPU, chỉ hỗ trợ ComfyUI 0.32/0.33, README hoàn toàn tiếng Anh và khá kỹ thuật. Tác giả nói thẳng là chất lượng giảm dần theo chuỗi (nhất là âm thanh, top end mất trước), mới test trên một máy Windows với một độ phân giải và một sampler. Ngoài ra license cộng đồng của H3 được cho là hiện chưa phủ EU/UK/Hàn Quốc/Mỹ — phải tự kiểm trước khi dùng cho mục đích thương mại."

practitionerGuide:
  outcome: "Chạy xong guide này bạn nối được ít nhất hai clip MiniMax H3 thành một đoạn liền mạch trong ComfyUI, đủ để đánh giá mối nối có bị lộ về hình và tiếng không."
  prerequisites:
    - "ComfyUI phiên bản 0.32 hoặc 0.33 đã chạy được, kèm workflow MiniMax H3 (image/reference/text-to-video) hoạt động."
    - "GPU đủ chạy H3 và ít nhất một clip gốc để làm điểm bắt đầu chuỗi."
    - "Tắt các bộ tối ưu bỏ bước như ComfyUI-Spectrum-MiniMax-H3 cho đồ thị này (tác giả khuyến nghị để off)."
  steps:
    - "Copy thư mục node vào ComfyUI/custom_nodes/ rồi khởi động lại; patch chỉ được cài khi bạn thực sự chạy một node Motion Context lần đầu."
    - "Nối node H3 Motion Context sau node MiniMax H3, đưa latent của clip trước vào qua cặp node Save Latent / Load Latent (clip_index đúng: Load clip đang tiếp nối FROM, Save clip đang tạo)."
    - "Nối node Trim và wire trim_frames sang để cắt bỏ phần đầu bị ghim trước khi ghép, cả hình lẫn tiếng, giữ match_tail bật."
    - "Đặt context_length 22 và audio_context_length 24 làm điểm khởi đầu; render và nghe kỹ mối nối bằng script tests/seam_probe.py."
    - "Muốn nối tiếp thì tăng cả hai chỉ số clip_index và lặp lại; nếu chưa ưng cứ queue lại, không đổi gì, lần render sau sẽ ghi đè clip vừa tạo."
  expectedResult: "Hai đoạn ghép lại xem không thấy đường nối rõ, nhạc/tiếng chạy tiếp chứ không đổi bản; seam_probe báo mức tương quan ở mối nối cao (README nói khoảng 0.95+ khi làm đúng)."
  commonPitfalls:
    - "Nối chuỗi quá dài khiến âm thanh dần bị mờ, đục do lỗi cộng dồn như photocopy chồng photocopy — nên restart chuỗi ở đoạn chuyển nhạc tự nhiên."
    - "Bật turbo LoRA hoặc Spectrum làm hỏng tiếng và ghim sai các frame cố định; tắt trước khi đổ lỗi cho phần nối."
    - "Viết prompt cho clip sau mô tả bố cục khác với frame bị ghim — model coi đó là 'cộng thêm' chứ không thay thế, nên ra hình gộp cả cũ lẫn mới."
    - "Quên rằng H3 xuất audio 32kHz (không phải 48kHz): script remux/concat hardcode 48000 sẽ làm mất tiếng đoạn cuối mà mọi kiểm tra thời lượng vẫn qua."

greyHatFlag: "in"

suggestedAngle: "Góc nên viết: 'Làm video AI dài liền mạch trong ComfyUI bằng cách chuỗi clip MiniMax H3 với H3 Motion Context' — tập trung vào setting 22/24, đường latent và các bẫy hay gặp, thay vì chỉ bài cài đặt."
paidToolReplaced: "Không thay tool trả phí trực tiếp — là node bổ trợ cho ComfyUI + MiniMax H3 (đều miễn phí/local); gần nhất là thay khâu nối clip thủ công trong editor."
creatorWhitespace: true

aiCheck:
  canAIGetThis: false
  note: "AI có thể mô tả node này chain clip H3, nhưng cách set cho creator VN, các bẫy thực chiến (Spectrum, audio 32kHz, license H3) và đánh giá độ chín của một repo mới 10 ngày là phần cần biên tập theo ngữ cảnh."

tags: ["ai-video", "creative", "comfyui", "comfyui-nodes", "minimax", "video-generation"]
scoreBreakdown:
  useCaseFit: 17
  projectHealth: 19
  costAdvantage: 6
  deployment: 8
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-08-17
nextReviewDueAt: 2026-11-15
publishedAt: 2026-08-17
week: "2026-W34"
draft: true
---

Record nháp sinh từ daily pipeline ngày 2026-08-17. Repo rất mới (10 ngày, chưa có bàn luận ở HN/Reddit) và cực kỳ ngách (custom node ComfyUI cho MiniMax H3). Trước khi publish cần: (1) kiểm tay mức phổ biến thực tế của MiniMax H3 và nhu cầu nối clip trong cộng đồng ComfyUI/AI video Việt; (2) xác nhận lại tình trạng license H3 với vùng lãnh thổ; (3) cân nhắc bổ sung media demo (README hiện không có ảnh/video hotlink được).
