/**
 * Transition Style Map
 * 
 * Maps transition tokens to duration + easing combinations.
 * Provides consistent motion across all interactive components.
 * 
 * Philosophy:
 * - fast: micro-interactions, feedback
 * - base: standard state changes
 * - slow: emphasis, important transitions
 * - Used to create cohesive motion language across the design system
 * 
 * Used by: Button, Input, Card, Modal, Dropdown, Tooltip, etc.
 */

export const transitions = ['fast', 'base', 'slow'] as const;
export type TransitionToken = (typeof transitions)[number];

/**
 * Transition map: duration + easing combinations.
 * Each provides a complete transition value and individual properties.
 */
export const transitionMap: Record<
  TransitionToken,
  {
    value: string;
    duration: string;
    easing: string;
  }
> = {
  fast: {
    value: 'var(--transition-fast)',
    duration: 'var(--duration-fast)',
    easing: 'var(--ease-standard)',
  },
  base: {
    value: 'var(--transition-base)',
    duration: 'var(--duration-normal)',
    easing: 'var(--ease-standard)',
  },
  slow: {
    value: 'var(--transition-slow)',
    duration: 'var(--duration-slow)',
    easing: 'var(--ease-standard)',
  },
};

/**
 * Helper functions to access transition properties.
 */
export const getTransition = (token: TransitionToken): string => transitionMap[token].value;
export const getTransitionDuration = (token: TransitionToken): string =>
  transitionMap[token].duration;
export const getTransitionEasing = (token: TransitionToken): string =>
  transitionMap[token].easing;

/**
 * Generate transition CSS for multiple properties.
 * Example: `getTransitionProperties('background-color', 'border-color')`
 */
export const getTransitionProperties = (token: TransitionToken, ...properties: string[]): string =>
  properties.map((prop) => `${prop} ${transitionMap[token].value}`).join(', ');

/**
 * Common transition combinations for typical use cases.
 */
export const transitionPresetsMap = {
  // Color changes
  colorFast: getTransitionProperties('fast', 'background-color', 'color', 'border-color'),
  colorBase: getTransitionProperties('base', 'background-color', 'color', 'border-color'),
  colorSlow: getTransitionProperties('slow', 'background-color', 'color', 'border-color'),

  // All properties
  allFast: `all ${transitionMap.fast.value}`,
  allBase: `all ${transitionMap.base.value}`,
  allSlow: `all ${transitionMap.slow.value}`,

  // Transform
  transformFast: `transform ${transitionMap.fast.value}`,
  transformBase: `transform ${transitionMap.base.value}`,
  transformSlow: `transform ${transitionMap.slow.value}`,

  // Opacity
  opacityFast: `opacity ${transitionMap.fast.value}`,
  opacityBase: `opacity ${transitionMap.base.value}`,
  opacitySlow: `opacity ${transitionMap.slow.value}`,

  // Shadow
  shadowFast: `box-shadow ${transitionMap.fast.value}`,
  shadowBase: `box-shadow ${transitionMap.base.value}`,
  shadowSlow: `box-shadow ${transitionMap.slow.value}`,
};
