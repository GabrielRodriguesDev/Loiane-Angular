import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos : string [] = [];
  

  constructor(private cursoService: CursoService) { 
    
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos()
    CursoService.criouNovoCuso.subscribe(
      curso => this.cursos.push(curso) //Recebendo notificação sem fazer a instacia, recuperando de uma variavel static, e inserindo no array
    );
  }

}
