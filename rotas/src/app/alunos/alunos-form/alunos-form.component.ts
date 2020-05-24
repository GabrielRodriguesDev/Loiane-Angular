import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit {

  subscribe: Subscription;
  aluno: any;

  constructor(
    private alunosService : AlunosService,
    private activatedRoute : ActivatedRoute,
    private router : Router
    
  ) { }

  ngOnInit(): void {
    this.subscribe = this.activatedRoute.params.subscribe(
      (params : any) => {
        let id = params['id'] // Recuperando o id da rotar que está ativa para verificar as informações do id passado pela rota, para poder fazer as alterações

        this.aluno = this.alunosService.getAluno(id)
        
        if(this.aluno == null){
          this.router.navigate(['NaoEncontrado'])
        }
      }
    )
  }

  ngOnDestroy(): void {
    
    this.subscribe.unsubscribe()
  }

}
