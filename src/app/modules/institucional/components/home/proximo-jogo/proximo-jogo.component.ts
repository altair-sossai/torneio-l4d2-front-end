import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GoogleCalendar } from 'src/app/shared/google-calendar';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';

@Component({
    selector: 'app-proximo-jogo',
    templateUrl: './proximo-jogo.component.html',
    styleUrls: ['./proximo-jogo.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProximoJogoComponent {

  @Input() confronto!: Confronto;
  @Input() destaque = false;

  readonly twitch = 'https://www.twitch.tv/torneiol4d2';

  get contagem(): string {
    if (!this.confronto?.data)
      return '';

    const data = new Date(this.confronto.data);
    const agora = new Date();

    const inicioHoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
    const inicioJogo = new Date(data.getFullYear(), data.getMonth(), data.getDate());
    const dias = Math.round((inicioJogo.getTime() - inicioHoje.getTime()) / 86400000);

    if (dias < 0)
      return 'Em andamento';
    if (dias === 0)
      return 'Hoje';
    if (dias === 1)
      return 'Amanhã';
    if (dias <= 7)
      return `Em ${dias} dias`;

    const semanas = Math.ceil(dias / 7);
    return `Em ${semanas} ${semanas === 1 ? 'semana' : 'semanas'}`;
  }

  get iminente(): boolean {
    const rotulo = this.contagem;
    return rotulo === 'Hoje' || rotulo === 'Amanhã' || rotulo === 'Em andamento';
  }

  iniciais(nome: string | undefined): string {
    return (nome || '?')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(parte => parte[0])
      .join('')
      .toUpperCase();
  }

  addAgenda(): void {
    const url = GoogleCalendar.primeiraFase(this.confronto);
    window.open(url);
  }
}
