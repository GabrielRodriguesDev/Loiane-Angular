import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

@Input()
valor: number = 0

@Output()
modifiedValue = new EventEmitter();
 

  Assigns(){
     this.valor++;
    this.modifiedValue.emit({newValue: this.valor});
  }

  Decreases(){
    if(this.valor <= 0){
      this.valor = 0 
    } else {
      this.valor--;
    }
    this.modifiedValue.emit({newValue: this.valor});

  }
  constructor() { }

  ngOnInit(): void {
  }

}
