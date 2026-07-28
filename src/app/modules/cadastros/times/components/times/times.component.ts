import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Time } from '../../models/time';
import { TimeService } from '../../services/time.service';
import { SortearJogadorComponent } from '../sortear-jogador/sortear-jogador.component';
import { TimeEditComponent } from '../time-edit/time-edit.component';

@Component({
    selector: 'app-times',
    templateUrl: './times.component.html',
    styleUrls: ['./times.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TimesComponent implements OnInit {
  private timeService = inject(TimeService);
  private modalService = inject(NzModalService);


  loading = false;
  times: Time[] = [];

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
