// // ─────────────────────────────────────────────────────────────────────────────
// // HEADING
// // ─────────────────────────────────────────────────────────────────────────────

// type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// interface HeadingOwnProps extends HasClassName, HasStyle {
//   /**
//    * Visual size — decoupled from the semantic HTML level.
//    * e.g. <Heading as="h2" size="h4"> renders an h2 that looks like h4.
//    */
//   size?: HeadingLevel;
//   color?: TextColor;
//   isTruncated?: boolean;
//   align?: 'left' | 'center' | 'right';
// }

// export type HeadingProps<E extends ElementType = 'h2'> = PolymorphicProps<E, HeadingOwnProps>;

// const headingSizeMap: Record<HeadingLevel, ReturnType<typeof css>> = {
//   h1: css`font-size: var(--text-4xl); margin-bottom: var(--space-8);  font-weight: 900;`,
//   h2: css`font-size: var(--text-3xl); margin-bottom: var(--space-6);  font-weight: 800;`,
//   h3: css`font-size: var(--text-2xl); margin-bottom: var(--space-5);  font-weight: 700;`,
//   h4: css`font-size: var(--text-xl);  margin-bottom: var(--space-4);  font-weight: 700;`,
//   h5: css`font-size: var(--text-lg);  margin-bottom: var(--space-3);  font-weight: 700;`,
//   h6: css`font-size: var(--text-base);margin-bottom: var(--space-2);  font-weight: 700;`,
// };

// interface StyledHeadingProps {
//   $size: HeadingLevel;
//   $color: TextColor;
//   $isTruncated: boolean;
//   $align?: string;
// }

// const StyledHeading = styled.h2<StyledHeadingProps>`
//   font-family: var(--font-primary);
//   line-height: var(--leading-tight);
//   letter-spacing: -0.02em;
//   color: ${({ $color }) => textColorMap[$color]};
//   margin: 0;

//   ${({ $size }) => headingSizeMap[$size]}
//   ${({ $align }) => $align && css`text-align: ${$align};`}
//   ${({ $isTruncated }) => $isTruncated && css`
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   `}
// `;

// const HeadingInner = <E extends ElementType = 'h2'>(
//   {
//     as,
//     size,
//     color = 'primary',
//     isTruncated = false,
//     align,
//     className,
//     style,
//     children,
//     ...rest
//   }: HeadingProps<E>,
//   ref: React.Ref<Element>,
// ) => {
//   // Infer visual size from the element tag if not overridden
//   const resolvedAs = (as ?? 'h2') as HeadingLevel | ElementType;
//   const resolvedSize = size ?? (typeof resolvedAs === 'string' ? resolvedAs as HeadingLevel : 'h2');

//   return (
//     <StyledHeading
//       as={resolvedAs as ElementType}
//       ref={ref}
//       $size={resolvedSize}
//       $color={color}
//       $isTruncated={isTruncated}
//       $align={align}
//       className={className}
//       style={style}
//       {...rest}
//     >
//       {children}
//     </StyledHeading>
//   );
// };

// export const Heading = forwardRef(HeadingInner) as <E extends ElementType = 'h2'>(
//   props: HeadingProps<E> & { ref?: React.Ref<Element> }
// ) => React.ReactElement;

// Heading.displayName = 'Heading';
