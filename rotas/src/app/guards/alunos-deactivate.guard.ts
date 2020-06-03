import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
//Interface CanDeactivate  que uma classe pode implementar para ser um guarda, decidindo se uma rota pode ser desativada. Se todos os guardas voltarem true, a navegação continuará. Se algum guarda retornar false, a navegação será cancelada.
@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunosFormComponent> {// Ao usar o CanDeactivate temos que espeficifar o componente que vamos validar (Que vamos guardar caso o usuario tente sair dele);
    canDeactivate(
        component: AlunosFormComponent,// Detalhamento do componente que vai ser guardado caso o user tente sair desse componente e tente acessar outr rota
        route: ActivatedRouteSnapshot, //Rota ativa
        state: RouterStateSnapshot // Status
    ): Observable<boolean> | Promise<boolean> | boolean {

        return component.canChangeRoute()//A partir da tratativas que criamos se o retorno for true ele sai da rota se for false e não sai a rota.

    }
}