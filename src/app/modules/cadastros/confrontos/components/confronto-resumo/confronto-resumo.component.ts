import { Component, Input } from '@angular/core';
import { NzProgressStatusType } from 'ng-zorro-antd/progress';
import { Time } from '../../../times/models/time';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto-resumo',
  templateUrl: './confronto-resumo.component.html',
  styleUrls: ['./confronto-resumo.component.scss']
})
export class ConfrontoResumoComponent {

  @Input() confronto!: Confronto;

  constructor() { }

  pontosConquistados(time: Time): number {
    if (time.codigo == this.confronto.codigoTimeA) {
      return this.confronto.pontosConquistadosTimeA;
    }

    if (time.codigo == this.confronto.codigoTimeB) {
      return this.confronto.pontosConquistadosTimeB;
    }

    return 0;
  }

  penalidade(time: Time): number {
    if (time.codigo == this.confronto.codigoTimeA) {
      return this.confronto.penalidadeTimeA;
    }

    if (time.codigo == this.confronto.codigoTimeB) {
      return this.confronto.penalidadeTimeB;
    }

    return 0;
  }

  progresso(time: Time): number {
    const pontosConquistados = this.pontosConquistados(time);
    const progresso = Math.max(0, Math.min(1, pontosConquistados / (this.confronto.campanha?.pontuacaoMaxima || 0))) * 100;

    return progresso;
  }

  formatar(progresso: number): string {
    return `${Math.round(progresso)}%`;
  }

  status(time: Time): NzProgressStatusType {
    if (!this.confronto.timeVencedor) {
      return 'normal';
    }

    return this.confronto.codigoTimeVencedor === time.codigo ? 'success' : 'exception';
  }

}
