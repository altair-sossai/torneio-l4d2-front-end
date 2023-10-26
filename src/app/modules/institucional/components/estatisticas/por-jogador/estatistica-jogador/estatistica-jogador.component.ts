import { Component, Input } from '@angular/core';
import { EstatisticaJogadorModel } from 'src/app/modules/cadastros/estatisticas/models/estatistica-jogador.model';

@Component({
  selector: 'app-estatistica-jogador',
  templateUrl: './estatistica-jogador.component.html',
  styleUrls: ['./estatistica-jogador.component.scss']
})
export class EstatisticaJogadorComponent {
  @Input() jogador!: EstatisticaJogadorModel;
}
