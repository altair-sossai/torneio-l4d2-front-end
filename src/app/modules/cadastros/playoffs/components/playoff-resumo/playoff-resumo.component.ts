import { Component, Input } from '@angular/core';
import { NzProgressStatusType } from 'ng-zorro-antd/progress';
import { Time } from '../../../times/models/time';
import { Confronto, Playoff } from '../../models/playoff';

@Component({
  selector: 'app-playoff-resumo',
  templateUrl: './playoff-resumo.component.html',
  styleUrls: ['./playoff-resumo.component.scss']
})
export class PlayoffResumoComponent {

  @Input() playoff!: Playoff;
  @Input() confronto!: Confronto;

  constructor() { }

  pontosConquistados(time: Time): number {
    if (time.codigo == this.playoff.codigoTimeA) {
      return this.confronto.pontosConquistadosTimeA;
    }

    if (time.codigo == this.playoff.codigoTimeB) {
      return this.confronto.pontosConquistadosTimeB;
    }

    return 0;
  }

  penalidade(time: Time): number {
    if (time.codigo == this.playoff.codigoTimeA) {
      return this.confronto.penalidadeTimeA;
    }

    if (time.codigo == this.playoff.codigoTimeB) {
      return this.confronto.penalidadeTimeB;
    }

    return 0;
  }

  progresso(time: Time): number {
    const pontosConquistados = this.pontosConquistados(time);
    const penalidade = this.penalidade(time);
    const pontos = pontosConquistados - penalidade;
    const progresso = Math.max(0, Math.min(1, pontos / (this.confronto.campanha?.pontuacaoMaxima || 0))) * 100;

    return progresso;
  }

  formatar(progresso: number): string {
    return `${Math.round(progresso)}%`;
  }

  status(time: Time): NzProgressStatusType {
    if (this.confronto.timeAVenceu)
      return time.codigo == this.playoff.codigoTimeA ? 'success' : 'exception';

    if (this.confronto.timeBVenceu)
      return time.codigo == this.playoff.codigoTimeB ? 'success' : 'exception';

    return 'normal';
  }

}
