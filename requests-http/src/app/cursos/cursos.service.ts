import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CursoService extends CrudService<Curso> { // Estendendo a classe do CRUD genérico e passando seu tipo para que tudo assuma o tipo certo.

constructor( // Passando no construtor todas a informações necessárias para a construção da classe herdada
  protected http: HttpClient 
  ) {
  super(http, `${environment.API}cursos`); // Passando os dois parametros necessário para o construtor da classe herdada (O link da API e HttpClient que é necessário)
}

}
