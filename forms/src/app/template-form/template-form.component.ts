import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  user: any = {
    name: null,
    email: null //'gabriel@onsist.com.br'
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form);
    console.log(this.user)
  }

}
