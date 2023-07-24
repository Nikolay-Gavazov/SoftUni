import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private authService: AuthService, private router: Router) {
    
  }
  login(form: NgForm): void {
    if(form.invalid){
      return;
    }
    const {email, password} = form.value;
    this.authService.login(email, password).subscribe(()=>{
      form.reset();
      this.router.navigate(['/']);
    });
  }
}

