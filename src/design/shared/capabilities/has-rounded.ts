import type { Rounded } from "../../tokens";

export interface HasRounded<T extends string = Rounded> {
  /** Rounded appearance token for border-radius variants. */
  rounded?: T;
}
