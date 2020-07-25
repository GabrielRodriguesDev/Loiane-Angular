import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';
import { tap, delay } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`// private readonly API -> Variavél privada que não sofrerá mudança

  constructor(
    private http: HttpClient
  ) { }
  
  list(){
    return this.http.get<Curso[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

  

}
