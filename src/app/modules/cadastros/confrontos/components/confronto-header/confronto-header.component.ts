import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PeriodoConfrontoEditComponent } from '../../../data-confronto/components/periodo-confronto-edit/periodo-confronto-edit.component';
import { StatusConfronto } from '../../enums/status-confronto';
import { Confronto } from '../../models/confronto';
import { ConfrontoEditComponent } from '../confronto-edit/confronto-edit.component';

@Component({
  selector: 'app-confronto-header',
  templateUrl: './confronto-header.component.html',
  styleUrls: ['./confronto-header.component.scss']
})
export class ConfrontoHeaderComponent {

  static daysOfWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

  StatusConfronto = StatusConfronto;

  @Input() confronto!: Confronto;
  @Input() podeEditar = false;
  @Output() atualizado = new EventEmitter<any>();

  constructor(private modalService: NzModalService) {
  }

  periodo(): void {
    this.modalService.create({
      nzTitle: 'Editar período do confronto',
      nzContent: PeriodoConfrontoEditComponent,
      nzOnOk: () => this.atualizado.emit(),
      nzWidth: 800,
      nzComponentParams: { confrontoId: this.confronto.id }
    });
  }

  editar(): void {
    this.modalService.create({
      nzTitle: 'Editar um confronto',
      nzContent: ConfrontoEditComponent,
      nzOnOk: () => this.atualizado.emit(),
      nzWidth: 800,
      nzComponentParams: { confrontoId: this.confronto.id }
    });
  }

  addAgenda(): void {
    const inicio = new Date(this.confronto.data!);
    const fim = this.addOneHourAndThirtyMinutes(inicio);
    const twitch = 'https://www.twitch.tv/torneiol4d2';
    const site = 'http://l4d2.com.br';

    const titulo = `[L4D2] - ${this.confronto.timeA.nome} vs ${this.confronto.timeB.nome}`;

    const descricao = `Venha assistir ao jogo entre as equipes ${this.confronto.timeA.nome} e ${this.confronto.timeB.nome} no torneio de Left 4 Dead 2!<br/>
Será transmitido ao vivo no dia <b>${this.formatDate(inicio)}</b>, às <b>${this.formatTime(inicio)}</b>, na campanha <b>${this.confronto.campanha?.nomeOriginal}</b>, em uma eletrizante batalha da ${this.confronto.rodada}ª Rodada.<br/>
AO VIVO EM: <a href="${twitch}" target="_blank">${twitch}</a><br/>
Para mais informações, acesse: <a href="${site}" target="_blank">${site}</a><br/>
Não perca essa emocionante e intensa batalha!<br/>
Atenciosamente,<br/>
Organização do torneio`;

    const dates = encodeURIComponent(`${this.formatDateToGoogleCalendarFormat(inicio)}/${this.formatDateToGoogleCalendarFormat(fim)}`);

    const url = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descricao)}&dates=${dates}&location=${encodeURIComponent(twitch)}&sprop=${encodeURIComponent(site)}`;

    window.open(url);
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const dayOfWeek = this.getDayOfWeek(date.getDay());

    return `${day}/${month}/${year} (${dayOfWeek})`;
  }

  formatTime(date: Date): string {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  getDayOfWeek(dayNumber: number): string {
    return ConfrontoHeaderComponent.daysOfWeek[dayNumber];
  }

  formatDateToGoogleCalendarFormat(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  }

  addOneHourAndThirtyMinutes(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + 1);
    newDate.setMinutes(newDate.getMinutes() + 30);
    return newDate;
  }
}
