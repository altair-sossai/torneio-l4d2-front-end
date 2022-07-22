import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Campanha } from '../../../campanhas/models/campanha';
import { CampanhaService } from '../../../campanhas/services/campanha.service';
import { StatusConfronto, StatusConfrontos } from '../../../confrontos/enums/status-confronto';
import { Time } from '../../../times/models/time';
import { TimeService } from '../../../times/services/time.service';
import { PlayoffCommand } from '../../commands/playoff.command';
import { StatusPlayoff, StatusPlayoffs } from '../../enums/status-playoff';
import { PlayoffService } from '../../services/playoff.service';

@Component({
  selector: 'app-playoff-edit',
  templateUrl: './playoff-edit.component.html',
  styleUrls: ['./playoff-edit.component.scss']
})
export class PlayoffEditComponent implements OnInit {

  @Input() playoffId: string | undefined;

  command: PlayoffCommand | undefined;
  busy = false;
  errors: any;

  campanhas: Campanha[] = [];
  times: Time[] = [];
  StatusPlayoff = StatusPlayoff;
  StatusPlayoffs = StatusPlayoffs;

  StatusConfronto = StatusConfronto;
  StatusConfrontos = StatusConfrontos;

  constructor(
    private modal: NzModalRef,
    private playoffService: PlayoffService,
    private campanhaService: CampanhaService,
    private timeService: TimeService) {
    this.campanhaService.get().subscribe(campanhas => this.campanhas = campanhas);
    this.timeService.get().subscribe(times => this.times = times);
  }

  ngOnInit(): void {
    if (this.playoffId) {
      this.pesquisar(this.playoffId);
    }
    else {
      this.novo();
    }
  }

  novo(): void {
    this.command = new PlayoffCommand();

  }

  pesquisar(id: string): void {
    this.busy = true;

    this.playoffService.find(id).subscribe(playoff => {
      this.command = playoff as PlayoffCommand;
      this.busy = false;
    });
  }

  salvar(): void {
    if (this.command == null)
      return;

    this.busy = true;

    this.playoffService.post(this.command).subscribe(() => {
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
