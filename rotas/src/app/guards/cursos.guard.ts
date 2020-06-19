import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// O CanActivedChild, ele cuida de casos onde quer guardar algo especifico Exemplo: O user não pode editar apenas ler  informação. A partir do retorno se for true libera a rota se for false ele não deixar acessar a rota.
@Injectable()// Como usamos injeção de dependencia temos que usar o decorator injecatable
export class CursosGuard implements CanActivateChild {//O guarda de rota filha precisa ser implementado o CanActivatedChild e os métodos necessários (route e state)
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {//O retorno do boolean do observable pode ser usado em verificações https

        console.log(route);
        console.log(state);
        /* Aqui onde podemos usar a imaginação para fazer a nossa lógica, consultar servidor e recuperar um dado que diz se o usuario,
        pode ou não acessar esse dado, No AlunosGuard tem um exmplo de como usar a validação a partir da url retornada pelo state.
        
        Esse CanActivedChild dependendo de onde declarado ele irá fazer a verificação. se declarado no Appmodule, o Component pai e filho,
        passa pela guarda de rota, se declarado no routing.module do component apenas os as rotas filhas passaram pela guarda de rota.*/

        return true

    }
}
