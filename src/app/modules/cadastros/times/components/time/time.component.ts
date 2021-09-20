import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Time } from '../../models/time';
import { TimeService } from '../../services/time.service';
import { TimeEditComponent } from '../time-edit/time-edit.component';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  loading = false;

  @Input() time!: Time;
  @Output() novo = new EventEmitter<any>();
  @Output() excluido = new EventEmitter<Time>();

  constructor(
    private messageService: NzMessageService,
    private modalService: NzModalService,
    private timeService: TimeService
  ) { }

  editar(): void {
    this.modalService.create({
      nzTitle: `Editar ${this.time.nome}`,
      nzContent: TimeEditComponent,
      nzOnOk: () => this.novo.emit(),
      nzComponentParams: { codigo: this.time.codigo }
    });
  }

  excluir(): void {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente excluir?',
      nzOnOk: () => {
        this.loading = true;
        this.timeService.delete(this.time.codigo).subscribe(_ => {
          this.loading = false;
          this.excluido.emit(this.time);
          this.messageService.create('success', 'Excluido com sucesso');
        }, err => {
          this.loading = false;
          this.messageService.create('error', 'Ocorreu um erro');
          console.log(err);
        });
      }
    });
  }

}
