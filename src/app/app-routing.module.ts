import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';

const routes: Routes = [
  { path:"", pathMatch: 'full', redirectTo: 'home'},
  { path:"personajes", component: PersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
