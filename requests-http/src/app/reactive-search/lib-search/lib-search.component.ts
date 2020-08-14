import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {

  queryFields = new FormControl();
  SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: number;

  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit() {
  }

  onSearch() {
    const fields =  'name,version'
    let value = this.queryFields.value;
    if(value && (value = value.trim()) != '') { // Validações (Se o user não digitou nada ou a busca é vazia, ela caira fora do if)
    
      const params_ = { // Passando Parametros a URL através de um objeto
        search: value,
        fields: fields
      }

      let params = new HttpParams(); // Passando parametros a URL através do HttpParams (Mais usado para paramtros dinamicos)
      params = params.set('search', value); // Como é um valor imutavél temos que passar o valor pra ele sempre (É preguiçoso)
      params = params.set('fields', fields)

      this.results$ = this.httpClient
    .get(this.SEARCH_URL, { params })// Fazendo um get no link passado e colocando dentro da variavel que é um Observable, passando o link e os Parametros de rota através de parametros de rotas 
      .pipe(
        tap((resp: any) => (this.total = resp.total)), // Pegando o total da Busca
        map((resp: any) => resp.results) // Pegando o resultados da busca
      );
    }
  }
}
