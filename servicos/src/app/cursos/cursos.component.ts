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
  }

}
