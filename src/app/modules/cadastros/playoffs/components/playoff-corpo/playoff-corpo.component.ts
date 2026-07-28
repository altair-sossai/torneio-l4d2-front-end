import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Confronto, Playoff } from '../../models/playoff';

@Component({
    selector: 'app-playoff-corpo',
    templateUrl: './playoff-corpo.component.html',
    styleUrls: ['./playoff-corpo.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PlayoffCorpoComponent {

  @Input() playoff!: Playoff;
  @Input() confronto!: Confronto;

  constructor() { }
}
