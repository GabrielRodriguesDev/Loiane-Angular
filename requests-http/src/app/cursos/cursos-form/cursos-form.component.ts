import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  preserveWhitespaces: true

})
export class CursosFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private alertModalService: AlertModalService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  form: FormGroup;
  submitted = false;

  ngOnInit() {

    /*this.activatedRoute.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const curso$ = this.cursoService.loadByID(id);
        curso$.subscribe(curso => {
          this.uptadeForm(curso)
        })
      }
    )*/ // Editar versão 1 (Foi refatorado)

      /*this.activatedRoute.params
        .pipe(
          map((params: any) => params['id']),
          switchMap(id => this.cursoService.loadByID(id))// switchMap Cancela calores antigos e mantem apenas o mais recente e podemos fazer mais aninhamento de Swich,
          // para obter mais valoes ao invés de ficar fazendo varios Subscribe
        ).subscribe(
          (curso) => this.uptadeForm(curso)
        ); // Editar versão 2 (Foi refeito com um guarda de rota para melhorar na performace) */

    const curso = this.activatedRoute.snapshot.data['curso']// Componente já é iniciado com os dados do objeto, pois o guard (Resolve) fez todo o load antes na inicialização

    

    this.form = this.fb.group({
      id: [curso.id], // Populamos os dados com o objeto que foi carregado pelo guard Resolver
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  uptadeForm(curso) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }

  onSubmit() {
    this.submitted = true;

    //Manipulando a msg de Error para condições diferentes.
    let msgSucess = 'Curso criado com sucesso.';
    let msgError = 'Erro ao criar curso, tente novamente!';
    if(this.form.value.id) {
      msgSucess = 'Curso alterado com sucesso.';
      msgError = 'Erro ao alterar curso, tente novamente!'
    }
    if (this.form.valid) {
      this.cursoService.save(this.form.value).subscribe(
        success => {
          this.alertModalService.showAlertSuccess(msgSucess); // Usando o ModalAlert Generico que foi criado.
          this.location.back(); // Seta a rota anterior.
         },
        error => this.alertModalService.showAlertDanger(msgError),
      ) // onSubmit (v2)
/*
      if(this.form.value.id) {
        this.cursoService.update(this.form.value).subscribe(
          success => {
            this.alertModalService.showAlertSuccess('Curso alterado com sucesso.'); // Usando o ModalAlert Generico que foi criado.
            this.location.back(); // Seta a rota anterior.
           },
          error => this.alertModalService.showAlertDanger('Erro ao alterar curso, tente novamente!'),
          () => console.log('Upate completo')
        )
      } else {
        this.cursoService.create(this.form.value).subscribe(
          success => {
            this.alertModalService.showAlertSuccess('Curso criado com sucesso.'); // Usando o ModalAlert Generico que foi criado.
            this.location.back(); // Seta a rota anterior.
           },
          error => this.alertModalService.showAlertDanger('Erro ao criar curso, tente novamente!'),
          () => console.log('Criação completa')
        );
      }
  */ //Refatorado onSubmit e msg de erros (v1)   
    }
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  } // Cancelando operação.
}
