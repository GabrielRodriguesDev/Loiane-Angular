import { Injectable } from '@angular/core';

@Injectable()

export class CursoService {

    getCursos(){
        return ['Angular', 'Node.js', 'Android']
    }
}