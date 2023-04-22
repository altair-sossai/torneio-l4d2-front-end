import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
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
    private modalService: NzModalService,
    private jogadorService: JogadorService) {
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.jogadorService.suportes().subscribe({
      next: (suportes) => this.suportes = suportes
    })
  }

  sortearSuportes(): void {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente sortear os suportes?',
      nzOnOk: () => {
        this.loading = true;
        this.jogadorService.sortearSuportes().subscribe(_ => this.pesquisar());
      }
    });
  }
}
