import { Confronto as ConfrontoPrimeiraFase } from "../modules/cadastros/confrontos/models/confronto";
import { Confronto as ConfrontoSegundaFase } from "../modules/cadastros/playoffs/models/playoff";
import { Time } from "../modules/cadastros/times/models/time";

export class GoogleCalendar {

    static daysOfWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    static primeiraFase(confronto: ConfrontoPrimeiraFase): string {
        const inicio = new Date(confronto.data!);
        const fim = this.addOneHourAndThirtyMinutes(inicio);
        const twitch = 'https://www.twitch.tv/torneiol4d2';
        const site = 'http://l4d2.com.br';

        const titulo = `[L4D2] - ${confronto.timeA.nome} vs ${confronto.timeB.nome}`;

        const descricao = `Venha assistir ao jogo entre as equipes ${confronto.timeA.nome} e ${confronto.timeB.nome} no torneio de Left 4 Dead 2!<br/>
Será transmitido ao vivo no dia <b>${this.formatDate(inicio)}</b>, às <b>${this.formatTime(inicio)}</b>, na campanha <b>${confronto.campanha?.nomeOriginal}</b>.<br/>
AO VIVO EM: <a href="${twitch}" target="_blank">${twitch}</a><br/>
Para mais informações, acesse: <a href="${site}" target="_blank">${site}</a><br/>
Não perca essa emocionante e intensa batalha!<br/>
Atenciosamente,<br/>
Organização do torneio`;

        const dates = encodeURIComponent(`${this.formatDateToGoogleCalendarFormat(inicio)}/${this.formatDateToGoogleCalendarFormat(fim)}`);

        const url = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descricao)}&dates=${dates}&location=${encodeURIComponent(twitch)}&sprop=${encodeURIComponent(site)}`;

        return url;
    }

    static segundaFase(timeA: Time, timeB: Time, confronto: ConfrontoSegundaFase): string {
        const inicio = new Date(confronto.data!);
        const fim = this.addOneHourAndThirtyMinutes(inicio);
        const twitch = 'https://www.twitch.tv/torneiol4d2';
        const site = 'http://l4d2.com.br';

        const titulo = `[L4D2] - ${timeA.nome} vs ${timeB.nome}`;

        const descricao = `Venha assistir ao jogo entre as equipes ${timeA.nome} e ${timeB.nome} no torneio de Left 4 Dead 2!<br/>
Será transmitido ao vivo no dia <b>${this.formatDate(inicio)}</b>, às <b>${this.formatTime(inicio)}</b>, na campanha <b>${confronto.campanha?.nomeOriginal}</b>.<br/>
AO VIVO EM: <a href="${twitch}" target="_blank">${twitch}</a><br/>
Para mais informações, acesse: <a href="${site}" target="_blank">${site}</a><br/>
Não perca essa emocionante e intensa batalha!<br/>
Atenciosamente,<br/>
Organização do torneio`;

        const dates = encodeURIComponent(`${this.formatDateToGoogleCalendarFormat(inicio)}/${this.formatDateToGoogleCalendarFormat(fim)}`);

        const url = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descricao)}&dates=${dates}&location=${encodeURIComponent(twitch)}&sprop=${encodeURIComponent(site)}`;

        return url;
    }

    private static formatDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const dayOfWeek = this.getDayOfWeek(date.getDay());

        return `${day}/${month}/${year} (${dayOfWeek})`;
    }

    private static formatTime(date: Date): string {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${hours}:${minutes}`;
    }

    private static getDayOfWeek(dayNumber: number): string {
        return this.daysOfWeek[dayNumber];
    }

    private static formatDateToGoogleCalendarFormat(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    }

    private static addOneHourAndThirtyMinutes(date: Date): Date {
        const newDate = new Date(date);
        newDate.setHours(newDate.getHours() + 1);
        newDate.setMinutes(newDate.getMinutes() + 30);
        return newDate;
    }
}