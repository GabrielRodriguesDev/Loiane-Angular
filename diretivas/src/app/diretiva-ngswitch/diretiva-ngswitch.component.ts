import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.scss']
})
export class DiretivaNgswitchComponent implements OnInit{

  aba: string = 'Sei lá '

  constructor() { }

  ngOnInit(): void {
    console.log(this.aba)
  }

  status(){
    console.log(this.aba)
  }
 
  
}
