import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rotas';

  params: number

  constructor(

    private router: Router
  ){

  }
  setParamsPaggination(params: number){
    this.params = params //Pegando o valor passado pelos paggination

    this.router.navigate(['Cursos'],
    {queryParams: {'pagina': params}})//Atualizando a rota junto o queryParams, após passarem receber o valor do paggination  
  }
}
