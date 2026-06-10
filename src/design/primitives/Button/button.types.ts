import type {
  HasColorScheme,
  HasLoading,
  HasRounded,
  HasSize,
} from "../../shared/capabilities";
import type { HasMargin } from "../../shared/capabilities/has-margin";
import type { HasPadding } from "../../shared/capabilities/has-padding";
import type { HasTransition } from "../../shared/capabilities/has-transition";

export interface ButtonProps
  extends
    HasLoading,
    HasRounded,
    HasColorScheme,
    HasSize,
    HasTransition,
    HasMargin,
    HasPadding {
  children: React.ReactNode;
}
