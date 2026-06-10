// ─── Transitions ──────────────────────────────────────────────────────────────

export const transitionDurations = {
  instant: '0ms',
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
  slower: '600ms',
} as const;

export type TransitionDuration = keyof typeof transitionDurations;

export const transitionTimings = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export type TransitionTiming = keyof typeof transitionTimings;

export const transitionDelays = {
  none: '0ms',
  short: '50ms',
  medium: '100ms',
  long: '200ms',
} as const;

export type TransitionDelay = keyof typeof transitionDelays;