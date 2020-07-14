import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QueryCepService } from './services/query-cep.service';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    FieldControlErrorComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [
    FormDebugComponent,
    FieldControlErrorComponent,
    ErrorMessageComponent
  ],
  providers: [

  ]
})
export class SharedModule { }
