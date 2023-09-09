import { Component, Input } from '@angular/core';
import { GoogleCalendar } from 'src/app/shared/google-calendar';
import { StatusConfronto } from '../../../confrontos/enums/status-confronto';
import { Time } from '../../../times/models/time';
import { Confronto } from '../../models/playoff';

@Component({
  selector: 'app-playoff-header',
  templateUrl: './playoff-header.component.html',
  styleUrls: ['./playoff-header.component.scss']
})
export class PlayoffHeaderComponent {
  StatusConfronto = StatusConfronto;

  @Input() timeA!: Time;
  @Input() timeB!: Time;
  @Input() confronto!: Confronto;

  addAgenda(): void {
    const url = GoogleCalendar.segundaFase(this.timeA, this.timeB, this.confronto);

    window.open(url);
  }
}
