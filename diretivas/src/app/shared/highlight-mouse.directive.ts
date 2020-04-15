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

  

  constructor
  (
    private _ElementRef: ElementRef,
    private _Renderer: Renderer2
  ) { }

}


