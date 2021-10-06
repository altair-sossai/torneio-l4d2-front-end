import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Rodada } from '../../models/rodada';
import { ConfrontoService } from '../../services/confronto.service';
import { ConfrontoEditComponent } from '../confronto-edit/confronto-edit.component';

@Component({
  selector: 'app-confrontos',
  templateUrl: './confrontos.component.html',
  styleUrls: ['./confrontos.component.scss']
})
export class ConfrontosComponent implements OnInit {

  @Input() podeEditar = false;

  rodadas: Rodada[] = [];
  busy = false;
  rodadaAtual = 0;

  constructor(
    private modalService: NzModalService,
    private confrontoService: ConfrontoService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(data => this.podeEditar = data.podeEditar || this.podeEditar);
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.busy = true;
    this.confrontoService.rodadas().subscribe(rodadas => {
      this.busy = false;
      this.rodadas = rodadas;
      this.atualizarRodadaAtual();
    });
  }

  atualizarRodadaAtual(): void {
    let rodadaAtual = 1;

    for (const rodada of this.rodadas || []) {
      for (const confronto of rodada.confrontos || []) {
        if (!confronto.codigoCampanha)
          continue

        rodadaAtual = Math.max(rodadaAtual, rodada.rodada || 0);
      }
    }

    this.rodadaAtual = rodadaAtual - 1;
  }

  novo(): void {
    this.modalService.create({
      nzTitle: 'Cadastrar um novo confronto',
      nzContent: ConfrontoEditComponent,
      nzOnOk: () => this.pesquisar()
    });
  }
}
