import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';


const cursosRoute: Routes = [
  {
    path: '',
    component: CursosListaComponent
  },
  {
    path: 'novo',
    component: CursosFormComponent
  },
  {
    path: 'editar/:id',
    component:CursosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoute)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
