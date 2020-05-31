import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
//Guarda de rota, ele guarda a rota a partir de sua parametrização, por exemplo um usuario não autenticado tentando entrar em outra rota direto pela url ou recarregar a pag
export class AuthGuard implements CanActivate{ //O Guarda de rotas precisa estar implementando o CanActivate e seus métodos necessários

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  canActivate(//Método necessário para o funcionamento do CanActivate
    route: ActivatedRouteSnapshot, //Recebe a rota ativa
    state: RouterStateSnapshot //Recebe o status da rota
  ) : Observable<boolean> | boolean {
    
    if (this.authService.authUser()){//Recebe o valor da autenticação e verifica se é 'true'
      return true 
    } 

    this.router.navigate(['/Login'])//Sendo false redireciona para a rota 'Login'
    return false
  }
}
