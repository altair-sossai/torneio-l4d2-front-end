import { Component, Input } from '@angular/core';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto-header',
  templateUrl: './confronto-header.component.html',
  styleUrls: ['./confronto-header.component.scss']
})
export class ConfrontoHeaderComponent {

  @Input() confronto!: Confronto;

  constructor() { }
}
