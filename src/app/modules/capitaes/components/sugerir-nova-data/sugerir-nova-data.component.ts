import { Component, Input, OnInit } from '@angular/core';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';

@Component({
  selector: 'app-sugerir-nova-data',
  templateUrl: './sugerir-nova-data.component.html',
  styleUrls: ['./sugerir-nova-data.component.scss']
})
export class SugerirNovaDataComponent implements OnInit {

  @Input() confronto!: Confronto;

  constructor() { }

  ngOnInit(): void {
  }

}
