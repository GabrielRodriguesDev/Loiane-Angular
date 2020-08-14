import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {

  queryFields = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.queryFields.value);
  }

}
