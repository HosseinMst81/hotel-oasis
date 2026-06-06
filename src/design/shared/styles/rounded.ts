export const rounded = ["none", "sm", "md", "lg", "full"] as const;
export type RoundedToken = (typeof rounded)[number];
