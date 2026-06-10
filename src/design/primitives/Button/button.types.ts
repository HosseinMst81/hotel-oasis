import type {
  HasColorScheme,
  HasLoading,
  HasRounded,
  HasSize,
} from "../../shared/capabilities";
import type { HasTransition } from "../../shared/capabilities/has-transition";

export interface ButtonProps
  extends HasLoading, HasRounded, HasColorScheme, HasSize, HasTransition {
  children: React.ReactNode;
}
