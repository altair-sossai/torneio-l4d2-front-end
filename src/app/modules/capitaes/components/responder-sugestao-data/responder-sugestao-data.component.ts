import { Component, Input, OnInit } from '@angular/core';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';
import { SugestaoDataConfrontoModel } from 'src/app/modules/cadastros/data-confronto/models/sugestao-data-confronto.model';

@Component({
  selector: 'app-responder-sugestao-data',
  templateUrl: './responder-sugestao-data.component.html',
  styleUrls: ['./responder-sugestao-data.component.scss']
})
export class ResponderSugestaoDataComponent implements OnInit {

  @Input() confronto!: Confronto;
  @Input() sugestao!: SugestaoDataConfrontoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
