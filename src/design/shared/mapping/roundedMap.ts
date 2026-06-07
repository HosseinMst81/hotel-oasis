// ─── Rounded Map ─────────────────────────────────────────────────────────────
// Used by: Button, Badge, Box, Card, Input, Avatar

import { css } from "styled-components";
import type { Rounded } from "../../tokens";

export const roundedMap: Record<Rounded, ReturnType<typeof css>> = {
  none: css`
    border-radius: 0;
  `,
  sm: css`
    border-radius: var(--radius-sm);
  `,
  md: css`
    border-radius: var(--radius-md);
  `,
  lg: css`
    border-radius: var(--radius-lg);
  `,
  xl: css`
    border-radius: var(--radius-xl);
  `,
  full: css`
    border-radius: var(--radius-full);
  `,
} as const;
