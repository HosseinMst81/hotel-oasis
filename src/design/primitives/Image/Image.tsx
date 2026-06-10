// primitives/Image/Image.tsx
import styled from 'styled-components';
import type { HasMargin, HasPadding } from '../../shared/capabilities';
import type { HasObjectFit } from '../../shared/capabilities/has-opject-fit';
import { marginStyles } from '../../shared/styles/marginStylesMap';
import { paddingStyles } from '../../shared/styles/paddingStylesMap';

export interface ImageProps extends HasObjectFit, HasMargin, HasPadding, React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  fallback?: string;
}

const StyledImage = styled.img<ImageProps>`
  display: block;
  max-width: 100%;
  height: auto;
  ${({ objectFit = 'cover' }) => objectFit && `object-fit: ${objectFit};`}
  ${({ width }) => width && `width: ${typeof width === 'number' ? `${width}px` : width};`}
  ${({ height }) => height && `height: ${typeof height === 'number' ? `${height}px` : height};`}
  ${(props) => marginStyles(props)}
  ${(props) => paddingStyles(props)}
`;

export function Image({ fallback, onError, ...props }: ImageProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallback) {
      e.currentTarget.src = fallback;
    }
    onError?.(e);
  };
  return <StyledImage {...props} onError={handleError} />;
}