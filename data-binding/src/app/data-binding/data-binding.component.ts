import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com'; //Property-Binding
  urlImg = 'http://lorempixel.com/400/200/nature/'; //Property-Binding

  valueRealTime: string ; //Class & Style Binding
  confirmedValue: string; //Class & Style Binding
  
  isMouseOver: boolean = false; //Event Binding
  Magic: boolean = false; //Event Binding


  getValor(){
    return 1;
  }
  
  buttonClicked(){
    alert("Button Clicked")
  }

  onKeyup(evento : KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value)
    this.valueRealTime = (<HTMLInputElement>event.target).value
  }

  saveValue(event){
    this.confirmedValue = event;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver)
  }


  clieckedMe(){
    this.Magic = !this.Magic;

  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
