// ─── Shadows ──────────────────────────────────────────────────────────────────

export const shadowTokens = {
  xs: "var(--shadow-xs",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
} as const;

export type ShadowScale = keyof typeof shadowTokens;
