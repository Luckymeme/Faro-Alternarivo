import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

import { PerfilComponent } from './perfil/perfil.component';
import { ListaAmigosComponent } from './lista-amigos/lista-amigos.component';
import { EventosComponent } from './eventos/eventos.component';


const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'lista-amigos', component: ListaAmigosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'principal', component: PrincipalComponent},
  { path: '', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
