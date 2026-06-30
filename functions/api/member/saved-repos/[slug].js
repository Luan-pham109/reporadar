import { fail, getAuthKv, json, readJson, requireUser, safeUser } from '../../../_lib/auth.js';
import {
  applySavedRepoMutation,
  buildSavedRepoResponse,
  getSavedRepo,
  isKnownRepoSlug,
  isValidSavedRepoStatus,
  loadSavedRepos,
  removeSavedRepo,
  storeSavedRepos,
} from '../../../_lib/member-saves.js';

export async function onRequestGet(context) {
  return handleSavedRepoRequest(context, async ({ kv, user, slug }) => {
    const document = await loadSavedRepos(kv, user.id);
    return json({
      ok: true,
      member: safeUser(user),
      slug,
      ...buildSavedRepoResponse(getSavedRepo(slug, document)),
    });
  });
}

export async function onRequestPut(context) {
  return handleSavedRepoRequest(context, async ({ context, kv, user, slug }) => {
    const body = await readJson(context.request);
    if (!isKnownRepoSlug(slug)) {
      return fail(404, 'Khong tim thay repo nay trong member feed.', 'saved_repo_unknown_slug');
    }
    if (body.status !== undefined && !isValidSavedRepoStatus(body.status)) {
      return fail(400, 'Saved repo status is invalid.', 'invalid_saved_repo_status');
    }

    const document = await loadSavedRepos(kv, user.id);
    const result = applySavedRepoMutation(document, {
      slug,
      status: body.status,
      note: body.note,
    });
    await storeSavedRepos(kv, user.id, result.document);

    return json({
      ok: true,
      member: safeUser(user),
      slug,
      ...buildSavedRepoResponse(getSavedRepo(slug, result.document)),
    });
  });
}

export async function onRequestPatch(context) {
  return handleSavedRepoRequest(context, async ({ context, kv, user, slug }) => {
    const body = await readJson(context.request);
    if (body.status === undefined && body.note === undefined) {
      return fail(400, 'Provide a status or note to update.', 'saved_repo_patch_empty');
    }
    if (body.status !== undefined && !isValidSavedRepoStatus(body.status)) {
      return fail(400, 'Saved repo status is invalid.', 'invalid_saved_repo_status');
    }

    const document = await loadSavedRepos(kv, user.id);
    if (!getSavedRepo(slug, document) && !isKnownRepoSlug(slug)) {
      return fail(404, 'Khong tim thay repo nay trong member feed.', 'saved_repo_unknown_slug');
    }
    const result = applySavedRepoMutation(document, {
      slug,
      status: body.status,
      note: body.note,
    });
    await storeSavedRepos(kv, user.id, result.document);

    return json({
      ok: true,
      member: safeUser(user),
      slug,
      ...buildSavedRepoResponse(getSavedRepo(slug, result.document)),
    });
  });
}

export async function onRequestDelete(context) {
  return handleSavedRepoRequest(context, async ({ kv, user, slug }) => {
    const document = await loadSavedRepos(kv, user.id);
    const result = removeSavedRepo(document, slug);
    if (result.removed) await storeSavedRepos(kv, user.id, result.document);

    return json({
      ok: true,
      member: safeUser(user),
      slug,
      removed: result.removed,
      ...buildSavedRepoResponse(getSavedRepo(slug, result.document)),
    });
  });
}

export function onRequest() {
  return fail(405, 'Method not allowed.', 'method_not_allowed');
}

async function handleSavedRepoRequest(context, handler) {
  try {
    const user = await requireUser(context);
    const slug = String(context.params?.slug || '').trim();
    if (!user) {
      return json(
        {
          ok: false,
          code: 'auth_required',
          loginUrl: `/login?returnTo=${encodeURIComponent(`/repos/${slug}/`)}`,
        },
        { status: 401 },
      );
    }
    if (!slug) return fail(400, 'Missing repo slug.', 'saved_repo_slug_missing');

    return await handler({
      context,
      kv: getAuthKv(context.env),
      user,
      slug,
    });
  } catch (error) {
    return fail(500, error instanceof Error ? error.message : 'Khong xu ly duoc saved repo.', 'saved_repo_failed');
  }
}
