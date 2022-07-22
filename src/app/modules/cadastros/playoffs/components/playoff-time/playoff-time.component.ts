import { Component, Input } from '@angular/core';
import { Time } from '../../../times/models/time';
import { StatusPlayoff, StatusPlayoffs } from '../../enums/status-playoff';
import { Playoff } from '../../models/playoff';

@Component({
  selector: 'app-playoff-time',
  templateUrl: './playoff-time.component.html',
  styleUrls: ['./playoff-time.component.scss']
})
export class PlayoffTimeComponent {

  @Input() playoff!: Playoff;
  @Input() time!: Time;

  StatusPlayoff = StatusPlayoff;

  roles = [
    {
      allow: (): boolean => !this.playoff.timeVencedor,
      color: 'processing',
      icon: 'swap',
      text: 'Em andamento',
    },
    {
      allow: (): boolean => this.playoff.timeVencedor && this.playoff.codigoTimeVencedor === this.time.codigo,
      color: 'success',
      icon: 'crown',
      text: 'Vitória!',
    },
    {
      allow: (): boolean => this.playoff.timeVencedor && this.playoff.codigoTimeVencedor !== this.time.codigo,
      color: 'error',
      icon: 'close',
      text: 'Derrota',
    }
  ];

  constructor() { }

  get color(): string {
    const role = this.roles.filter(role => role.allow());

    return role.length ? role[0].color : 'processing';
  }

  get icon(): string {
    const role = this.roles.filter(role => role.allow());

    return role.length ? role[0].icon : 'default';
  }

  get text(): string {
    const role = this.roles.filter(role => role.allow());

    return role.length ? role[0].text : 'default';
  }
}
