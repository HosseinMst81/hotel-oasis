import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

:root {
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
  --shadow-sm: 0 1px 2px 0 rgb(43 66 51 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(43 66 51 / 0.08), 0 2px 4px -2px rgb(43 66 51 / 0.08);
  --shadow-lg: 0 10px 15px -3px rgb(43 66 51 / 0.1), 0 4px 6px -4px rgb(43 66 51 / 0.1);

  /* ===== Border Radius (Organic/Soft Nature Feel) ===== */
  --radius-sm: 0.4rem;   /*  4px  */
  --radius-md: 0.8rem;   /*  8px  */
  --radius-lg: 1.2rem;   /* 12px  */
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

  --text-xs: 1.2rem;   /* 12px */
  --text-sm: 1.4rem;   /* 14px */
  --text-base: 1.6rem; /* 16px */
  --text-lg: 1.8rem;   /* 18px */
  --text-xl: 2rem;     /* 20px */
  --text-2xl: 2.4rem;  /* 24px */
  --text-3xl: 3rem;    /* 30px */
  --text-4xl: 3.6rem;  /* 36px */

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
    box-sizing: border-box;
    font-size: 62.5%;            /* 1rem = 10px */
    scroll-behavior: smooth;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-secondary);
    font-size: var(--text-base);               /* 1.6rem */
    line-height: var(--leading-normal);
    color: var(--color-text-primary);
    background-color: var(--color-brand-background);
    min-height: 100vh;
  }

  /* 2.  HEADINGS – elegant serif, brand‑forward */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    font-weight: 700;
    line-height: var(--leading-tight);
    color: var(--color-brand-foreground);
    letter-spacing: -0.02em;
  }

  h1 { font-size: var(--text-4xl); margin-bottom: var(--space-8); font-weight: 900; }   /* 36px */
  h2 { font-size: var(--text-3xl); margin-bottom: var(--space-6); font-weight: 800;}   /* 30px */
  h3 { font-size: var(--text-2xl); margin-bottom: var(--space-5); font-weight: 700;}   /* 24px */
  h4 { font-size: var(--text-xl);  margin-bottom: var(--space-4); font-weight: 700;}   /* 20px */
  h5 { font-size: var(--text-lg);  margin-bottom: var(--space-3); font-weight: 700;}   /* 18px */
  h6 { font-size: var(--text-base); margin-bottom: var(--space-2);font-weight: 700; } /* 16px */
  /* 3.  PARAGRAPHS & INLINE TEXT */
  p {
    margin-bottom: var(--space-4);
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
  }

  small, .text-small {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
  }

  strong, b {
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }

  mark {
    background-color: var(--color-bg-warning-subtle);
    color: inherit;
    padding: 0 0.2em;
    border-radius: var(--radius-sm);
  }

  /* 4.  LINKS */
  a {
    color: var(--color-brand-primary);
    text-decoration: none;
    transition: color var(--transition-fast, 150ms ease-in-out);
  }

  a:hover,
  a:focus-visible {
    color: var(--color-primary-hover);
    text-decoration: underline;
    outline: none;
  }

  a:active {
    color: var(--color-primary-active);
  }

  /* 5.  LISTS */
  ul, ol {
    margin-bottom: var(--space-4);
    padding-left: var(--space-6);
    color: var(--color-text-primary);
  }

  li {
    margin-bottom: var(--space-1);
    line-height: var(--leading-normal);
  }

  /* 6.  BLOCKQUOTE */
  blockquote {
    margin: var(--space-6) 0;
    padding: var(--space-4) var(--space-6);
    border-left: 4px solid var(--color-brand-secondary);
    background-color: var(--color-bg-brand-subtle);
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    font-style: italic;
    color: var(--color-text-secondary);
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  /* 7.  CODE & PRE */
  code {
    font-family: 'Courier New', monospace;
    font-size: 0.95em;
    padding: 0.2em 0.4em;
    background-color: var(--color-bg-brand-subtle);
    border-radius: var(--radius-sm);
    color: var(--color-brand-accent);
  }

  pre {
    background-color: var(--color-brand-dark);
    color: var(--color-brand-light);
    padding: var(--space-4);
    border-radius: var(--radius-md);
    overflow-x: auto;
    margin-bottom: var(--space-6);
  }

  pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: var(--text-sm);
  }

  /* 8.  TABLE */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--space-6);
    font-size: var(--text-sm);
  }

  th, td {
    padding: var(--space-3) var(--space-4);
    border-bottom: 1px solid var(--color-border-base);
    text-align: left;
  }

  th {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    background-color: var(--color-bg-brand-subtle);
  }

  /* 9.  FORM ELEMENTS (basic reset) */
  input, select, textarea, button {
    font-family: inherit;
    font-size: var(--text-base);
    color: var(--color-text-primary);
  }

  input, select, textarea {
    background-color: var(--color-brand-light);
    border: 1px solid var(--color-border-base);
    border-radius: var(--radius-md);
    padding: var(--space-3) var(--space-4);
    transition: border-color var(--transition-fast, 150ms ease-in-out);
  }

  input:focus, select:focus, textarea:focus {
    border-color: var(--color-brand-primary);
    outline: none;
    box-shadow: 0 0 0 3px var(--color-primary-outline);
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: var(--radius-full);
    background: none;
  }

  /* 10.  MEDIA */
  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* 11.  SELECTION */
  ::selection {
    background-color: var(--color-brand-primary);
    color: var(--color-text-inverse);
  }

  /* 12.  SCROLLBAR (subtle brand touch) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-brand-background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-muted);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-brand-primary);
  }

  /* 13.  UTILITY */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }

/* ===== Custom Scrollbar Style ===== */
@media (pointer: fine) {
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--color-brand-background);
  }
  
  ::-webkit-scrollbar-thumb {
    background: color-mix(in oklch, var(--color-brand-primary) 35%, transparent);
    border: 2px solid var(--color-brand-background);
    border-radius: var(--radius-full);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-primary);
  }
}


/* ===== Custom Personal Loading Indicator Component Injector ===== */
.custom-loading-oasis {
  width: var(--loader-size);
  height: var(--loader-size);
  border: 3px solid color-mix(in oklch, var(--color-brand-primary) 20%, transparent);
  border-top-color: var(--color-brand-primary);
  border-bottom-color: var(--color-secondary-active);
  border-radius: var(--radius-full);
  animation: oasis-spin var(--loader-speed) cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

@keyframes oasis-spin {
  to {
    transform: rotate(360deg);
  }
}

`;
export default GlobalStyles;
