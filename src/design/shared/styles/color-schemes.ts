export const colorSchemes = ["primary", "secondary", "success", "warning", "danger", "neutral"] as const;
export type ColorSchemeToken = (typeof colorSchemes)[number];
