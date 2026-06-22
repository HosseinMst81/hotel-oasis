import type {
  HasChildren,
  HasFontFamily,
  HasFontSize,
  HasFontWeight,
  HasfullWidth,
  HasMargin,
  HasPadding,
} from "../../shared/capabilities";
import type { JSX } from "react";
import type { HasInline } from "../../shared/capabilities/has-inline";
import styled from "styled-components";
import { inlineStyles } from "../../shared/styles/inlineStylesMap";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";

export interface InlineProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    HasMargin,
    HasPadding,
    HasChildren,
    HasFontWeight,
    HasfullWidth,
    HasInline,
    HasFontFamily,
    HasFontSize {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const StyledInline = styled.div<InlineProps>`
  display : flex;
  flex-direction: row;
  ${({
    spacing = 1,
    align = "center",
    justify = "space-between",
    wrap = "wrap",
  }) => inlineStyles({ spacing, align, justify, wrap })}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
`;

const Inline: React.FC<InlineProps> = ({ children, as = "div", ...rest }) => {
  return (
    <StyledInline as={as} {...rest}>
      {children}
    </StyledInline>
  );
};

export default Inline;
