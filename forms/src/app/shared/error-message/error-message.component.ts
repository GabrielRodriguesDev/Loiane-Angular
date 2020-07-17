import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  
  @Input() 
  showError: boolean;
  @Input()
  errorMessage: string;

  @Input()
  control: FormControl

  constructor() { }

  ngOnInit() {

    
  }

}
