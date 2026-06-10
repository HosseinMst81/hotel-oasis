
// ─── Focus Ring ───────────────────────────────────────────────────────────────
// Consistent keyboard focus indicator across all interactive primitives.

import { css } from "styled-components";

export const focusRing = (color = 'var(--color-primary-outline)') => css`
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${color};
  }
`;
