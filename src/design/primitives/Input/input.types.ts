import type React from "react";

import type {
  HasAppearance,
  HasColorScheme,
  HasDisabled,
  HasError,
  HasfullWidth,
  HasLoading,
  HasMargin,
  HasPadding,
  HasRounded,
  HasSize,
  HasTransition,
} from "../../shared/capabilities";

export interface InputProps
  extends
    Omit<React.ComponentPropsWithoutRef<"input">, "size">,  // <-- size
    HasAppearance,
    HasColorScheme,
    HasDisabled,
    HasError,
    HasLoading,
    HasMargin,
    HasPadding,
    HasRounded,
    HasfullWidth,
    HasSize,
    HasTransition {}