import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null = null;
  get isLoggedIn(){
    return this.user !=null;
  }
  constructor() { }
}
