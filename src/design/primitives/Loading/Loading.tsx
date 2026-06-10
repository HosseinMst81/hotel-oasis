import styled from "styled-components";
import type { LoadingProps } from "./loading.types";
import { loaderStylesMap } from "../../shared/styles/loadingStyleMap";
import type { FC } from "react";

const StyledLoading = styled.div<LoadingProps>`
  ${({ size= 'md', speed = "normal", colorScheme = "primary" }) =>
    loaderStylesMap(size, speed, colorScheme)}
`;

const Loading : FC<LoadingProps> = ({...rest}) => {
  return <StyledLoading {...rest}/>;
};
export default Loading;
