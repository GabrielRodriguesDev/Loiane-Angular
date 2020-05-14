import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {  //Instacia da classe do angular que nós trás as informações das rotas, onde podemos acessar os parametros por exemplo.
    console.log(this.route.snapshot.params)
    this.id = this.route.snapshot.params['id']; //Como 'paramns' é um objeto dinamico estamos acessando o atributo como se fosse uma chave
  } 


  ngOnInit(): void {
  }

}
