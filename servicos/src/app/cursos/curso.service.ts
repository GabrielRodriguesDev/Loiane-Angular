import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable()

export class CursoService {


    constructor(private logService : LogService){
        console.log(CursoService)
    }

    emitirCursoCriado = new EventEmitter<string>(); /*
    Usando o EvetEmitter para ter troca de dados entre componentes sem parentesco
    */
    static criouNovoCuso = new EventEmitter<string>(); /*Quando usado o modo "static", não precisamos,
    fazer a instancia da classe no componente, podemos acessar direto pelo serviço e recuperar oque desejamos,
    da variavel ou método criado com o "static"*/

    cursos: string [] = ['Angular', 'Node.js', 'Android']

    getCursos(){
        this.logService.consoleLog("Obtendo lista de cursos")
        return this.cursos
    }
    
    addCursos(curso:string){
        this.logService.consoleLog(`Criando um novo curso ${curso}`)
      this.cursos.push(curso);  
      this.emitirCursoCriado.emit(curso);//Emissao de um evento para algum componente ser notificado quando houve alguma mudança
      CursoService.criouNovoCuso.emit(curso);//Emissao de um evento para algum componente ser notificado quando houve alguma mudança, usando varial static
    }
    
    
}
/*Confome mostrando acima podemos noticar os componentes de duas formas, poderia apenas ser com o static, 
pois não seria necessario ficar fazendo instancia da servico em todos os componentes que forem usarem */