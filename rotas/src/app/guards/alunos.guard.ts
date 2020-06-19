import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        /*(if(state.url.includes('edit')){
            alert('Num vai não ')
            return false
        }*/
        console.log('AlunosGuard: Verificando se tem acesso a rota filha')
        return true
    }
}
