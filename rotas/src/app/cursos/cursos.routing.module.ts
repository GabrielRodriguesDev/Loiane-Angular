import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const cursosRouting: Routes = [ //Const que contém as rotas e seus redirecionamentos
  { path: '', component: CursosComponent,//Como já está sendo declarado o caminho no app-routing, devido ao lazy load, podemos deixar o caminho aqui vazio.
    children: [
      { path: ':id', component: CursoDetalheComponent}, /*Usando parametros nas rotas */
      { path: 'NaoEncontrado', component: CursoNaoEncontradoComponent}
    ]},
]

@NgModule({ //Arquivos de configuração das rotas
  imports: [RouterModule.forChild(cursosRouting)], //Usar o forChild, o forRoot só é usado no modulos de rotas principal
  exports: [RouterModule]
})
export class CursosRoutingModule { } //Precisa ser exportado para poder ser importado como 'import', no app module
