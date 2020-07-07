import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StatesBr } from '../models/states-br';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  url: string = 'assets/dados/statesbr.json'

  constructor(
    private httpClient: HttpClient
  ) { }

  getStatesBr(): Observable<StatesBr> {
    return this.httpClient.get<StatesBr>(this.url)
  }

  getPosts(){
    return [
      { nome: 'Dev', nivel:'Junior', desc:'Dev Jr' },
      { nome: 'Dev', nivel:'Pleno', desc:'Dev Pl' },
      { nome: 'Dev', nivel:'Senior', desc:'Dev Sr' }
    ]
  }

  getTechnologys(){
    return [
      { nome: 'Java', desc: 'Java' },
      { nome: 'Ruby', desc: 'Ruby'},
      { nome: 'C++', desc: 'C++'},
      { nome: 'NodeJS', desc: 'NodeJS'}
    ]
  }

  getNewsLetter(){
    return [
      { valor: 's', desc:'Sim' },
      { valor: 'n', desc:'Não' }
    ]
  }
}
