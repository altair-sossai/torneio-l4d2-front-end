import { Component, OnInit } from '@angular/core';
import { EquipeModel } from 'src/app/modules/cadastros/estatisticas/models/por-equipe/equipe.model';
import { EstatisticasService } from 'src/app/modules/cadastros/estatisticas/services/estatisticas.service';

@Component({
  selector: 'app-estatisticas-por-equipe',
  templateUrl: './estatisticas-por-equipe.component.html',
  styleUrls: ['./estatisticas-por-equipe.component.scss']
})
export class EstatisticasPorEquipeComponent implements OnInit {

  public loading = true;
  public equipeAtual?: EquipeModel;
  public equipes?: EquipeModel[];

  public charts: any = null;

  constructor(private estatisticasService: EstatisticasService) { }

  ngOnInit(): void {
    this.estatisticasService.porEquipe().subscribe(equipes => {
      this.equipes = equipes;
      this.loading = false;
    });
  }

  chart(equipe: EquipeModel): void {
    const mvpSiDamage = {
      data: {
        labels: equipe.confrontos.map(m => m.adversario.nome),
        datasets: equipe.time.jogadores.map(jogador => {
          return {
            label: jogador.nome,
            data: equipe.confrontos.map(confronto => confronto.jogadores.find(f => f.steamId == jogador.steamId)?.pointsMvpSiDamage || 0)
          }
        })
      },
      options: {
        plugins: {
          legend: { position: 'bottom', },
          title: { display: true, text: 'Pontos de MVP' }
        }
      }
    };

    const mvpCommon = {
      data: {
        labels: equipe.confrontos.map(m => m.adversario.nome),
        datasets: equipe.time.jogadores.map(jogador => {
          return {
            label: jogador.nome,
            data: equipe.confrontos.map(confronto => confronto.jogadores.find(f => f.steamId == jogador.steamId)?.pointsMvpCommon || 0)
          }
        })
      },
      options: {
        plugins: {
          legend: { position: 'bottom', },
          title: { display: true, text: 'Pontos de MVP (Commons)' }
        }
      }
    };

    this.charts = {
      mvpSiDamage: mvpSiDamage,
      mvpCommon: mvpCommon
    };
  }
}
