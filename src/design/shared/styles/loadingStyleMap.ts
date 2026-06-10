// shared/styles/loaderStyles.ts

import { css, keyframes } from "styled-components";
import { colors, radius, type ColorScheme } from "../../tokens";
import { loaderSizes, loaderSpeeds } from "../../tokens/loader";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const loaderStylesMap = (
  size: keyof typeof loaderSizes = "md",
  speed: keyof typeof loaderSpeeds = "normal",
  scheme: ColorScheme = "primary"
) => css`
  cursor: wait;
  pointer-events: none;
  width: ${loaderSizes[size]};
  height: ${loaderSizes[size]};
  border: 3px solid color-mix(in oklch, ${colors[scheme]} 20%, transparent);
  border-top-color: ${colors[scheme]};
  border-bottom-color: var(--color-secondary-active, ${colors.secondary});
  border-radius: ${radius.full};
  animation: ${spin} ${loaderSpeeds[speed]} linear infinite;
  display: inline-block;
`;
