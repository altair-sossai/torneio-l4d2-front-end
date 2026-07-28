import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { JogadorCommand } from '../../commands/jogador.command';
import { Jogador } from '../../models/jogador';
import { JogadorService } from '../../services/jogador.service';

@Component({
    selector: 'app-jogadores',
    templateUrl: './jogadores.component.html',
    styleUrls: ['./jogadores.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class JogadoresComponent implements OnInit {
  private messageService = inject(NzMessageService);
  private jogadorService = inject(JogadorService);


  loading = false;
  jogadores: Jogador[] = [];

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar(): void {
    this.loading = true;

    this.jogadorService.get().subscribe(jogadores => {
      this.jogadores = jogadores;
      this.loading = false;
    });
  }

  adicionar(): void {
    const user = prompt('Informe a URL ou ID da Steam do jogador');
    if (!user)
      return;

    const command = new JogadorCommand();
    command.user = user;

    this.loading = true;
    this.jogadorService.post(command).subscribe(_ => {
      this.atualizar();
      this.messageService.create('success', 'Jogador adicionado com sucesso');
    }, err => {
      this.loading = false;
      this.messageService.create('error', err.message || 'Ocorreu um erro');
    });
  }

  remover(jogador: Jogador): void {
    if (this.jogadores == null || jogador == null)
      return;

    const index: number = this.jogadores.indexOf(jogador);
    if (index !== -1) {
      this.jogadores.splice(index, 1);
    }
  }
}
