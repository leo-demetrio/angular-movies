import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  hasErrorValidate(control: AbstractControl, errorName: string): boolean {
    if((control.dirty || control.touched) && control.hasError(errorName)) {
      return true
    }
    return false;
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  lengthValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }

}
