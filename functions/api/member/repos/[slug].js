import { memberFeed } from '../../../_generated/member-feed.js';
import { fail, json, requireUser, safeUser } from '../../../_lib/auth.js';

export async function onRequestGet(context) {
  try {
    const user = await requireUser(context);
    if (!user) {
      const slug = context.params?.slug || '';
      return json(
        {
          ok: false,
          code: 'auth_required',
          loginUrl: `/login?returnTo=${encodeURIComponent(`/repos/${slug}/`)}`,
        },
        { status: 401 },
      );
    }

    const slug = String(context.params?.slug || '');
    const item = memberFeed.items.find((entry) => entry.slug === slug);
    if (!item) return fail(404, 'Không tìm thấy member guide cho repo này.', 'repo_not_found');

    return json({
      ok: true,
      member: safeUser(user),
      repo: {
        slug: item.slug,
        name: item.name,
        practitionerGuide: item.practitionerGuide,
        evidenceLevel: item.evidenceLevel,
        confidence: item.confidence,
        lastReviewedAt: item.lastReviewedAt,
      },
    });
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Không đọc được member guide.', 'member_repo_failed');
  }
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}
