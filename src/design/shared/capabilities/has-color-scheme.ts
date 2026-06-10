import type { ColorScheme } from "../../tokens";

export interface HasColorScheme<T extends string = ColorScheme> {
  /** Semantic color scheme token such as primary, success, warning, or neutral. */
  colorScheme?: T;
}
