import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

@Input()
valor: number = 0

@Output()
modifiedValue = new EventEmitter();

@ViewChild('fieldInput')
fieldInput: ElementRef;
 

  Assigns(){
     this.valor++;
    this.modifiedValue.emit({newValue: this.valor});
  }

  Decreases(){
    console.log(this.fieldInput.nativeElement.value)
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
