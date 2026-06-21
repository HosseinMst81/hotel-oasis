import type {
  HasClassName,
  HasMargin,
  HasPadding,
} from "../../shared/capabilities";
import type { HasFontFamily } from "../../shared/capabilities/has-font-family";
import type { HasFontSize } from "../../shared/capabilities/has-font-size";
import type { HasfullWidth } from "../../shared/capabilities/has-full-width";
import type { HasLayout } from "../../shared/capabilities/has-layout";
import type { HasLetterSpacing } from "../../shared/capabilities/has-letter-spacing";
import type { HasLineHeight } from "../../shared/capabilities/has-line-height";
import type { HasTextColor } from "../../shared/capabilities/has-text-color";
import type { HasFontWeight } from "../../shared/capabilities/has-weight";

export interface TextProps
  extends
    HasFontSize,
    HasfullWidth,
    HasMargin,
    HasPadding,
    HasClassName,
    HasFontWeight,
    HasLetterSpacing,
    HasLineHeight,
    HasTextColor,
    HasFontFamily,
    HasLayout {
  /** The content of the text element. */
  children: React.ReactNode;
}
