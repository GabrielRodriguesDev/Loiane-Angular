import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { IformDeactivate } from './iform-deactivate';
//Interface CanDeactivate  que uma classe pode implementar para ser um guarda, decidindo se uma rota pode ser desativada. Se todos os guardas voltarem true, a navegação continuará. Se algum guarda retornar false, a navegação será cancelada.
@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformDeactivate> {// Ao usar o CanDeactivate temos que espeficifar o componente (classe ou interface) que vamos validar;
    canDeactivate(
        component: IformDeactivate,// Detalhamento do componente que vai possuir a logica de guarda de roda. Pode ser um component ou Interface (Qualquer classe)
        route: ActivatedRouteSnapshot, //Rota ativa
        state: RouterStateSnapshot // Status
    ): Observable<boolean> | Promise<boolean> | boolean {

        //return component.canChangeRoute()//A partir da tratativas que criamos se o retorno for true ele sai da rota se for false e não sai a rota.
        
        return component.canDisable();
    }
}