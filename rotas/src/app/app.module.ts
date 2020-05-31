import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule,
    FormsModule
    
  ],



  providers: [
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
