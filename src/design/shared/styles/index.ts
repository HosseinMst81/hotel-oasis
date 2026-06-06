/**
 * Design System Style Maps
 * 
 * Centralized export of all reusable style maps.
 * Maps are the second layer of the design system, built on top of design tokens.
 * 
 * Philosophy:
 * - Style maps combine tokens into cohesive styling patterns
 * - Each map handles one styling concern (sizes, colors, shadows, etc.)
 * - Maps are composition-ready for building primitives and components
 * - No component-specific logic; purely reusable styling patterns
 * 
 * Maps provide:
 * - Consistent visual properties across components
 * - Semantic intent through tokens (primary, success, warning, etc.)
 * - Type safety through token unions
 * - Easy extension and evolution
 */

// Core style maps
export * from './sizes';
export * from './rounded';
export * from './appearances';
export * from './color-schemes';
export * from './elevations';
export * from './text-styles';
export * from './focus-styles';
export * from './flex-helpers';
export * from './transitions';
export * from './spacing';
export * from './responsive';
