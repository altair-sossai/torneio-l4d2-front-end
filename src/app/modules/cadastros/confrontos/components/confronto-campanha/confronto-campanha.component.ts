import { Component, Input } from '@angular/core';
import { Campanha } from '../../../campanhas/models/campanha';

@Component({
  selector: 'app-confronto-campanha',
  templateUrl: './confronto-campanha.component.html',
  styleUrls: ['./confronto-campanha.component.scss']
})
export class ConfrontoCampanhaComponent {

  @Input() campanha: Campanha | undefined;;

  constructor() { }
}
