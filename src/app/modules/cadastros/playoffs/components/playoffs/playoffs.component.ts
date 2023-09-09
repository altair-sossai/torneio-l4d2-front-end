import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { StatusPlayoff } from '../../enums/status-playoff';
import { Rodada } from '../../models/rodada';
import { PlayoffService } from '../../services/playoff.service';
import { PlayoffEditComponent } from '../playoff-edit/playoff-edit.component';

@Component({
  selector: 'app-playoffs',
  templateUrl: './playoffs.component.html',
  styleUrls: ['./playoffs.component.scss']
})
export class PlayoffsComponent implements OnInit {

  @Input() podeEditar = false;

  rodadas: Rodada[] = [];
  busy = false;
  rodadaAtual = -1;

  constructor(
    private modalService: NzModalService,
    private playoffService: PlayoffService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(data => this.podeEditar = data.podeEditar || this.podeEditar);
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.busy = true;
    this.playoffService.rodadas().subscribe(rodadas => {
      this.busy = false;
      this.rodadas = rodadas;
      if (this.rodadaAtual === -1) {
        this.atualizarRodadaAtual();
      }
    });
  }

  atualizarRodadaAtual(): void {
    let rodadaAtual = this.rodadas.length;

    for (const rodada of this.rodadas || []) {
      for (const playoff of rodada.playoffs || []) {
        if (playoff.status == StatusPlayoff.EmAndamento)
          rodadaAtual = Math.min(rodadaAtual, rodada.rodada || 0);

        if (playoff.status !== StatusPlayoff.Aguardando)
          continue

        rodadaAtual = Math.min(rodadaAtual, rodada.rodada || 0);
      }
    }

    this.rodadaAtual = rodadaAtual - 1;
  }

  novo(): void {
    this.modalService.create({
      nzTitle: 'Cadastrar um novo jogo',
      nzContent: PlayoffEditComponent,
      nzOnOk: () => this.pesquisar(),
      nzWidth: 900
    });
  }
}
