import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;

  subscribe: Subscription;

  constructor(
    private alunosService : AlunosService,
    private activatedRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.subscribe = this.activatedRoute.params.subscribe(
      (params: any) => {
        let id = params['id']

       this.aluno = this.alunosService.getAluno(id)

       console.log(this.activatedRoute.params)
        if(id == null){
          this.router.navigate(['NaoEncontrado'])
        }
      }
    );
  }

  editAluno () {
    this.router.navigate(['/Alunos', this.aluno.id, 'edit'])//Alterando a rota para a rota de alterar o aluno conforma o ID passado pela rota ativa que foi recuperado no ActivatedRoute. 
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }



}
