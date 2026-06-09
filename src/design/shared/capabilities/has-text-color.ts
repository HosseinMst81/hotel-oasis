import type { ColorScheme } from "../../tokens";

export interface HasTextColor {
  /** Text color using brand color schemes (primary, secondary, etc.) */
  textColor?: ColorScheme;
}