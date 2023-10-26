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

  constructor(private estatisticasService: EstatisticasService) { }

  ngOnInit(): void {
    this.estatisticasService.porEquipe().subscribe(equipes => {
      this.equipes = equipes;
      this.loading = false;
    });
  }

}
