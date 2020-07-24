import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[];

  constructor(
    private cursosService : CursosService
  ) { }
  
  ngOnInit() {
    this.cursosService.list()
      .subscribe(data => this.cursos = data)
  }
}
