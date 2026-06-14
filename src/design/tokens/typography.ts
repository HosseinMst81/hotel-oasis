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
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export type FontWeight = keyof typeof fontWeight;

export const fontSizes = {
  xs: "1rem", // 12px
  sm: "1.4rem", // 14px
  md: "1.6rem", // 16px
  lg: "1.8rem", // 18px
  xl: "2rem", // 20px
  "2xl": "2.4rem", // 24px
  "3xl": "3rem", // 30px
  "4xl": "4rem",
  "5xl": "5rem",
} as const;
export type FontSize = keyof typeof fontSizes;

// ─── Line Heights ─────────────────────────────────────────────────────────────

export const leadingTokens = {
  none: "var(--leading-none)", // 1
  tight: "var(--leading-tight)", // 1.25
  snug: "var(--leading-snug)", // 1.375
  normal: "var(--leading-normal)", // 1.5
  relaxed: "var(--leading-relaxed)", // 1.625
  loose: "var(--leading-loose)", // 2
} as const;

export type Leading = keyof typeof leadingTokens;

// Letter spacing (optional)
export const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
} as const;

export type LetterSpacing = keyof typeof letterSpacing;
