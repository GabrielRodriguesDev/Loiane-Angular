import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';


    const alunosRouting: Routes = [
        { path: 'alunos', component: AlunosComponent, 
            children: [
                { path: 'novo', component: AlunosFormComponent },
                { path: ':id', component: AlunoDetalheComponent },
                { path: ':id/edit', component: AlunosFormComponent },
        ]},
        
        

    ]

@NgModule ({
    imports: [RouterModule.forChild(alunosRouting)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}