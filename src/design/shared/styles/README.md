# Design System Style Maps

## Overview

Style Maps are the **second layer** of the design system architecture, built directly on top of design tokens. They combine tokens into cohesive, reusable styling patterns that components can consume.

### Architecture Layers

```
┌─────────────────────────────────────────────┐
│   Primitive Components                      │  ← Components use style maps
│   (Button, Input, Text, Badge, etc.)        │
├─────────────────────────────────────────────┤
│   Style Maps (THIS LAYER)                   │  ← Reusable patterns
│   (Sizes, Appearances, Colors, etc.)        │
├─────────────────────────────────────────────┤
│   Design Tokens                             │  ← Atomic values
│   (Colors, Spacing, Typography, etc.)       │
├─────────────────────────────────────────────┤
│   CSS Variables (Global Styles)             │  ← Foundation
└─────────────────────────────────────────────┘
```

## Philosophy

### 1. **Single Responsibility**
Each style map handles ONE styling concern:
- `sizes.ts` → Component sizing (padding, height, font-size, gap)
- `rounded.ts` → Border radius consistency
- `appearances.ts` → Fill strategies (solid, outline, ghost, soft, link)
- `color-schemes.ts` → Semantic color palettes
- `elevations.ts` → Shadow hierarchy
- `text-styles.ts` → Typography combinations
- `focus-styles.ts` → Keyboard navigation styling
- `flex-helpers.ts` → Layout composition
- `transitions.ts` → Motion patterns
- `spacing.ts` → Spacing scale
- `responsive.ts` → Breakpoints and containers

### 2. **Composition Over Inheritance**
Style maps are designed for composition. Combine multiple maps to style a component:

```typescript
// Button combines size + appearance + focus style
const buttonStyles = {
  ...sizeMap[size],           // padding, height, fontSize
  background: getAppearanceBg(appearance),
  color: getAppearanceText(appearance),
  ...getFocusVisibleStyles(focusStyle),
};
```

### 3. **Type Safety**
All style maps use TypeScript unions for tokens:

```typescript
type SizeToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AppearanceToken = 'solid' | 'outline' | 'ghost' | 'soft' | 'link';
```

### 4. **No Component Logic**
Style maps contain NO component-specific logic:
- ❌ No variant rules based on props
- ❌ No conditional styling logic
- ❌ No component state handling
- ✅ Pure styling pattern definitions

## Style Maps Reference

### `sizes.ts`
**Purpose:** Consistent component scaling

**Tokens:** `xs | sm | md | lg | xl`

**Properties:** `padding`, `height`, `fontSize`, `gap`, `iconSize`

```typescript
// Usage
const padding = getSizePadding('md');  // 'var(--space-2) var(--space-4)'
const height = getSizeHeight('lg');    // 'var(--height-control-xl)'
```

---

### `rounded.ts`
**Purpose:** Consistent border radius

**Tokens:** `none | xs | sm | md | lg | xl | 2xl | full`

**Properties:** `border-radius` CSS values

```typescript
// Usage
const radius = getRounded('md');  // 'var(--radius-md)'
```

---

### `appearances.ts`
**Purpose:** Fill strategy styling (solid, outline, ghost, soft, link)

**Tokens:** `solid | outline | ghost | soft | link`

**Properties:** `bg`, `text`, `border`, `hover`, `active`, `disabled`

```typescript
// Example: Solid appearance
const solid = appearanceMap.solid;
// {
//   bg: 'var(--color-action-primary-base)',
//   text: 'var(--color-text-inverse)',
//   border: 'transparent',
//   hover: 'var(--color-action-primary-hover)',
//   ...
// }

// Usage
const bgColor = getAppearanceBg('outline');
const textColor = getAppearanceText('ghost');
```

---

### `color-schemes.ts`
**Purpose:** Semantic color palettes (primary, success, warning, danger, info)

**Tokens:** `primary | secondary | success | warning | danger | neutral`

**Properties:** `base`, `hover`, `active`, `focus`, `disabled`, `bg`, `text`, `border`

```typescript
// Example: Success scheme
const success = colorSchemeMap.success;
// {
//   base: 'var(--color-brand-success)',
//   hover: 'color-mix(in oklch, var(--color-brand-success), black 10%)',
//   bg: 'var(--color-surface-success-subtle)',
//   text: 'var(--color-text-success)',
//   border: 'var(--color-border-success)',
// }

// Usage
const successColor = getColorSchemeBase('success');
```

---

### `elevations.ts`
**Purpose:** Visual hierarchy through shadows

**Tokens:** `none | xs | sm | md | lg | xl`

**Properties:** Shadow CSS values

```typescript
// Usage
const shadow = getElevation('md');  // 'var(--shadow-md)'
```

---

### `text-styles.ts`
**Purpose:** Typography combinations (size + weight + lineHeight + tracking)

**Tokens:**
- Display: `display-lg | display-md | display-sm`
- Heading: `heading-lg | heading-md | heading-sm`
- Body: `body-lg | body-md | body-sm`
- Caption: `caption-lg | caption-md | caption-sm`
- Code: `code-md | code-sm`

**Properties:** `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `fontFamily`

```typescript
// Example: Heading-md
const headingMd = textStyleMap['heading-md'];
// {
//   fontSize: 'var(--text-xl)',
//   fontWeight: 'var(--font-weight-semibold)',
//   lineHeight: 'var(--leading-snug)',
//   letterSpacing: 'var(--tracking-normal)',
//   fontFamily: 'var(--font-primary)',
// }

// Usage
const style = getTextStyle('body-md');
```

---

### `focus-styles.ts`
**Purpose:** Keyboard navigation styling

**Tokens:** `ring | inset | none`

**Properties:** `outline`, `outlineOffset`, `boxShadow`

```typescript
// Usage
const focusStyles = getFocusVisibleStyles('ring');
```

---

### `flex-helpers.ts`
**Purpose:** Flexbox layout composition

**Tokens:**
- Directions: `row | row-reverse | column | column-reverse`
- Aligns: `flex-start | center | flex-end | stretch | baseline`
- Justifies: `flex-start | center | flex-end | space-between | space-around | space-evenly`

**Presets:** `row-center | row-between | col-start | col-center | center | etc.`

```typescript
// Manual composition
const styles = getFlexStyles('row', 'center', 'space-between', 'var(--space-2)');

// Or use presets
const preset = getFlexPreset('row-between');  // Pre-configured flex layout
```

---

### `transitions.ts`
**Purpose:** Motion patterns

**Tokens:** `fast | base | slow`

**Properties:** `value`, `duration`, `easing`

```typescript
// Single property
const transition = getTransition('base');  // 'var(--transition-base)'

// Multiple properties
const colorTransition = getTransitionProperties(
  'base',
  'background-color',
  'color',
  'border-color'
);

// Common presets
const allTransition = transitionPresetsMap.allBase;  // 'all var(--transition-base)'
```

---

### `spacing.ts`
**Purpose:** Spacing scale access

**Tokens:** `0 | px | 0-5 | 1 | 1-5 | 2 | 2-5 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 32`

**Properties:** Spacing CSS values

```typescript
// Usage
const padding = getSpacing('3');  // 'var(--space-3)'

// Presets
const paddingMd = spacingPresetsMap['p-md'];  // '0.8rem 1.6rem'
```

---

### `responsive.ts`
**Purpose:** Responsive design and layout constraints

**Tokens:**
- Breakpoints: `xs | sm | md | lg | xl | 2xl`
- Containers: `xs | sm | md | lg | xl | 2xl | page | readable`
- Z-Index: `base | raised | sticky | header | dropdown | popover | tooltip | overlay | modal | toast | max`

**Properties:** Breakpoint sizes, container max-widths, z-index values

```typescript
// Usage
const breakpoint = getBreakpoint('md');           // 'var(--breakpoint-md)'
const container = getContainer('page');           // 'var(--container-page)'
const zIndex = getZIndex('modal');                // 'var(--z-modal)'

// Media query helper
const mediaQuery = getMediaQuery('lg');           // '@media (min-width: var(--breakpoint-lg))'
```

---

## Usage Examples

### Example 1: Button Component

```typescript
import {
  SizeToken,
  AppearanceToken,
  FocusStyleToken,
  sizeMap,
  appearanceMap,
  focusStyleMap,
  transitionPresetsMap,
} from '@design/shared/styles';

interface ButtonProps {
  size: SizeToken;
  appearance: AppearanceToken;
  focusStyle: FocusStyleToken;
}

// Styled Button
const StyledButton = styled.button<ButtonProps>`
  /* Size map */
  padding: ${(p) => sizeMap[p.size].padding};
  height: ${(p) => sizeMap[p.size].height};
  font-size: ${(p) => sizeMap[p.size].fontSize};

  /* Appearance map */
  background-color: ${(p) => appearanceMap[p.appearance].bg};
  color: ${(p) => appearanceMap[p.appearance].text};
  border: 1px solid ${(p) => appearanceMap[p.appearance].border};

  /* Transition */
  transition: ${transitionPresetsMap.colorBase};

  /* Focus style */
  &:focus-visible {
    outline: ${(p) => focusStyleMap[p.focusStyle].outline};
    outline-offset: ${(p) => focusStyleMap[p.focusStyle].outlineOffset};
  }

  /* Hover state */
  &:hover {
    background-color: ${(p) => appearanceMap[p.appearance].hover};
  }
`;
```

### Example 2: Badge Component with Color Scheme

```typescript
import {
  SizeToken,
  ColorSchemeToken,
  RoundedToken,
  sizeMap,
  colorSchemeMap,
  roundedMap,
} from '@design/shared/styles';

interface BadgeProps {
  size: SizeToken;
  colorScheme: ColorSchemeToken;
  rounded: RoundedToken;
}

const StyledBadge = styled.span<BadgeProps>`
  /* Sizing */
  padding: ${(p) => sizeMap[p.size].padding};
  font-size: ${(p) => sizeMap[p.size].fontSize};

  /* Rounded corners */
  border-radius: ${(p) => roundedMap[p.rounded]};

  /* Color scheme */
  background-color: ${(p) => colorSchemeMap[p.colorScheme].bg};
  color: ${(p) => colorSchemeMap[p.colorScheme].text};
  border: 1px solid ${(p) => colorSchemeMap[p.colorScheme].border};
`;
```

### Example 3: Stack Component (Flex Helper)

```typescript
import {
  FlexDirectionToken,
  FlexAlignToken,
  FlexJustifyToken,
  SpacingToken,
  getFlexStyles,
} from '@design/shared/styles';

interface StackProps {
  direction: FlexDirectionToken;
  align: FlexAlignToken;
  justify: FlexJustifyToken;
  gap: SpacingToken;
}

const StyledStack = styled.div<StackProps>`
  ${(p) => {
    const flexStyles = getFlexStyles(
      p.direction,
      p.align,
      p.justify,
      `var(--space-${p.gap})`
    );
    return css`
      display: ${flexStyles.display};
      flex-direction: ${flexStyles.flexDirection};
      align-items: ${flexStyles.alignItems};
      justify-content: ${flexStyles.justifyContent};
      gap: ${flexStyles.gap};
    `;
  }}
`;
```

### Example 4: Card Component with Elevation

```typescript
import {
  ElevationToken,
  RoundedToken,
  elevationMap,
  roundedMap,
  getSpacing,
} from '@design/shared/styles';

interface CardProps {
  elevation: ElevationToken;
  rounded: RoundedToken;
}

const StyledCard = styled.div<CardProps>`
  box-shadow: ${(p) => elevationMap[p.elevation]};
  border-radius: ${(p) => roundedMap[p.rounded]};
  padding: ${(p) => getSpacing('4')};
  background-color: var(--color-surface-base);
`;
```

### Example 5: Text Component with Typography

```typescript
import {
  TextStyleToken,
  TextStyleMap,
  textStyleMap,
} from '@design/shared/styles';

interface TextProps {
  variant: TextStyleToken;
}

const StyledText = styled.span<TextProps>`
  ${(p) => {
    const style = textStyleMap[p.variant];
    return css`
      font-family: ${style.fontFamily};
      font-size: ${style.fontSize};
      font-weight: ${style.fontWeight};
      line-height: ${style.lineHeight};
      letter-spacing: ${style.letterSpacing};
    `;
  }}
`;
```

---

## Extension Points

### Adding a New Style Map

When you need a new styling concern, create a new map file:

1. **Create the file** in `/src/design/shared/styles/`
2. **Export token union** from the new file
3. **Export the map** and helper functions
4. **Add to index.ts** exports
5. **Document** the new map in this README

**Example: Creating a `borders.ts` map**

```typescript
// src/design/shared/styles/borders.ts
export const borders = ['none', 'xs', 'sm', 'md'] as const;
export type BorderToken = (typeof borders)[number];

export const borderMap: Record<BorderToken, string> = {
  none: 'none',
  xs: '1px solid var(--color-border-muted)',
  sm: '1px solid var(--color-border-base)',
  md: '2px solid var(--color-border-strong)',
};

export const getBorder = (border: BorderToken): string => borderMap[border];
```

---

## Design Principles Applied

✅ **Scalability** - Easy to add new maps without affecting existing ones  
✅ **Maintainability** - Single source of truth for each styling concern  
✅ **Composition** - Maps are independent and composable  
✅ **Separation of Concerns** - Each map has one responsibility  
✅ **Type Safety** - Full TypeScript support with union types  
✅ **Long-term Evolution** - Maps can evolve without breaking components  
✅ **Understandable** - Clear, non-complex patterns  

---

## Next Steps

Style maps enable building **Primitive Components** (Button, Input, Text, Badge, etc.) with:
- Consistent styling through maps
- Type-safe prop interfaces using capability interfaces
- No hardcoded values or component-specific logic
- Full composition and reusability
