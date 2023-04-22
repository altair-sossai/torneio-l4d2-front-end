import { Component, OnInit } from '@angular/core';
import { Jogador } from '../../../jogadores/models/jogador';
import { JogadorService } from '../../../jogadores/services/jogador.service';

@Component({
  selector: 'app-suportes',
  templateUrl: './suportes.component.html',
  styleUrls: ['./suportes.component.scss']
})
export class SuportesComponent implements OnInit {

  suportes?: Jogador[];
  loading = false;

  constructor(
    private jogadorService: JogadorService) {
  }

  ngOnInit(): void {
    this.jogadorService.suportes().subscribe({
      next: (suportes) => this.suportes = suportes
    })
  }

}
