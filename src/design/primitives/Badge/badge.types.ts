import type {
  HasAppearance,
  HasColorScheme,
  HasDisabled,
  HasFontFamily,
  HasFontWeight,
  HasLetterSpacing,
  HasLineHeight,
  HasLoading,
  HasMargin,
  HasPadding,
  HasRounded,
  HasSize,
  HasTextColor,
  HasTransition,
} from "../../shared/capabilities";

export type BadgeSizes = 'xs' | 'sm' | 'md'
export interface BadgeProps
  extends
    React.ComponentPropsWithoutRef<"span">,
    HasTextColor,
    HasFontFamily,
    HasFontWeight,
    HasLineHeight,
    HasLetterSpacing,
    HasLoading,
    HasRounded,
    HasSize<BadgeSizes>,
    HasTransition,
    HasColorScheme,
    HasMargin,
    HasAppearance,
    HasDisabled,
    HasPadding {
  children?: React.ReactNode;
}
