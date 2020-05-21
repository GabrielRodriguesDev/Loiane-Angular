import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: any [];
  pagina: number;

  
  params: number

  inscricao: Subscription;

  constructor( 
    private CursosService: CursosService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
    ) { 
    console.log(this.ActivatedRoute.queryParams)
  }

  ngOnInit(): void {

    this.cursos = this.CursosService.getCursos(); // Recuperando os cursos


    this.inscricao = this.ActivatedRoute.queryParams.subscribe( //A cada carregamento da classe está sendo feito a inscrição no BehaviorSubject esperando a mudança no 'paginas', (Página que foi passada na rota) e colocando na variavel.;
       (queryParams: any) => {
         this.pagina = queryParams['pagina'];
       }
    )
    console.log(this.pagina)

  }
 
  ngOnDestroy(): void {
    this.inscricao.unsubscribe //Como boa pratica, na destruição do componente também cancelar a inscrição, pois não temos mais interesse nela. 
  
  }
  

  setParamsPaggination(params: number){
    this.params = params //Pegando o valor passado pelos paggination
    this.router.navigate(['Cursos'], {queryParams: {'pagina': params}})//Atualizando a rota junto o queryParams, após passarem receber o valor do paggination  
  }

}
