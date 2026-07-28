import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Confronto } from '../../models/confronto';

@Component({
    selector: 'app-confronto-times',
    templateUrl: './confronto-times.component.html',
    styleUrls: ['./confronto-times.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ConfrontoTimesComponent {

  @Input() confronto!: Confronto;

  constructor() { }
}
