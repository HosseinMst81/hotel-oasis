/**
 * Elevation Style Map
 * 
 * Maps elevation tokens to box-shadow values for visual hierarchy.
 * Creates depth through progressive shadow intensities.
 * 
 * Philosophy:
 * - Elevations create visual layering and hierarchy
 * - none: flat surface
 * - xs→xl: progressively raised surfaces
 * - Used for: Card, Modal, Dropdown, Tooltip, Popover, etc.
 */

export const elevations = ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
export type ElevationToken = (typeof elevations)[number];

/**
 * Elevation map: maps tokens to shadow design tokens.
 * References shadow values from the effects token system.
 */
export const elevationMap: Record<ElevationToken, string> = {
  none: 'var(--shadow-none)',
  xs: 'var(--shadow-xs)',
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
};

/**
 * Get box-shadow for a given elevation.
 */
export const getElevation = (elevation: ElevationToken): string => elevationMap[elevation];
