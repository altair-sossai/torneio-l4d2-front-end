import { Component, Input } from '@angular/core';
import { Time } from '../../../times/models/time';
import { StatusConfronto } from '../../enums/status-confronto';
import { Confronto } from '../../models/confronto';

@Component({
  selector: 'app-confronto-time',
  templateUrl: './confronto-time.component.html',
  styleUrls: ['./confronto-time.component.scss']
})
export class ConfrontoTimeComponent {

  @Input() confronto!: Confronto;
  @Input() time!: Time;

  StatusConfronto = StatusConfronto;

  roles = [
    {
      allow: (): boolean => !this.confronto.timeVencedor,
      color: 'processing',
      icon: 'swap',
      text: 'Empate',
    },
    {
      allow: (): boolean => this.confronto.timeVencedor && this.confronto.codigoTimeVencedor === this.time.codigo,
      color: 'success',
      icon: 'crown',
      text: 'Vitória!',
    },
    {
      allow: (): boolean => this.confronto.timeVencedor && this.confronto.codigoTimeVencedor !== this.time.codigo,
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
