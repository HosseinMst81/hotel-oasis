import { css } from "styled-components";
import {
  fontSizes,
  fontWeight,
  leadingTokens,
  letterSpacing,
  type FontSize,
  type FontWeight,
  type Leading,
  type LetterSpacing,
} from "../../tokens";

export const fontWeightStyles = (weight?: FontWeight) => {
  if (!weight) return css``;
  return css`
    font-weight: ${fontWeight[weight]};
  `;
};

export const lineHeightStyles = (lh?: Leading) => {
  if (!lh) return css``;
  return css`
    line-height: ${leadingTokens[lh]};
  `;
};

export const letterSpacingStyles = (ls?: LetterSpacing) => {
  if (!ls) return css``;
  return css`
    letter-spacing: ${letterSpacing[ls]};
  `;
};

export const fontSizeStyles = (size?: FontSize) => {
  if (!size) return css``;
  return css`
    font-size: ${fontSizes[size]};
  `;
};

// Combined helper for text components
export const typographyStyles = (props: {
  fontWeight?: FontWeight;
  lineHeight?: Leading;
  letterSpacing?: LetterSpacing;
  fontSize?: FontSize;
}) => css`
  ${fontWeightStyles(props.fontWeight)}
  ${lineHeightStyles(props.lineHeight)}
  ${letterSpacingStyles(props.letterSpacing)}
  ${fontSizeStyles(props.fontSize)}
`;
