import { Injectable, EventEmitter } from '@angular/core';


@Injectable()

export class CursoService {


    constructor(){
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
        return this.cursos
    }
    
    addCursos(curso:string){
      this.cursos.push(curso);  
      this.emitirCursoCriado.emit(curso);//Emissao de um evento para algum componente ser notificado quando houve alguma mudança
      CursoService.criouNovoCuso.emit(curso);//Emissao de um evento para algum componente ser notificado quando houve alguma mudança, usando varial static
    }
    
    
}