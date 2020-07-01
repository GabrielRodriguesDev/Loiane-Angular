import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { QueryCepService } from '../shared/services/query-cep.service';



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
    private http: HttpClient,
    private queryCep: QueryCepService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form){//Efetuando uma simulação de uma subimissão ao um servidor, e pegando as respostas  (Url de teste: https://resttesttest.com/)
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .subscribe(data => {console.log(data)})
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
  CEP(cep, form){
    if(cep != null && cep !== ''){
      this.queryCep.queryCep(cep)
      .subscribe(data => this.setValueForm(data, form))
    } else {
      this.cleaningForm(form);
      alert('CEP invalid')
    }
  }

  setValueForm(data, forms){ //Setando as informações passsadas pelo busca CEP
    /*forms.setValue({//Usando o Setvalue, temos que passar alguma informação para todos os campos do form
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

  cleaningForm(forms){
    forms.form.patchValue({
        Endereco: { 
          cep:"" ,
          number:"" ,
          street:"" ,
          complemento:"" ,
          neighborhood:"" ,
          city:"" ,
          state: "" 
        }
    })
  }

}
