/**
 * Size Style Map
 * 
 * Maps size tokens to CSS properties for consistent component scaling.
 * Provides uniform sizing across all components with variable sizing needs.
 * 
 * Philosophy:
 * - Enables consistent visual hierarchy through scale
 * - Combines padding, height, font-size, and icon sizing
 * - Reusable across Button, Input, Badge, Icon, Text, etc.
 */

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type SizeToken = (typeof sizes)[number];

/**
 * Size map: maps tokens to CSS variable references.
 * Uses predefined layout and typography tokens from the design system.
 */
export const sizeMap: Record<
  SizeToken,
  {
    padding: string;
    height: string;
    fontSize: string;
    gap: string;
    iconSize: string;
  }
> = {
  xs: {
    padding: 'var(--space-1) var(--space-2)',
    height: 'var(--height-control-sm)',
    fontSize: 'var(--text-xs)',
    gap: 'var(--space-1)',
    iconSize: 'var(--icon-size-sm)',
  },
  sm: {
    padding: 'var(--space-1-5) var(--space-3)',
    height: 'var(--height-control-md)',
    fontSize: 'var(--text-sm)',
    gap: 'var(--space-1-5)',
    iconSize: 'var(--icon-size-md)',
  },
  md: {
    padding: 'var(--space-2) var(--space-4)',
    height: 'var(--height-control-lg)',
    fontSize: 'var(--text-base)',
    gap: 'var(--space-2)',
    iconSize: 'var(--icon-size-lg)',
  },
  lg: {
    padding: 'var(--space-2-5) var(--space-5)',
    height: 'var(--height-control-xl)',
    fontSize: 'var(--text-lg)',
    gap: 'var(--space-2-5)',
    iconSize: 'var(--icon-size-xl)',
  },
  xl: {
    padding: 'var(--space-3) var(--space-6)',
    height: 'calc(var(--height-control-xl) + var(--space-2))',
    fontSize: 'var(--text-xl)',
    gap: 'var(--space-3)',
    iconSize: 'var(--icon-size-xl)',
  },
};

/**
 * Helper functions to access specific size properties.
 * Used internally by styled components.
 */
export const getSizePadding = (size: SizeToken): string => sizeMap[size].padding;
export const getSizeHeight = (size: SizeToken): string => sizeMap[size].height;
export const getSizeFontSize = (size: SizeToken): string => sizeMap[size].fontSize;
export const getSizeGap = (size: SizeToken): string => sizeMap[size].gap;
export const getSizeIconSize = (size: SizeToken): string => sizeMap[size].iconSize;
