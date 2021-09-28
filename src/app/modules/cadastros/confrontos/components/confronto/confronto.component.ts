import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto',
  templateUrl: './confronto.component.html',
  styleUrls: ['./confronto.component.scss']
})
export class ConfrontoComponent {

  @Input() confronto!: Confronto;
  @Input() podeEditar = false;
  @Output() atualizado = new EventEmitter<any>();

  constructor() { }

  atualizar(): void {
    this.atualizado.emit();
  }
}
