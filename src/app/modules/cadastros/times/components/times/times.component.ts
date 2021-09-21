import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Time } from '../../models/time';
import { TimesJogadores } from '../../models/times-jogadores';
import { TimeJogadorService } from '../../services/time-jogador.service';
import { TimeEditComponent } from '../time-edit/time-edit.component';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  loading = false;
  times: Time[] = [];

  constructor(private timesJogadorService: TimeJogadorService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar(): void {
    this.loading = true;

    this.timesJogadorService.get().subscribe(data => {
      const timesJogadores = new TimesJogadores(data);
      timesJogadores.vincular();

      this.times = timesJogadores.times;
      this.loading = false;
    });
  }

  adicionar(): void {
    this.modalService.create({
      nzTitle: 'Cadastrar um novo time',
      nzContent: TimeEditComponent,
      nzOnOk: () => this.atualizar()
    });
  }
}
