/**
 * Text Style Map
 * 
 * Maps text style tokens to complete typography combinations.
 * Each token defines: font-size, font-weight, line-height, letter-spacing.
 * 
 * Philosophy:
 * - Provides cohesive typography scales
 * - Display: large, eye-catching headings
 * - Heading: section-level headings
 * - Body: primary content and UI text
 * - Caption: supplementary, secondary information
 * - Code: monospace for technical content
 * 
 * Used by: Text, Heading, Paragraph, Label, Caption, etc.
 */

export const textStyles = [
  'display-lg',
  'display-md',
  'display-sm',
  'heading-lg',
  'heading-md',
  'heading-sm',
  'body-lg',
  'body-md',
  'body-sm',
  'caption-lg',
  'caption-md',
  'caption-sm',
  'code-md',
  'code-sm',
] as const;
export type TextStyleToken = (typeof textStyles)[number];

/**
 * Text style map: complete typography combinations.
 * Each defines font-family, size, weight, line-height, and letter-spacing.
 */
export const textStyleMap: Record<
  TextStyleToken,
  {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    letterSpacing: string;
    fontFamily?: string;
  }
> = {
  'display-lg': {
    fontSize: 'var(--text-5xl)',
    fontWeight: 'var(--font-weight-black)',
    lineHeight: 'var(--leading-tight)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-primary)',
  },
  'display-md': {
    fontSize: 'var(--text-4xl)',
    fontWeight: 'var(--font-weight-extrabold)',
    lineHeight: 'var(--leading-tight)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-primary)',
  },
  'display-sm': {
    fontSize: 'var(--text-3xl)',
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: 'var(--leading-tight)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-primary)',
  },
  'heading-lg': {
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: 'var(--leading-tight)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-primary)',
  },
  'heading-md': {
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--leading-snug)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-primary)',
  },
  'heading-sm': {
    fontSize: 'var(--text-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--leading-snug)',
    letterSpacing: 'var(--tracking-wide)',
    fontFamily: 'var(--font-primary)',
  },
  'body-lg': {
    fontSize: 'var(--text-lg)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--leading-relaxed)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-secondary)',
  },
  'body-md': {
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--leading-normal)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-secondary)',
  },
  'body-sm': {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--leading-normal)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-secondary)',
  },
  'caption-lg': {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: 'var(--leading-snug)',
    letterSpacing: 'var(--tracking-wide)',
    fontFamily: 'var(--font-secondary)',
  },
  'caption-md': {
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: 'var(--leading-snug)',
    letterSpacing: 'var(--tracking-wide)',
    fontFamily: 'var(--font-secondary)',
  },
  'caption-sm': {
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--leading-snug)',
    letterSpacing: 'var(--tracking-wider)',
    fontFamily: 'var(--font-secondary)',
  },
  'code-md': {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--leading-normal)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-mono)',
  },
  'code-sm': {
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--leading-normal)',
    letterSpacing: 'var(--tracking-normal)',
    fontFamily: 'var(--font-mono)',
  },
};

/**
 * Helper functions to access specific text style properties.
 */
export const getTextStyle = (style: TextStyleToken) => textStyleMap[style];
export const getTextFontSize = (style: TextStyleToken): string =>
  textStyleMap[style].fontSize;
export const getTextFontWeight = (style: TextStyleToken): string =>
  textStyleMap[style].fontWeight;
export const getTextLineHeight = (style: TextStyleToken): string =>
  textStyleMap[style].lineHeight;
export const getTextLetterSpacing = (style: TextStyleToken): string =>
  textStyleMap[style].letterSpacing;
