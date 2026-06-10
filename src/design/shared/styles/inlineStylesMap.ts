import { css } from 'styled-components';
import type { HasInline } from '../capabilities/has-inline';
import { spacingTokens } from '../../tokens';


export const inlineStyles = (props: HasInline) => css`
  display: flex;
  flex-direction: row;
  gap: ${props.spacing ? spacingTokens[props.spacing] : '1'};
  align-items: ${props.align ?? 'stretch'};
  justify-content: ${props.justify ?? 'flex-start'};
  flex-wrap: ${props.wrap ?? 'nowrap'};
`;