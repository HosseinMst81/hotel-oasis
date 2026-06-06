/**
 * Flex Helpers Style Map
 * 
 * Maps flex layout tokens to consistent flexbox property combinations.
 * Enables rapid composition of layout primitives without writing flexbox manually.
 * 
 * Philosophy:
 * - Flex Direction: row, column layouts
 * - Flex Align: cross-axis alignment (align-items)
 * - Flex Justify: main-axis alignment (justify-content)
 * - Gap: consistent spacing between children
 * 
 * Used by: Stack (column), Inline (row), Box, Row, Column components.
 */

export const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'] as const;
export type FlexDirectionToken = (typeof flexDirections)[number];

export const flexAligns = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] as const;
export type FlexAlignToken = (typeof flexAligns)[number];

export const flexJustifies = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
] as const;
export type FlexJustifyToken = (typeof flexJustifies)[number];

/**
 * Flex layout presets for common combinations.
 * Enables single-token usage for typical patterns.
 */
export const flexPresetsMap: Record<
  string,
  {
    display: string;
    flexDirection: string;
    alignItems: string;
    justifyContent: string;
    gap: string;
  }
> = {
  // Horizontal layouts
  'row-start': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 'var(--space-2)',
  },
  'row-center': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 'var(--space-2)',
  },
  'row-between': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-2)',
  },
  'row-around': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 'var(--space-2)',
  },
  'row-end': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 'var(--space-2)',
  },

  // Vertical layouts
  'col-start': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 'var(--space-3)',
  },
  'col-center': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 'var(--space-3)',
  },
  'col-between': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 'var(--space-3)',
  },
  'col-stretch': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 'var(--space-3)',
  },
  'col-end': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 'var(--space-3)',
  },

  // Centered layouts
  'center': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
  },
  'center-col': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-3)',
  },
};

/**
 * Helper functions to access flex properties.
 */
export const getFlexPreset = (preset: string) => flexPresetsMap[preset] || flexPresetsMap['row-center'];

/**
 * Manual flex property builders for fine-grained control.
 */
export const getFlexStyles = (
  direction: FlexDirectionToken,
  align: FlexAlignToken,
  justify: FlexJustifyToken,
  gap: string
) => ({
  display: 'flex',
  flexDirection: direction,
  alignItems: align,
  justifyContent: justify,
  gap,
});
