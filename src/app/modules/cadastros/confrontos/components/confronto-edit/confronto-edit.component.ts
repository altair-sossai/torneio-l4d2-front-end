import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Campanha } from '../../../campanhas/models/campanha';
import { CampanhaService } from '../../../campanhas/services/campanha.service';
import { Time } from '../../../times/models/time';
import { TimeService } from '../../../times/services/time.service';
import { ConfrontoCommand } from '../../commands/confronto.command';
import { StatusConfronto, StatusConfrontos } from '../../enums/status-confronto';
import { ConfrontoService } from '../../services/confronto.service';

@Component({
  selector: 'app-confronto-edit',
  templateUrl: './confronto-edit.component.html',
  styleUrls: ['./confronto-edit.component.scss']
})
export class ConfrontoEditComponent implements OnInit {

  @Input() confrontoId: string | undefined;

  command: ConfrontoCommand | undefined;
  busy = false;
  errors: any;

  campanhas: Campanha[] = [];
  times: Time[] = [];
  StatusConfronto = StatusConfronto;
  tiposStatus = StatusConfrontos;

  constructor(
    private modal: NzModalRef,
    private confrontoService: ConfrontoService,
    private campanhaService: CampanhaService,
    private timeService: TimeService) {
    this.campanhaService.get().subscribe(campanhas => this.campanhas = campanhas);
    this.timeService.get().subscribe(times => this.times = times);
  }

  ngOnInit(): void {
    if (this.confrontoId) {
      this.pesquisar(this.confrontoId);
    }
    else {
      this.novo();
    }
  }

  novo(): void {
    this.command = new ConfrontoCommand();
  }

  pesquisar(id: string): void {
    this.busy = true;

    this.confrontoService.find(id).subscribe(confronto => {
      this.command = confronto;
      this.busy = false;
    });
  }

  salvar(): void {
    if (this.command == null)
      return;

    this.busy = true;

    this.confrontoService.post(this.command).subscribe(() => {
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
