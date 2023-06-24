import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Create'
  buttonOnClick(inputName: HTMLInputElement, inputAge: HTMLInputElement) :void {
    console.log(inputName, inputAge);
    
    this.users.push({
      name: inputName.value as string,
      age: Number(inputAge.value) as number
    });
  }
 
  users = [
    {
      name: 'Gosho' as string,
      age: 22 as number
    }
  ]
  showText = true;
  toggleText(event: MouseEvent) :void {
    console.log(event);
    
    this.showText = !this.showText;
  }
}
