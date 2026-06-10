import { css } from "styled-components";
import type { SpacingScale } from "../../tokens";

export const containerStylesMap = (
  maxWidth: string = "100%",
  width: string = "100%",
  margin: SpacingScale | string = "auto",
  padding: SpacingScale | string = "auto"
) => css`
  max-width: ${maxWidth};
  width: ${width};
  margin: ${margin};
  padding: ${padding};
`;
