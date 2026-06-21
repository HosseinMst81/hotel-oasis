import { css } from "styled-components";
import { colors, interactiveColors, type ColorScheme } from "../../tokens";
import type { Appearance } from "../../shared/capabilities/has-appearance";

type InputAppearance = Extract<Appearance, "solid" | "ghost" | "outline" | "subtle" | "link">;

const getInteractiveVar = (
  scheme: ColorScheme,
  state: "focus" | "disabled"
): string => {
  const key = `${scheme}${state.charAt(0).toUpperCase() + state.slice(1)}` as
    | keyof typeof interactiveColors;
  return interactiveColors[key];
};

const getBaseColor = (scheme: ColorScheme): string => colors[scheme];

/**
 * Input-specific appearance styling.
 *
 * Intent: modern, professional form-field look without hover-driven color swapping.
 * Focus ring + subtle border transitions are handled here; no component-level keyframes.
 */
export const inputAppearanceStyleMap = (
  appearance: InputAppearance = "outline",
  scheme: ColorScheme = "primary"
) => {
  const baseColor = getBaseColor(scheme);
  const focusColor = getInteractiveVar(scheme, "focus");
  const disabledColor = getInteractiveVar(scheme, "disabled");

  // For inputs we treat "appearance" primarily as border/background treatment.
  switch (appearance) {
    case "solid":
      return css`
        background-color: color-mix(in oklch, ${baseColor} 6%, transparent);
        color: var(--color-text-primary);
        border: 1px solid ${baseColor};

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px ${focusColor};
        }

        &:disabled {
          background-color: color-mix(in oklch, ${disabledColor} 10%, transparent);
          color: ${disabledColor};
          border-color: ${disabledColor};
          cursor: not-allowed;
        }
      `;

    case "ghost":
      return css`
        background-color: transparent;
        color: var(--color-text-primary);
        border: 1px solid var(--color-border-base);

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px ${focusColor};
        }

        &:disabled {
          background-color: transparent;
          color: ${disabledColor};
          border-color: color-mix(in oklch, ${disabledColor} 40%, transparent);
          cursor: not-allowed;
        }
      `;

    case "subtle":
      return css`
        background-color: color-mix(in oklch, ${baseColor} 10%, transparent);
        color: var(--color-text-primary);
        border: 1px solid color-mix(in oklch, ${baseColor} 25%, transparent);

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px ${focusColor};
        }

        &:disabled {
          background-color: color-mix(in oklch, ${disabledColor} 10%, transparent);
          color: ${disabledColor};
          border-color: color-mix(in oklch, ${disabledColor} 35%, transparent);
          cursor: not-allowed;
        }
      `;

    case "link":
      return css`
        background-color: transparent;
        color: ${baseColor};
        border: 1px solid transparent;

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px ${focusColor};
          border-radius: inherit;
        }

        &:disabled {
          color: ${disabledColor};
          cursor: not-allowed;
        }
      `;

    case "outline":
    default:
      return css`
        background-color: var(--color-surface-base);
        color: var(--color-text-primary);
        border: 1px solid var(--color-border-base);

        &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px ${focusColor};
          border-color: ${baseColor};
        }

        &:disabled {
          background-color: var(--color-surface-base);
          color: ${disabledColor};
          border-color: color-mix(in oklch, ${disabledColor} 40%, transparent);
          cursor: not-allowed;
        }
      `;
  }
};

