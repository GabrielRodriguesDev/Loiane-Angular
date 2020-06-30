import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormDebugComponent,
    FieldControlErrorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [
    FormDebugComponent,
    FieldControlErrorComponent
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
