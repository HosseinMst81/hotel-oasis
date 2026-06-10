import type { HasClassName, HasColorScheme } from "../../shared/capabilities";
import type { HasLoaderSize } from "../../shared/capabilities/has-loader-size";
import type { HasLoaderSpeed } from "../../shared/capabilities/has-loader-speed";

export interface LoadingProps
  extends HasLoaderSize, HasLoaderSpeed, HasColorScheme, HasClassName {}
