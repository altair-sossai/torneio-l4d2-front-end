import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovaSugestaoDataCommand } from '../commands/nova-sugestao-data.command';
import { ResponderSugestaoDataCommand } from '../commands/responder-sugestao-data.command';

@Injectable({
    providedIn: 'root'
})
export class PeriodoConfrontoService {

    constructor(private http: HttpClient) {
    }

    sugerirNovaData(confrontoId: string, command: NovaSugestaoDataCommand): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/confrontos/${confrontoId}/sugestao-data`, command, { headers: this.headers });
    }

    responderSugestaoData(confrontoId: string, sugestaoId: string, command: ResponderSugestaoDataCommand): Observable<any> {
        return this.http.put<any>(`${environment.apiUrl}/api/confrontos/${confrontoId}/sugestao-data/${sugestaoId}/responder`, command, { headers: this.headers });
    }

    excluirSugestaoData(confrontoId: string, sugestaoId: string): Observable<any> {
        return this.http.delete<any>(`${environment.apiUrl}/api/confrontos/${confrontoId}/sugestao-data/${sugestaoId}`, { headers: this.headers });
    }

    private get headers(): HttpHeaders {
        const headers = new HttpHeaders()

        headers.set('Authorization', localStorage.getItem('capitao-info')!);

        return headers;
    }
}
