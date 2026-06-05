import { createGlobalStyle } from "styled-components";
import {
  darkThemeCssVariables,
  foundationCssVariables,
} from "./tokens/index";

const GlobalStyles = createGlobalStyle`
:root {
${foundationCssVariables}
}

.dark,
[data-theme="dark"] {
${darkThemeCssVariables}
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
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
