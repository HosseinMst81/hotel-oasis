import { defineTokens } from "./types";

export const effectTokens = defineTokens({
  "shadow-xs": "0 1px 1px rgb(43 66 51 / 0.04)",
  "shadow-sm": "0 1px 2px 0 rgb(43 66 51 / 0.05)",
  "shadow-md":
    "0 4px 6px -1px rgb(43 66 51 / 0.08), 0 2px 4px -2px rgb(43 66 51 / 0.08)",
  "shadow-lg":
    "0 10px 15px -3px rgb(43 66 51 / 0.1), 0 4px 6px -4px rgb(43 66 51 / 0.1)",
  "shadow-xl":
    "0 20px 25px -5px rgb(43 66 51 / 0.12), 0 8px 10px -6px rgb(43 66 51 / 0.1)",
  "shadow-inner": "inset 0 2px 4px 0 rgb(43 66 51 / 0.06)",
  "shadow-none": "none",

  "opacity-disabled": "0.42",
  "opacity-muted": "0.64",
  "opacity-overlay": "0.72",
  "opacity-scrim": "0.48",

  "focus-ring-width": "3px",
  "focus-ring-offset": "2px",
  "focus-ring-color": "var(--color-action-primary-outline)",
  "focus-ring":
    "0 0 0 var(--focus-ring-width) var(--focus-ring-color)",
});

export const darkEffectTokens = defineTokens({
  "shadow-xs": "0 1px 1px rgb(0 0 0 / 0.42)",
  "shadow-sm": "0 1px 2px 0 rgb(0 0 0 / 0.5)",
  "shadow-md":
    "0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5)",
  "shadow-lg":
    "0 10px 15px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.6)",
  "shadow-xl":
    "0 20px 25px -5px rgb(0 0 0 / 0.62), 0 8px 10px -6px rgb(0 0 0 / 0.58)",
});
