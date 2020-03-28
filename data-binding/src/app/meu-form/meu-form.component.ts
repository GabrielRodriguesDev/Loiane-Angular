import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {


  nomeManual:string = 'Gabriel'
  nomeAutomatico: string = 'Show'
  
  pessoa: any =  {
    nome: 'Gabriel',
    idade: 18

  }
twoWayBinding(){
    console.log(this.pessoa.nome)
    console.log(this.pessoa.idade)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
