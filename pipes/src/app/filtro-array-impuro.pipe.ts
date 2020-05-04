import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe' ;

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe  {


  }
/*PipeImpuro {Um pipe impuro é reatualizado confome a as novas informações que são recebidas em tempo de execução da SPA}*/

