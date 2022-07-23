import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Playoff } from '../../models/playoff';
import { PlayoffService } from '../../services/playoff.service';
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

  constructor(
    private modalService: NzModalService,
    private messageService: NzMessageService,
    private playoffService: PlayoffService) { }

  atualizar(): void {
    this.atualizado.emit();
  }

  excluir(playoffId: string): void {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente excluir?',
      nzOnOk: () => {
        this.playoffService.delete(playoffId).subscribe(_ => {
          this.atualizar();
          this.messageService.create('success', 'Excluido com sucesso');
        }, _ => {
          this.messageService.create('error', 'Ocorreu um erro');
        });
      }
    });
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
