/**
 * Color Scheme Style Map
 * 
 * Maps semantic color scheme tokens to action colors across all states.
 * Each scheme represents a semantic intent: primary, success, warning, danger, info.
 * 
 * Philosophy:
 * - Provides semantic meaning through color (not just visual coding)
 * - Enables consistent theming of components with different intents
 * - Primary: brand colors for main actions
 * - Success/Warning/Danger: status-specific feedback
 * - Neutral: non-action, supporting content
 * 
 * Used by: Button, Badge, Alert, Toast, Progress, etc.
 */

export const colorSchemes = ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'] as const;
export type ColorSchemeToken = (typeof colorSchemes)[number];

/**
 * Color scheme map: color palettes for each semantic intent.
 * Each scheme defines: base, hover, active, focus, disabled, background (subtle), text, border.
 */
export const colorSchemeMap: Record<
  ColorSchemeToken,
  {
    base: string;
    hover: string;
    active: string;
    focus: string;
    disabled: string;
    bg: string;
    text: string;
    border: string;
  }
> = {
  primary: {
    base: 'var(--color-action-primary-base)',
    hover: 'var(--color-action-primary-hover)',
    active: 'var(--color-action-primary-active)',
    focus: 'var(--color-action-primary-focus)',
    disabled: 'var(--color-action-primary-disabled)',
    bg: 'var(--color-surface-brand-subtle)',
    text: 'var(--color-text-brand)',
    border: 'var(--color-border-focus)',
  },
  secondary: {
    base: 'var(--color-action-secondary-base)',
    hover: 'var(--color-action-secondary-hover)',
    active: 'var(--color-action-secondary-active)',
    focus: 'var(--color-action-secondary-focus)',
    disabled: 'var(--color-action-secondary-disabled)',
    bg: 'var(--color-action-secondary-outline)',
    text: 'var(--color-brand-secondary)',
    border: 'var(--color-brand-secondary)',
  },
  success: {
    base: 'var(--color-brand-success)',
    hover: 'color-mix(in oklch, var(--color-brand-success), black 10%)',
    active: 'color-mix(in oklch, var(--color-brand-success), black 20%)',
    focus: 'color-mix(in oklch, var(--color-brand-success), white 20%)',
    disabled: 'color-mix(in oklch, var(--color-brand-success) 40%, transparent)',
    bg: 'var(--color-surface-success-subtle)',
    text: 'var(--color-text-success)',
    border: 'var(--color-border-success)',
  },
  warning: {
    base: 'var(--color-brand-warning)',
    hover: 'color-mix(in oklch, var(--color-brand-warning), black 10%)',
    active: 'color-mix(in oklch, var(--color-brand-warning), black 20%)',
    focus: 'color-mix(in oklch, var(--color-brand-warning), white 20%)',
    disabled: 'color-mix(in oklch, var(--color-brand-warning) 40%, transparent)',
    bg: 'var(--color-surface-warning-subtle)',
    text: 'var(--color-text-warning)',
    border: 'var(--color-brand-warning)',
  },
  danger: {
    base: 'var(--color-brand-error)',
    hover: 'color-mix(in oklch, var(--color-brand-error), black 10%)',
    active: 'color-mix(in oklch, var(--color-brand-error), black 20%)',
    focus: 'color-mix(in oklch, var(--color-brand-error), white 20%)',
    disabled: 'color-mix(in oklch, var(--color-brand-error) 40%, transparent)',
    bg: 'var(--color-surface-danger-subtle)',
    text: 'var(--color-text-error)',
    border: 'var(--color-border-error)',
  },
  neutral: {
    base: 'var(--color-text-secondary)',
    hover: 'var(--color-text-primary)',
    active: 'color-mix(in oklch, var(--color-text-primary), black 20%)',
    focus: 'var(--color-border-focus)',
    disabled: 'var(--color-text-disabled)',
    bg: 'color-mix(in oklch, var(--color-text-secondary) 8%, transparent)',
    text: 'var(--color-text-secondary)',
    border: 'var(--color-border-muted)',
  },
};

/**
 * Helper functions to access specific color scheme values.
 */
export const getColorSchemeBase = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].base;

export const getColorSchemeHover = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].hover;

export const getColorSchemeActive = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].active;

export const getColorSchemeFocus = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].focus;

export const getColorSchemeDisabled = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].disabled;

export const getColorSchemeBg = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].bg;

export const getColorSchemeText = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].text;

export const getColorSchemeBorder = (scheme: ColorSchemeToken): string =>
  colorSchemeMap[scheme].border;
