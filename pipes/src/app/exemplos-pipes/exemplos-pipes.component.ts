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

  livros: string [] = ['Angular','Java', 'C#', 'Kotlin' ]

  filtro : string;

  
  constructor() { }

  ngOnInit(): void {
  }

  newValue(value: string){
     this.livros.push(value)
  }

  getCursos( ){
    if(this.livros.length === 0 || this.filtro === undefined) {
      return this.livros
    }
    return this.livros.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0){
        return true
      }
      return false
    })
  } /*Não entendi como funciona o filtro muito bem*/

  valueAsync = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000);
  })


}
