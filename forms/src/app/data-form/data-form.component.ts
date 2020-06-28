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
      address: this.formBuilder.group({
        cep: [null, Validators.required],
        number: [null, Validators.required],
        street: [null, Validators.required],
        complemento: null,
        neighborhood: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
      })
    })
  }

  //Form Submit
  onSubmit(){
    if(this.form.valid){

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
    } else { //Caso o form não seja valido, troca os campos para touched e aplica o stylo de erro que é acionado quando o campo é touched
      this.checkFormValidation(this.form)//Passando o proprio form para analisar o objeto
    }

  }

  checkFormValidation(form: FormGroup){
    Object.keys(form.controls).forEach(key => {// Object key retorna os key values de cada objeto. 
      console.log(key);// Será retornado os values key do objeto form (Os values keys aninhados (valores do endereco) não vão ser retornado por essa function)
      const control = form.get(key);//Pegando o value key do formulario
      control.markAsTouched();//Aplicando a classe de touched para a mudança de estilo
      if(control instanceof FormGroup) { //Verificando se alguma value key é um FormGroup (Um objeto aninhado)
        this.checkFormValidation(control) //Caso seja passa sobre a validação, pois o Object key não pega aninhados, portanto é necessario fazer uma "apropriação"
      }
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

  //Query CEP

  CEPquery(){
    //Recuperando o valor do cep
    let cep = this.form.get('address.cep').value
     //Verificando se o campo, não está vazio 
     if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP, de acordo com a expressão acima
      if(validacep.test(cep)) {
        //Buscando o CEP passado.
        this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe( data => {this.setValueForm(data)}
        )
      }
      else{
        //Cep inválido
        this.cleaningForm()
        alert("CEP inválido")
      }
    }
  }

  setValueForm(data){
    this.form.patchValue({//Usamos o patchValue() quando queremos alterar uma séria de valores (Varios campos), desde que esteja no form associado. 
      address: {
        cep: data.cep ,
        street: data.logradouro,
        complemento: data.complemento,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf
      }
    })

    this.form.get('name').setValue('Gabriel Silva')//Usamos o setValue() quando queremos setar um valor de apenas um campo do form.
  }

  cleaningForm(){
    this.form.patchValue({
      address: {
        cep: null,
        number: null,
        street: null,
        complemento: null,
        neighborhood: null,
        city: null,
        state: null
      }
    })  
  }

}
