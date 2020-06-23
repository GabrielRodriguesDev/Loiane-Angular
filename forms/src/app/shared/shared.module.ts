import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    FieldControlErrorComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    FormDebugComponent,
    FieldControlErrorComponent
  ]
})
export class SharedModule { }
