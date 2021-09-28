import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { JogadorCommand } from '../../commands/jogador.command';
import { Jogador } from '../../models/jogador';
import { JogadorService } from '../../services/jogador.service';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss']
})
export class JogadoresComponent implements OnInit {

  loading = false;
  jogadores: Jogador[] = [];

  constructor(private messageService: NzMessageService,
    private jogadorService: JogadorService
  ) { }

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
