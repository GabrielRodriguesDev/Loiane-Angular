import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

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
  params = new HttpParams(); // Passando parametros a URL através do HttpParams (Mais usado para paramtros dinamicos)
  FIELDS = 'name,version'
      

  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit() {


    this.results$ = this.queryFields.valueChanges // Retornando um Observable de cada mudança que acontece no campo..
      .pipe(
      map(value => value.trim()), // Retirando os "Espaços do value"
      filter(value => value.length > 1), // Recuperando valores com o tamanho maior que 1
      debounceTime(200), // Colocando um delay de 200 milessegundos, para não fazer uma requisição a cada letra digitada
      distinctUntilChanged(), // Recuperando o valor diferente (Recupera apenas o valor diferente de antes, ou seja não repete o valor)
      //tap( value => console.log(value)) // Usado para Debbug
      switchMap( value => this.httpClient.get(this.SEARCH_URL, { // Fazendo um SwitchMap, pois ele cancela a busca anterior, a partir disso fazendo uma requisição get, passando o objeto de parametros necessários
        params : {
          search : value,
          fields : this.FIELDS
        }
      })),
      tap((resp : any) => this.total = resp.total), // Atribuindo o total de registros encontrados
      map((resp: any) =>  resp.results ) // Retornando os registros a variavel que irá gerenciar e se desiscever pois está com o pipe async
      )
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
