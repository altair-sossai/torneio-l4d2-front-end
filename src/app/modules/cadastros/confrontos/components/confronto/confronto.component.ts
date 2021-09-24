import { Component, Input } from '@angular/core';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto',
  templateUrl: './confronto.component.html',
  styleUrls: ['./confronto.component.scss']
})
export class ConfrontoComponent {

  @Input() confronto!: Confronto;

  constructor() { }

}