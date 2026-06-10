import styled from "styled-components";
import { inputStyles } from "../../shared/styles/input-styles";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import type { InputProps } from "./input.types";

const StyledInput = styled.input<InputProps>`
  ${(props) => inputStyles({ size: props.size, error: props.error, fullWidth: props.fullWidth })}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
`;

export function Input({ ...props }: InputProps) {
  return <StyledInput {...props} />;
}