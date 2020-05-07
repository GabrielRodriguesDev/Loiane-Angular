import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { CursosComponent } from './cursos/cursos.component';


const routes: Routes = [ //Const que contém as rotas e seus redirecionamentos
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'cursos', component: CursosComponent}
];

@NgModule({ //Arquivos de configuração das rotas
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } //Precisa ser exportado para poder ser importado como 'import', no app module
