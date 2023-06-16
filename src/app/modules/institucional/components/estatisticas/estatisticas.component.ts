import { Component, OnInit } from '@angular/core';
import { JogadorModel } from 'src/app/modules/cadastros/estatisticas/models/jogador.model';
import { EstatisticasService } from 'src/app/modules/cadastros/estatisticas/services/estatisticas.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {
  public jogadores: JogadorModel[] = [];

  constructor(private estatisticasService: EstatisticasService) { }

  ngOnInit(): void {
    this.estatisticasService.get().subscribe(jogadores => this.jogadores = jogadores);
  }
}
