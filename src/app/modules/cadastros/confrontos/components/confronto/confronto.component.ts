import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Confronto } from '../../models/confronto';

@Component({
    selector: 'app-confronto',
    templateUrl: './confronto.component.html',
    styleUrls: ['./confronto.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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
