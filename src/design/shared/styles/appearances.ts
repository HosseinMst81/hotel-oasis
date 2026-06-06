/**
 * Appearance Style Map
 * 
 * Maps appearance tokens to semantic color and styling combinations.
 * Each appearance represents a fill strategy: solid, outline, ghost, soft.
 * 
 * Philosophy:
 * - Solid: fully colored, highest contrast (primary action)
 * - Outline: bordered, medium emphasis (secondary action)
 * - Ghost: transparent, low emphasis (tertiary action)
 * - Soft: subtle background, accent text (softer presentation)
 * 
 * Used by: Button, Badge, Link, Alert, Toast, etc.
 */

export const appearances = ['solid', 'outline', 'ghost', 'soft', 'link'] as const;
export type AppearanceToken = (typeof appearances)[number];

/**
 * Appearance map: color scheme mappings for each fill strategy.
 * Each appearance defines: background, text, border, hover, active, disabled states.
 */
export const appearanceMap: Record<
  AppearanceToken,
  {
    bg: string;
    text: string;
    border: string;
    hover: string;
    active: string;
    disabled: string;
  }
> = {
  solid: {
    bg: 'var(--color-action-primary-base)',
    text: 'var(--color-text-inverse)',
    border: 'transparent',
    hover: 'var(--color-action-primary-hover)',
    active: 'var(--color-action-primary-active)',
    disabled: 'var(--color-action-primary-disabled)',
  },
  outline: {
    bg: 'transparent',
    text: 'var(--color-action-primary-base)',
    border: 'var(--color-action-primary-base)',
    hover: 'var(--color-action-primary-outline)',
    active: 'var(--color-action-primary-active)',
    disabled: 'var(--color-action-primary-disabled)',
  },
  ghost: {
    bg: 'transparent',
    text: 'var(--color-text-primary)',
    border: 'transparent',
    hover: 'var(--color-surface-brand-subtle)',
    active: 'var(--color-action-primary-outline)',
    disabled: 'var(--color-text-disabled)',
  },
  soft: {
    bg: 'var(--color-surface-brand-subtle)',
    text: 'var(--color-action-primary-base)',
    border: 'transparent',
    hover: 'color-mix(in oklch, var(--color-action-primary-base) 15%, transparent)',
    active: 'var(--color-action-primary-outline)',
    disabled: 'var(--color-action-primary-disabled)',
  },
  link: {
    bg: 'transparent',
    text: 'var(--color-text-brand)',
    border: 'transparent',
    hover: 'var(--color-primary-hover)',
    active: 'var(--color-primary-active)',
    disabled: 'var(--color-text-disabled)',
  },
};

/**
 * Helper functions to access specific appearance colors.
 */
export const getAppearanceBg = (appearance: AppearanceToken): string =>
  appearanceMap[appearance].bg;

export const getAppearanceText = (appearance: AppearanceToken): string =>
  appearanceMap[appearance].text;

export const getAppearanceBorder = (appearance: AppearanceToken): string =>
  appearanceMap[appearance].border;

export const getAppearanceHover = (appearance: AppearanceToken): string =>
  appearanceMap[appearance].hover;

export const getAppearanceActive = (appearance: AppearanceToken): string =>
  appearanceMap[appearance].active;

export const getAppearanceDisabled = (appearance: AppearanceToken): string =>
  appearanceMap[appearance].disabled;
