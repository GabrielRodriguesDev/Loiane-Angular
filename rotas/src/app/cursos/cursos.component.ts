import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: any [];
  pagina: number;
  inscricao: Subscription;

  constructor( 
    private CursosService: CursosService,
    private ActivatedRoute: ActivatedRoute
    ) { 
    console.log(this.ActivatedRoute.queryParams)
  }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

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
  

}
