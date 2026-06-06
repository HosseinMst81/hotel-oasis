import type { ColorSchemeToken } from "../styles";

export interface HasColorScheme<ColorScheme extends string = ColorSchemeToken> {
  /** Semantic color scheme token such as primary, success, warning, or neutral. */
  colorScheme?: ColorScheme;
}
