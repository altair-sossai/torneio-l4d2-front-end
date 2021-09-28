import { Component, Input } from '@angular/core';
import { Time } from 'src/app/modules/cadastros/times/models/time';

@Component({
  selector: 'app-tabela-resultados',
  templateUrl: './tabela-resultados.component.html',
  styleUrls: ['./tabela-resultados.component.scss']
})
export class TabelaResultadosComponent {

  @Input() classificacao!: Time[];

}
