import { Injectable } from '@angular/core';

@Injectable()

export class CursoService {

    constructor(){
        console.log(CursoService)
    }

    cursos: string [] = ['Angular', 'Node.js', 'Android']

    getCursos(){
        return this.cursos
    }
    
    addCursos(curso:string){
      this.cursos.push(curso);  
    }
}