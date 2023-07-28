import { Component, OnInit } from '@angular/core';
import { StatusConfronto } from 'src/app/modules/cadastros/confrontos/enums/status-confronto';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';
import { Rodada } from 'src/app/modules/cadastros/confrontos/models/rodada';
import { ConfrontoService } from 'src/app/modules/cadastros/confrontos/services/confronto.service';
import { Jogador } from 'src/app/modules/cadastros/jogadores/models/jogador';
import { JogadorService } from 'src/app/modules/cadastros/jogadores/services/jogador.service';
import { Rodada as Playoff } from 'src/app/modules/cadastros/playoffs/models/rodada';
import { PlayoffService } from 'src/app/modules/cadastros/playoffs/services/playoff.service';
import { Time } from 'src/app/modules/cadastros/times/models/time';
import { TimeService } from 'src/app/modules/cadastros/times/services/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fase1Finalizada: boolean = false;
  exibirPlayoff: boolean = false;

  jogadores: Jogador[] | undefined;
  times: Time[] | undefined;
  classificacao: Time[] | undefined;
  rodadaAtual: number = 0;
  rodadas: Rodada[] | undefined;
  playoff: Playoff[] | undefined;
  confrontosAgendados: Confronto[] | undefined;

  constructor(
    private jogadorService: JogadorService,
    private timeService: TimeService,
    private confrontoService: ConfrontoService,
    private playoffService: PlayoffService,
  ) { }

  ngOnInit(): void {
    this.jogadorService.get().subscribe(jogadores => this.jogadores = jogadores);
    this.timeService.get().subscribe(times => this.times = times);
    this.timeService.classificacao().subscribe(classificacao => this.classificacao = classificacao);
    this.confrontoService.rodadas().subscribe(rodadas => {
      this.rodadas = rodadas;
      this.atualizarRodadaAtual();
      this.atualizarConfrontosAgendados();
    });
    this.playoffService.rodadas().subscribe(playoff => this.playoff = playoff);
  }

  atualizarRodadaAtual(): void {
    let rodadaAtual = this.rodadas?.length || Infinity;

    for (const rodada of this.rodadas || []) {
      for (const confronto of rodada.confrontos || []) {
        if (confronto.status !== StatusConfronto.Aguardando)
          continue

        rodadaAtual = Math.min(rodadaAtual, rodada.rodada || 0);
      }
    }

    this.rodadaAtual = rodadaAtual - 1;
    this.fase1Finalizada = this.rodadas?.length == rodadaAtual;
    this.exibirPlayoff = rodadaAtual >= (this.rodadas?.length || 0) - 2;
  }

  atualizarConfrontosAgendados(): void {
    this.confrontosAgendados = this.rodadas
      ?.reduce((confrontos, rodada) => confrontos.concat(rodada?.confrontos!), [] as Confronto[])
      .filter(confronto => confronto.status === StatusConfronto.Aguardando && confronto.data)
      .sort((a, b) => (a.data! > b.data!) ? 1 : -1);
  }

  tituloRodada(rodada: Rodada): string {
    if (rodada.rodada == this.rodadaAtual + 1)
      return rodada.rodada + 'ª Rodada (Atual)';

    return rodada.rodada + 'ª Rodada'
  }
}
