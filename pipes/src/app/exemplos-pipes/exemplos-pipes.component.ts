import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "learning JavaScript data Structures and algorithms 2nd Edition",
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url:'https://www.amazon.com.br/Learning-JavaScript-Data-Structures-Algorithms-ebook/dp/B01C2XX8Y2/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=Learning+JavaScript+Data+Structures+and+Algorithms&qid=1588450518&sr=8-3' 
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
