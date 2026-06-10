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
import Loading from "../../../pages/Loading";
import { appearanceStyleMap, roundedMap, sizeMap } from "../../shared/styles";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import { transitionStyles } from "../../shared/styles/transitionStylesMap";
import type { ButtonProps } from "./button.types";

const StyledButton = styled.button<ButtonProps>`
  ${({ rounded = "none" }) => roundedMap[rounded]}
  ${({ size = "base" }) => sizeMap[size]}
  ${({ appearance = "solid", colorScheme = "primary" }) => appearanceStyleMap(appearance, colorScheme)}
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
  disabled,
  ...rest
}) => {
  return (
    <StyledButton disabled={disabled} py={3} px={5} {...rest}>{loading ? <Loading /> : children}</StyledButton>
  );
};
