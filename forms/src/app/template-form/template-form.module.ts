import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TemplateFormComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    SharedModule
    
    
  ]
})
export class TemplateFormModule { }
