import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string [] = ["Angular", "Jasmine"]; 

 mostrarCursos : boolean = true
 

  constructor() { }

  ngOnInit(): void {
    console.log(this.cursos,this.mostrarCursos)
  }

  alterValue(){
    this.mostrarCursos = !this.mostrarCursos
    console.log(this.mostrarCursos)
   }

}
