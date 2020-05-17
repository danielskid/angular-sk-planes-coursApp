import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';

export class CustomValidator {
  static onlyAlphanumeric(control: AbstractControl): ValidationErrors | null {
    const value = control.value.toString();
    const onlyAlphanumeric = new RegExp(/^[a-z0-9]+$/i);
    return onlyAlphanumeric.test(value) ?
      null
      :
      {onlyAlphanumeric: true};
  }
}
