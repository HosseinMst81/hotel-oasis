export interface HasVariant<Variant extends string = string> {
  /** Generic variant token for components with behaviour-based variants. */
  variant?: Variant;
}
