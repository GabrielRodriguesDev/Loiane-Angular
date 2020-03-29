import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
initialValue: number = 5
cycle: boolean = false;

alterValue(){
  this.initialValue++;
}

resurrectsCycle(){
  this.cycle = !this.cycle;
}
}
