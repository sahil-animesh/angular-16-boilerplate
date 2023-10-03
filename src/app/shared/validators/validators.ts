import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * 
 * @returns null if both passwords are same and else validation error
 */
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null; // Return null if the form controls are not available (e.g., during initialization)
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  };
}
