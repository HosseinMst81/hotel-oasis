// ─── Transitions ──────────────────────────────────────────────────────────────
// Not defined in GlobalStyles yet — add these to :root when ready.

export const transitionTokens = {
  fast:   '120ms ease-in-out',
  normal: '200ms ease-in-out',
  slow:   '350ms ease-in-out',
  spring: '400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export type TransitionSpeed = keyof typeof transitionTokens;