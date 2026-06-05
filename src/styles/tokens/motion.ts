import { defineTokens } from "./types";

export const motionTokens = defineTokens({
  "duration-instant": "0ms",
  "duration-fast": "150ms",
  "duration-normal": "220ms",
  "duration-slow": "320ms",
  "duration-slower": "500ms",
  "duration-loader": "1.2s",

  "ease-linear": "linear",
  "ease-standard": "cubic-bezier(0.2, 0, 0, 1)",
  "ease-emphasized": "cubic-bezier(0.2, 0, 0, 1)",
  "ease-entrance": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-exit": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-bounce": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",

  "transition-fast": "var(--duration-fast) var(--ease-standard)",
  "transition-base": "var(--duration-normal) var(--ease-standard)",
  "transition-slow": "var(--duration-slow) var(--ease-standard)",
});
