import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


const routes: Routes = [ //Const que contém as rotas e seus redirecionamentos
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Cursos', component: CursosComponent},
  { path: 'Curso/:id', component: CursoDetalheComponent}, /*Usando parametros nas rotas */
  { path: 'NaoEncontrado', component: CursoNaoEncontradoComponent}
];

@NgModule({ //Arquivos de configuração das rotas
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } //Precisa ser exportado para poder ser importado como 'import', no app module
