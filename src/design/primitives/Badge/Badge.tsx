import Loading from "../Loading/Loading";
import {
  appearanceStyleMap,
  roundedMap,
  typographyStyles,
} from "../../shared/styles";
import { marginStyles } from "../../shared/styles/marginStylesMap";
import { paddingStyles } from "../../shared/styles/paddingStylesMap";
import { transitionStyles } from "../../shared/styles/transitionStylesMap";
import type { BadgeProps, BadgeSizes } from "./badge.types";
import { fontStylesMap } from "../../shared/styles/fontStylesMap";
import styled, { css } from "styled-components";

const badgeSizeMap: Record<BadgeSizes, ReturnType<typeof css>> = {
  xs: css`
    font-size: 1rem;
  `,
  sm: css`
    font-size: 1.2rem;
  `,
  md: css`
    font-size: 1.6rem;
  `,
};

const StyledBadge = styled.span<BadgeProps>`
  ${({ rounded = "full" }) => roundedMap[rounded]}
  ${({ size = "xs" }) => badgeSizeMap[size]}
  ${({
    lineHeight = "tight",
    letterSpacing = "tight",
    fontWeight = "regular",
  }) => typographyStyles({ fontWeight, lineHeight, letterSpacing })}
    ${({ fontFamily = "primary" }) => fontStylesMap[fontFamily]}
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
      px:
        px ??
        (p === undefined && pr === undefined && pl === undefined
          ? 2
          : undefined),
      py:
        py ??
        (p === undefined && pt === undefined && pb === undefined
          ? 1
          : undefined),
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
