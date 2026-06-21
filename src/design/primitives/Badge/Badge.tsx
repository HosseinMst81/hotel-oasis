import styled from "styled-components";
import Loading from "../Loading/Loading";
import { appearanceStyleMap, roundedMap, sizeMap } from "../../shared/styles";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import { transitionStyles } from "../../shared/styles/transitionStylesMap";
import type { BadgeProps } from "./badge.types";

const StyledBadge = styled.span<BadgeProps>`
  ${({ rounded = "full" }) => roundedMap[rounded]}
  ${({ size = "sm" }) => sizeMap[size]}
  ${({ appearance = "subtle", colorScheme = "primary" }) =>
    appearanceStyleMap(appearance, colorScheme)}
  ${(props) => marginStyles(props)}
  ${({ p, pt, pr, pb, pl, px, py }) =>
    paddingStyles({
      p,
      pt,
      pr,
      pb,
      pl,
      px: px ?? (p === undefined && pr === undefined && pl === undefined ? 2 : undefined),
      py: py ?? (p === undefined && pt === undefined && pb === undefined ? 1 : undefined),
    })}
  ${({
    transitionDelay = "none",
    transitionDuration = "fast",
    transitionTiming = "easeInOut",
  }) =>
    transitionStyles({ transitionDelay, transitionDuration, transitionTiming })}

  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  vertical-align: middle;

  &[aria-disabled="true"] {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  loading,
  disabled,
  ...rest
}) => {
  return (
    <StyledBadge aria-busy={loading} aria-disabled={disabled} {...rest}>
      {loading ? <Loading /> : children}
    </StyledBadge>
  );
};
