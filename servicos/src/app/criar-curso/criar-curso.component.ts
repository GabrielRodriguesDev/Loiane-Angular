import { Component, OnInit } from '@angular/core';

import { CursoService } from '../cursos/curso.service'
import { stringify } from 'querystring';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss']
})
export class CriarCursoComponent implements OnInit {

  cursos: string [] = []
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {

    this.cursos = this.cursoService.getCursos()
  }

  onAddCurso(curso: string){
    this.cursoService.addCursos(curso)
  }

}
