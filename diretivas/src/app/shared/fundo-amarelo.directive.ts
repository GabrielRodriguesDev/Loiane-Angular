import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[FundoAmarelo]' //Como mostrado, podemos indicar que  elemento pode sofrer alteração
})
export class FundoAmareloDirective {

  constructor(
    private  _ElementRef: ElementRef,
    private _Renderer: Renderer2
    ) { 


    //console.log(this._ElementRef.nativeElement)
    //this._ElementRef.nativeElement.style.backgroundColor = 'yellow'
    
    
    this._Renderer.setStyle(this._ElementRef.nativeElement, 
      'background-color', 
      'yellow'
      )
  }/*O renderer pode ter diversos atributos que pode ser usados, porém tem que ser passados os parametros necessarios,
  como por exemplo o ElementRef*/

}
/*A manipulação do DOM pode ser feita através das duas forças apresentadas, porém a 'primeira' direto com o ElementRef, 
pode gerar vunerabilidade no sistema, portanto o Angular, sugere que essa manipulação seja feito com o renderer. 
*/

