import type { CollectionEntry } from 'astro:content';

const TOOL_BLOCKLIST = new Set(['ChatGPT', 'Claude', 'Gemini', 'Copilot']);

export interface AlternativeGroup {
  slug: string;
  name: string;
  entries: CollectionEntry<'repos'>[];
}

export function slugifyTool(name: string): string {
  return name
    .normalize('NFD')
    .replace(/\p{Diacritic}+/gu, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function extractToolLabel(raw: string | null | undefined): string | null {
  if (!raw) return null;

  const normalized = raw.trim();
  if (!normalized || normalized.startsWith('Tool trả phí')) return null;

  const stripped = normalized
    .replace(
      /^Một phần\s+(việc của|thao tác (trong|ở|giữa)|nhu cầu (dùng|R&D thay cho|mua)|thư viện|thời gian research (vendor |trên )?|công sức (tự lắp|storyboard)|stack tự ghép giữa|khâu (moodboard|inspect|audit)|checklist|credit (ở|thử nghiệm trên))\s*/i,
      '',
    )
    .replace(/^Một phần\s+/i, '')
    .trim();

  const first = stripped.split(/\s*[\/,]\s*|\s+(bản |hoặc |và |—\s*)|\s+\(/).at(0)?.trim() ?? '';
  const clean = first
    .replace(/\s+(trả phí|thuê ngoài|cloud|nội bộ|workflow|reporting).*$/i, '')
    .trim();

  if (!clean || clean.length < 3) return null;
  if (/^[a-z]/.test(clean) && !/\d/.test(clean)) return null;
  if (TOOL_BLOCKLIST.has(clean)) return null;

  return clean;
}

export function ownerAvatar(repoUrl: string | null | undefined): string | null {
  if (!repoUrl) return null;

  try {
    const url = new URL(repoUrl);
    if (url.hostname !== 'github.com') return null;

    const [owner] = url.pathname.split('/').filter(Boolean);
    return owner ? `https://github.com/${owner}.png?size=80` : null;
  } catch {
    return null;
  }
}

export function relativeTime(
  input: Date | string | null | undefined,
  now: Date = new Date(),
): string | null {
  if (!input) return null;

  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return null;

  const diffMs = Math.max(0, now.getTime() - date.getTime());
  const hourMs = 60 * 60 * 1000;
  const dayMs = 24 * hourMs;
  const weekMs = 7 * dayMs;
  const monthMs = 30 * dayMs;
  const yearMs = 365 * dayMs;

  if (diffMs < hourMs) {
    const minutes = Math.max(1, Math.floor(diffMs / (60 * 1000)));
    return minutes <= 1 ? 'vừa xong' : `${minutes} phút trước`;
  }
  if (diffMs < dayMs) return `${Math.floor(diffMs / hourMs)} giờ trước`;
  if (diffMs < weekMs) return `${Math.floor(diffMs / dayMs)} ngày trước`;
  if (diffMs < monthMs) return `${Math.floor(diffMs / weekMs)} tuần trước`;
  if (diffMs < yearMs) return `${Math.floor(diffMs / monthMs)} tháng trước`;
  return `${Math.floor(diffMs / yearMs)} năm trước`;
}

export function groupByAlternative(
  entries: CollectionEntry<'repos'>[],
): Map<string, AlternativeGroup> {
  const groups = new Map<string, AlternativeGroup>();

  for (const entry of entries) {
    const fallback = extractToolLabel(entry.data.paidToolReplaced);
    const alternatives =
      entry.data.alternativeTo.length > 0
        ? entry.data.alternativeTo
        : fallback
          ? [{ name: fallback, slug: slugifyTool(fallback) }]
          : [];

    for (const alternative of alternatives) {
      const name = alternative.name?.trim();
      const slug = alternative.slug?.trim() || (name ? slugifyTool(name) : '');
      if (!name || !slug) continue;

      const existing = groups.get(slug);
      if (existing) {
        if (!existing.entries.some((candidate) => candidate.id === entry.id)) {
          existing.entries.push(entry);
        }
        continue;
      }

      groups.set(slug, {
        slug,
        name,
        entries: [entry],
      });
    }
  }

  return groups;
}
