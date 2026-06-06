export type TokenValue = string | number;
export type TokenGroup = Record<string, TokenValue>;

export function defineTokens<const TTokens extends TokenGroup>(
  tokens: TTokens,
): TTokens {
  return tokens;
}
