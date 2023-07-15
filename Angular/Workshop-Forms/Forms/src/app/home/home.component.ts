import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  get isLoggedIn(){
    return this.authService.isLoggedIn;
  }
  get user(){
    return this.authService.user;
  }
  constructor(private authService: AuthService, private router: Router){}
}
