import type { HasSize, HasError, HasMargin, HasPadding } from "../../shared/capabilities";
import type { HasfullWidth } from "../../shared/capabilities/has-full-width";

export interface InputProps
  extends
    HasSize,
    HasError,
    HasfullWidth,
    HasMargin,
    HasPadding,
    React.InputHTMLAttributes<HTMLInputElement> {}
