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
  HasFontFamily,
  HasFontSize,
  HasFontWeight,
  HasTextColor,
  HasLetterSpacing,
  HasLineHeight,
} from "../../shared/capabilities";


export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>, // For native button actions like : onClick , onMouseHover ,...
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
    HasPadding,
    HasFontSize,
    HasTextColor,
    HasFontFamily,
    HasLineHeight,
    HasLetterSpacing,
    HasFontWeight {
  children?: React.ReactNode;
}
