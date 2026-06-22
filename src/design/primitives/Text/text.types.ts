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
    React.HTMLAttributes<HTMLDivElement>,
    HasFontSize,
    HasTextColor,
    HasFontFamily,
    HasFontWeight,
    HasLineHeight,
    HasLetterSpacing,
    HasfullWidth,
    HasMargin,
    HasPadding,
    HasClassName,
    HasLayout {
  /** The content of the text element. */
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}