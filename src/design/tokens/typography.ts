/**
 * LAYER 1 — DESIGN TOKENS: Typography
 *
 * Font families, size scale, line-heights, and font-weight constants.
 * Maps to CSS custom properties in GlobalStyles.ts.
 */

// ─── Font Families ────────────────────────────────────────────────────────────

export const fontTokens = {
  base:      'var(--font-base)',      // Poppins — UI body text
  primary:   'var(--font-primary)',   // Cinzel / Playfair — headings, brand moments
  secondary: 'var(--font-secondary)', // Alias for base in body context
  mono:      "'Courier New', monospace",
} as const;

export type FontFamily = keyof typeof fontTokens;

// ─── Font Weights ─────────────────────────────────────────────────────────────

export const fontWeight = {
  regular:   400,
  medium:    500,
  semibold:  600,
  bold:      700,
  extrabold: 800,
  black:     900,
} as const;

export type FontWeight = keyof typeof fontWeight;
