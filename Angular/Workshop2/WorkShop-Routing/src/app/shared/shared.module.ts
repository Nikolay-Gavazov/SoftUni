import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@Injectable({
  providedIn: 'root'
 })

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      LoaderComponent
    ]
})
export class SharedModule { }
