// shared/styles/alignmentStyles.ts
import { css } from 'styled-components';
import { type TextAlign, textAlignValues, type AlignSelf, alignSelfValues, type JustifySelf, justifySelfValues } from '../../tokens';

export const textAlignStyles = (align?: TextAlign) => {
  if (!align) return css``;
  return css`
    text-align: ${textAlignValues[align]};
  `;
};

export const alignSelfStyles = (align?: AlignSelf) => {
  if (!align) return css``;
  return css`
    align-self: ${alignSelfValues[align]};
  `;
};

export const justifySelfStyles = (justify?: JustifySelf) => {
  if (!justify) return css``;
  return css`
    justify-self: ${justifySelfValues[justify]};
  `;
};