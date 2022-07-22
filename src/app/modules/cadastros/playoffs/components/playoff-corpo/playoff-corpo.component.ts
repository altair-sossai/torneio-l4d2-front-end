import { Component, Input } from '@angular/core';
import { Confronto, Playoff } from '../../models/playoff';

@Component({
  selector: 'app-playoff-corpo',
  templateUrl: './playoff-corpo.component.html',
  styleUrls: ['./playoff-corpo.component.scss']
})
export class PlayoffCorpoComponent {

  @Input() playoff!: Playoff;
  @Input() confronto!: Confronto;

  constructor() { }
}
