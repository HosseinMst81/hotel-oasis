/**
 * LAYER 1 — DESIGN TOKENS: Spacing
 *
 * Single source of truth for all spacing values.
 * Maps to CSS custom properties (--space-*) in GlobalStyles.ts.
 *
 * Base unit: 0.4rem = 4px (at html font-size 62.5%)
 */

export const spacingTokens = {
  1:  'var(--space-1)',  //  4px
  2:  'var(--space-2)',  //  8px
  3:  'var(--space-3)',  // 12px
  4:  'var(--space-4)',  // 16px
  5:  'var(--space-5)',  // 20px
  6:  'var(--space-6)',  // 24px
  8:  'var(--space-8)',  // 32px
  10: 'var(--space-10)', // 40px
  12: 'var(--space-12)', // 48px
} as const;

export type SpacingScale = keyof typeof spacingTokens;

// Raw pixel values — for use in non-CSS contexts (e.g. canvas, SVG, animation libraries)
export const spacingRaw = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  8:  32,
  10: 40,
  12: 48,
} as const satisfies Record<SpacingScale, number>;
