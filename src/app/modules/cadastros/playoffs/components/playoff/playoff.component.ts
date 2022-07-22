import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Playoff } from '../../models/playoff';
import { PlayoffEditComponent } from '../playoff-edit/playoff-edit.component';

@Component({
  selector: 'app-playoff',
  templateUrl: './playoff.component.html',
  styleUrls: ['./playoff.component.scss']
})
export class PlayoffComponent {

  @Input() playoff!: Playoff;
  @Input() podeEditar = false;
  @Output() atualizado = new EventEmitter<any>();

  constructor(private modalService: NzModalService) { }

  atualizar(): void {
    this.atualizado.emit();
  }

  editar(playoffId: string): void {
    this.modalService.create({
      nzTitle: 'Editar um jogo',
      nzContent: PlayoffEditComponent,
      nzOnOk: () => this.atualizar(),
      nzComponentParams: { playoffId },
      nzWidth: 900
    });
  }
}
