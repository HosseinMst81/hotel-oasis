import { defineTokens } from "./types";

export const typographyTokens = defineTokens({
  "font-sans": "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  "font-serif": "'Cinzel', 'Playfair Display', Georgia, serif",
  "font-mono": "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
  "font-base": "var(--font-sans)",
  "font-primary": "var(--font-serif)",
  "font-secondary": "var(--font-sans)",

  "font-weight-regular": "400",
  "font-weight-medium": "500",
  "font-weight-semibold": "600",
  "font-weight-bold": "700",
  "font-weight-extrabold": "800",
  "font-weight-black": "900",

  "text-xs": "1.2rem",
  "text-sm": "1.4rem",
  "text-base": "1.6rem",
  "text-lg": "1.8rem",
  "text-xl": "2rem",
  "text-2xl": "2.4rem",
  "text-3xl": "3rem",
  "text-4xl": "3.6rem",
  "text-5xl": "4.8rem",
  "text-6xl": "6rem",

  "leading-none": "1",
  "leading-tight": "1.25",
  "leading-snug": "1.375",
  "leading-normal": "1.5",
  "leading-relaxed": "1.625",
  "leading-loose": "2",

  "tracking-normal": "0",
  "tracking-wide": "0.025em",
  "tracking-wider": "0.05em",
});
