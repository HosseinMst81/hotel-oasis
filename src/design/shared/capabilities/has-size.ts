import type { SizeToken } from "../styles";

export interface HasSize<Size extends string = SizeToken> {
  /** Size variant backed by shared style tokens. */
  size?: Size;
}
