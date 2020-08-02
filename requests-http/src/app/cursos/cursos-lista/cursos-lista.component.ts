import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from 'src/app/models/curso';
import { Observable, Subject, empty } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  /*cursos: Curso[];*/
  cursos$: Observable<Curso[]> //Declaração de variavel Filandesa (Quando uma varivel tiver o DOLLAR significa que é um observable (Prática da comunidade))
  error$ = new Subject<boolean>();


  constructor(
    private cursosService: CursosService,
    //private modalService: BsModalService,
    private alertModalService: AlertModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    /*this.cursosService.list()
      .subscribe(data => this.cursos = data)*/

   this.onRefresh()
  }

  onRefresh(){
    this.cursos$ = this.cursosService.list()
    .pipe(
      //map(),
      //tap(),
      //switchMap(),
      catchError(error => {
        console.error(error);
        //this.error$.next(true)
        this.handleError()
        return empty(); // Exemplo de como tratar erro com usando pipe async, recomendamos colocar sempre por ultimo a trativa de erro, assim qualquer coisa mal executada como map() - tap() o catchError notifica como erro.
      })
    );
    /*
    this.cursosService.list()
    .pipe(
      catchError(error => empty())
    )
    .subscribe(
      data => console.log(data)
    )*/ //Exemplo de manipulação no subscribe que pode ser usado para qualquer outra forma de inscrição
  }

  handleError(){
    this.alertModalService.showAlertDark('Erro ao carregar cursos. Tente novamente mais tarde');
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.activatedRoute})
  }

  
}
