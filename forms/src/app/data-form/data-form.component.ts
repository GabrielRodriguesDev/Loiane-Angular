import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
      name: [null, [Validators.required, Validators.minLength(3)]], //Todo o campo é um controle de grupo.
      email: [null, [Validators.required, Validators.email]], //Validação atráves do Validator (Forma de validação atráves do Reactive Forms), podemos ter mais de um validators, só precisa adicionar as validação dentro do array.    
      cep: [null, Validators.required],
      number: [null, Validators.required],
      street: [null, Validators.required],
      complemento: null,
      neighborhood: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
    })
  }

  //Form
  onSubmit(){
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.form.value))//Transformando o valo passando em JSON. 
    .subscribe(data => { //Se inscrevendo no POST, e quando obter um "REPONSE" fazer um console log com oq foi retornado 
      console.log(data)
      //Reset Form se não houver erro.
      if(!this.erro){
        this.resetForm()
      }
    },
    (error: Error)=> {//Recebendo o erro e usando para a logica do IF acima.
      this.erro = true;
      alert("Erro ao enviar fórmulario")
    });
  }
 
  resetForm(){
    this.form.reset()
  }

  //Formatting CSS

  checkValidEmail(){
    let fielEmail = this.form.get('email')
    if(fielEmail.errors){
      return fielEmail.errors['email'] && fielEmail.touched
    }
  }

  checksValidTouched(field){
    return !this.form.get(field).valid && this.form.get(field).touched // Verifica se o campo do válido de acordo com a condição passada; (Reactive forms já temos os dados no componente por isso é diferente do template drive)
  }


  errorStyle(field){
    return {
      'was-validated ': this.form.get(field).valid && this.form.get(field).touched
    }   
  }


}