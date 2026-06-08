import type { HasColorScheme, HasRounded } from "../../shared/capabilities";

export interface ButtonProps extends HasRounded, HasColorScheme {
    children: React.ReactNode;
}
