import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GoogleCalendar } from 'src/app/shared/google-calendar';
import { PeriodoConfrontoEditComponent } from '../../../data-confronto/components/periodo-confronto-edit/periodo-confronto-edit.component';
import { StatusConfronto } from '../../enums/status-confronto';
import { Confronto } from '../../models/confronto';
import { ConfrontoEditComponent } from '../confronto-edit/confronto-edit.component';

@Component({
  selector: 'app-confronto-header',
  templateUrl: './confronto-header.component.html',
  styleUrls: ['./confronto-header.component.scss']
})
export class ConfrontoHeaderComponent {

  StatusConfronto = StatusConfronto;

  @Input() confronto!: Confronto;
  @Input() podeEditar = false;
  @Output() atualizado = new EventEmitter<any>();

  constructor(private modalService: NzModalService) {
  }

  periodo(): void {
    this.modalService.create({
      nzTitle: 'Editar período do confronto',
      nzContent: PeriodoConfrontoEditComponent,
      nzOnOk: () => this.atualizado.emit(),
      nzWidth: 800,
      nzComponentParams: { confrontoId: this.confronto.id }
    });
  }

  editar(): void {
    this.modalService.create({
      nzTitle: 'Editar um confronto',
      nzContent: ConfrontoEditComponent,
      nzOnOk: () => this.atualizado.emit(),
      nzWidth: 800,
      nzComponentParams: { confrontoId: this.confronto.id }
    });
  }

  addAgenda(): void {
    const url = GoogleCalendar.primeiraFase(this.confronto);

    window.open(url);
  }
}
