import { Component, Input } from '@angular/core';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto-times',
  templateUrl: './confronto-times.component.html',
  styleUrls: ['./confronto-times.component.scss']
})
export class ConfrontoTimesComponent {

  @Input() confronto!: Confronto;

  constructor() { }
}
