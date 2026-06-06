import type { TokenGroup } from "./types";

export function createCssVariables(tokens: TokenGroup): string {
  return Object.entries(tokens)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join("\n");
}
