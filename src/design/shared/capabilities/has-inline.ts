
// shared/capabilities/HasInline.ts

import type { SpacingScale } from "../../tokens";

export type InlineAlign = 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
export type InlineJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export type InlineWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export interface HasInline {
  /** Gap between children (uses spacing tokens) */
  spacing?: SpacingScale;
  /** Cross-axis alignment (vertical) */
  align?: InlineAlign;
  /** Main-axis justification (horizontal) */
  justify?: InlineJustify;
  /** Wrap behavior */
  wrap?: InlineWrap;
}