// primitives/Card/Card.tsx
import styled from 'styled-components';
import type { HasRounded, HasColorScheme, HasMargin, HasPadding } from '../../shared/capabilities';
import { cardStyles } from '../../shared/styles/card-styles';
import { marginStyles } from '../../shared/styles/marginStylesMap';
import { paddingStyles } from '../../shared/styles/paddingStylesMap';
import type { HasShadow } from '../../shared/capabilities/has-shadow';


export interface CardProps extends HasRounded, HasShadow, HasColorScheme, HasMargin, HasPadding {
  children: React.ReactNode;
}

const StyledCard = styled.div<CardProps>`
  ${({ rounded = 'md', shadow = 'md', colorScheme='foreground' }) => cardStyles({ rounded, shadow, colorScheme })}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
`;

export function Card({ children, ...props }: CardProps) {
  return <StyledCard {...props}>{children}</StyledCard>;
}