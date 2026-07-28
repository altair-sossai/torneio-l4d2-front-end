import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Time } from '../../../times/models/time';
import { Playoff } from '../../models/playoff';
import { Rodada } from '../../models/rodada';

@Component({
    selector: 'app-playoff-matchs',
    templateUrl: './playoff-matchs.component.html',
    styleUrls: ['./playoff-matchs.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PlayoffMatchsComponent implements OnInit {

  @Input() fase1Finalizada!: boolean;
  @Input() rodadas!: Rodada[];
  @Input() classificacao!: Time[];

  public semifinalMatches: Playoff[] = [];
  public finalMatches: Playoff[] = [];

  ngOnInit(): void {
    const rodadasComConfrontos = (this.rodadas || [])
      .filter(rodada => rodada.playoffs?.length);
    const rodadaSemifinal = rodadasComConfrontos.at(-2);
    const rodadaFinal = rodadasComConfrontos.at(-1);

    this.semifinalMatches = rodadaSemifinal?.playoffs?.slice(0, 2) || [];
    this.finalMatches = rodadaFinal?.playoffs?.slice(0, 1) || [];
  }
}
