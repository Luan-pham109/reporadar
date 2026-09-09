/**
 * Thao tác cờ `draft:` trong frontmatter — thuần chuỗi, không đụng fs.
 *
 * Tách riêng khỏi repo-frontmatter.mjs vì Pages Function cũng dùng hàm này,
 * mà module kia import node:fs nên không chạy được trên Workers.
 */
export function updateDraftFrontmatter(source, draft) {
  const nextDraft = `draft: ${draft ? 'true' : 'false'}`;

  if (/^draft:\s*(true|false)\s*$/m.test(source)) {
    return source.replace(/^draft:\s*(true|false)\s*$/m, nextDraft);
  }

  return source.replace(/^(---\r?\n)/, `$1${nextDraft}\n`);
}

export function readDraftFlag(source) {
  return /^draft:\s*true\s*$/m.test(source);
}
