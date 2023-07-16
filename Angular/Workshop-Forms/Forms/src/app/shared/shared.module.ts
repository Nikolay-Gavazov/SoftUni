import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validators/email.directive';

@Injectable({
  providedIn: 'root'
 })

@NgModule({
  declarations: [
    LoaderComponent,
    EmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
      LoaderComponent,
      EmailDirective
    ]
})
export class SharedModule { }
