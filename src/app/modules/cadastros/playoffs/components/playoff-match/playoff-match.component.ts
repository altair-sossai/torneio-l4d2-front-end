import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playoff-match',
  templateUrl: './playoff-match.component.html',
  styleUrls: ['./playoff-match.component.scss']
})
export class PlayoffMatchComponent implements OnInit {

  @Input() match: any;

  constructor() { }

  ngOnInit(): void {
  }
}