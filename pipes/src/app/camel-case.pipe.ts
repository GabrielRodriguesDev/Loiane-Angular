import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value): any {
    let values = value.split(' ');
    let result = '';
    
    for (let v of values){ //Funciona como o '*ngFor'
      result += this.capitalize(v) + ' ' 
    ;}

    return result;
  }

  capitalize(value: string){
    return value.substr(0,1).toUpperCase() +
    value.substr(1).toLowerCase();
  }
//Formatando a string recebida deixando a primeira letra de cada palavra maiuscula e o restante minusculo.
}
