import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from 'src/app/models/curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  /*cursos: Curso[];*/

  cursos$: Observable <Curso[]> //Declaração de variavel Filandesa (Quando uma varivel tiver o DOLLAR significa que é um observable (Prática da comunidade))

  constructor(
    private cursosService : CursosService
  ) { }
  
  ngOnInit() {
    /*this.cursosService.list()
      .subscribe(data => this.cursos = data)*/

    this.cursos$ = this.cursosService.list();
  }
}
