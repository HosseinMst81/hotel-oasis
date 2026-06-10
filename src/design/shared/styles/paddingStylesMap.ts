import { css } from "styled-components";
import { spacingTokens, type SpacingScale } from "../../tokens";
import type { HasPadding } from "../capabilities/has-padding";

const getSpaceValue = (space?: SpacingScale): string | undefined =>
  space !== undefined ? spacingTokens[space] : undefined;

export const paddingStyles = (props: HasPadding) => {
  const { p, pt, pr, pb, pl, px, py } = props;

  const top = pt ?? py ?? p;
  const right = pr ?? px ?? p;
  const bottom = pb ?? py ?? p;
  const left = pl ?? px ?? p;

  return css`
    padding-top: ${getSpaceValue(top) ?? "0"};
    padding-right: ${getSpaceValue(right) ?? "0"};
    padding-bottom: ${getSpaceValue(bottom) ?? "0"};
    padding-left: ${getSpaceValue(left) ?? "0"};
  `;
};
