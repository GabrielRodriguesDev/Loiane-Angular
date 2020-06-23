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

  form: FormGroup;
  erro: boolean = false

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
    this.httpClient.post('https://htatpbin.org/post', JSON.stringify(this.form.value))//Transformando o valo passando em JSON. 
    .subscribe(data => { //Se inscrevendo no POST, e quando obter um "REPONSE" fazer um console log com oq foi retornado 
      console.log(data)
      //Reset Form se não houver erro.
      if(!this.erro){
        this.resetForm()
      }
    },
    (error: Error)=> {
      this.erro = true;
      alert("Erro ao enviar fórmulario")
    });
  }
 
  resetForm(){
    this.form.reset()
  }


}
