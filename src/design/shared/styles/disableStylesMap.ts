// ─── Disabled State Map ───────────────────────────────────────────────────────
// Applied on top of any appearance when isDisabled is true.

import { css } from "styled-components";

export const disabledStyles = css`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`;