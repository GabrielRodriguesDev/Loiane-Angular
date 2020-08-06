import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

export class CrudService <T>{ 

    /*Modelo de Crud genérico onde passamos todas a informações genéricas e usamos herança para tipalas posteriormente,
    passamos  o tipo <T> (Genérico (Rxjs)) para a Classe pois ao estender passamos o tipo correto e tudo que é herdado já assume o tipo correto, 
    as unica informação especifica para esse modelo de CRUD genérico é o link da API que pode ser alterado no constrtutor,
    de quando é herdado a classe. 

    Temos como exemplo o antes "curso-old.service" e depois usando o CRUD genérico temos o "curso-service, 
    esse CRUD em especifico pode ser herdado e reutilizado, qualquer informação que fuja disso é necessário comprar outro."
    */

    constructor(
        protected http : HttpClient,
        private API_URL
      ) { }
      
      list() {
        return this.http.get<T[]>(this.API_URL)
          .pipe(
            delay(2000),
            tap(console.log)
          );
      }
      
      loadByID(id){
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
      }
      
      private create(record: T) {
        return this.http.post(this.API_URL, record).pipe(take(1)); // Método de create;
      }
      
      private update(record: T) {
        return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1)); // Método de update 
      }
      
      save(record: T) {//Recebendo o objeto de record (Registro) se já existir ID atualizar caso não tenha faça a criação.
        if(record['id']) {
          return this.update(record)
        } else {
          return this.create(record)
        }
      }
      
      remove(id) {
        return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1)); // Método de delete;
      }
      
}

