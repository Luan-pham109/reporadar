import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * "Bản tình báo tool" — NGUỒN SỰ THẬT của schema (structured-first, PRD §5).
 *
 * Website chỉ là một cách render schema này. Phase 2 (API/feed tự động) chỉ việc
 * expose lại schema — không viết lại. Mỗi field gắn nhãn VÙNG GIÁ TRỊ:
 *   - CỐT LÕI   = vùng khó sao chép (timing đi-trước + curation hợp ngành + insight ngành VN).
 *   - bán-cốt-lõi = hữu ích (gồm phần cho nhánh creator khuếch đại).
 *   - commodity = AI/Trending làm free → cho kèm cho đủ, KHÔNG tính là giá trị.
 *   - Phase 2   = để sẵn field, chưa dùng ở MVP.
 *
 * PRD v0.2: khách chính = practitioner (creative/agency/ecom/seo); creator = kênh khuếch đại.
 */

/** 4 ngách nhắm tới (PRD §2bis — 4 lăng kính). */
export const VERTICALS = ['creative', 'agency', 'ecom', 'seo'] as const;

const repos = defineCollection({
  // Content Layer (Astro 5). Pattern `[!_]*` bỏ qua _template.md.
  loader: glob({ pattern: '**/[!_]*.{md,mdx}', base: './src/content/repos' }),
  schema: z.object({
    // ---- Commodity (cho kèm) ----
    name: z.string(),
    repoUrl: z.string().url(),
    /** Tool giải bài toán gì — 1-2 câu, tiếng người, non-tech. */
    oneLiner: z.string(),
    /** Ảnh/video demo kéo từ README repo (hotlink GitHub). Phần tử image đầu = hero/thumbnail. */
    media: z
      .array(
        z.object({
          type: z.enum(['image', 'video']),
          url: z.string().url(),
          caption: z.string().optional(),
        }),
      )
      .default([]),

    // ---- CỐT LÕI: phân loại ngành (IA + 4 lăng kính, PRD §2bis) ----
    /** Ngách nhắm tới — cho phép nhiều. Dùng cho điều hướng theo ngành. */
    vertical: z.array(z.enum(VERTICALS)).default([]),

    // ---- HUNT: độ chín + dữ liệu khách quan (input Luan vòng 3) ----
    /** Độ chín: pre-viral (đi trước) / rising (đang lên) / established (đã kiểm chứng). */
    maturity: z.enum(['pre-viral', 'rising', 'established']).default('rising'),
    /** Số liệu khách quan từ Hunt (GitHub). */
    repoStats: z
      .object({
        stars: z.number().optional(),
        forks: z.number().optional(),
        note: z.string().default(''),
        starsPerDay: z.number().optional(),
        ageDays: z.number().int().optional(),
        pushedAt: z.coerce.date().optional(),
        archived: z.boolean().optional(),
        openIssues: z.number().int().optional(),
      })
      .optional(),
    /** Đặc điểm nổi bật khách quan (Hunt) — vì sao tool này đáng để ý. */
    standoutFeatures: z.array(z.string()).default([]),
    /** Link nguồn tín hiệu để người đọc tự đánh giá (giảm R3: false positive). */
    signalSources: z
      .array(
        z.object({
          label: z.string(), // vd "Show HN", "ProductHunt", "r/SaaS"
          url: z.string().url(),
        }),
      )
      .default([]),

    // ---- CỐT LÕI: Curation hợp ngành + bằng chứng (4 lăng kính, PRD §2 lớp 2) ----
    /** Usecase-first: 3-5 việc CỤ THỂ làm được, giọng người dùng ("Dùng để: dựng 50 ảnh SP/ngày..."). */
    useCases: z.array(z.string()).default([]),
    /** Cắt/thay khâu nào trong quy trình ngành (vd "khâu chụp ảnh sản phẩm"). */
    workflowStepReplaced: z.string().default(''),
    /** Tiết kiệm bao nhiêu giờ/chi phí — gắn con số/ước lượng có cơ sở. */
    timeOrCostSaved: z.string().default(''),
    /** Nỗi đau CỤ THỂ của shop/ekip/team VN nào (KHÔNG nói chung "hợp doanh nghiệp VN"). */
    localProblem: z.string(),
    /** Ví dụ thật / bằng chứng cho bài toán local. */
    localEvidence: z.string(),

    // ---- CỐT LÕI: Insight thực tế ngành tại VN (lớp phủ ngôn ngữ + SEO, PRD §2 lớp 3) ----
    vnMarket: z.object({
      /** Ngành VN đang THỰC SỰ làm gì quanh bài toán này (hành vi, công cụ/giá hiện tại). */
      insight: z.string(),
      /** Từ khoá tiếng Việt target audience search → lợi thế tool-SEO (KR#6). */
      seoKeywords: z.array(z.string()).default([]),
      /** Ghi chú: đã quan sát ở đâu, độ chắc chắn. */
      notes: z.string().default(''),
    }),

    // ---- CỐT LÕI: cảnh báo cạm bẫy ----
    /** Hỗ trợ Windows? cần GPU? khó cài/dùng? chưa có cộng đồng VN? — nói thẳng (R3). */
    usabilityRisk: z.string().default(''),

    // ---- MEMBER VALUE: hướng dẫn áp dụng cho practitioner ----
    /**
     * Hướng dẫn từng bước để người làm nghề thử tool và có kết quả đầu tiên.
     * Public page chỉ teaser; khi có auth/runtime, đây là lớp member chính.
     */
    practitionerGuide: z
      .object({
        /** Sau guide này người dùng tạo/kiểm được kết quả gì. */
        outcome: z.string().default(''),
        /** File, tài khoản, API key, dữ liệu, quyền truy cập... cần chuẩn bị trước. */
        prerequisites: z.array(z.string()).default([]),
        /** Các bước thao tác theo thứ tự, viết cho người dùng thực hành. */
        steps: z.array(z.string()).default([]),
        /** Dấu hiệu cho biết chạy đúng / output đạt mức chấp nhận được. */
        expectedResult: z.string().default(''),
        /** Lỗi, bẫy, điều kiện dễ làm người dùng mất thời gian khi thử. */
        commonPitfalls: z.array(z.string()).default([]),
      })
      .default({}),

    // ---- CỐT LÕI: kỷ luật IN/OUT (PRD §2bis) ----
    /** in = đồ sạch; borderline = tuỳ khung kể; out = grey-hat, không đưa lên (hoặc cảnh báo mạnh). */
    greyHatFlag: z.enum(['in', 'borderline', 'out']).default('in'),

    // ---- Bán-cốt-lõi ----
    /** Góc cho creator KHUẾCH ĐẠI (nhánh hybrid). */
    suggestedAngle: z.string().optional(),
    /** Thay thế tool trả phí nào (vd "ComfyUI ↔ Midjourney"). */
    paidToolReplaced: z.string().optional(),
    /** Nhánh khuếch đại: creator còn đất viết về tool này không (logic "bão hoà" cũ). */
    alternativeTo: z
      .array(
        z.object({
          name: z.string(),
          slug: z.string(),
        }),
      )
      .default([]),
    creatorWhitespace: z.boolean().default(true),

    // ---- Kiểm chứng "hơn-AI" (KR#5, PRD §9) ----
    aiCheck: z
      .object({
        /** Practitioner có tự lấy thông tin này từ Trending/hỏi AI được không? true = cảnh báo trượt commodity. */
        canAIGetThis: z.boolean().default(false),
        note: z.string().default(''),
      })
      .default({ canAIGetThis: false, note: '' }),

    // ---- Signal Score v1 (Kịch bản A) ----
    /** Điểm thành phần — nguồn sự thật; tổng DERIVED qua computeScore(). */
    scoreBreakdown: z
      .object({
        useCaseFit: z.number().int().min(0).max(25).optional(),
        projectHealth: z.number().int().min(0).max(25).optional(),
        costAdvantage: z.number().int().min(0).max(20).optional(),
        deployment: z.number().int().min(0).max(15).optional(),
        documentation: z.number().int().min(0).max(15).optional(),
      })
      .optional(),
    /** Phiên bản rubric đã dùng để chấm, vd "v1". */
    scoringVersion: z.string().optional(),
    /** Mức bằng chứng: A=lab-tested, B=public-signal-reviewed, C=discovery, D=unverified-claim. */
    evidenceLevel: z.enum(['A', 'B', 'C', 'D']).optional(),
    /** Độ tin cậy tổng thể của đánh giá. */
    confidence: z.enum(['high', 'medium', 'low']).optional(),
    /** Ngày review gần nhất. */
    lastReviewedAt: z.coerce.date().optional(),
    /** Ngày review tiếp theo dự kiến. */
    nextReviewDueAt: z.coerce.date().optional(),

    // ---- Phase 2 (để sẵn, chưa dùng) ----
    /** Trust score / sao thật-giả (0-100). Hoãn tới Phase 2. */
    trustScore: z.number().min(0).max(100).optional(),

    // ---- Metadata ----
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    /** ISO week, vd "2026-W26" — gom newsletter theo tuần. */
    week: z.string().regex(/^\d{4}-W\d{2}$/, 'Định dạng tuần phải là YYYY-Www, vd 2026-W26'),
    lang: z.literal('vi').default('vi'),
    /** Bản nháp do skill sinh ra, Luan chưa duyệt → ẩn khỏi feed production. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { repos };
