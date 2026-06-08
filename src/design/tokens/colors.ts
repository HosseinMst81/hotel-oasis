/**
 * LAYER 1 — DESIGN TOKENS: Colors
 *
 * Source of truth for the Wild Oasis brand palette.
 * These map 1-to-1 with CSS custom properties in GlobalStyles.ts.
 * Framework-agnostic: safe to import in non-React contexts (e.g. Storybook themes, emails, scripts).
 *
 * Rule: NO components, NO styled-components, NO logic — only raw values.
 */

// ─── Semantic Aliases ─────────────────────────────────────────────────────────
// Use these in components — never raw hex values.
// Resolved at runtime via CSS custom properties.

// design/tokens/colors.ts

export const colorTokens = {
  // ================== brand colors
  brand: {
    primary: "var(--color-brand-primary)",
    secondary: "var(--color-brand-secondary)",
    accent: "var(--color-brand-accent)",
    success: "var(--color-brand-success)",
    warning: "var(--color-brand-warning)",
    error: "var(--color-brand-error)",
    info: "var(--color-brand-info)",
    background: "var(--color-brand-background)",
    foreground: "var(--color-brand-foreground)",
    dark: "var(--color-brand-dark)",
    light: "var(--color-brand-light)",
    muted: "var(--color-brand-muted)",
  },

  // ================== interactive colors
  interactive: {
    primaryHover: "var(--color-primary-hover)",
    primaryActive: "var(--color-primary-active)",
    primaryFocus: "var(--color-primary-focus)",
    primaryDisabled: "var(--color-primary-disabled)",
    primaryOutline: "var(--color-primary-outline)",

    secondaryHover: "var(--color-secondary-hover)",
    secondaryActive: "var(--color-secondary-active)",
    secondaryFocus: "var(--color-secondary-focus)",
    secondaryDisabled: "var(--color-secondary-disabled)",
    secondaryOutline: "var(--color-secondary-outline)",

    accentHover: "var(--color-accent-hover)",
    accentActive: "var(--color-accent-active)",
    accentFocus: "var(--color-accent-focus)",
    accentDisabled: "var(--color-accent-disabled)",
    accentOutline: "var(--color-accent-outline)",

    successHover: "var(--color-success-hover)",
    successActive: "var(--color-success-active)",
    successFocus: "var(--color-success-focus)",
    successDisabled: "var(--color-success-disabled)",
    successOutline: "var(--color-success-outline)",

    warningHover: "var(--color-warning-hover)",
    warningActive: "var(--color-warning-active)",
    warningFocus: "var(--color-warning-focus)",
    warningDisabled: "var(--color-warning-disabled)",
    warningOutline: "var(--color-warning-outline)",

    errorHover: "var(--color-error-hover)",
    errorActive: "var(--color-error-active)",
    errorFocus: "var(--color-error-focus)",
    errorDisabled: "var(--color-error-disabled)",
    errorOutline: "var(--color-error-outline)",

    infoHover: "var(--color-info-hover)",
    infoActive: "var(--color-info-active)",
    infoFocus: "var(--color-info-focus)",
    infoDisabled: "var(--color-info-disabled)",
    infoOutline: "var(--color-info-outline)",

    mutedHover: "var(--color-muted-hover)",
    mutedActive: "var(--color-muted-active)",
    mutedFocus: "var(--color-muted-focus)",
    mutedDisabled: "var(--color-muted-disabled)",
    mutedOutline: "var(--color-muted-outline)",

    darkHover: "var(--color-dark-hover)",
    darkActive: "var(--color-dark-active)",
    darkFocus: "var(--color-dark-focus)",
    darkDisabled: "var(--color-dark-disabled)",
    darkOutline: "var(--color-dark-outline)",

    lightHover: "var(--color-light-hover)",
    lightActive: "var(--color-light-active)",
    lightFocus: "var(--color-light-focus)",
    lightDisabled: "var(--color-light-disabled)",
    lightOutline: "var(--color-light-outline)",
  },

  // ================== subtle background colors
  subtle: {
    primarySubtle: "var(--color-bg-primary-subtle)",
    secondarySubtle: "var(--color-bg-secondary-subtle)",
    accentSubtle: "var(--color-bg-accent-subtle)",
    brandSubtle: "var(--color-bg-brand-subtle)",
    successSubtle: "var(--color-bg-success-subtle)",
    warningSubtle: "var(--color-bg-warning-subtle)",
    errorSubtle: "var(--color-bg-error-subtle)",
  },
} as const;

// Union type for all brand color schemes (usable by components)
export type ColorScheme = keyof typeof colorTokens.brand;

// Also export individual objects for direct access if needed
export const colors = colorTokens.brand;
export const interactiveColors = colorTokens.interactive;
export const subtleColors = colorTokens.subtle;
