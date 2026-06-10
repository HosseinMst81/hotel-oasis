export const loaderSizes = {
  sm: '2rem',
  md: '3rem',
  lg: '4rem',
  xl: '5rem',
} as const;

export type LoaderSize = keyof typeof loaderSizes;

export const loaderSpeeds = {
  slow: '1.5s',
  normal: '1s',
  fast: '0.6s',
} as const;

export type LoaderSpeed = keyof typeof loaderSpeeds;