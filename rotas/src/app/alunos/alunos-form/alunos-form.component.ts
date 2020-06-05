import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IformDeactivate } from 'src/app/guards/iform-deactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit, IformDeactivate {

  subscribe: Subscription;
  aluno: any;
   private alterForm: boolean = false

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

  onInput(){
    this.alterForm = true
    console.log('Alter')
  }

  canChangeRoute(){
    if(this.alterForm == true){
      confirm('Deseja perder os dados alterados que não foram salvos?')
      console.log(this.alterForm)
      return false
    }
    return true
  }  

  canDisable(){
    this.canChangeRoute();// Usando uma interface para ter uma guarda de desativação de rota generica
  }

}
