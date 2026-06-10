// ─── Size Map ─────────────────────────────────────────────────────────────────
// Controls padding, font-size, and min-height.
// Used by: Button, Badge, Input, Avatar, Spinner

import { css } from "styled-components";
import type { TextSize } from "../../tokens/size";


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
  '2xl': css`
    font-size: var(--text-2xl);
    padding: var(--space-5) var(--space-7);
    min-height: 6.4rem;
    gap: var(--space-4);
  `,
  '3xl': css`
    font-size: var(--text-3xl);
    padding: var(--space-6) var(--space-8);
    min-height: 7.2rem;
    gap: var(--space-4);
  `,
  '4xl': css`
    font-size: var(--text-4xl);
    padding: var(--space-7) var(--space-9);
    min-height: 8rem;
    gap: var(--space-5);
  `,
  '5xl': css`
    font-size: var(--text-5xl);
    padding: var(--space-8) var(--space-10);
    min-height: 10rem;
    gap: var(--space-6);
  `,
};