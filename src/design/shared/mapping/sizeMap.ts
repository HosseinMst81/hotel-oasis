// ─── Size Map ─────────────────────────────────────────────────────────────────
// Controls padding, font-size, and min-height.
// Used by: Button, Badge, Input, Avatar, Spinner

import { css } from "styled-components";
import type { TextSize } from "../../tokens";


export const sizeMap: Record<TextSize, ReturnType<typeof css>> = {
  xs: css`
    font-size: var(--text-xs);
    padding: var(--space-1) var(--space-2);
    min-height: 3rem;
    gap: var(--space-1);
  `,
  sm: css`
    font-size: var(--text-sm);
    padding: var(--space-1) var(--space-3);
    min-height: 3.2rem;
    gap: var(--space-1);
  `,
  base: css`
    font-size: var(--text-base);
    padding: var(--space-2) var(--space-4);
    min-height: 4rem;
    gap: var(--space-2);
  `,
  lg: css`
    font-size: var(--text-lg);
    padding: var(--space-3) var(--space-5);
    min-height: 4.8rem;
    gap: var(--space-2);
  `,
  xl: css`
    font-size: var(--text-xl);
    padding: var(--space-4) var(--space-6);
    min-height: 5.6rem;
    gap: var(--space-3);
  `,
};