// design/tokens/alignment.ts

export const textAlignValues = {
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify',
} as const;

export type TextAlign = keyof typeof textAlignValues;

export const alignSelfValues = {
  auto: 'auto',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline',
} as const;

export type AlignSelf = keyof typeof alignSelfValues;

export const justifySelfValues = {
  auto: 'auto',
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
} as const;

export type JustifySelf = keyof typeof justifySelfValues;