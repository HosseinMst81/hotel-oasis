import type { AppearanceToken } from "../styles";

export interface HasAppearance<Appearance extends string = AppearanceToken> {
  /** Visual appearance token such as solid, ghost, outline, or subtle. */
  appearance?: Appearance;
}
