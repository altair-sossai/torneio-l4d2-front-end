import { Component, Input, OnInit } from '@angular/core';
import { Time } from '../../../times/models/time';
import { Rodada } from '../../models/rodada';

@Component({
  selector: 'app-playoff-matchs',
  templateUrl: './playoff-matchs.component.html',
  styleUrls: ['./playoff-matchs.component.scss']
})
export class PlayoffMatchsComponent implements OnInit {

  @Input() fase1Finalizada!: boolean;
  @Input() rodadas!: Rodada[];
  @Input() classificacao!: Time[];

  public winnerRounds: unknown[][] = [];
  public finalMatches: unknown[] = [];

  ngOnInit(): void {
    const primeiraRodada = this.rodadas[0];
    const segundoRodada = this.rodadas[1];
    const terceiraRodada = this.rodadas[2];

    this.winnerRounds = [
      primeiraRodada.playoffs!.slice(0, 4),
      segundoRodada.playoffs!.slice(0, 2)
    ];
    this.finalMatches = terceiraRodada.playoffs!.slice(0, 1);
  }
}
