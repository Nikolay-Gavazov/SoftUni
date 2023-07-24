
import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn{
    const domainStrings = domains.join('|');
    const regExp = new RegExp (`^[^@]{6,}@gmail\.(${domainStrings})$`);
    
    return (control) =>{
        return control.value === "" || regExp.test(control.value) ? null : {emailValidator: true}
    }
}