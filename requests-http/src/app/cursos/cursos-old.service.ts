import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosOldService {

  private readonly API = `${environment.API}cursos`; // private readonly API -> Variavél privada que não sofrerá mudança

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(curso) {
    return this.http.post(this.API, curso).pipe(take(1)); // Método de create;
  }

  private update(curso) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1)); // Método de update 
  }

  save(curso) {//Recebendo o objeto de curso se já existir ID atualizar caso não tenha faça a criação.
    if(curso.id) {
      return this.update(curso)
    } else {
      return this.create(curso)
    }
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1)); // Método de delete;
  }
}
