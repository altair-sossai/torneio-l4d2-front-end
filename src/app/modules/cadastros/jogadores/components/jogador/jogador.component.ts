import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { JogadorCommand } from '../../commands/jogador.command';
import { Jogador } from '../../models/jogador';
import { JogadorService } from '../../services/jogador.service';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.scss']
})
export class JogadorComponent {
  loading = false;

  @Input() jogador!: Jogador;
  @Output() excluido = new EventEmitter<Jogador>();

  constructor(
    private messageService: NzMessageService,
    private modalService: NzModalService,
    private jogadorService: JogadorService
  ) { }

  atualizar(): void {
    this.loading = true;

    const command = new JogadorCommand();
    command.user = this.jogador.steamId;

    this.jogadorService.post(command).subscribe(jogador => {
      this.loading = false;
      this.jogador = jogador;
      this.messageService.create('success', 'Dados atualizados com sucesso');
    }, err => {
      this.loading = false;
      this.messageService.create('error', 'Ocorreu um erro');
      console.log(err);
    });
  }

  excluir(): void {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente excluir?',
      nzOnOk: () => {
        this.loading = true;
        this.jogadorService.delete(this.jogador.steamId).subscribe(_ => {
          this.loading = false;
          this.excluido.emit(this.jogador);
          this.messageService.create('success', 'Excluido com sucesso');
        }, err => {
          this.loading = false;
          this.messageService.create('error', 'Ocorreu um erro');
          console.log(err);
        });
      }
    });
  }
}
