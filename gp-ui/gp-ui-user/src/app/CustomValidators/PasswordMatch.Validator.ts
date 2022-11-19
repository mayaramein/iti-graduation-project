import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatch: ValidatorFn =
  (frmGroup: AbstractControl): ValidationErrors | null => {
    let passControl= frmGroup.get('password');
    let confirmPassControl= frmGroup.get('confirmPassword');
    if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
      return null;

    let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
    return (passControl?.value==confirmPassControl?.value)? null : valErr;
  }



export function passwordMatchAdv(): ValidatorFn
{
  return (control: AbstractControl) : ValidationErrors | null=>{
    let passControl= control.get('password');
    let confirmPassControl= control.get('confirmPassword');
    if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
      return null;

    let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
    return (passControl?.value==confirmPassControl?.value)? null : valErr;
  }
}

