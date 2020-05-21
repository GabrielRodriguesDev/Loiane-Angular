import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const cursosRoutes: Routes = [ //Const que contém as rotas e seus redirecionamentos
  { path: 'Cursos', component: CursosComponent},
  { path: 'Curso/:id', component: CursoDetalheComponent}, /*Usando parametros nas rotas */
  { path: 'NaoEncontrado', component: CursoNaoEncontradoComponent}
];

@NgModule({ //Arquivos de configuração das rotas
  imports: [RouterModule.forChild(cursosRoutes)], //Usar o forChild, o forRoot só é usado no modulos de rotas principal
  exports: [RouterModule]
})
export class CursosRoutingModule { } //Precisa ser exportado para poder ser importado como 'import', no app module
