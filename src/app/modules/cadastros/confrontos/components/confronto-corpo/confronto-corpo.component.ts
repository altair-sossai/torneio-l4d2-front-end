import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto-corpo',
  templateUrl: './confronto-corpo.component.html',
  styleUrls: ['./confronto-corpo.component.scss']
})
export class ConfrontoCorpoComponent {

  @Input() confronto!: Confronto;
  @Input() podeEditar = false;
  @Output() atualizado = new EventEmitter<any>();

  constructor() { }

  atualizar(): void {
    this.atualizado.emit();
  }
}
