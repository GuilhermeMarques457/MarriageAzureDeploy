export class PasswordValidator {
  static validate(control) {
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;

    if (control.value && !senhaRegex.test(control.value)) {
      return { invalidFormat: true };
    }

    return null;
  }

  static comparePasswords(formGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (
      confirmPasswordControl.value &&
      passwordControl.value !== confirmPasswordControl.value
    ) {
      confirmPasswordControl.setErrors({ notMatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }

    return null;
  }
}
