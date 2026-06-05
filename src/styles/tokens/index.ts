import { lightColorTokens, darkColorTokens } from "./colors";
import { createCssVariables } from "./createCssVariables";
import { effectTokens, darkEffectTokens } from "./effects";
import { layoutTokens } from "./layout";
import { motionTokens } from "./motion";
import { radiusTokens } from "./radius";
import { spacingTokens } from "./spacing";
import { typographyTokens } from "./typography";

export const foundationTokens = {
  ...lightColorTokens,
  ...spacingTokens,
  ...typographyTokens,
  ...radiusTokens,
  ...effectTokens,
  ...motionTokens,
  ...layoutTokens,
} as const;

export const darkThemeTokens = {
  ...darkColorTokens,
  ...darkEffectTokens,
} as const;

export type FoundationTokenName = keyof typeof foundationTokens;
export type DarkThemeTokenName = keyof typeof darkThemeTokens;

export const foundationCssVariables = createCssVariables(foundationTokens);
export const darkThemeCssVariables = createCssVariables(darkThemeTokens);
