/* eslint-disable @typescript-eslint/no-explicit-any */
// ─── Color Scheme Map ─────────────────────────────────────────────────────────
// Maps semantic color slots to CSS variable groups.
// Each scheme defines: base, fg (foreground on base), hover, active, subtle, text-on-subtle, border
/** Standard color scheme set — maps to semantic design token slots */

import { css } from "styled-components";
import { colors, interactiveColors, type ColorScheme } from "../../tokens";

// Helper: convert "primary" + "hover" -> "primaryHover"
const getInteractiveKey = (scheme: ColorScheme, state: 'hover' | 'active' | 'focus' | 'disabled' | 'outline'): string => {
  // scheme is e.g., "primary", state "hover" -> "primaryHover"
  return `${scheme}${state.charAt(0).toUpperCase() + state.slice(1)}`;
};

// Create a style map for each color scheme
export const colorSchemeStylesMap: Record<ColorScheme, ReturnType<typeof css>> = {} as any;

for (const scheme of Object.keys(colors) as ColorScheme[]) {
 const baseColor = colors[scheme];
  const hoverKey = getInteractiveKey(scheme, 'hover');
  const activeKey = getInteractiveKey(scheme, 'active');
  const focusKey = getInteractiveKey(scheme, 'focus');
  const disabledKey = getInteractiveKey(scheme, 'disabled');

  const hoverVar = interactiveColors[hoverKey as keyof typeof interactiveColors];
  const activeVar = interactiveColors[activeKey as keyof typeof interactiveColors];
  const focusVar = interactiveColors[focusKey as keyof typeof interactiveColors];
  const disabledVar = interactiveColors[disabledKey as keyof typeof interactiveColors];

  colorSchemeStylesMap[scheme] = css`
    background-color: ${baseColor};
    color: var(--color-brand-foreground); 
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${hoverVar};
    }

    &:active:not(:disabled) {
      background-color: ${activeVar};
    }

    &:focus-visible:not(:disabled) {
      outline: 2px solid ${focusVar};
      outline-offset: 2px;
    }
    &:disabled {
      background-color: ${disabledVar};
      cursor: not-allowed;
      opacity: 0.6;
    }
  `;
}

// Override special schemes that need different text colors

colorSchemeStylesMap.primary = css`
  background-color: ${colors.primary};
  color: var(--color-white);
`;
colorSchemeStylesMap.dark = css`
  background-color: var(--color-black);
  color: var(--color-white);
`;

colorSchemeStylesMap.foreground = css`
  background-color: ${colors.foreground};
  color: ${colors.background};
`;
