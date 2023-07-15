import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemeRoutingModule } from './themes-router.module';



@NgModule({
  declarations: [
    ThemesListComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  exports: [
      ThemesListComponent
    ]
})
export class ThemeModule { }
