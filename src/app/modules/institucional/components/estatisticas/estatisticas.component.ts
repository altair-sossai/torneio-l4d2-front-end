import { Component, OnInit } from '@angular/core';
import { EstatisticaJogadorModel } from 'src/app/modules/cadastros/estatisticas/models/estatistica-jogador.model';
import { JogadorModel } from 'src/app/modules/cadastros/estatisticas/models/jogador.model';
import { EstatisticasService } from 'src/app/modules/cadastros/estatisticas/services/estatisticas.service';
import { EstatisticaJogador, EstatisticasJogadores } from '../../enums/estatistica-jogador.enum';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {

  EstatisticasJogadores = EstatisticasJogadores;

  private _estatisticaAtual?: EstatisticaJogador;
  private _jogadores?: JogadorModel[];

  public loading = true;
  public exibirTodos = false;
  public top5?: EstatisticaJogadorModel[];
  public jogadores?: EstatisticaJogadorModel[];

  constructor(private estatisticasService: EstatisticasService) { }

  public get estatisticaAtual(): EstatisticaJogador {
    return this._estatisticaAtual || this.EstatisticasJogadores[0];
  }

  public set estatisticaAtual(estatisticaJogador: EstatisticaJogador) {
    this._estatisticaAtual = estatisticaJogador;
    this.atualizarEstatisticasJogadores();
  }

  ngOnInit(): void {
    this.estatisticasService.get().subscribe(jogadores => {
      this._jogadores = jogadores;
      this.atualizarEstatisticasJogadores();
      this.loading = false;
    });
  }

  atualizarEstatisticasJogadores(): void {
    this.exibirTodos = false;
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
