import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeJogadorCommand } from '../commands/time-jogador.command';
import { TimeJogador } from '../models/time-jogador';
import { TimesJogadores } from '../models/times-jogadores';

@Injectable({
    providedIn: 'root'
})
export class TimeJogadorService {

    constructor(private http: HttpClient) {
    }

    get(): Observable<TimesJogadores> {
        return this.http.get<TimesJogadores>(`${environment.apiUrl}/api/times-jogadores`);
    }

    vincular(command: TimeJogadorCommand): Observable<TimeJogador> {
        return this.http.post<TimeJogador>(`${environment.apiUrl}/api/times/vincular-jogador`, command);
    }

    desvincular(codigo: string, steamId: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/times/${codigo}/desvincular-jogador/${steamId}`);
    }
}
