// shared/styles/transitionStyles.ts
import { css } from 'styled-components';
import type { HasTransition } from '../capabilities/has-transition';
import { transitionDelays, transitionDurations, transitionTimings } from '../../tokens';

export const transitionStyles = (props: HasTransition) => {
  const {
    transition = 'all',
    transitionDuration = 'normal',
    transitionTiming = 'ease',
    transitionDelay = 'none',
  } = props;

  const durationValue = transitionDurations[transitionDuration];
  const timingValue = transitionTimings[transitionTiming];
  const delayValue = transitionDelays[transitionDelay];
  const properties = Array.isArray(transition) ? transition.join(', ') : transition;

  return css`
    transition: ${properties} ${durationValue} ${timingValue} ${delayValue};
  `;
};