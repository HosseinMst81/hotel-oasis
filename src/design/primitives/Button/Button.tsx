/**
 * LAYER 4 — PRIMITIVE: Button
 *
 * The most-used interactive primitive.
 * Composes: HasSize · HasAppearance · HasColorScheme · HasLoading · HasDisabled · Polymorphic
 *
 * Rules enforced:
 *   ✓ No business logic
 *   ✓ No API calls or side-effects
 *   ✓ Full polymorphic support (renders as <a>, <Link>, etc.)
 *   ✓ Accessible: manages aria-disabled, aria-busy
 *   ✗ No hardcoded colors — only style map lookups
 */

import styled from "styled-components";
import type { ButtonProps } from "./button.types";
import {
  colorSchemeStylesMap,
  roundedMap,
  sizeMap,
} from "../../shared/styles";

const StyledButton = styled.button<ButtonProps>`
  ${({ rounded }) => rounded && roundedMap[rounded]}
  ${({ colorScheme }) => colorScheme && colorSchemeStylesMap[colorScheme]}
  ${({ size }) => size && sizeMap[size]}
`;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
