import type { HasClassName, HasColor } from "../../shared/capabilities";
import type { HasLoaderSize } from "../../shared/capabilities/HasLoaderSize";
import type { HasLoaderSpeed } from "../../shared/capabilities/HasLoaderSpeed";

export interface LoadingProps extends HasLoaderSize,HasLoaderSpeed, HasColor , HasClassName {}
