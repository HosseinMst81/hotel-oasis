export const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
export type SizeToken = (typeof sizes)[number];
