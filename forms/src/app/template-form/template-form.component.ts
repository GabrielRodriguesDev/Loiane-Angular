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

  //Busca CEP
  CEPquery(cep, form){
    console.log(cep);

   //Deixando o  "cep" somente com dígitos.
    cep = cep.replace(/\D/g,'');

      //Verificando se o campo, não está vazio 
      if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP, de acordo com a expressão acima
        if(validacep.test(cep)) {
          //Buscando o CEP passado.
      
          this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe( data => {this.setValueForm(data, form)}
          )
        }
      }
  }

  setValueForm(data, forms){ //Setando as informações passsadas pelo busca CEP
    /*forms.setValue({//Usando o Setvalue, temos que passar alguma informação para todos os campos do form
      name: forms.value.name, 
      email: forms.value.email, //setando os dados que já foram populados, para que não perca informação
        Endereco: { // Pegando dados retornado da busca de CEP, e setando nos input
          cep: data.cep,
          number: '',
          street: data.logradouro,
          complemento: data.complemento,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf 
        } 
    })*/

    forms.form.patchValue({ // Usando o PatchValue, pois com ele podemos setar apensa oque queremos
      Endereco: { // Pegando dados retornado da busca de CEP, e setando nos input
        cep: data.cep,
        street: data.logradouro,
        complemento: data.complemento,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf 
      }
    })
  }
}
