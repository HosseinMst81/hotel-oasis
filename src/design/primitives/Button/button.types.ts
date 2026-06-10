import type {
  HasAppearance,
  HasLoading,
  HasMargin,
  HasPadding,
  HasRounded,
  HasColorScheme,
  HasSize,
  HasTransition,
  HasDisabled,
} from "../../shared/capabilities";


export interface ButtonProps
  extends
    HasLoading,
    HasRounded,
    HasSize,
    HasTransition,
    HasColorScheme,
    HasMargin,
    HasAppearance,
    HasDisabled,
    HasPadding {
  children: React.ReactNode;
}
