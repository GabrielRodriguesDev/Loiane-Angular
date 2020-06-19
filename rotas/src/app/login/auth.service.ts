import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = false; // Criando uma variavel que será usada como retorno depois de analisar o Login do usuario, se é true ou false
  
  showMenuEmitter = new EventEmitter<boolean>() // Criando uma váriavel do tipo emissor de eventos, que será passada quando o usuario for autenticado e voltar a mostrar os atalhos nas rotas, para as outras entidades. 


  constructor(
    private router : Router
  ) { }

  validateLogin(user: User){
    if (user.name === 'Gabriel@' &&
    user.password === 'fx870'){

      this.authenticatedUser = true;

      this.showMenuEmitter.emit(true);//Quando o user for autenticado emitir um valor booleano. (Vai servir para manipular o DOM (exibir os links no navbar))
      
      this.router.navigate(['/Home'])// Mandando para a Home page
      
    } else {

      this.authenticatedUser = false;

      this.showMenuEmitter.emit(false); //Quando o user não for autenticado emitir um valor booleano. (Vai servir para manipular o DOM (permanecer sem a exibição dos links no navbar))
    }
  }

  authUser(){
    return this.authenticatedUser
  }
}
