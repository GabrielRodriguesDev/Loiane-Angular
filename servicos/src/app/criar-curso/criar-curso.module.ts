import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursoService } from '../cursos/curso.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
  
    CriarCursoComponent,
    ReceberCursoCriadoComponent 
  ],
  imports: [
   CommonModule
  ],
  exports: [CriarCursoComponent],
  providers: [],
  
})
export class CriarCursoModule { }
/*Questão de instancia do Serviço é tratada de que forma, se precisa do Serviço em diversos locais declara no escopo global,
através do  providers do app.module, caso queira em um local (componentes  especificos), 
declara no provider do modulo dos respectivos componentes, assim todos os componente que estiverem no declarations,
vão possuir acesso ao serviço */
