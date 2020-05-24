import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';

@NgModule({
    declarations: [
        AlunosComponent,
        AlunosFormComponent,
        AlunoDetalheComponent
    ],
    imports: [ 
        CommonModule,
        AlunosRoutingModule
     ],
    exports: [],
    providers: [],
})
export class AlunosModule {}