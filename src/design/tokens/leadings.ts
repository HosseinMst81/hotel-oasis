// ─── Line Heights ─────────────────────────────────────────────────────────────

export const leadingTokens = {
  none:    'var(--leading-none)',    // 1
  tight:   'var(--leading-tight)',   // 1.25
  snug:    'var(--leading-snug)',    // 1.375
  normal:  'var(--leading-normal)',  // 1.5
  relaxed: 'var(--leading-relaxed)',// 1.625
  loose:   'var(--leading-loose)',  // 2
} as const;

export type Leading = keyof typeof leadingTokens;