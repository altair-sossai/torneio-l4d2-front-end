import { Component, Input } from '@angular/core';
import { Playoff } from '../../models/playoff';

@Component({
    selector: 'app-playoff-times',
    templateUrl: './playoff-times.component.html',
    styleUrls: ['./playoff-times.component.scss'],
    standalone: false
})
export class PlayoffTimesComponent {

  @Input() playoff!: Playoff;

  constructor() { }
}
