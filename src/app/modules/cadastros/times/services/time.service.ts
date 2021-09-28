import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeJogadorCommand } from '../commands/time-jogador.command';
import { TimeCommand } from '../commands/time.command';
import { Time } from '../models/time';
import { TimeJogador } from '../models/time-jogador';

@Injectable({
    providedIn: 'root'
})
export class TimeService {

    constructor(private http: HttpClient) {
    }

    find(codigo: string): Observable<Time> {
        return this.http.get<Time>(`${environment.apiUrl}/api/times/${codigo}`);
    }

    get(): Observable<Time[]> {
        return this.http.get<Time[]>(`${environment.apiUrl}/api/times`);
    }

    classificacao(): Observable<Time[]> {
        return this.http.get<Time[]>(`${environment.apiUrl}/api/classificacao`);
    }

    post(command: TimeCommand): Observable<Time> {
        return this.http.post<Time>(`${environment.apiUrl}/api/times`, command);
    }

    vincular(command: TimeJogadorCommand): Observable<TimeJogador> {
        return this.http.post<TimeJogador>(`${environment.apiUrl}/api/times/vincular-jogador`, command);
    }

    desvincular(codigo: string, steamId: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/times/${codigo}/desvincular-jogador/${steamId}`);
    }

    delete(id: string | undefined): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/times/${id}`);
    }
}
