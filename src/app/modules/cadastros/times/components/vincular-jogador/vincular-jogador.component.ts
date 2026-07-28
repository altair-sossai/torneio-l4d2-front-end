import { Component, inject, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { Jogador } from '../../../jogadores/models/jogador';
import { JogadorService } from '../../../jogadores/services/jogador.service';
import { TimeJogadorCommand } from '../../commands/time-jogador.command';
import { TimeService } from '../../services/time.service';

@Component({
    selector: 'app-vincular-jogador',
    templateUrl: './vincular-jogador.component.html',
    styleUrls: ['./vincular-jogador.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class VincularJogadorComponent implements OnInit {
  private modal = inject(NzModalRef);
  private jogadorService = inject(JogadorService);
  private timeService = inject(TimeService);


  private readonly modalData = inject<{ codigo?: string } | null>(NZ_MODAL_DATA, { optional: true });

  @Input() codigo = this.modalData?.codigo;

  jogadores: Jogador[] = [];

  ngOnInit(): void {
    this.jogadorService.disponiveis().subscribe(jogadores => {
      this.jogadores = jogadores;
    });
  }

  selecionar(jogador: Jogador): void {
    const command = new TimeJogadorCommand();
    command.time = this.codigo;
    command.jogador = jogador.steamId;

    this.timeService.vincular(command).subscribe(_ => this.modal.triggerOk());
  }
}
