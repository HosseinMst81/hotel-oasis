export type ValidationState = 'success' | 'error' | 'warning' | 'info' | null;

export interface HasValidation {
  /** Validation state */
  validationState?: ValidationState;
  
  /** Validation message */
  validationMessage?: string;
}