import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaAmigosComponent } from './lista-amigos/lista-amigos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    ListaAmigosComponent,
    PerfilComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
