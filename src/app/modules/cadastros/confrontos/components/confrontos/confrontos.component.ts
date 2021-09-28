import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private modalService: NzModalService,
    private confrontoService: ConfrontoService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    console.log(123);
    this.confrontoService.rodadas().subscribe(rodadas => {
      this.rodadas = rodadas;
    });
  }

  novo(): void {
    this.modalService.create({
      nzTitle: 'Cadastrar um novo confronto',
      nzContent: ConfrontoEditComponent,
      nzOnOk: () => this.pesquisar()
    });
  }
}
