import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  preserveWhitespaces: true

})
export class CursosFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private cursoService: CursosService,
    private modal: AlertModalService,
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

      this.activatedRoute.params
        .pipe(
          map((params: any) => params['id']),
          switchMap(id => this.cursoService.loadByID(id))// switchMap Cancela calores antigos e mantem apenas o mais recente e podemos fazer mais aninhamento de Swich,
          // para obter mais valoes ao invés de ficar fazendo varios Subscribe
        ).subscribe(
          (curso) => this.uptadeForm(curso)
        ); // Editar versão 2 (Já refatorado)


    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
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
    if (this.form.valid) {
      this.cursoService.create(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess('Curso criado com sucesso.'); // Usando o ModalAlert Generico que foi criado.
          this.location.back(); // Seta a rota anterior.
         },
        error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente!'),
        () => this.modal.showAlertSuccess('Curso criado com sucesso.')
      );
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
