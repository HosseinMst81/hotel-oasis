// shared/styles/textColorStyles.ts
import { css } from 'styled-components';
import { colors, type ColorScheme } from '../../tokens';

export const textColorStyles = (color?: ColorScheme) => {
  if (!color) return css``;
  return css`
    color: ${colors[color]};
  `;
};