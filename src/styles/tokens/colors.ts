import { defineTokens } from "./types";

export const lightColorTokens = defineTokens({
  "color-palette-forest-900": "oklch(0.18 0.02 150)",
  "color-palette-forest-800": "oklch(0.25 0.05 60)",
  "color-palette-forest-700": "oklch(0.38 0.06 150)",
  "color-palette-forest-600": "oklch(0.45 0.07 150)",
  "color-palette-forest-500": "oklch(0.55 0.07 150)",
  "color-palette-cream-50": "oklch(0.99 0.005 85)",
  "color-palette-cream-100": "oklch(0.98 0.01 85)",
  "color-palette-cream-300": "oklch(0.85 0.08 85)",
  "color-palette-earth-800": "oklch(0.25 0.05 60)",
  "color-palette-success-600": "oklch(0.65 0.18 145)",
  "color-palette-warning-600": "oklch(0.78 0.16 75)",
  "color-palette-danger-600": "oklch(0.55 0.22 25)",
  "color-palette-info-600": "oklch(0.60 0.14 230)",

  "color-brand-primary": "var(--color-palette-forest-700)",
  "color-brand-secondary": "var(--color-palette-cream-300)",
  "color-brand-accent": "var(--color-palette-earth-800)",
  "color-brand-success": "var(--color-palette-success-600)",
  "color-brand-warning": "var(--color-palette-warning-600)",
  "color-brand-error": "var(--color-palette-danger-600)",
  "color-brand-info": "var(--color-palette-info-600)",
  "color-brand-background": "var(--color-palette-cream-100)",
  "color-brand-foreground": "var(--color-palette-forest-900)",
  "color-brand-dark": "oklch(0.12 0.02 150)",
  "color-brand-light": "var(--color-palette-cream-50)",
  "color-brand-muted": "oklch(0.62 0.02 150)",

  "color-surface-canvas": "var(--color-brand-background)",
  "color-surface-base": "var(--color-brand-light)",
  "color-surface-raised": "var(--color-brand-light)",
  "color-surface-overlay": "var(--color-brand-light)",
  "color-surface-inverse": "var(--color-brand-dark)",
  "color-surface-brand-subtle":
    "color-mix(in oklch, var(--color-brand-primary) 8%, transparent)",
  "color-surface-success-subtle":
    "color-mix(in oklch, var(--color-brand-success) 10%, transparent)",
  "color-surface-warning-subtle":
    "color-mix(in oklch, var(--color-brand-warning) 10%, transparent)",
  "color-surface-danger-subtle":
    "color-mix(in oklch, var(--color-brand-error) 10%, transparent)",
  "color-surface-info-subtle":
    "color-mix(in oklch, var(--color-brand-info) 10%, transparent)",

  "color-text-primary": "var(--color-brand-foreground)",
  "color-text-secondary": "var(--color-brand-muted)",
  "color-text-tertiary":
    "color-mix(in oklch, var(--color-brand-foreground) 56%, transparent)",
  "color-text-inverse": "var(--color-brand-light)",
  "color-text-brand": "var(--color-brand-primary)",
  "color-text-success": "var(--color-brand-success)",
  "color-text-warning": "var(--color-brand-warning)",
  "color-text-error": "var(--color-brand-error)",
  "color-text-info": "var(--color-brand-info)",
  "color-text-disabled":
    "color-mix(in oklch, var(--color-brand-foreground) 34%, transparent)",

  "color-border-base":
    "color-mix(in oklch, var(--color-brand-foreground) 15%, transparent)",
  "color-border-muted":
    "color-mix(in oklch, var(--color-brand-foreground) 9%, transparent)",
  "color-border-strong":
    "color-mix(in oklch, var(--color-brand-foreground) 24%, transparent)",
  "color-border-focus": "var(--color-brand-primary)",
  "color-border-error": "var(--color-brand-error)",
  "color-border-success": "var(--color-brand-success)",

  "color-action-primary-base": "var(--color-brand-primary)",
  "color-action-primary-hover":
    "color-mix(in oklch, var(--color-brand-primary), black 15%)",
  "color-action-primary-active":
    "color-mix(in oklch, var(--color-brand-primary), black 25%)",
  "color-action-primary-focus":
    "color-mix(in oklch, var(--color-brand-primary), white 20%)",
  "color-action-primary-disabled":
    "color-mix(in oklch, var(--color-brand-primary) 40%, transparent)",
  "color-action-primary-outline":
    "color-mix(in oklch, var(--color-brand-primary) 30%, transparent)",
  "color-action-secondary-base": "var(--color-brand-secondary)",
  "color-action-secondary-hover":
    "color-mix(in oklch, var(--color-brand-secondary), black 10%)",
  "color-action-secondary-active":
    "color-mix(in oklch, var(--color-brand-secondary), black 20%)",
  "color-action-secondary-focus":
    "color-mix(in oklch, var(--color-brand-secondary), white 30%)",
  "color-action-secondary-disabled":
    "color-mix(in oklch, var(--color-brand-secondary) 40%, transparent)",
  "color-action-secondary-outline":
    "color-mix(in oklch, var(--color-brand-secondary) 30%, transparent)",

  "color-primary-hover": "var(--color-action-primary-hover)",
  "color-primary-active": "var(--color-action-primary-active)",
  "color-primary-focus": "var(--color-action-primary-focus)",
  "color-primary-disabled": "var(--color-action-primary-disabled)",
  "color-primary-outline": "var(--color-action-primary-outline)",
  "color-secondary-hover": "var(--color-action-secondary-hover)",
  "color-secondary-active": "var(--color-action-secondary-active)",
  "color-secondary-focus": "var(--color-action-secondary-focus)",
  "color-secondary-disabled": "var(--color-action-secondary-disabled)",
  "color-secondary-outline": "var(--color-action-secondary-outline)",
  "color-bg-brand-subtle": "var(--color-surface-brand-subtle)",
  "color-bg-success-subtle": "var(--color-surface-success-subtle)",
  "color-bg-warning-subtle": "var(--color-surface-warning-subtle)",
  "color-bg-error-subtle": "var(--color-surface-danger-subtle)",

  "gradient-bg-brand":
    "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent))",
  "gradient-text-brand":
    "linear-gradient(to right, var(--color-brand-primary), var(--color-brand-secondary))",
  "color-gradient-aurora":
    "linear-gradient(210deg, oklch(0.55 0.12 160), oklch(0.38 0.06 150), oklch(0.25 0.05 60))",
  "color-gradient-instagram":
    "linear-gradient(45deg, oklch(0.55 0.2 30), oklch(0.6 0.22 340), oklch(0.7 0.18 70))",
  "color-gradient-first": "var(--color-gradient-aurora)",
  "color-gradient-second": "var(--color-gradient-instagram)",
});

export const darkColorTokens = defineTokens({
  "color-palette-forest-900": "oklch(0.94 0.02 85)",
  "color-palette-forest-800": "oklch(0.40 0.05 60)",
  "color-palette-forest-700": "oklch(0.55 0.07 150)",
  "color-palette-cream-50": "oklch(0.20 0.02 150)",
  "color-palette-cream-100": "oklch(0.14 0.015 150)",
  "color-palette-cream-300": "oklch(0.80 0.08 85)",
  "color-brand-background": "var(--color-palette-cream-100)",
  "color-brand-foreground": "var(--color-palette-forest-900)",
  "color-brand-dark": "oklch(0.08 0.01 150)",
  "color-brand-light": "var(--color-palette-cream-50)",
  "color-brand-muted": "oklch(0.65 0.02 85)",
  "color-brand-primary": "var(--color-palette-forest-700)",
  "color-brand-secondary": "var(--color-palette-cream-300)",
  "color-brand-accent": "var(--color-palette-forest-800)",
  "color-action-primary-hover":
    "color-mix(in oklch, var(--color-brand-primary), white 15%)",
  "color-action-primary-active":
    "color-mix(in oklch, var(--color-brand-primary), white 25%)",
  "color-action-primary-focus":
    "color-mix(in oklch, var(--color-brand-primary), black 20%)",
  "color-action-secondary-hover":
    "color-mix(in oklch, var(--color-brand-secondary), white 10%)",
  "color-action-secondary-active":
    "color-mix(in oklch, var(--color-brand-secondary), white 20%)",
});
