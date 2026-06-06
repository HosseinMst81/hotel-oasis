export const appearances = ["solid", "ghost", "outline", "subtle", "link"] as const;
export type AppearanceToken = (typeof appearances)[number];
