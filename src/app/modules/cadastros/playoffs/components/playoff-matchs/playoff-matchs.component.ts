import { Component, Input, OnInit } from '@angular/core';
import { NgttTournament } from 'ng-tournament-tree';
import { Time } from '../../../times/models/time';
import { Rodada } from '../../models/rodada';

@Component({
  selector: 'app-playoff-matchs',
  templateUrl: './playoff-matchs.component.html',
  styleUrls: ['./playoff-matchs.component.scss']
})
export class PlayoffMatchsComponent implements OnInit {

  @Input() rodadas!: Rodada[];
  @Input() classificacao!: Time[];

  public tournament?: NgttTournament;

  constructor() { }

  ngOnInit(): void {
    const primeiroLugar = this.classificacao[0];
    const segundoLugar = this.classificacao[1];

    const primeiraRodada = this.rodadas[0];
    const segundoRodada = this.rodadas[1];
    const terceiraRodada = this.rodadas[2];

    this.tournament = {
      rounds: [
        {
          type: 'Winnerbracket',
          matches: [primeiroLugar, primeiraRodada.playoffs![0], segundoLugar, primeiraRodada.playoffs![1]]
        },
        {
          type: 'Winnerbracket',
          matches: [segundoRodada.playoffs![0], segundoRodada.playoffs![1]]
        },
        {
          type: 'Final',
          matches: [terceiraRodada.playoffs![0]]
        }
      ]
    }
  }

}
