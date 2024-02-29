import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
