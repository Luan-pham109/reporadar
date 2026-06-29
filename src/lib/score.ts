export const WEIGHTS = {
  useCaseFit: 25,
  projectHealth: 25,
  costAdvantage: 20,
  deployment: 15,
  documentation: 15,
} as const;

export const SCORE_LABELS: Record<keyof typeof WEIGHTS, string> = {
  useCaseFit: 'Use Case Fit',
  projectHealth: 'Project Health',
  costAdvantage: 'Cost Advantage',
  deployment: 'Deployment',
  documentation: 'Docs',
};

export const SCORE_KIND: Record<keyof typeof WEIGHTS, 'judged' | 'auto'> = {
  useCaseFit: 'judged',
  projectHealth: 'auto',
  costAdvantage: 'judged',
  deployment: 'judged',
  documentation: 'judged',
};

type ScoreBreakdown = Partial<Record<keyof typeof WEIGHTS, number | undefined>>;

export interface ScoreResult {
  total: number | null;
  hasScore: boolean;
  breakdown: Array<{
    key: keyof typeof WEIGHTS;
    label: string;
    value: number;
    max: number;
    kind: 'judged' | 'auto';
  }>;
}

export function computeScore(data: { scoreBreakdown?: ScoreBreakdown }): ScoreResult {
  const sb = data?.scoreBreakdown;
  if (!sb) return { total: null, hasScore: false, breakdown: [] };

  const keys = Object.keys(WEIGHTS) as Array<keyof typeof WEIGHTS>;
  const hasAny = keys.some((k) => sb[k] != null);
  if (!hasAny) return { total: null, hasScore: false, breakdown: [] };

  let sum = 0;
  const breakdown = keys.map((key) => {
    const max = WEIGHTS[key];
    const raw = sb[key] ?? 0;
    const value = Math.min(max, Math.max(0, raw));
    sum += value;
    return { key, label: SCORE_LABELS[key], value, max, kind: SCORE_KIND[key] };
  });

  return { total: Math.round(sum), hasScore: true, breakdown };
}
