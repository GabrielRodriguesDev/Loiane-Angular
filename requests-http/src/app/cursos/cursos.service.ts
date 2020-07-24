import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos'; // private readonly API -> Variavél privada que não sofrerá mudança

  constructor(
    private http: HttpClient
  ) { }
  
  list(){
    return this.http.get<Curso[]>(this.API)
      .pipe(
        tap(console.log)
      )
  }

  

}
