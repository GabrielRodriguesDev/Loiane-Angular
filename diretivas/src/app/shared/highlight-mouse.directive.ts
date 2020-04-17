import { Directive, HostListener,ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {
  
  @HostListener('mouseenter') onMouseOver(){
  /*  this._Renderer.setStyle(this._ElementRef.nativeElement,
      'background-color',
      'yellow')
   //Declaração do evento que vai ser obeservado pelo HostListener e o método a ser executado, quando estiver correto.  */

   this.backgroundColor='yellow'
  }

  //O HostListener oberseva hopedeiro da diretiva (O Elemento HTML que tem ele instanciado),
  //e aguarda o evento parametrizadao na declaração do metadado 
  
  @HostListener('mouseleave') onMouseLeave(){
  /*  this._Renderer.setStyle(this._ElementRef.nativeElement,
      'background-color',
      'white') 
  //Declaração do evento que vai ser obeservado pelo HostListener e o método a ser executado, quando estiver correto.  */

  this.backgroundColor = 'white'
  }



  @HostBinding('style.background') backgroundColor: string;
  /*O HostBinding, faz a associação de um atributo ou uma classe do HTML para uma variavel, 
    e por ela podemos alterar os atributos de forma mais "enxuta" juntamente com o 'HostListener, como mostrado nos exemplos a cima*/ 

  

  constructor
  () { }

}

/*Apresentado como fazer manipulaçã de atributos de um Elemento HTML apenas com o HostListener e usando o HostListener junto com HostBinding, 
as duas formas apresenta o mesmo resultado, porém a junção HostListener junto com HostBinding deixa o código mais legivel */