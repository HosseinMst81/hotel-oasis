import type { TextSize } from "../../tokens";

export interface HasSize<T extends string = TextSize> {
  /** Size variant backed by shared style tokens. */
  size?: T;
}
