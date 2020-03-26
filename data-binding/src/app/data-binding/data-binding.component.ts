import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  urlImg = 'http://lorempixel.com/400/200/nature/';

  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
