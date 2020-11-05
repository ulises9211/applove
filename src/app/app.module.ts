import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AceptoComponent } from './components/acepto/acepto.component';
import { PropuestaComponent } from './components/propuesta/propuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AceptoComponent,
    PropuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
