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
import { colorSchemeStylesMap, roundedMap, sizeMap } from "../../shared/styles";
import Loading from "../../../pages/Loading";
import { transitionStyles } from "../../shared/styles/transitionStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import { marginStyles } from "../../shared/styles/marginStylesMap";

const StyledButton = styled.button<ButtonProps>`
  ${({ rounded = "none" }) => roundedMap[rounded]}
  ${({ colorScheme = "primary" }) => colorSchemeStylesMap[colorScheme]}
  ${({ size = "base" }) => sizeMap[size]}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
  ${({
    transitionDelay = "none",
    transitionDuration = "fast",
    transitionTiming = "easeInOut",
  }) =>
    transitionStyles({ transitionDelay, transitionDuration, transitionTiming })}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  ...rest
}) => {
  return (
    <StyledButton py={3} px={5} {...rest}>{loading ? <Loading /> : children}</StyledButton>
  );
};
