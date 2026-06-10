// shared/styles/inputStyles.ts
import { css } from 'styled-components';
import type { HasError, HasSize } from '../capabilities';
import type { HasfullWidth } from '../capabilities/has-full-width';
import { colors, radius, spacingTokens } from '../../tokens';


export const inputStyles = (props: {
  size?: HasSize['size'];
  error?: HasError;
  fullWidth?: HasfullWidth['fullWidth'];
}) => css`
  display: block;
  width: ${props.fullWidth ? '100%' : 'auto'};
  padding: ${props.size === 'sm' ? spacingTokens[2] : props.size === 'lg' ? spacingTokens[3] : spacingTokens[2]};
  font-size: ${props.size === 'sm' ? '0.875rem' : props.size === 'lg' ? '1.125rem' : '1rem'};
  border: 1px solid ${props.error ? colors.error : 'var(--color-border, #cbd5e1)'};
  border-radius: ${radius.md};
  background-color: var(--color-background, white);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px color-mix(in oklch, ${colors.primary} 20%, transparent);
  }

  &:disabled {
    background-color: var(--color-muted, #f1f5f9);
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--color-muted, #94a3b8);
  }
`;