// ─── Size Scale ───────────────────────────────────────────────────────────────

export const textSizeTokens = {
  xs: "var(--text-xs)", // 12px
  sm: "var(--text-sm)", // 14px
  base: "var(--text-base)", // 16px
  lg: "var(--text-lg)", // 18px
  xl: "var(--text-xl)", // 20px
  "2xl": "var(--text-2xl)",
  "3xl": "var(--text-3xl)",
  "4xl": "var(--text-4xl)",
  "5xl": "var(--text-5xl)",
} as const;

export type TextSize = keyof typeof textSizeTokens;
