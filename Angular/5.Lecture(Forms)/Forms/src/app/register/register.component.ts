import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  /* @ViewChild('registerForm') registerForm NgForm | undefined; */
  submit(form: NgForm): void {
    if(form.invalid){
      debugger
      return;
    }
  const value: {} = form.value;
   form.reset(); 
  }
}
