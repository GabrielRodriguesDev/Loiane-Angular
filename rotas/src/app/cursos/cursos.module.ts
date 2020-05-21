import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosComponent } from '../cursos/cursos.component';
import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from '../cursos/curso-nao-encontrado/curso-nao-encontrado.component';

import { CursosService } from '../cursos/cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';


@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],

    imports: [ 
        CommonModule,
        CursosRoutingModule,
        RouterModule
        
    ],
    exports: [],
    providers: [
        CursosService
    ],
})
export class CursosModule {}