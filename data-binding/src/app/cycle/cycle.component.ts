import { Component, Input } from '@angular/core';
import {
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy
} from '@angular/core'

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnChanges, OnInit, 
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
AfterViewChecked, OnDestroy{

@Input()
  value: number = 0
  
  constructor() { 
    this.log('constructor')
  }

  ngOnChanges(){
    this.log('ngOnChanges')
  }

  ngOnInit() {
    this.log('ngOnInit');  
  }

  ngDoCheck(){
    this.log( 'ngDoCheck')
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }
  
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  private log(life: string){
    console.log(life)
  }

}
