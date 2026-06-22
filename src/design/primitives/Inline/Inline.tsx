import type { HasChildren } from "../../shared/capabilities";
import type { JSX } from "react";
import type { HasInline } from "../../shared/capabilities/has-inline";
import styled from "styled-components";
import { inlineStyles } from "../../shared/styles/inlineStylesMap";
import type { HasFontFamily } from "../../shared/capabilities/has-font-family";
import type { HasFontSize } from "../../shared/capabilities/has-font-size";
import type { HasFontWeight } from "../../shared/capabilities/has-weight";

export interface InlineProps
  extends HasChildren, HasFontWeight, HasInline, HasFontFamily, HasFontSize {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const StyledInline = styled.div<InlineProps>`
  ${({
    spacing = 1,
    align = "center",
    justify = "space-between",
    wrap = "wrap",
  }) => inlineStyles({ spacing, align, justify, wrap })}
`;

const Inline: React.FC<InlineProps> = ({ children, as = "div", ...rest }) => {
  return (
    <StyledInline as={as} {...rest}>
      {children}
    </StyledInline>
  );
};

export default Inline;
