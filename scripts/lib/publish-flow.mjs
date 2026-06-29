export function updateDraftFrontmatter(source, draft) {
  const nextDraft = `draft: ${draft ? 'true' : 'false'}`;

  if (/^draft:\s*(true|false)\s*$/m.test(source)) {
    return source.replace(/^draft:\s*(true|false)\s*$/m, nextDraft);
  }

  return source.replace(/^(---\r?\n)/, `$1${nextDraft}\n`);
}

export function buildReviewDeployArgs({ slug, draft }) {
  const source = draft ? `review:to-draft:${slug}` : `review:publish:${slug}`;
  return ['run', 'publish:prod', '--', '--yes', `--source=${source}`];
}

export function parseDeployArgs(argv) {
  let assumeYes = false;
  let source = 'manual';

  for (const arg of argv) {
    if (arg === '--yes') {
      assumeYes = true;
      continue;
    }

    if (arg.startsWith('--source=')) {
      const value = arg.slice('--source='.length).trim();
      if (value) source = value;
    }
  }

  return { assumeYes, source };
}
