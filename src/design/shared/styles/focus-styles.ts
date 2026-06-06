/**
 * Focus Style Map
 * 
 * Maps focus style tokens to keyboard navigation appearance.
 * Ensures accessible and visible focus states for all interactive elements.
 * 
 * Philosophy:
 * - ring: traditional outline focus ring
 * - inset: contained focus ring inside element
 * - none: no visible focus (only for special cases like buttons with colored backgrounds)
 * 
 * Used by: Button, Input, Link, Select, Checkbox, Radio, etc.
 */

export const focusStyles = ['ring', 'inset', 'none'] as const;
export type FocusStyleToken = (typeof focusStyles)[number];

/**
 * Focus style map: focus ring styling combinations.
 */
export const focusStyleMap: Record<
  FocusStyleToken,
  {
    outline: string;
    outlineOffset: string;
    boxShadow: string;
  }
> = {
  ring: {
    outline: 'var(--focus-ring-width) solid var(--color-border-focus)',
    outlineOffset: 'var(--focus-ring-offset)',
    boxShadow: 'none',
  },
  inset: {
    outline: 'none',
    outlineOffset: '0',
    boxShadow: 'inset 0 0 0 var(--focus-ring-width) var(--color-border-focus)',
  },
  none: {
    outline: 'none',
    outlineOffset: '0',
    boxShadow: 'none',
  },
};

/**
 * Helper functions to access focus style properties.
 */
export const getFocusStyle = (style: FocusStyleToken) => focusStyleMap[style];
export const getFocusOutline = (style: FocusStyleToken): string =>
  focusStyleMap[style].outline;
export const getFocusOutlineOffset = (style: FocusStyleToken): string =>
  focusStyleMap[style].outlineOffset;
export const getFocusBoxShadow = (style: FocusStyleToken): string =>
  focusStyleMap[style].boxShadow;

/**
 * Generate focus-visible styles for CSS-in-JS usage.
 * Example: `...getFocusVisibleStyles('ring')`
 */
export const getFocusVisibleStyles = (style: FocusStyleToken) => ({
  outline: focusStyleMap[style].outline,
  outlineOffset: focusStyleMap[style].outlineOffset,
  boxShadow: focusStyleMap[style].boxShadow,
});
