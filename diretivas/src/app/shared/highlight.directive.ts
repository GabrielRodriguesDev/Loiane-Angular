import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor= this.highlightColor
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.background') backgroundColor: string;

  @Input() 
  defaultColor: string = 'white'; //Como mostrado podemos usar os Input e Property Binding nas diretivas
  
  @Input() 
  highlightColor: string = 'yellow';


  constructor() { }

   ngOnInit(): void {
     this.backgroundColor = this.defaultColor
  }

}

/*O intuito de usar o Input Property nas diretivas é ter mais flexbilidade e possibilidade de alterações aos atributos,
algo que pode ser tornar poderoso se usado corretamente e "pensando fora da caixa"*/