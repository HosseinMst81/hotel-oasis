import type { HasColorScheme, HasRounded, HasSize } from "../../shared/capabilities";

export interface ButtonProps extends HasRounded, HasColorScheme, HasSize {
    children: React.ReactNode;
}
