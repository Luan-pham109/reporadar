---
name: "Phone Farm iOS (prod-FARM-IOS-Core)"
repoUrl: "https://github.com/Git-Agni/prod-FARM-IOS-Core"
oneLiner: "Ứng dụng mã nguồn mở để điều khiển một dàn iPhone thật từ máy Mac: xem/điều khiển máy trực tiếp, lên lịch tác vụ (scheduler lưu trên PostgreSQL) và chạy sẵn workflow tự động cho TikTok. Tự host, chạy cục bộ."
media: []

vertical: ["agency"]

maturity: "rising"
repoStats:
  stars: 819
  forks: 158
  note: "~8 ngày tuổi, ~102.4 sao/ngày"
  starsPerDay: 102.4
  ageDays: 8
  pushedAt: 2026-09-01T06:16:52Z
  archived: false
  openIssues: 0
standoutFeatures:
  - "Điều khiển dàn iPhone thật từ Mac qua WebDriverAgent/Appium: đăng ký thiết bị có hướng dẫn, xem video trực tiếp và điều khiển từ xa (live control)."
  - "Scheduler lưu trên PostgreSQL: job định kỳ, hàng đợi upload, lịch sử thực thi; tác vụ lưu dạng pluginId + taskType + taskVersion + payload JSON nên lịch cũ không tự chạy nhầm contract mới."
  - "Kiến trúc plugin: có sẵn plugin tự động hoá TikTok, cho phép viết thêm plugin (task có versioning, panel theo thiết bị, route HTTP riêng); dashboard/API server đi kèm."
  - "Tự host, chạy cục bộ; auth tuỳ chọn khi bind loopback, muốn expose ra ngoài phải cắm AuthProvider riêng (startup cố tình fail nếu không có)."
signalSources:
  - label: "GitHub"
    url: "https://github.com/Git-Agni/prod-FARM-IOS-Core"
  - label: "Demo/Homepage (gethandler.ai)"
    url: "https://gethandler.ai/ios-farm"

useCases:
  - "Quản lý một dàn nhiều iPhone thật từ một máy Mac trung tâm: đăng ký thiết bị, xem màn hình trực tiếp và điều khiển từ xa từng máy."
  - "Lên lịch và chạy lặp các tác vụ TikTok trên nhiều máy (plugin TikTok có sẵn), theo dõi lịch sử thực thi và hàng đợi upload."
  - "Làm nền tảng tự động hoá thiết bị iOS để tự viết plugin tác vụ riêng (test app, thao tác lặp) thay vì mua dịch vụ phone-farm hosted."

workflowStepReplaced: "Khâu vận hành thủ công một dàn điện thoại (bấm tay từng máy) trong quy trình seeding/nuôi tài khoản/đăng bài hàng loạt; thay bằng điều khiển tập trung + lên lịch tự động."
timeOrCostSaved: "Chưa có số đo độc lập. Về lý thuyết thay được phí thuê dịch vụ phone-farm hosted và công vận hành tay, nhưng bù lại chi phí hạ tầng cao (Mac + nhiều iPhone thật + PostgreSQL + ký WDA). Không đưa ra ước lượng tiết kiệm vì chưa có bằng chứng."
localProblem: "Một bộ phận agency/MMO/dịch vụ ở VN đang chạy 'farm' điện thoại để seeding, nuôi tài khoản và đẩy tương tác TikTok hàng loạt. Việc bấm tay từng máy tốn người và khó lên lịch; họ tìm cách điều khiển tập trung nhiều máy iOS và tự động hoá tác vụ TikTok."
localEvidence: "Đây là quan sát về một thị trường ngách grey-hat có thật ở VN (dịch vụ tăng tương tác, nuôi acc), KHÔNG phải bằng chứng repo này đã được tệp Việt dùng. Repo mới 8 ngày, chưa có tín hiệu HN/Reddit hay cộng đồng VN; số sao/ngày cao nhưng chưa kiểm chứng."

vnMarket:
  insight: "Nhu cầu tự động hoá TikTok và vận hành dàn điện thoại ở VN chủ yếu nằm trong mảng MMO/seeding/tăng tương tác — vốn là vùng xám, dễ vi phạm điều khoản nền tảng và rủi ro khoá tài khoản/pháp lý. Đa số đang dùng dịch vụ hosted hoặc script Android; một tool iOS mã nguồn mở, tự host là điểm mới nhưng ngưỡng kỹ thuật rất cao (cần Mac, iPhone thật, ký WDA)."
  seoKeywords: ["phone farm iOS", "tự động hoá TikTok", "điều khiển nhiều iPhone từ máy tính", "nuôi tài khoản TikTok tự động", "device farm iOS mã nguồn mở"]
  notes: "CẢNH BÁO KỶ LUẬT IN/OUT: đây là công cụ phone-farm + tự động hoá TikTok — vùng grey-hat, dễ dùng cho tăng tương tác giả / vi phạm ToS TikTok. Từ khoá SEO đi kèm tệp MMO/seeding, không phải tệp creative/agency 'sạch'. Độ chắc chắn: thấp. Cần Luan quyết có nằm trong scope RepoRadar không trước khi publish."

usabilityRisk: "Ngưỡng vào rất cao: cần máy Mac + Xcode, một hoặc nhiều iPhone thật, WebDriverAgent đã ký cho thiết bị thật, Appium XCUITest driver, Node 22+ và PostgreSQL. Phải tự chạy nhiều tiến trình dài hạn (appium, wda:service, worker, web) và nên bọc bằng launchd/systemd. Auth chỉ tuỳ chọn khi bind loopback — expose ra ngoài mà không cắm AuthProvider sẽ bị chặn khởi động (đọc kỹ SECURITY.md). Repo mới 8 ngày, chưa có cộng đồng, chưa kiểm chứng độ ổn định. RỦI RO LỚN NHẤT: dùng cho tự động hoá TikTok hàng loạt vi phạm điều khoản nền tảng, có thể bị khoá acc/thiết bị và rủi ro pháp lý."

practitionerGuide:
  outcome: "Hiểu được kiến trúc và yêu cầu để dựng thử một node điều khiển iOS cục bộ; đánh giá xem có nên/đủ điều kiện vận hành hay không (nhiều người sẽ dừng ở bước đánh giá vì ngưỡng kỹ thuật và rủi ro ToS)."
  prerequisites:
    - "Máy Mac có Xcode; ít nhất một iPhone thật để đăng ký thiết bị."
    - "WebDriverAgent đã ký cho thiết bị thật + Appium XCUITest driver."
    - "Node 22+ và PostgreSQL chạy sẵn."
    - "Hiểu rõ điều khoản TikTok và rủi ro pháp lý/khoá tài khoản trước khi dùng plugin tự động hoá."
  steps:
    - "Clone repo, chạy npm install, copy .env.example thành .env và cấu hình."
    - "Cài driver và dựng DB: npm run appium:install-driver, npm run db:up, npm run db:migrate, npm run wda:prepare."
    - "Chạy các tiến trình dài hạn: npm run appium, npm run wda:service, npm run worker, npm run web (nên bọc launchd/systemd)."
    - "Mở dashboard, đăng ký một iPhone thật và thử live control trước khi đụng tới scheduler/plugin."
    - "GIỮ auth ở loopback; nếu cần expose phải cắm PHONE_FARM_AUTH_PLUGIN — đọc SECURITY.md trước."
  expectedResult: "Dashboard nhận diện và điều khiển được thiết bị đã đăng ký, xem video trực tiếp và chạy được một tác vụ mẫu. Nếu chưa ký WDA đúng hoặc DB chưa migrate, thiết bị sẽ không lên."
  commonPitfalls:
    - "WebDriverAgent chưa ký đúng cho thiết bị thật → không điều khiển được máy."
    - "Bind WEB_HOST ra ngoài loopback mà không cắm AuthProvider → startup cố tình fail (đúng thiết kế an toàn)."
    - "Đánh giá thấp rủi ro ToS: dùng plugin TikTok để tăng tương tác hàng loạt có thể bị khoá tài khoản/thiết bị."

greyHatFlag: "out"

suggestedAngle: "KHÔNG khuyến nghị làm góc khuếch đại 'tự động hoá TikTok'. Nếu Luan vẫn muốn đưa lên, chỉ nên ở góc kỹ thuật trung lập 'điều khiển/kiểm thử dàn thiết bị iOS mã nguồn mở' kèm cảnh báo mạnh về ToS và rủi ro pháp lý — không cổ vũ tăng tương tác giả."
paidToolReplaced: "Dịch vụ phone-farm / device-farm hosted (vd gethandler.ai) và các dịch vụ tăng tương tác/nuôi acc trả phí"
creatorWhitespace: false

aiCheck:
  canAIGetThis: false
  note: "AI mô tả được repo, nhưng phán đoán quan trọng — đây là công cụ grey-hat có nên vào scope RepoRadar không, khung kể an toàn ra sao, rủi ro ToS/pháp lý cho tệp VN — là lớp tổng hợp cần Luan quyết trước khi publish."

scoreBreakdown:
  useCaseFit: 6
  projectHealth: 19
  costAdvantage: 8
  deployment: 4
  documentation: 12
scoringVersion: "v1"
evidenceLevel: "C"
confidence: "low"
lastReviewedAt: 2026-09-04
nextReviewDueAt: 2026-12-03

tags: ["ios-automation", "device-farm", "tiktok", "appium", "self-hosted", "grey-hat"]
publishedAt: 2026-09-04
week: "2026-W36"
draft: true
---

Draft foundation từ daily queue (GitHub search, 819 sao / ~102.4 sao/ngày, mới 8 ngày). 

CỜ KỶ LUẬT — greyHatFlag: "out". Đây là công cụ **phone farm iOS + tự động hoá TikTok**, nằm trong vùng xám: dễ bị dùng để tăng tương tác giả / nuôi acc hàng loạt, vi phạm điều khoản TikTok và tiềm ẩn rủi ro pháp lý. Docs khá tốt (getting-started, architecture, plugins, SECURITY.md) và có thiết kế an toàn (fail khi expose ngoài loopback không có auth), nhưng bản chất use-case là grey-hat.

KHUYẾN NGHỊ CHO LUAN: nhiều khả năng **không nên publish**, hoặc nếu publish thì chỉ với khung kể kỹ thuật trung lập ("điều khiển/kiểm thử dàn thiết bị iOS") + cảnh báo ToS mạnh, tuyệt đối không cổ vũ tăng tương tác. Vertical tạm để `["agency"]` vì tệp gần nhất là agency/MMO, nhưng fit với định vị "đồ sạch" của RepoRadar yếu. Confidence thấp. Cần Luan quyết scope trước khi đụng tới `draft`.
