import { css } from "styled-components";
import { spacingTokens, type SpacingScale } from "../../tokens";
import type { HasMargin } from "../capabilities/has-margin";

// Helper to get CSS value from Space or undefined
const getSpaceValue = (space?: SpacingScale): string | undefined =>
  space !== undefined ? spacingTokens[space] : undefined;

export const marginStyles = ({ m, mt, mr, mb, ml, mx, my }: HasMargin) => {
  // Resolve individual sides with priority: specific > mx/my > m
  const top = mt ?? my ?? m;
  const right = mr ?? mx ?? m;
  const bottom = mb ?? my ?? m;
  const left = ml ?? mx ?? m;

  return css`
    margin-top: ${getSpaceValue(top) ?? "0"};
    margin-right: ${getSpaceValue(right) ?? "0"};
    margin-bottom: ${getSpaceValue(bottom) ?? "0"};
    margin-left: ${getSpaceValue(left) ?? "0"};
  `;
};
