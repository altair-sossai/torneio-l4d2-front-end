import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { EstatisticaJogadorModel } from 'src/app/modules/cadastros/estatisticas/models/por-jogador/estatistica-jogador.model';
import { JogadorModel } from 'src/app/modules/cadastros/estatisticas/models/por-jogador/jogador.model';
import { EstatisticasService } from 'src/app/modules/cadastros/estatisticas/services/estatisticas.service';
import { EstatisticaJogador, EstatisticasJogadores } from 'src/app/modules/institucional/enums/estatistica-jogador.enum';

@Component({
    selector: 'app-estatisticas-por-jogador',
    templateUrl: './estatisticas-por-jogador.component.html',
    styleUrls: ['./estatisticas-por-jogador.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EstatisticasPorJogadorComponent implements OnInit {
  private estatisticasService = inject(EstatisticasService);


  EstatisticasJogadores = EstatisticasJogadores;

  private _estatisticaAtual?: EstatisticaJogador;
  private _jogadores?: JogadorModel[];

  public loading = true;
  public top5?: EstatisticaJogadorModel[];
  public jogadores?: EstatisticaJogadorModel[];

  public get estatisticaAtual(): EstatisticaJogador {
    return this._estatisticaAtual || this.EstatisticasJogadores[0];
  }

  public set estatisticaAtual(estatisticaJogador: EstatisticaJogador) {
    this._estatisticaAtual = estatisticaJogador;
    this.atualizarEstatisticasJogadores();
  }

  ngOnInit(): void {
    this.estatisticasService.porJogador().subscribe(jogadores => {
      this._jogadores = jogadores;
      this.atualizarEstatisticasJogadores();
      this.loading = false;
    });
  }

  atualizarEstatisticasJogadores(): void {
    this.jogadores = this._jogadores
      ?.sort((a, b) => b[this.estatisticaAtual] - a[this.estatisticaAtual])
      ?.map((jogador, index) => {
        return {
          show: false,
          ...jogador,
          posicao: index + 1,
          estatistica: this.estatisticaAtual,
          quantidade: jogador[this.estatisticaAtual]
        }
      });

    this.top5 = this.jogadores?.slice(0, 5);
  }
}
