export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export interface HasObjectFit {
  objectFit?: ObjectFit;
}