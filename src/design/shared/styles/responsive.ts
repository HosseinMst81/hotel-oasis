/**
 * Responsive & Container Style Map
 * 
 * Maps layout breakpoints and container sizes.
 * Provides consistent responsive design patterns and container constraints.
 * 
 * Philosophy:
 * - Mobile-first breakpoint strategy
 * - Container queries and constraint sizes
 * - Consistent sizing for common page layouts
 * 
 * Used by: layout components, responsive wrappers, page containers
 */

export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type BreakpointToken = (typeof breakpoints)[number];

export const containers = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'page', 'readable'] as const;
export type ContainerToken = (typeof containers)[number];

/**
 * Breakpoint map: responsive design breakpoints.
 * Used in media queries for responsive design.
 */
export const breakpointMap: Record<BreakpointToken, string> = {
  xs: 'var(--breakpoint-xs)',
  sm: 'var(--breakpoint-sm)',
  md: 'var(--breakpoint-md)',
  lg: 'var(--breakpoint-lg)',
  xl: 'var(--breakpoint-xl)',
  '2xl': 'var(--breakpoint-2xl)',
};

/**
 * Container size map: max-width constraints for content containers.
 * Used to limit content width and improve readability.
 */
export const containerMap: Record<ContainerToken, string> = {
  xs: 'var(--container-xs)',
  sm: 'var(--container-sm)',
  md: 'var(--container-md)',
  lg: 'var(--container-lg)',
  xl: 'var(--container-xl)',
  '2xl': 'var(--container-2xl)',
  page: 'var(--container-page)',
  readable: 'var(--container-readable)',
};

/**
 * Get breakpoint value for media queries.
 * Usage: `@media (min-width: ${getBreakpoint('md')})`
 */
export const getBreakpoint = (breakpoint: BreakpointToken): string =>
  breakpointMap[breakpoint];

/**
 * Get container max-width.
 */
export const getContainer = (container: ContainerToken): string => containerMap[container];

/**
 * Generate media query string.
 * Usage: `css\`${getMediaQuery('md')} { ... }\``
 */
export const getMediaQuery = (breakpoint: BreakpointToken): string =>
  `@media (min-width: ${breakpointMap[breakpoint]})`;

/**
 * Common responsive presets.
 * Makes it easier to apply consistent responsive behavior.
 */
export const responsivePresetsMap = {
  // Container configurations
  'container-page': {
    maxWidth: containerMap.page,
    marginX: 'auto',
    paddingX: 'var(--space-4)',
  },
  'container-readable': {
    maxWidth: containerMap.readable,
    marginX: 'auto',
    paddingX: 'var(--space-4)',
  },
};

/**
 * Z-index layer tokens for stacking context.
 * Ensures proper layering of UI elements.
 */
export const zIndexLayers = [
  'base',
  'raised',
  'sticky',
  'header',
  'dropdown',
  'popover',
  'tooltip',
  'overlay',
  'modal',
  'toast',
  'max',
] as const;
export type ZIndexLayerToken = (typeof zIndexLayers)[number];

export const zIndexMap: Record<ZIndexLayerToken, string> = {
  base: 'var(--z-base)',
  raised: 'var(--z-raised)',
  sticky: 'var(--z-sticky)',
  header: 'var(--z-header)',
  dropdown: 'var(--z-dropdown)',
  popover: 'var(--z-popover)',
  tooltip: 'var(--z-tooltip)',
  overlay: 'var(--z-overlay)',
  modal: 'var(--z-modal)',
  toast: 'var(--z-toast)',
  max: 'var(--z-max)',
};

/**
 * Get z-index for a layer.
 */
export const getZIndex = (layer: ZIndexLayerToken): string => zIndexMap[layer];
