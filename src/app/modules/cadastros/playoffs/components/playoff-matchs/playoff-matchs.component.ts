import { Component, OnInit } from '@angular/core';
import { NgttTournament } from 'ng-tournament-tree';

@Component({
  selector: 'app-playoff-matchs',
  templateUrl: './playoff-matchs.component.html',
  styleUrls: ['./playoff-matchs.component.scss']
})
export class PlayoffMatchsComponent implements OnInit {

  public tournament?: NgttTournament = {
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          'A',
          'C vs F',
          'B',
          'D vs E'
        ]
      },
      {
        type: 'Winnerbracket',
        matches: ['A vs C', 'B vs E'
        ]
      },
      {
        type: 'Final',
        matches: ['A vs E']
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
