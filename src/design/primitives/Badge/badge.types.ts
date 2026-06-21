import type {
  HasAppearance,
  HasColorScheme,
  HasDisabled,
  HasLoading,
  HasMargin,
  HasPadding,
  HasRounded,
  HasSize,
  HasTransition,
} from "../../shared/capabilities";

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<"span">,
    HasLoading,
    HasRounded,
    HasSize,
    HasTransition,
    HasColorScheme,
    HasMargin,
    HasAppearance,
    HasDisabled,
    HasPadding {
  children?: React.ReactNode;
}
