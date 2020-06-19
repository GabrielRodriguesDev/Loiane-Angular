import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';


    const alunosRouting: Routes = [
        { path: '', component: AlunosComponent, 
        canActivateChild:[AlunosGuard],
            children: [
                { path: 'novo', component: AlunosFormComponent },
                { path: ':id', component: AlunoDetalheComponent, 
                    resolve: {Aluno :AlunoDetalheResolver} 
            },
                { path: ':id/edit', component: AlunosFormComponent,
                    canDeactivate:[AlunosDeactivateGuard]},
                
        ]},
        
        

    ]

@NgModule ({
    imports: [RouterModule.forChild(alunosRouting)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}