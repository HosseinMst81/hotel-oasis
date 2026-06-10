import { css } from "styled-components";
import type { FontFamily } from "../../tokens";

export const fontStylesMap: Record<FontFamily, ReturnType<typeof css>> = {
  base: css`
    font-family: var(--font-base);
  `,
  primary: css`
    font-family: var(--font-primary);
  `,
  secondary: css`
    font-family: var(--font-secondary);
  `,
  mono: css`
    font-family: var(--font-mono);
  `,
};
