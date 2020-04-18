import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
 
 @Input() set ngElse(condition: boolean){ /*Criando uma váriavel com o decorator Input que quando modificada executa algo.*/
 
  if(!condition){
    this._viewContainerRef.createEmbeddedView(this._templateRef) /*Caso seja falso renderiza,
     a informação no template, da tag que tem a diretiva instaciada*/ 
  } else {
    this._viewContainerRef.clear()  /*Caso a instrução seja verdadeira não rederiza nada no template*/
  }

 }

  constructor( 
    private _templateRef : TemplateRef <any>, //Faz referencia ao template em si
    private _viewContainerRef : ViewContainerRef //Faz referencia ao conteudo do template (Por exemplo : Div)
    ) { }

}

/*Feito a criação de diretiva estrutural ngElse, baseado no código do próprio angular para criar a diretiva ngIf, 
Portanto sempre que a váriavel for modifcada o atributo "set", vai setar (executar algo), no caso se a condição passada na váriavel,
for falsa  renderiza a informação da tag que instaciou a diretiva, se for verdadeira, limpa a tag do template */

