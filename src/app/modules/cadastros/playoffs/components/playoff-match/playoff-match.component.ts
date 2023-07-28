import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Time } from '../../../times/models/time';
import { Playoff } from '../../models/playoff';
import { PlayoffComponent } from '../playoff/playoff.component';

@Component({
  selector: 'app-playoff-match',
  templateUrl: './playoff-match.component.html',
  styleUrls: ['./playoff-match.component.scss']
})
export class PlayoffMatchComponent implements OnInit {

  @Input() fase1Finalizada!: boolean;
  @Input() match: any;

  time?: Time;
  playoff?: Playoff;

  constructor(private modalService: NzModalService) {
  }

  ngOnInit(): void {
    if (this.match.codigo)
      this.time = this.match;
    else
      this.playoff = this.match;
  }

  clicked(): void {
    if (this.playoff) {
      this.modalService.create({
        nzTitle: 'Detalhes do jogo',
        nzContent: PlayoffComponent,
        nzComponentParams: { playoff: this.playoff },
        nzWidth: 700
      });
    }
  }
}