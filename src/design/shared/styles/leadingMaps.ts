import { css } from "styled-components";
import type { Leading } from "../../tokens/leadings";

export const leadingMap: Record<Leading, ReturnType<typeof css>> = {
  none: css`
    line-height: var(--leading-none);
  `,
  loose: css`
    line-height: var(--leading-loose);
  `,
  normal: css`
    line-height: var(--leading-normal);
  `,
  relaxed: css`
    line-height: var(--leading-relaxed);
  `,
  snug: css`
    line-height: var(--leading-snug);
  `,
  tight: css`
    line-height: var(--leading-tight);
  `,
};
