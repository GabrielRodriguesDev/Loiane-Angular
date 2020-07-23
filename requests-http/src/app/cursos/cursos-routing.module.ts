import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


const cursosRoute: Routes = [
  { 
    path: 'cursos', component: CursosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoute)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
