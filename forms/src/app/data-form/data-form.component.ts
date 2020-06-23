import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  form: FormGroup 

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    /*this.form = new FormGroup({ 
      name: new FormControl('Gabriel'),
      email: new FormControl()

    })*/ //Forma mais verbosa de iniciar um Data-Form.

    this.form = this.formBuilder.group({ //Grupo onde possui os controles individuais de cada form.
      name: ['Valor inicial'], //Todo o campo é um controle de grupo.
      email: [null],

    })
  }


  changed(){
    console.log(this.form)
  }

}
