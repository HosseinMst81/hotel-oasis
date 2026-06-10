import type {
  HasAppearance,
  HasLoading,
  HasMargin,
  HasPadding,
  HasRounded,
  HasColorScheme,
  HasSize,
  HasTransition,
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
    HasPadding {
  children: React.ReactNode;
}
