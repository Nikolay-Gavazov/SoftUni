import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent,NotFoundComponent]
})
export class CoreModule { }
