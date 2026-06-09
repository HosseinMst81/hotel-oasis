/**
 * LAYER 4 — PRIMITIVES: Text + Heading
 *
 * Typography primitives. Polymorphic — renders the right HTML element
 * while preserving design token consistency.
 *
 * Text:    inline/block body copy — p, span, label, small, etc.
 * Heading: heading hierarchy — h1–h6 with visual size decoupled from semantic level.
 */

import styled from "styled-components";
import type { TextProps } from "./text.types";

import { sizeMap } from "../../shared/styles";
import { textAlignStyles } from "../../shared/styles/alignmentStylesMap";
import { fontStylesMap } from "../../shared/styles/fontStylesMap";
import { leadingMap } from "../../shared/styles/leadingMaps";
import { textColorStyles } from "../../shared/styles/textColorStyles";
import { fontWeight } from "../../tokens";

const StyledText = styled.p<TextProps>`
  ${({ size = "base" }) => sizeMap[size]}
  ${({ fontFamily = "base" }) => fontStylesMap[fontFamily]}
  ${({ weight = "regular" }) => fontWeight[weight]}
  ${({ leading = "normal" }) => leadingMap[leading]}
  ${({ textAlign = "left" }) => textAlignStyles(textAlign)}
  ${({ textColor = "foreground" }) => textColor && textColorStyles(textColor)};
  ${({ fullWidth }) => fullWidth && "width: 100%;"}

  margin: 0;
`;

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
