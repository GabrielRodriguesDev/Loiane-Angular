import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../cursos.service';


@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(
    private cursosService  : CursoService
  ) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {
    if(route.params && route.params['id']) {//Caso a condição seja correta retornar o objeto do "servidor"
      return this.cursosService.loadByID(route.params['id']);
    } else {
      return of({ // Caso não seja retornar um objeto null
        id: null,
        nome: null
      })
    }
  }
}
