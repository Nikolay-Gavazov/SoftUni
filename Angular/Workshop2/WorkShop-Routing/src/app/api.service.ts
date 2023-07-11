import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

const {appUrl} = environment

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
  
  getPosts(limit?: number) {
    const limitFilter = limit ? `limit=${limit}` : '';
    return this.http.get<Post[]>(`${appUrl}/posts?${limitFilter}`)
  }

  getTheme(id: string) {
    return this.http.get<Theme>(`${appUrl}/themes/${id}`);
  }

  getThemes() {
    return this.http.get<Theme[]>(`${appUrl}/themes`)
  }
  createTheme(themeName: string, postText: string) {
    const headers = new HttpHeaders({'myHeader': 'nikeca'});
    return this.http.post(`${appUrl}/themes`, {themeName, postText}, 
    {headers: headers});
  }
}
