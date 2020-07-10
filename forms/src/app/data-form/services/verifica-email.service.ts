import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

constructor(private httpClient: HttpClient) { }

vericaEmail(email: string){
  return this.httpClient.get('assets/dados/verificarEmail.json')
  .pipe(
    delay(2000),//Setando um delay para não houver excesso de requisição
    map((data : {emails: any[]}) => data.emails),//Recuperando o array do objeto emails
    //tap(console.log),
    map((data : {email: string}[]) => data.filter(v => v.email == email)),//Recuperando apenas o dado passado por parametro
    //tap(console.log),
    map((data: any[]) => data.length > 0),//Recuperando true ou false com base na condição.
    //tap(console.log)
  )
} 
}
