import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

/*Interface que as classes podem implementar para serem um provedor de dados. 
Uma classe de provedor de dados pode ser usada com o roteador para resolver dados durante a navegação. 
A interface define um resolve()método que será chamado quando a navegação iniciar. O roteador aguardará os dados serem resolvidos,
 antes que a rota seja finalmente ativada.*/

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> /*Dentro do diamont colocamos a classe que vai ser "Resolvida" */{
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        //Quando eu vi estava com sono, dar mais uma olhada pra entender melhor

        console.log('Está no Resolver')
        let id = route.params['id']; 

        return this.alunosService.getAluno(id);
    }
    constructor(private alunosService: AlunosService){

    }
}
