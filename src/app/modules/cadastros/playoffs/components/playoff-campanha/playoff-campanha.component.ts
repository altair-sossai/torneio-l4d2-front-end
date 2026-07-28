import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Campanha } from '../../../campanhas/models/campanha';

@Component({
    selector: 'app-playoff-campanha',
    templateUrl: './playoff-campanha.component.html',
    styleUrls: ['./playoff-campanha.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PlayoffCampanhaComponent {

  @Input() campanha: Campanha | undefined;;

  constructor() { }
}
