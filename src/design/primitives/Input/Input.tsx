import styled from "styled-components";
import { appearanceStyleMap, roundedMap, sizeMap } from "../../shared/styles";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import { transitionStyles } from "../../shared/styles/transitionStylesMap";
import { disabledStyles } from "../../shared/styles/disableStylesMap";

import type { InputProps } from "./input.types";

const StyledInput = styled.input<InputProps>`
  ${({ rounded = "md" }) => roundedMap[rounded as keyof typeof roundedMap]}
  ${({ size = "base" }) => sizeMap[size as keyof typeof sizeMap]}
  ${({ appearance = "subtle", colorScheme = "primary" }) =>
    appearanceStyleMap(appearance, colorScheme)}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
  ${(fullWidth) => fullWidth && `width: 100%;`}

  ${({
    transitionDelay = "none",
    transitionDuration = "normal",
    transitionTiming = "linear",
  }) =>
    transitionStyles({ transitionDelay, transitionDuration, transitionTiming })}

  ${({ disabled }) => disabled && disabledStyles}
`;

export const Input: React.FC<InputProps> = ({
  loading,
  disabled,
  error,
  ...rest
}) => {
  return (
    <StyledInput
      pr={5}
      pl={10}
      aria-busy={loading}
      aria-disabled={disabled}
      disabled={disabled}
      aria-invalid={error ? true : undefined}
      {...rest}
    />
  );
};

