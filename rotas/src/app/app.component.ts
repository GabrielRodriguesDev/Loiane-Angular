import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  showMenu: boolean;// Variavel que vai ser populada pelo valor a ser passado após a autenticação do usuario


  constructor(
    private authService : AuthService
  ){

  }

  ngOnInit(): void {
   this.authService.showMenuEmitter.subscribe(/*Se inscrevendo em um EventEmitter e recuperando o valor dele, para a tratativa dados da nav bar por um *ngIf*/
     show => this.showMenu = show /*Pegando o valor passado pelo EventEmitter e colocando na variavel destinada para a manipulação do DOM*/
   )
  } 
  
}
