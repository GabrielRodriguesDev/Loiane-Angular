import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  form: FormGroup 

  constructor( 
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
    /*this.form = new FormGroup({ 
      name: new FormControl('Gabriel'),
      email: new FormControl()
    })*/ //Forma mais verbosa de iniciar um Data-Form.

    this.form = this.formBuilder.group({ // Objeto de FormGroup  -> Grupo onde possui os controles individuais de cada form.
      name: ['Valor inicial'], //Todo o campo é um controle de grupo.
      email: [null],
    })
  }

  onSubmit(){
    console.log(this.form)
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.form.value))//Transformando o valo passando em JSON. 
    .subscribe(data => {console.log(data)})//Se inscrevendo no POST, e quando obter um "REPONSE" fazer um console log com oq foi retornado 
  }
 



}
