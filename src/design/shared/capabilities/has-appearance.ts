export interface HasAppearance<
  Appearance extends string = "solid" | "ghost" | "outline" | "subtle",
> {
  /** Visual appearance token such as solid, ghost, outline, or subtle. */
  appearance?: Appearance;
}
