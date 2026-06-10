import type { TransitionDelay, TransitionDuration, TransitionTiming } from "../../tokens";

export type TransitionProperty = 
  | 'all'
  | 'background'
  | 'background-color'
  | 'color'
  | 'opacity'
  | 'transform'
  | 'border-color'
  | 'box-shadow'
  | 'outline'
  | 'width'
  | 'height'
  | 'margin'
  | 'padding'
  | 'gap'
  | string; // allow custom properties

export interface HasTransition {
  /**
   * CSS properties to transition (default: 'all')
   */
  transition?: TransitionProperty | TransitionProperty[];
  /**
   * Duration of the transition (default: 'normal')
   */
  transitionDuration?: TransitionDuration;
  /**
   * Timing function (default: 'ease')
   */
  transitionTiming?: TransitionTiming;
  /**
   * Delay before transition starts (default: 'none')
   */
  transitionDelay?: TransitionDelay;
}