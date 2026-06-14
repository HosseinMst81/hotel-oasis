// primitives/Heading/Heading.tsx
import styled from "styled-components";
import type { HasTextColor } from "../../shared/capabilities/has-text-color";
import type { HasTextAlign } from "../../shared/capabilities/has-layout";
import type { HasMargin, HasPadding } from "../../shared/capabilities";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import type { JSX } from "react";
import { textAlignStyles } from "../../shared/styles/alignmentStylesMap";
import { textColorStyles } from "../../shared/styles/textColorStyles";
import type { HasFontFamily } from "../../shared/capabilities/has-font-family";
import { fontStylesMap } from "../../shared/styles/fontStylesMap";

export interface HeadingProps
  extends HasTextColor, HasTextAlign, HasMargin, HasPadding, HasFontFamily {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const StyledHeading = styled.h1<HeadingProps>`
  margin: 0;
  line-height: 1.2;
  ${({ fontFamily = "base" }) => fontStylesMap[fontFamily]}
  ${({ level }) => {
    switch (level) {
      case 1:
        return "font-size: 2.5rem;";
      case 2:
        return "font-size: 2rem;";
      case 3:
        return "font-size: 1.5rem;";
      case 4:
        return "font-size: 1.25rem;";
      case 5:
        return "font-size: 1.125rem;";
      default:
        return "font-size: 1rem;";
    }
  }}
  ${({ textAlign = "left" }) => textAlignStyles(textAlign)}
  ${({ textColor }) => textColor && textColorStyles(textColor)};
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
`;

export function Heading({ level = 1, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <StyledHeading as={Tag} level={level} {...props}>
      {children}
    </StyledHeading>
  );
}
