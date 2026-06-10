import React from "react";
import type { StackProps } from "./stack.types";
import styled from "styled-components";
import { stackStyles } from "../../shared/styles/stackStylesMap";

const StyledStack = styled.div<StackProps>`
  ${({ spacing = 1, align = "flex-start", justify = "center" }) =>
    stackStyles({ spacing, align, justify })}
`;
const Stack: React.FC<StackProps> = ({ children, as = "div", ...rest }) => {
  return (
    <StyledStack as={as} {...rest}>
      {children}
    </StyledStack>
  );
};

export default Stack;
