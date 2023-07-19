import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title(title: any) {
   throw new Error('Method not implemented.');
 }
 user = {name: 'John', email: 'peshom@gmail.com', list:[1,2,3,4,5,6, 7]};

 sum(a: number, b:number){
  return a + b;
 }

 addProperty(): void {
  (this.user as any)['test123'] = 'test123';
  console.log(this.user);
  
 }

 p = new Promise((resolve)=> {
  setTimeout(() => {
    resolve(100);
 }, 3000);
});

time$ = interval(1000).pipe(map(() => new Date()));
}
