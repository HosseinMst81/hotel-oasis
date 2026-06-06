/**
 * Spacing Utilities Style Map
 * 
 * Maps spacing tokens to CSS property values.
 * Provides access to the spacing scale for margins, paddings, gaps, etc.
 * 
 * Philosophy:
 * - Consistent spacing scale throughout the application
 * - Prevents arbitrary spacing values
 * - Single source of truth for all spacing
 * 
 * Used by: all components needing margin, padding, or gap values
 */

export const spacings = [
  '0',
  'px',
  '0-5',
  '1',
  '1-5',
  '2',
  '2-5',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '10',
  '12',
  '14',
  '16',
  '20',
  '24',
  '32',
] as const;
export type SpacingToken = (typeof spacings)[number];

/**
 * Spacing map: maps tokens to CSS variable references.
 * All values reference design tokens for consistency.
 */
export const spacingMap: Record<SpacingToken, string> = {
  '0': 'var(--space-0)',
  'px': 'var(--space-px)',
  '0-5': 'var(--space-0-5)',
  '1': 'var(--space-1)',
  '1-5': 'var(--space-1-5)',
  '2': 'var(--space-2)',
  '2-5': 'var(--space-2-5)',
  '3': 'var(--space-3)',
  '4': 'var(--space-4)',
  '5': 'var(--space-5)',
  '6': 'var(--space-6)',
  '7': 'var(--space-7)',
  '8': 'var(--space-8)',
  '10': 'var(--space-10)',
  '12': 'var(--space-12)',
  '14': 'var(--space-14)',
  '16': 'var(--space-16)',
  '20': 'var(--space-20)',
  '24': 'var(--space-24)',
  '32': 'var(--space-32)',
};

/**
 * Get spacing value for a given token.
 */
export const getSpacing = (token: SpacingToken): string => spacingMap[token];

/**
 * Common spacing preset combinations.
 */
export const spacingPresetsMap = {
  // Padding presets
  'p-xs': `${spacingMap['1']} ${spacingMap['2']}`,
  'p-sm': `${spacingMap['1-5']} ${spacingMap['3']}`,
  'p-md': `${spacingMap['2']} ${spacingMap['4']}`,
  'p-lg': `${spacingMap['2-5']} ${spacingMap['5']}`,
  'p-xl': `${spacingMap['3']} ${spacingMap['6']}`,

  // Gap presets (for flexbox/grid)
  'gap-xs': spacingMap['1'],
  'gap-sm': spacingMap['2'],
  'gap-md': spacingMap['3'],
  'gap-lg': spacingMap['4'],
  'gap-xl': spacingMap['6'],
};

/**
 * Get preset spacing value.
 */
export const getSpacingPreset = (preset: string): string =>
  (spacingPresetsMap as Record<string, string>)[preset] || preset;
