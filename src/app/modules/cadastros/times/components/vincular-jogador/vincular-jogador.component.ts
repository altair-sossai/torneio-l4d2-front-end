import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Jogador } from '../../../jogadores/models/jogador';
import { JogadorService } from '../../../jogadores/services/jogador.service';
import { TimeJogadorCommand } from '../../commands/time-jogador.command';
import { TimeJogadorService } from '../../services/time-jogador.service';

@Component({
  selector: 'app-vincular-jogador',
  templateUrl: './vincular-jogador.component.html',
  styleUrls: ['./vincular-jogador.component.scss']
})
export class VincularJogadorComponent implements OnInit {

  @Input() codigo: string | undefined;

  jogadores: Jogador[] = [];

  constructor(
    private modal: NzModalRef,
    private jogadorService: JogadorService,
    private timeJogadorService: TimeJogadorService
  ) { }

  ngOnInit(): void {
    this.jogadorService.disponiveis().subscribe(jogadores => {
      this.jogadores = jogadores;
    });
  }

  selecionar(jogador: Jogador): void {
    const command = new TimeJogadorCommand();
    command.time = this.codigo;
    command.jogador = jogador.steamId;

    this.timeJogadorService.vincular(command).subscribe(_ => this.modal.triggerOk());
  }
}
