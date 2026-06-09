import type { AlignSelf, TextAlign, JustifySelf } from "../../tokens/alignment";

export interface HasTextAlign {
  textAlign?: TextAlign;
}
export interface HasJustifySelf {
  justifySelf?: JustifySelf;
}
export interface HasAlignSelf {
  alignSelf?: AlignSelf;
}

export interface HasLayout extends HasTextAlign, HasAlignSelf, HasJustifySelf {}
