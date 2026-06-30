import { getAuthKv, json, requireUser, safeUser } from '../../_lib/auth.js';
import { listSavedRepoItems, loadSavedRepos } from '../../_lib/member-saves.js';

export async function onRequestGet(context) {
  const user = await requireUser(context);
  if (!user) {
    return json(
      {
        ok: false,
        code: 'auth_required',
        loginUrl: `/login?returnTo=${encodeURIComponent('/account')}`,
      },
      { status: 401 },
    );
  }

  const document = await loadSavedRepos(getAuthKv(context.env), user.id);
  const items = listSavedRepoItems(document);

  return json({
    ok: true,
    member: safeUser(user),
    count: items.length,
    items,
  });
}

export function onRequest() {
  return json(
    {
      ok: false,
      code: 'method_not_allowed',
      message: 'Method not allowed.',
    },
    { status: 405 },
  );
}
