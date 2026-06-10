import type { SpacingScale } from "../../tokens";

export interface HasPadding {
  /** Padding on all sides */
  p?: SpacingScale;
  /** Padding top */
  pt?: SpacingScale;
  /** Padding right */
  pr?: SpacingScale;
  /** Padding bottom */
  pb?: SpacingScale;
  /** Padding left */
  pl?: SpacingScale;
  /** Padding horizontal (left & right) */
  px?: SpacingScale;
  /** Padding vertical (top & bottom) */
  py?: SpacingScale;
}