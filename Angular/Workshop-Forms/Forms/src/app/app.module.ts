import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './theme/create/create.component';
import { ThemeModule } from './theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './theme/details/details.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    CreateComponent,
    DetailsComponent,
  ],
  imports: [
    RouterModule,
    AuthModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    ThemeModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
