import React from "react";
import type { HasChildren } from "../../shared/capabilities";
import styled from "styled-components";
import type { HasWidth } from "../../shared/capabilities/has-width";
import type { HasSpace } from "../../shared/capabilities/has-space";
import { containerStylesMap } from "../../shared/styles/containerStylesMap";
import type { HasMargin } from "../../shared/capabilities/has-margin";
import type { HasPadding } from "../../shared/capabilities/has-padding";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";

export interface ContainerProps
  extends HasChildren, HasWidth, HasSpace, HasMargin, HasPadding {
  children: React.ReactNode;
}
const StyledContainer = styled.div<ContainerProps>`
  ${({ width, maxWidth, margin = "auto", padding = "auto" }) =>
    containerStylesMap(width, maxWidth, margin, padding)}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
`;
const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <StyledContainer as="div" {...rest}>
      {children}
    </StyledContainer>
  );
};

export default Container;
