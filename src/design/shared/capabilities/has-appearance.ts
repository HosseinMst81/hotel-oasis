export type Appearance = "solid" | "ghost" | "outline" | "subtle" | "link";
export interface HasAppearance<T extends string = Appearance> {
  /** Visual appearance token such as solid, ghost, outline, or subtle. */
  appearance?: T;
}
