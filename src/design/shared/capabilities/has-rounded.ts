import type { RoundedToken } from "../styles";

export interface HasRounded<Rounded extends string = RoundedToken> {
  /** Rounded appearance token for border-radius variants. */
  rounded?: Rounded;
}
