import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  subscription : Subscription;

  curso: any;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CursoService: CursosService
    ) {  //Instacia da classe do angular que nós trás as informações da rota que está ativa no momento, onde podemos acessar os parametros por exemplo.
    //this.id = this.route.snapshot.params['id']; //Como 'paramns' é um objeto dinamico estamos acessando o atributo como se fosse uma chave

  } 


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( //A cada carregamento da classe está sendo feito a inscrição no BehaviorSubject esperando a mudança no 'params.id', (id que foi passado como parametro na rota) e colocando na variavel.;
      (params: any) => {
        this.id = params['id']

        this.curso = this.CursoService.getCurso(this.id) // Chamando a função que valida se o id passado é referente a algum curso, se for retorna o curso de acordo com o id passado, se não retorna null 

        if(this.curso == null){//Caso o id do curso não exista o curso receberá null, caso o curso seja null ele vai redireciona a rota para o componente CursoNaoEncontrado, isso é feito pela classe  'Router'
          this.router.navigate(['NaoEncontrado'])
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Como boa pratica, na destruição do componente também cancelar a inscrição, pois não temos mais interesse nela. 
    
  }

}
