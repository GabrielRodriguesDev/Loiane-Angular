import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [ //Const que contém as rotas e seus redirecionamentos
  
  {
    path : 'Cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),// Para fazer o LazyLoad declaramos assim, arancamos o Module que foi passado aqui, do appModule, pois como ele já está sendo declarado aqui, não precisa de instancia lá, e no arquivo de rotas referente a esse module fazemos uma alteração
    canActivate: [AuthGuard],//Implementando o guarda de rota, na rota desejada
    canActivateChild: [CursosGuard]// Implementando o guarda de rota filha na rota desejada
  },
  {
    path : 'Alunos', 
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule), // Example lazy load (Estudar mais)
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard] //Removendo do Routing global e para ver outras possibilidade de alocação.
  },

  { path: 'Login', component: LoginComponent},
  { path: 'Home', component: HomeComponent,
  canActivate: [AuthGuard]
  },


  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent }//Caso não seja escontrada nenhuma Rota, será redirecionado para essa rota, (Podemos usar o guarda de rotas e redirecionar para a tela de Login)

];

@NgModule({ //Arquivos de configuração das rotas
  imports: [RouterModule.forRoot(routes /* Aqui podemos usar um segundo parametro "UseHash: true" para indicar que queremos usar a Hashtag nos nossos roteamentos, essa mudança é feita devido a compatibilidade com requisições HTTP ao BackEnd (Essa incompatibilidade existe em algumas liguagens apenas*/)],
  exports: [RouterModule]
})

export class AppRoutingModule { } //Precisa ser exportado para poder ser importado como 'import', no app module
