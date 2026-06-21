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
  HasLeftIcon,
  HasRightIcon,
} from "../../shared/capabilities";



export interface ButtonProps
  extends
    HasLeftIcon,
    HasRightIcon,
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

