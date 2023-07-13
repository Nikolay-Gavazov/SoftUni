import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;
  USER_KEY = '[user]'

  constructor() {
    try {
      const user = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(user);
    } catch (error) {
      this.user = null;
    }
  }

  login(): void {
    this.user = {
      "email": "peshoKioravia@gmail",
      "firstName": "Pesho",
      "phoneNumber": "+123456789",
      "passWord": "<PASSWORD>"
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout(): void {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }
  get isLoggedIn() {
    return !!this.user
  }
}
