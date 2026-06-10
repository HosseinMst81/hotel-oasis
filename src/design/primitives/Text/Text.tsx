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

import { typographyStyles } from "../../shared/styles";
import { textAlignStyles } from "../../shared/styles/alignmentStylesMap";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import { textColorStyles } from "../../shared/styles/textColorStyles";
import { fontStylesMap } from "../../shared/styles/fontStylesMap";

const StyledText = styled.p<TextProps>`
  ${({
    lineHeight = "normal",
    letterSpacing = "normal",
    fontWeight = "medium",
    fontSize = "md",
  }) => typographyStyles({ fontWeight, lineHeight, letterSpacing, fontSize })}
  ${({ fontFamily = "base" }) => fontStylesMap[fontFamily]}
  ${({ textAlign = "left" }) => textAlignStyles(textAlign)}
  ${({ textColor = "foreground" }) => textColor && textColorStyles(textColor)};
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}

  margin: 0;
`;

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
