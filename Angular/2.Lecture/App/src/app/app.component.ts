import { Component } from '@angular/core';
import { data } from './data';
import { Article } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    private symbols : number = 250;
    @Input() article: Article;
    @Input() articleDesc: string;
    descToShow: string;
    articleDescLen: number;
    showReadMoreBtn: boolean = true;
    showHideBtn: boolean = false;
    imageIsShown: boolean = false;
    imageButtonTitle: string = 'Show Image';
    constructor(){
      this.articleDescLen = 0;
      this.descToShow = '';
    }
  }
  // title = 'User Create';
  // buttonOnClick(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
  //   console.log(inputName, inputAge);

  //   this.users.push({
  //     name: inputName.value as string,
  //     age: Number(inputAge.value) as number,
  //   });
  // }

  // users = [
  //   {
  //     name: 'Goshko' as string,
  //     age: 22 as number,
  //   },
  // ];
  // showText = true;
  // toggleText(event: MouseEvent): void {
  //   console.log(event);

  //   this.showText = !this.showText;
  // }
}
