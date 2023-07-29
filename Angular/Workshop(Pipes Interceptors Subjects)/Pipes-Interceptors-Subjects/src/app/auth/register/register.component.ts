import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private authService: AuthService, private router: Router){}

  register(form: NgForm){
    if(form.invalid){
      return;
    }
    const {username, email, password, rePassword, tel} = form.value;

    this.authService.register(username, email, password, rePassword, tel).subscribe(() =>{
      form.reset();
      this.router.navigate(['/']);
    })
  }
}
