import { memberFeed } from './_generated/member-feed.js';
import { fail, json, requireUser, safeUser } from './_lib/auth.js';

export async function onRequestGet(context) {
  try {
    const user = await requireUser(context);
    if (!user) {
      return json(
        {
          title: 'RepoRadar VN',
          version: memberFeed.version,
          access: 'auth_required',
          loginUrl: `/login?returnTo=${encodeURIComponent('/feed.json')}`,
          count: 0,
          items: [],
          message: 'Practitioner guide và member insight đầy đủ chỉ dành cho thành viên đã đăng nhập.',
        },
        { status: 401 },
      );
    }

    return json({
      ...memberFeed,
      access: 'member',
      member: safeUser(user),
    });
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Không đọc được member feed.', 'feed_failed');
  }
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}
