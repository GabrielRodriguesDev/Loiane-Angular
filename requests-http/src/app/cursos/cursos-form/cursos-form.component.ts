import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';


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
    private location: Location
  ) { }

  form: FormGroup;
  submitted = false;

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
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
