import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Time } from '../../models/time';
import { TimeService } from '../../services/time.service';
import { TimeEditComponent } from '../time-edit/time-edit.component';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  loading = false;
  times: Time[] = [];

  constructor(private timesService: TimeService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar(): void {
    this.loading = true;

    this.timesService.get().subscribe(times => {
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

  remover(time: Time): void {
    if (this.times == null || time == null)
      return;

    const index: number = this.times.indexOf(time);
    if (index !== -1) {
      this.times.splice(index, 1);
    }
  }
}
