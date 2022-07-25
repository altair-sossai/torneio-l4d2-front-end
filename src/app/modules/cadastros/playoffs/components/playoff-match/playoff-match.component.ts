import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Playoff } from '../../models/playoff';

@Component({
  selector: 'app-playoff-match',
  templateUrl: './playoff-match.component.html',
  styleUrls: ['./playoff-match.component.scss']
})
export class PlayoffMatchComponent implements OnInit {

  @Input() match: any;

  time?: Time;
  playoff?: Playoff;

  constructor() { }

  ngOnInit(): void {
    if (this.match.codigo)
      this.time = this.match;
    else
      this.playoff = this.match;
  }
}