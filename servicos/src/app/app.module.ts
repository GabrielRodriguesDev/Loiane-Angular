import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoService } from './cursos/curso.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module'
import { CursoModule } from './cursos/curso.module'
@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursoModule
  ],
  //providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
