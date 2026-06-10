import { css } from 'styled-components';
import { colors, interactiveColors, type ColorScheme } from '../../tokens';
import type { Appearance } from '../capabilities';

// Helper to get interactive variable for a given scheme and state
const getInteractiveVar = (scheme: ColorScheme, state: 'hover' | 'active' | 'focus' | 'disabled' | 'outline'): string => {
  const key = `${scheme}${state.charAt(0).toUpperCase() + state.slice(1)}` as keyof typeof interactiveColors;
  return interactiveColors[key];
};

// Base color for scheme (e.g., var(--color-brand-primary))
const getBaseColor = (scheme: ColorScheme): string => colors[scheme];

export const appearanceStyleMap = (appearance: Appearance = 'solid', scheme: ColorScheme = 'primary') => {
  const baseColor = getBaseColor(scheme);
  const hoverColor = getInteractiveVar(scheme, 'hover');
  const activeColor = getInteractiveVar(scheme, 'active');
  const focusColor = getInteractiveVar(scheme, 'focus');
//   const outlineColor = getInteractiveVar(scheme, 'outline');
  const disabledColor = getInteractiveVar(scheme, 'disabled');

  switch (appearance) {
    case 'solid':
      return css`
        background-color: ${baseColor};
        color: var(--color-white, white);
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background-color: ${hoverColor};
        }
        &:active:not(:disabled) {
          background-color: ${activeColor};
        }
        &:focus-visible:not(:disabled) {
          outline: 2px solid ${focusColor};
          outline-offset: 2px;
        }
        &:disabled {
          background-color: ${disabledColor};
          cursor: not-allowed;
          opacity: 0.6;
        }
      `;

    case 'ghost':
      return css`
        background-color: transparent;
        color: ${baseColor};
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background-color: color-mix(in oklch, ${baseColor} 10%, transparent);
          color: ${hoverColor};
        }
        &:active:not(:disabled) {
          background-color: color-mix(in oklch, ${baseColor} 20%, transparent);
        }
        &:focus-visible:not(:disabled) {
          outline: 2px solid ${focusColor};
          outline-offset: 2px;
        }
        &:disabled {
          color: ${disabledColor};
          cursor: not-allowed;
          opacity: 0.4;
        }
      `;

    case 'outline':
      return css`
        background-color: transparent;
        color: ${baseColor};
        border: 1px solid ${baseColor};
        &:hover:not(:disabled) {
          background-color: ${baseColor};
          color: var(--color-white, white);
          border-color: ${hoverColor};
        }
        &:active:not(:disabled) {
          background-color: ${activeColor};
          border-color: ${activeColor};
        }
        &:focus-visible:not(:disabled) {
          outline: 2px solid ${focusColor};
          outline-offset: 2px;
        }
        &:disabled {
          border-color: ${disabledColor};
          color: ${disabledColor};
          cursor: not-allowed;
          opacity: 0.6;
        }
      `;

    case 'subtle':
      return css`
        background-color: color-mix(in oklch, ${baseColor} 15%, transparent);
        color: ${baseColor};
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background-color: color-mix(in oklch, ${baseColor} 25%, transparent);
          color: ${hoverColor};
        }
        &:active:not(:disabled) {
          background-color: color-mix(in oklch, ${baseColor} 35%, transparent);
        }
        &:focus-visible:not(:disabled) {
          outline: 2px solid ${focusColor};
          outline-offset: 2px;
        }
        &:disabled {
          background-color: color-mix(in oklch, ${disabledColor} 15%, transparent);
          color: ${disabledColor};
          cursor: not-allowed;
          opacity: 0.5;
        }
      `;

    case 'link':
      return css`
        background-color: transparent;
        color: ${baseColor};
        border: none;
        padding: 0;
        text-decoration: underline;
        text-underline-offset: 2px;
        &:hover:not(:disabled) {
          color: ${hoverColor};
          text-decoration-thickness: 2px;
        }
        &:active:not(:disabled) {
          color: ${activeColor};
        }
        &:focus-visible:not(:disabled) {
          outline: 2px solid ${focusColor};
          outline-offset: 2px;
          border-radius: 2px;
        }
        &:disabled {
          color: ${disabledColor};
          cursor: not-allowed;
          opacity: 0.5;
        }
      `;

    default:
      return css``;
  }
};