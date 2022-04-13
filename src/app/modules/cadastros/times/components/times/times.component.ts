import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Time } from '../../models/time';
import { TimeService } from '../../services/time.service';
import { SortearJogadorComponent } from '../sortear-jogador/sortear-jogador.component';
import { TimeEditComponent } from '../time-edit/time-edit.component';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  loading = false;
  times: Time[] = [];

  constructor(private timeService: TimeService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar(): void {
    this.loading = true;

    this.timeService.get().subscribe(times => {
      this.times = times;
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

  sortear(): void {
    this.modalService.create({
      nzTitle: 'Sortear jogador',
      nzContent: SortearJogadorComponent,
      nzOnOk: () => this.atualizar()
    });
  }
}
