import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FieldControlErrorComponent,
    FormDebugComponent,

  ],
  imports: [
    CommonModule,
    FormsModule, 
    
  ]
})
export class TemplateFormModule { }
