import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPacceComponent } from './components/login-pacce/login-pacce.component';
import { HomePacceComponent } from './components/home-pacce/home-pacce.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPacceComponent,
    HomePacceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
