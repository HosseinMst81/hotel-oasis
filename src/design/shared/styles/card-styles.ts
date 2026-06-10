import { css } from 'styled-components';
import { colors, radius, shadowTokens, type ColorScheme, type ShadowScale } from '../../tokens';


export const cardStyles = (props: {
  rounded?: keyof typeof radius;
  shadow?: ShadowScale;
  colorScheme?: ColorScheme;
}) => css`
  background-color: ${props.colorScheme ? colors[props.colorScheme] : 'var(--color-surface, white)'};
  border-radius: ${props.rounded ? radius[props.rounded] : radius.md};
  box-shadow: ${props.shadow ? shadowTokens[props.shadow] : shadowTokens.md};
  overflow: hidden;
  transition: box-shadow 0.2s ease;
`;