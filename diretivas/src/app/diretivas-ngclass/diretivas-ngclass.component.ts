import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngclass',
  templateUrl: './diretivas-ngclass.component.html',
  styleUrls: ['./diretivas-ngclass.component.scss']
})
export class DiretivasNgclassComponent implements OnInit {

  meuFavorito:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  alterValue(){
    this.meuFavorito = !this.meuFavorito
  }

}
