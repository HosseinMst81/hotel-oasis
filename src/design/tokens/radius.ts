// ─── Border Radius ────────────────────────────────────────────────────────────

export const radius = {
  none: "0px", //  0px — sharp corners
  sm: "var(--radius-sm)", //  4px — tight, inline elements
  md: "var(--radius-md)", //  8px — inputs, buttons, cards
  lg: "var(--radius-lg)", // 12px — modals, panels
  xl: "var(--radius-xl)", // 16px — larger cards, containers
  full: "var(--radius-full)", // 9999px — badges, avatars, pills
} as const;

export type Rounded = keyof typeof radius;
