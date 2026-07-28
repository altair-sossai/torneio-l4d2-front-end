import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { EstatisticaJogadorModel } from 'src/app/modules/cadastros/estatisticas/models/por-jogador/estatistica-jogador.model';

@Component({
    selector: 'app-estatistica-jogador',
    templateUrl: './estatistica-jogador.component.html',
    styleUrls: ['./estatistica-jogador.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EstatisticaJogadorComponent {
  @Input() jogador!: EstatisticaJogadorModel;
}
