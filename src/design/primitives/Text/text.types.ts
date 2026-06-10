import type {
  HasClassName,
  HasMargin,
  HasPadding,
  HasSize,
} from "../../shared/capabilities";
import type { HasFontFamily } from "../../shared/capabilities/has-font-family";
import type { HasfullWidth } from "../../shared/capabilities/has-full-width";
import type { HasLayout } from "../../shared/capabilities/has-layout";
import type { HasLeading } from "../../shared/capabilities/has-leading";
import type { HasTextColor } from "../../shared/capabilities/has-text-color";
import type { HasWeight } from "../../shared/capabilities/has-weight";

export interface TextProps
  extends
    HasSize,
    HasfullWidth,
    HasMargin,
    HasPadding,
    HasClassName,
    HasLeading,
    HasWeight,
    HasTextColor,
    HasFontFamily,
    HasLayout {
  /** The content of the text element. */
  children: React.ReactNode;
}
