import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from 'src/app/models/curso';
import { Observable, Subject, empty } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SubjectSubscriber } from 'rxjs/internal/Subject';



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

  @ViewChild('deleteModal') deleteModal

  selectedCourse: Curso;

  deleteModalRef: BsModalRef;

  constructor(
    private cursosService: CursosService,
    private modalService: BsModalService,
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

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.activatedRoute})
  }

  onDelete(curso) {// Método que abre a Modal para confirmação
    this.selectedCourse = curso
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'}) // Usando o ViewChild para passar o parametro (Parametro que é o template)
  }

  onCofirmDelte() { // Método de confirmação do delete 
    this.cursosService.remove(this.selectedCourse.id).subscribe( // Acessando o método delete do service passando o curso.id que foi recuperado no momento que foi aberto a modal pelo método onDelete()
      success => { this.onRefresh(); // Em caso de sucess recarrega a list
      this.deleteModalRef.hide(); // Logo após fecha o modal
      },
      error => this.alertModalService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.')
    )
  }

  onDeclineDelte() {
    this.deleteModalRef.hide();
  }
  
}
