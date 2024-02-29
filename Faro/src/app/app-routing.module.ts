import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
