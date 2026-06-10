export const easing = {
  linear: "linear",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export type Easing = keyof typeof easing;
