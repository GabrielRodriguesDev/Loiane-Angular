import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  user: any = {
    name: null,
    email: null //'gabriel@onsist.com.br'
  }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form);
    console.log(this.user)
  }

  //Formatting CSS
  checksValidTouched(field){
    return  !field.valid && field.touched //verifica se o campo é valido e foi tocado 
  }

  errorStyle(field){
    return {
      'was-validated': this.checksValidTouched(field) // A partir da verificação se a condição for verdadeira aplica uma formatação difeernte
    }
  }

  CEPquery(cep){
    console.log(cep);

   //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g,'');

      //Verifica se campo cep possui valor informado.
      if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {
          this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe( data => {console.log(data)}
          )
        }
      }
  }


}
