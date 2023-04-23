import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPacceComponent } from './components/login-pacce/login-pacce.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPacceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
