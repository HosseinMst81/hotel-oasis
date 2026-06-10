import { css } from 'styled-components';
import type { HasStack } from '../capabilities/has-stack';
import { spacingTokens } from '../../tokens';


export const stackStyles = (props: HasStack) => css`
  display: flex;
  flex-direction: column;
  gap: ${props.spacing ? spacingTokens[props.spacing] : '1'};
  align-items: ${props.align ?? 'stretch'};
  justify-content: ${props.justify ?? 'flex-start'};
`;