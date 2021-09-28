import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { TimeCommand } from '../../commands/time.command';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-time-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.scss']
})
export class TimeEditComponent implements OnInit {

  @Input() codigo: string | undefined;

  command: TimeCommand | undefined;
  busy = false;
  errors: any;

  constructor(
    private modal: NzModalRef,
    private timeService: TimeService) { }

  ngOnInit(): void {
    if (this.codigo) {
      this.pesquisar(this.codigo);
    }
    else {
      this.novo();
    }
  }

  novo(): void {
    this.command = new TimeCommand();
  }

  pesquisar(codigo: string): void {
    this.busy = true;

    this.timeService.find(codigo).subscribe(time => {
      this.command = time;
      this.busy = false;
    });
  }

  salvar(): void {
    if (this.command == null)
      return;

    this.busy = true;

    this.timeService.post(this.command).subscribe(() => {
      this.modal.triggerOk();
      this.busy = false;
    }, result => {
      this.busy = false;
      this.errors = result.error.errors;
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
