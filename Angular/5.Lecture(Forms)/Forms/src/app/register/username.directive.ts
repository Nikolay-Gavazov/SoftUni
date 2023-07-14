import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUsername]',
  providers:[
     {
      provide: NG_VALIDATORS,
     useExisting: UsernameDirective,
     multi: true
     }
  ]
})
export class UsernameDirective implements Validator{
  @Input() appUsername:string | undefined;
  constructor() { }


  validate(control: AbstractControl<any, any>): ValidationErrors | null{
    console.log(new RegExp(/^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$/gm, this.appUsername));
    
    return null;
  }
}
