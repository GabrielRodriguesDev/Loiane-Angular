import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args: string): unknown {
    if(value === 0  || args === undefined){
      return value
    }
    let filter = args.toLocaleLowerCase();

    return value.filter(
      value => value.toLocaleLowerCase().indexOf(filter) != -1
    );
  }
/*Pipe puro {Um pipe puro não observa as novas informações passadas em tempo de execução}*/
}
