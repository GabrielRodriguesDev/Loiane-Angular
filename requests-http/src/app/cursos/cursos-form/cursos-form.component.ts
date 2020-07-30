import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  preserveWhitespaces: true

})
export class CursosFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  form: FormGroup;
  submitted = false;

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid) {
      console.log('submit');
    }
  }

  hasError(field: string){
    console.log(this.form.get(field).errors);
    return this.form.get(field).errors;
  }
  onCancel(){
    this.submitted = false;
    this.form.reset();
  }
}
