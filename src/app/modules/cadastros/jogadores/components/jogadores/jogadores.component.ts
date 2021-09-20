import { Component, OnInit } from '@angular/core';
import { Jogador } from '../../models/jogador';
import { JogadorService } from '../../services/jogador.service';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss']
})
export class JogadoresComponent implements OnInit {

  jogadores: Jogador[] | undefined;

  constructor(private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.jogadorService.get().subscribe(jogadores => this.jogadores = jogadores);
  }

  remover(jogador: Jogador): void {
    if (this.jogadores == null || jogador == null)
      return;

    const index: number = this.jogadores.indexOf(jogador);
    if (index !== -1) {
      this.jogadores.splice(index, 1);
    }
  }
}
