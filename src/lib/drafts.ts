export const shouldShowDrafts =
  import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_DRAFTS === 'true';

export function includeDraft(data: { draft?: boolean }): boolean {
  return shouldShowDrafts || !data.draft;
}
