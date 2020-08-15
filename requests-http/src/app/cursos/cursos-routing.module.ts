import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursoResolverGuard } from './guards/curso-resolver.guard';


const cursosRoute: Routes = [
  {
    path: '',
    component: CursosListaComponent
  },
  {
    path: 'novo',
    component: CursosFormComponent,
    resolve: {// Colocando um resolver para a rota (Quando a rota for inciada tem que "resolver a logica passada")
      curso: CursoResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component:CursosFormComponent,
    resolve: {
      curso: CursoResolverGuard //O nome da variavel da resolver tem que ser coerente por ela que vai carregar o objeto de resposta
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoute)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
