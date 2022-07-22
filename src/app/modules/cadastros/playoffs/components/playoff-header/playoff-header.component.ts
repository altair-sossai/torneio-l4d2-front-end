import { Component, Input } from '@angular/core';
import { Confronto } from '../../models/playoff';

@Component({
  selector: 'app-playoff-header',
  templateUrl: './playoff-header.component.html',
  styleUrls: ['./playoff-header.component.scss']
})
export class PlayoffHeaderComponent {
  @Input() confronto!: Confronto;
}
