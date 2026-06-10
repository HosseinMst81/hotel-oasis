import type { SpacingScale } from "../../tokens";

// shared/capabilities/HasStack.ts
export type StackAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch';
export type StackJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';

export interface HasStack {
  /** Gap between children (uses spacing tokens) */
  spacing?: SpacingScale;
  /** Cross-axis alignment (horizontal) */
  align?: StackAlign;
  /** Main-axis justification (vertical) – only works when there's extra height */
  justify?: StackJustify;
}