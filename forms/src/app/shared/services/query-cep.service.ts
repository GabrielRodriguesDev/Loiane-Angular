import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryCepService {

constructor(
  private httpClient: HttpClient
) { }


  queryCep(cep: string){
    //Deixando o  "cep" somente com dígitos.
    cep = cep.replace(/\D/g,'');
    //Verificando se o campo, não está vazio 
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP, de acordo com a expressão acima
      if(validacep.test(cep)) {
        //Buscando o CEP passado.
        return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`)
      }
    }
  }
}
