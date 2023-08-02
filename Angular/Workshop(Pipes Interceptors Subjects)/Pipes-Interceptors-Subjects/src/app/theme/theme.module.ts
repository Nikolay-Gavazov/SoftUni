import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemeRoutingModule } from './themes-router.module';
import { PostsListComponent } from './posts-list/posts-list.component';



@NgModule({
  declarations: [
    ThemesListComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  exports: [
    ThemesListComponent,
    PostsListComponent
  ]
})
export class ThemeModule { }
