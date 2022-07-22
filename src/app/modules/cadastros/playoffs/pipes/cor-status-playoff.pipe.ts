import { Pipe, PipeTransform } from '@angular/core';
import { StatusPlayoff } from '../enums/status-playoff';

@Pipe({
  name: 'corStatusPlayoff'
})
export class CorStatusPlayoffPipe implements PipeTransform {

  transform(statusPlayoff: StatusPlayoff): string {
    switch (statusPlayoff) {
      case StatusPlayoff.Aguardando: return 'blue';
      case StatusPlayoff.EmAndamento: return 'green';
      case StatusPlayoff.Finalizado: return 'black';
      default: return 'blue';
    }
  }
}
