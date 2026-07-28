import { Pipe, PipeTransform } from '@angular/core';
import { EstatisticaJogador, EstatisticaJogadorLabel } from '../enums/estatistica-jogador.enum';

@Pipe({
    name: 'estatisticaJogador',
    standalone: false
})
export class EstatisticaJogadorPipe implements PipeTransform {
  transform(estatisticaJogador: EstatisticaJogador): string {
    return EstatisticaJogadorLabel.get(estatisticaJogador) || estatisticaJogador.toString();
  }
}
