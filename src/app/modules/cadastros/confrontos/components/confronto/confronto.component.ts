import { Component, Input, OnInit } from '@angular/core';
import { Campanha } from '../../../campanhas/models/campanha';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto',
  templateUrl: './confronto.component.html',
  styleUrls: ['./confronto.component.scss']
})
export class ConfrontoComponent {

  @Input() confronto!: Confronto;
  @Input() campanha!: Campanha;

  constructor() { }

}
