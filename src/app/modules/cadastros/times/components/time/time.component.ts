import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Jogador } from '../../../jogadores/models/jogador';
import { Time } from '../../models/time';
import { TimeService } from '../../services/time.service';
import { TimeEditComponent } from '../time-edit/time-edit.component';
import { VincularJogadorComponent } from '../vincular-jogador/vincular-jogador.component';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  loading = false;

  @Input() time!: Time;
  @Input() readonly = false;
  @Output() atualizar = new EventEmitter<any>();

  constructor(
    private messageService: NzMessageService,
    private modalService: NzModalService,
    private timeService: TimeService
  ) { }

  adicionarJogador(): void {
    this.modalService.create({
      nzTitle: `Vincular jogador ao time ${this.time.nome}`,
      nzWidth: "70%",
      nzContent: VincularJogadorComponent,
      nzOnOk: () => this.atualizar.emit(),
      nzComponentParams: { codigo: this.time.codigo }
    });
  }

  removerJogador(jogador: Jogador): void {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente remover o jogador do time?',
      nzOnOk: () => {
        this.loading = true;
        this.timeService.desvincular(this.time.codigo, jogador.steamId).subscribe(_ => {
          this.loading = false;
          this.atualizar.emit();
          this.messageService.create('success', 'Removido com sucesso');
        }, (_: any) => {
          this.loading = false;
          this.messageService.create('error', 'Ocorreu um erro');
        });
      }
    });
  }

  editar(): void {
    this.modalService.create({
      nzTitle: `Editar ${this.time.nome}`,
      nzContent: TimeEditComponent,
      nzOnOk: () => this.atualizar.emit(),
      nzComponentParams: { codigo: this.time.codigo }
    });
  }

  excluir(): void {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente excluir?',
      nzOnOk: () => {
        this.loading = true;
        this.timeService.delete(this.time.codigo).subscribe(_ => {
          this.loading = false;
          this.atualizar.emit(this.time);
          this.messageService.create('success', 'Excluido com sucesso');
        }, _ => {
          this.loading = false;
          this.messageService.create('error', 'Ocorreu um erro');
        });
      }
    });
  }

}
