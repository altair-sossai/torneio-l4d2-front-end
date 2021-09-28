import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Confronto } from '../../models/confronto';
import { ConfrontoEditComponent } from '../confronto-edit/confronto-edit.component';

@Component({
  selector: 'app-confronto-header',
  templateUrl: './confronto-header.component.html',
  styleUrls: ['./confronto-header.component.scss']
})
export class ConfrontoHeaderComponent {

  @Input() confronto!: Confronto;
  @Input() podeEditar = false;
  @Output() atualizado = new EventEmitter<any>();

  constructor(private modalService: NzModalService) { }

  editar(): void {
    this.modalService.create({
      nzTitle: 'Editar um confronto',
      nzContent: ConfrontoEditComponent,
      nzOnOk: () => this.atualizado.emit(),
      nzWidth: 800,
      nzComponentParams: { confrontoId: this.confronto.id }
    });
  }
}
