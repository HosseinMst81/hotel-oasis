import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

:root {
  --color-black:#000000;
  --color-white:#ffffff;
  /* ===== Colors (Extracted from The Wild Oasis Logo) ===== */
  /* Brand Palettes in oklch() */
  --color-brand-primary: oklch(0.38 0.06 150);     /* Deep Forest Green #2b4233 */
  --color-brand-secondary: oklch(0.85 0.08 85);    /* Warm Cabin Cream/Gold #e0ca9b */
  --color-brand-accent: oklch(0.25 0.05 60);       /* Earthy Cabin Brown #3a2512 */
  
  /* System Status Colors */
  --color-brand-success: oklch(0.65 0.18 145);
  --color-brand-warning: oklch(0.78 0.16 75);
  --color-brand-error: oklch(0.55 0.22 25);
  --color-brand-info: oklch(0.60 0.14 230);
  
  /* Neutrals (Light Mode) */
  --color-brand-background: oklch(0.98 0.01 85);   /* Soft off-white */
  --color-brand-foreground: oklch(0.18 0.02 150);  /* Deep charcoal green */
  --color-brand-dark: oklch(0.12 0.02 150);
  --color-brand-light: oklch(0.99 0.005 85);
  --color-brand-muted: oklch(0.62 0.02 150);

  /* Interactive Variants - Primary */
  /* --color-primary-hover: color-mix(in oklch, var(--color-brand-primary), black 15%); */
  --color-primary-hover: color-mix(in oklch, var(--color-brand-primary), black 15%);
  --color-primary-active: color-mix(in oklch, var(--color-brand-primary), black 25%);
  --color-primary-focus: color-mix(in oklch, var(--color-brand-primary), white 20%);
  --color-primary-disabled: color-mix(in oklch, var(--color-brand-primary) 40%, transparent);
  --color-primary-outline: color-mix(in oklch, var(--color-brand-primary) 30%, transparent);

  /* Interactive Variants - Secondary */
  --color-secondary-hover: color-mix(in oklch, var(--color-brand-secondary), black 10%);
  --color-secondary-active: color-mix(in oklch, var(--color-brand-secondary), black 20%);
  --color-secondary-focus: color-mix(in oklch, var(--color-brand-secondary), white 30%);
  --color-secondary-disabled: color-mix(in oklch, var(--color-brand-secondary) 40%, transparent);
  --color-secondary-outline: color-mix(in oklch, var(--color-brand-secondary) 30%, transparent);
 
  /* Interactive Variants - Accent */
  --color-accent-hover: color-mix(in oklch, var(--color-brand-accent), black 10%);
  --color-accent-active: color-mix(in oklch, var(--color-brand-accent), black 20%);
  --color-accent-focus: color-mix(in oklch, var(--color-brand-accent), white 30%);
  --color-accent-disabled: color-mix(in oklch, var(--color-brand-accent) 40%, transparent);
  --color-accent-outline: color-mix(in oklch, var(--color-brand-accent) 30%, transparent);
  
  /* Interactive Variants - Info */
  --color-info-hover: color-mix(in oklch, var(--color-brand-info), black 10%);
  --color-info-active: color-mix(in oklch, var(--color-brand-info), black 20%);
  --color-info-focus: color-mix(in oklch, var(--color-brand-info), white 30%);
  --color-info-disabled: color-mix(in oklch, var(--color-brand-info) 40%, transparent);
  --color-info-outline: color-mix(in oklch, var(--color-brand-info) 30%, transparent);

  /* Interactive Variants - Muted */
  --color-muted-hover: color-mix(in oklch, var(--color-brand-muted), black 10%);
  --color-muted-active: color-mix(in oklch, var(--color-brand-muted), black 20%);
  --color-muted-focus: color-mix(in oklch, var(--color-brand-muted), white 30%);
  --color-muted-disabled: color-mix(in oklch, var(--color-brand-muted) 40%, transparent);
  --color-muted-outline: color-mix(in oklch, var(--color-brand-muted) 30%, transparent);

    /* Interactive Variants - success */
  --color-success-hover: color-mix(in oklch, var(--color-brand-success), black 10%);
  --color-success-active: color-mix(in oklch, var(--color-brand-success), black 20%);
  --color-success-focus: color-mix(in oklch, var(--color-brand-success), white 30%);
  --color-success-disabled: color-mix(in oklch, var(--color-brand-success) 40%, transparent);
  --color-success-outline: color-mix(in oklch, var(--color-brand-success) 30%, transparent);

  /* Interactive Variants - warning */
  --color-warning-hover: color-mix(in oklch, var(--color-brand-warning), black 10%);
  --color-warning-active: color-mix(in oklch, var(--color-brand-warning), black 20%);
  --color-warning-focus: color-mix(in oklch, var(--color-brand-warning), white 30%);
  --color-warning-disabled: color-mix(in oklch, var(--color-brand-warning) 40%, transparent);
  --color-warning-outline: color-mix(in oklch, var(--color-brand-warning) 30%, transparent);

    /* Interactive Variants - error */
  --color-error-hover: color-mix(in oklch, var(--color-brand-error), black 10%);
  --color-error-active: color-mix(in oklch, var(--color-brand-error), black 20%);
  --color-error-focus: color-mix(in oklch, var(--color-brand-error), white 30%);
  --color-error-disabled: color-mix(in oklch, var(--color-brand-error) 40%, transparent);
  --color-error-outline: color-mix(in oklch, var(--color-brand-error) 30%, transparent);

    /* Interactive Variants - dark */
  --color-dark-hover: color-mix(in oklch, var(--color-brand-dark), black 10%);
  --color-dark-active: color-mix(in oklch, var(--color-brand-dark), black 20%);
  --color-dark-focus: color-mix(in oklch, var(--color-brand-dark), white 30%);
  --color-dark-disabled: color-mix(in oklch, var(--color-brand-dark) 40%, transparent);
  --color-dark-outline: color-mix(in oklch, var(--color-brand-dark) 30%, transparent);

  /* Interactive Variants - light */
  --color-light-hover: color-mix(in oklch, var(--color-brand-light), black 10%);
  --color-light-active: color-mix(in oklch, var(--color-brand-light), black 20%);
  --color-light-focus: color-mix(in oklch, var(--color-brand-light), white 30%);
  --color-light-disabled: color-mix(in oklch, var(--color-brand-light) 40%, transparent);
  --color-light-outline: color-mix(in oklch, var(--color-brand-light) 30%, transparent);

  /* Subtle Background Variants */
  --color-bg-brand-subtle: color-mix(in oklch, var(--color-brand-primary) 8%, transparent);
  --color-bg-success-subtle: color-mix(in oklch, var(--color-brand-success) 10%, transparent);
  --color-bg-warning-subtle: color-mix(in oklch, var(--color-brand-warning) 10%, transparent);
  --color-bg-error-subtle: color-mix(in oklch, var(--color-brand-error) 10%, transparent);

  /* Semantic Typography Colors */
  --color-text-primary: var(--color-brand-foreground);
  --color-text-secondary: var(--color-brand-muted);
  --color-text-inverse: var(--color-brand-light);
  --color-text-error: var(--color-brand-error);

  /* Semantic Border Colors */
  --color-border-base: color-mix(in oklch, var(--color-brand-foreground) 15%, transparent);
  --color-border-error: var(--color-brand-error);
  --color-border-success: var(--color-brand-success);

  /* Gradients */
  --gradient-bg-brand: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));
  --gradient-text-brand: linear-gradient(to right, var(--color-brand-primary), var(--color-brand-secondary));
  --color-gradient-aurora: linear-gradient(210deg, oklch(0.55 0.12 160), oklch(0.38 0.06 150), oklch(0.25 0.05 60));
  --color-gradient-instagram: linear-gradient(45deg, oklch(0.55 0.2 30), oklch(0.6 0.22 340), oklch(0.7 0.18 70));
  --color-gradient-first: var(--color-gradient-aurora);
  --color-gradient-second: var(--color-gradient-instagram);

  /* ===== Shadows ===== */
  --shadow-xs: 0 1px 1px 0 rgb(43 66 51 / 0.01);
  --shadow-sm: 0 1px 2px 0 rgb(43 66 51 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(43 66 51 / 0.08), 0 2px 4px -2px rgb(43 66 51 / 0.08);
  --shadow-lg: 0 10px 15px -3px rgb(43 66 51 / 0.1), 0 4px 6px -4px rgb(43 66 51 / 0.1);

  /* ===== Border Radius (Organic/Soft Nature Feel) ===== */
  --radius-sm: 0.4rem;   /*  4px  */
  --radius-md: 0.8rem;   /*  8px  */
  --radius-lg: 1.2rem;   /* 12px  */
  --radius-xl: 2rem;     /* 20px  */
  --radius-full: 9999px;

  /* ===== Spacing ===== */
  --space-1: 0.4rem;   /*  4px  */
  --space-2: 0.8rem;   /*  8px  */
  --space-3: 1.2rem;   /* 12px  */
  --space-4: 1.6rem;   /* 16px  */
  --space-5: 2rem;     /* 20px  */
  --space-6: 2.4rem;   /* 24px  */
  --space-8: 3.2rem;   /* 32px  */
  --space-10: 4rem;    /* 40px  */
  --space-12: 4.8rem;  /* 48px  */

  /* ===== Typography ===== */
  --font-base: 'Poppins', system-ui, sans-serif;
  --font-primary: 'Cinzel', 'Playfair Display', serif; /* Inspired by the natural elegance of the typography */
  --font-secondary: var(--font-base);
  --font-mono: 'Courier New', monospace;

  --text-xs: 1.2rem;   /* 12px */
  --text-sm: 1.4rem;   /* 14px */
  --text-base: 1.6rem; /* 16px */
  --text-lg: 1.8rem;   /* 18px */
  --text-xl: 2rem;     /* 20px */
  --text-2xl: 2.4rem;  /* 24px */
  --text-3xl: 3rem;    /* 30px */
  --text-4xl: 3.6rem;  /* 36px */
  --text-5xl: 4rem;  /* 40px */

  /* ===== Leadings ===== */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* ===== Custom Loading Indicator Config ===== */
  --loader-size: 40px;
  --loader-speed: 1.2s;
}

/* ===== Dark Mode Theme Overrides ===== */
.dark {
  /* Invert contrast and drop brightness while keeping nature/earth tones */
  --color-brand-background: oklch(0.14 0.015 150);  /* Deep muted forest background */
  --color-brand-foreground: oklch(0.94 0.02 85);    /* Soft warm cream text */
  --color-brand-dark: oklch(0.08 0.01 150);
  --color-brand-light: oklch(0.20 0.02 150);
  --color-brand-muted: oklch(0.65 0.02 85);
  
  --color-brand-primary: oklch(0.55 0.07 150);     /* Brighter forest green for dark background readability */
  --color-brand-secondary: oklch(0.80 0.08 85);    /* Retain soft warm cabin glow */
  --color-brand-accent: oklch(0.40 0.05 60);       /* Lighter rustic brown */

  /* Interactive Variants Updates for Dark Backgrounds */
  --color-primary-hover: color-mix(in oklch, var(--color-brand-primary), white 15%);
  --color-primary-active: color-mix(in oklch, var(--color-brand-primary), white 25%);
  --color-primary-focus: color-mix(in oklch, var(--color-brand-primary), black 20%);
  
  --color-secondary-hover: color-mix(in oklch, var(--color-brand-secondary), white 10%);
  --color-secondary-active: color-mix(in oklch, var(--color-brand-secondary), white 20%);

  /* Shadow overrides for depth on dark background */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.5);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.6);
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
  background-color: var(--color-surface-canvas);
  color: var(--color-text-primary);
  font-family: var(--font-secondary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

body,
button,
input,
select,
textarea {
  font: inherit;
}

button,
input,
select,
textarea {
  color: inherit;
}

button {
  border: 0;
  background: none;
  cursor: pointer;
}

button:disabled,
[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: var(--opacity-disabled);
}

a {
  color: var(--color-text-brand);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: var(--focus-ring-width) solid var(--color-border-focus);
  outline-offset: var(--focus-ring-offset);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--color-brand-foreground);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-normal);
  line-height: var(--leading-tight);
}

h1 { font-size: var(--text-4xl); margin-bottom: var(--space-8); font-weight: var(--font-weight-black); }
h2 { font-size: var(--text-3xl); margin-bottom: var(--space-6); font-weight: var(--font-weight-extrabold); }
h3 { font-size: var(--text-2xl); margin-bottom: var(--space-5); }
h4 { font-size: var(--text-xl); margin-bottom: var(--space-4); }
h5 { font-size: var(--text-lg); margin-bottom: var(--space-3); }
h6 { font-size: var(--text-base); margin-bottom: var(--space-2); }

p {
  margin-bottom: var(--space-4);
  color: var(--color-text-primary);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

small,
.text-small {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
}

strong,
b {
  font-weight: var(--font-weight-semibold);
}

mark {
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-warning-subtle);
  color: inherit;
  padding-inline: 0.2em;
}

ul,
ol {
  margin-bottom: var(--space-4);
  padding-left: var(--space-6);
}

li {
  margin-bottom: var(--space-1);
  line-height: var(--leading-normal);
}

blockquote {
  margin: var(--space-6) 0;
  padding: var(--space-4) var(--space-6);
  border-left: var(--space-1) solid var(--color-brand-secondary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  background-color: var(--color-bg-brand-subtle);
  color: var(--color-text-secondary);
  font-style: italic;
}

blockquote p:last-child {
  margin-bottom: 0;
}

code {
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-brand-subtle);
  color: var(--color-brand-accent);
  font-family: var(--font-mono);
  font-size: 0.95em;
  padding: 0.2em 0.4em;
}

pre {
  margin-bottom: var(--space-6);
  overflow-x: auto;
  border-radius: var(--radius-md);
  background-color: var(--color-surface-inverse);
  color: var(--color-text-inverse);
  padding: var(--space-4);
}

pre code {
  background: none;
  color: inherit;
  font-size: var(--text-sm);
  padding: 0;
}

table {
  width: 100%;
  margin-bottom: var(--space-6);
  border-collapse: collapse;
  font-size: var(--text-sm);
}

th,
td {
  border-bottom: 1px solid var(--color-border-base);
  padding: var(--space-3) var(--space-4);
  text-align: left;
}

th {
  background-color: var(--color-bg-brand-subtle);
  color: var(--color-text-secondary);
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
}

input,
select,
textarea {
  border: 1px solid var(--color-border-base);
  border-radius: var(--radius-md);
  background-color: var(--color-surface-base);
  padding: var(--space-3) var(--space-4);
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--color-border-focus);
  outline: none;
  box-shadow: var(--focus-ring);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

img,
video {
  height: auto;
}

::selection {
  background-color: var(--color-brand-primary);
  color: var(--color-text-inverse);
}

@media (pointer: fine) {
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-surface-canvas);
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid var(--color-surface-canvas);
    border-radius: var(--radius-full);
    background: color-mix(in oklch, var(--color-brand-primary) 35%, transparent);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-primary);
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

.custom-loading-oasis {
  width: var(--loader-size);
  height: var(--loader-size);
  border: 3px solid color-mix(in oklch, var(--color-brand-primary) 20%, transparent);
  border-top-color: var(--color-brand-primary);
  border-bottom-color: var(--color-secondary-active);
  border-radius: var(--radius-full);
  animation: oasis-spin var(--loader-speed) var(--ease-bounce) infinite;
}

@keyframes oasis-spin {
  to {
    transform: rotate(360deg);
  }
}
`;

export default GlobalStyles;
