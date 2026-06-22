import { css } from 'styled-components';
import type { BadgeProps } from '../../primitives/Badge/badge.types';

import { appearanceStyleMap, roundedMap, sizeMap } from '.';


import { marginStyles } from './marginStylesMap';
import { paddingStyles } from './paddingStylesMap';
import { transitionStyles } from './transitionStylesMap';

export const badgeStyles = (props: BadgeProps) => {
  const {
    rounded = 'xl',
    size = 'base',
    appearance = 'subtle',
    colorScheme = 'primary',
  } = props;

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    white-space: nowrap;
    user-select: none;

    letter-spacing: 0;

    ${roundedMap[rounded as keyof typeof roundedMap]}
    ${sizeMap[size as keyof typeof sizeMap]}


    ${appearanceStyleMap(appearance, colorScheme)}

    ${paddingStyles(props)}
    ${marginStyles(props)}

    /* Subtle depth + elegant border */
    border-style: solid;
    border-width: 1px;

    /* Smooth interaction */
    ${transitionStyles(props)}

    &:hover {
      transform: translateY(-0.1rem);
    }

    &:active {
      transform: translateY(0);
    }
  `;
};

