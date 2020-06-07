import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard'
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    

  ],
  imports: [
    BrowserModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule,
    FormsModule
    
  ],



  providers: [
    AuthService, 
    AuthGuard,//Deixando a Guarda de rotas para um escopo global 
    CursosGuard, //Deixando a Guarda de rotas para um escopo global 
    //AlunosGuard // Removendo do escopo global para ver outra possivel alocação.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
