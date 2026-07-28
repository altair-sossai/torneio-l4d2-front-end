import { Component, OnInit, inject } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Jogador } from '../../../jogadores/models/jogador';
import { JogadorService } from '../../../jogadores/services/jogador.service';

@Component({
    selector: 'app-suportes',
    templateUrl: './suportes.component.html',
    styleUrls: ['./suportes.component.scss'],
    standalone: false
})
export class SuportesComponent implements OnInit {
  private modalService = inject(NzModalService);
  private jogadorService = inject(JogadorService);


  suportes?: Jogador[];
  loading = false;

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
