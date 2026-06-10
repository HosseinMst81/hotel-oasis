/**
 * LAYER 1 — DESIGN TOKENS: Typography
 *
 * Font families, size scale, line-heights, and font-weight constants.
 * Maps to CSS custom properties in GlobalStyles.ts.
 */

// ─── Font Families ────────────────────────────────────────────────────────────

export const fontTokens = {
  base: "var(--font-base)", // Poppins — UI body text
  primary: "var(--font-primary)", // Cinzel / Playfair — headings, brand moments
  secondary: "var(--font-secondary)", // Alias for base in body context
  mono: "'Courier New', monospace",
} as const;

export type FontFamily = keyof typeof fontTokens;

// ─── Font Weights ─────────────────────────────────────────────────────────────

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export type FontWeight = keyof typeof fontWeight;

export const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
} as const;

export type FontSize = keyof typeof fontSizes;
