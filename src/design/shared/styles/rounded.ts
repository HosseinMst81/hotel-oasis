/**
 * Rounded Style Map
 * 
 * Maps border-radius tokens to CSS variable references.
 * Enables consistent corner rounding across all components.
 * 
 * Philosophy:
 * - Provides visual polish through consistent rounding
 * - Supports both sharp (none) and fully rounded (full) extremes
 * - Used by Button, Badge, Card, Input, Modal, etc.
 */

export const rounded = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;
export type RoundedToken = (typeof rounded)[number];

/**
 * Rounded map: maps tokens to CSS border-radius values.
 * References the radius design tokens from the token system.
 */
export const roundedMap: Record<RoundedToken, string> = {
  none: 'var(--radius-none)',
  xs: 'var(--radius-xs)',
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
};

/**
 * Get border-radius for a given token.
 */
export const getRounded = (rounded: RoundedToken): string => roundedMap[rounded];
