import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DropdownService } from '../shared/services/dropdown.service'
import { QueryCepService } from '../shared/services/query-cep.service';
import { Observable, empty } from 'rxjs';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {


  //form: FormGroup;
  erro: boolean = false
  //states: StatesBr[]
  states: Observable<{}>;
  posts: any[];
  technologys: any[];
  newsletterOp: any[];

  numeros: number [] = [1,2,3,4,5]
  dobro: number [] = []
  alunos: any [] = [
    {nome:'joão', idade: 15},
    {nome:'Pedro', idade: 16},
    {nome:'Gabriel', idade: 18}
  ]
  alunoDeMaior: any

  constructor( 
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private queryCep: QueryCepService,
    private dropdownService: DropdownService,
    private verificaEmailService: VerificaEmailService
    ) { 
      super ();
    }

  ngOnInit() {
  
    //this.verificaEmailService.vericaEmail('email1@email.com').subscribe()

    //this.numeros.forEach( data => console.log(data)) // Exemplo forEach percorre o array inteiro)
    /* this.dobro = this.numeros.map( data => data * 2)// Exemplo map percorre o array mapeando e passando cada valor dentro da condição.
     console.log(this.dobro) */

    /* this.alunoDeMaior = this.alunos.filter(data => data.idade >= 18)// Exemplo filter percorre o array e retorna  os valores que cooresponde a condição.  
      console.log(this.alunoDeMaior) */

    /* this.alunoDeMaior = this.alunos.find(data => data.idade == 18) // Exemplo find percorre o array e retorna um unico valor que cooresponde a condição
      console.log(this.alunoDeMaior) */
     

    this.states = this.dropdownService.getStatesBr();//Usando o Observable com o pipe async, não é necessario fazer inscrição pois o pipe cuida de se inscrever e desinscrever quando necessario
    this.posts = this.dropdownService.getPosts();
    this.technologys = this.dropdownService.getTechnologys();
    this.newsletterOp = this.dropdownService.getNewsLetter();
   /*this.dropdownService.getStatesBr()
   .subscribe((states: StatesBr[]) => {this.states = states; console.log(states)})*/ //Dessa forma pode não haver a desinscrição da chamada e da estouro de memoria (aconselhavel usar o pipe async)
   
   /*this.form = new FormGroup({ 
      name: new FormControl('Gabriel'),
      email: new FormControl()
    })*/ //Forma mais verbosa de iniciar um Data-Form.

    this.form = this.formBuilder.group({ // Objeto de FormGroup  -> Grupo onde possui os controles individuais de cada form.
      name: [null, [Validators.required, Validators.minLength(3)]], //Todo o campo é um controle de grupo.
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)], //Validação atráves do Validator (Forma de validação atráves do Reactive Forms), podemos ter mais de um validators, só precisa adicionar as validação dentro do array.    
      confirmEmail: [null],//Aqui teria a validação entre dois campos por uma função que está sendo puxada do FormValidation
      address: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.minLength(8)]], //Aqui teria a validação de campo cep, porém está executando erro. (FormValidation.cepValidator)
        number: [null, Validators.required],  
        street: [null, Validators.required],
        complemento: null,
        neighborhood: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
      }),
      posts: [null],
      technologys: [null],
      newsletter: ['s'],//Valor padrão
      terms: [null, Validators.pattern('true')],//Validando uma expressão regular. 
    })
     this.form.get('address.cep').statusChanges
      .pipe(
        distinctUntilChanged(),//Executa apenas quando o valor do statusChange mudar
        tap(value => console.log('Valor CEP:', value)),
        switchMap(stauts => status === 'VALID' ? //SwitchMap retorna um subscribe a partir da condição se for verdadeira ou falsa
        this.queryCep.queryCep(this.form.get('address.cep').value) // Se for verdadeira retorna o BuscaCEP
        : empty()//Se for falsa retorna vazio
        )
      )
      .subscribe( dados => { dados ? this.setValueForm(dados) : {} },//Se inscrevendo no result do Switchmap, pegando o valor retornado se for verdadeiro setando no formulario com o método setValueForm, se for falso retorna objeto em branco
      (error: Error) => console.log('Não achou CEP nenhum brow'))
    
    /*this.form.get('address.cep').valueChanges
      .subscribe(value => console.log('Valor CEP:', value))// Podemos usar a reatividade a partir de verificadores on time
    */
    }

  //Form Submit
  submit() {
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.form.value))//Transformando o valo passando em JSON. 
    .subscribe(data => { //Se inscrevendo no POST, e quando obter um "REPONSE" fazer um console log com oq foi retornado 
      //Reset Form se não houver erro.
      if(!this.erro){
        this.resetForm()
      }
    },
    (error: Error)=> {//Recebendo o erro e usado para a logica do IF acima.
      this.erro = true;
      alert("Erro ao enviar fórmulario")
    });
  }

  //Query CEP
  cep(){
    //Recuperando o valor do cep
    let cep = this.form.get('address.cep').value
    if(cep != null && cep !== ''){
      this.queryCep.queryCep(cep)
      .subscribe(data => {this.setValueForm(data)})
    } else {
      this.cleaningForm();
      alert('CEP invalid')
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
    });
    Object.keys(this.form.controls).forEach(key => {//Fazendo um forEach nos controles 
      const control = this.form.get(key);//Passando o controle para a variavel
      if(control instanceof FormGroup){//Se o control for uma instacia de FormGroup
        control.markAllAsTouched()//Marca o campo como tocado (Alterando o style)
      }      
    })
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

  setPosts(){
    const posts = { nome: 'Dev', nivel:'Pleno', desc:'Dev Pl' };
    this.form.get('posts').setValue(posts)
  }
  comparePosts(objOne, objTwo){//Metodo a ser usado com o compareWith (Que compara dois valores)
    return objOne && objTwo ? (objOne.nome === objTwo.nome && objOne.nivel && objTwo.nivel) : objOne && objTwo  ;
  }

  setTechnology(){
    this.form.get('technologys').setValue(['Java','JavaScript']) //Trabalhando com o ComboBox multiple
  }

  validarEmail( formControl: FormControl){
   return this.verificaEmailService.vericaEmail(formControl.value)
   .pipe(map(emailExiste => emailExiste ? {emailInvalido: true} : null))// Mapeando a resposta para retornar true se já existir o e-mail passado no parametro do formControl
 }
}
