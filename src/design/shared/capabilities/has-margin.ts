// shared/capabilities/HasMargin.ts

import type { SpacingScale } from "../../tokens";

export interface HasMargin {
  /** Margin on all sides */
  m?: SpacingScale;
  /** Margin top */
  mt?: SpacingScale;
  /** Margin right */
  mr?: SpacingScale;
  /** Margin bottom */
  mb?: SpacingScale;
  /** Margin left */
  ml?: SpacingScale;
  /** Margin horizontal (left & right) */
  mx?: SpacingScale;
  /** Margin vertical (top & bottom) */
  my?: SpacingScale;
}
