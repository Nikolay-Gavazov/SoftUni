import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  loadUsers(){
    const search = null;
    const query = search ? `?email_like=${search}` : '';
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users/${query}`)
  }
}
