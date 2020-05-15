import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: any [];

  constructor( private CursosService: CursosService) { 
    
  }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();
  }

}
