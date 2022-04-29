import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovaSugestaoDataCommand } from '../commands/nova-sugestao-data.command';
import { PeriodoConfrontoCommand } from '../commands/periodo-confronto.command';
import { ResponderSugestaoDataCommand } from '../commands/responder-sugestao-data.command';
import { PeriodoConfrontoModel } from '../models/periodo-confronto.model';

@Injectable({
    providedIn: 'root'
})
export class PeriodoConfrontoService {

    constructor(private http: HttpClient) {
    }

    get(confrontoId: string): Observable<PeriodoConfrontoModel> {
        return this.http.get<PeriodoConfrontoModel>(`${environment.apiUrl}/api/confrontos/${confrontoId}/periodo`);
    }

    post(confrontoId: string, command: PeriodoConfrontoCommand): Observable<PeriodoConfrontoModel> {
        return this.http.post<PeriodoConfrontoModel>(`${environment.apiUrl}/api/confrontos/${confrontoId}/periodo`, command);
    }

    sugerirNovaData(confrontoId: string, command: NovaSugestaoDataCommand): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/confrontos/${confrontoId}/sugestao-data`, command);
    }

    responderSugestaoData(confrontoId: string, sugestaoId: string, command: ResponderSugestaoDataCommand): Observable<any> {
        return this.http.put<any>(`${environment.apiUrl}/api/confrontos/${confrontoId}/sugestao-data/${sugestaoId}/responder`, command);
    }

    excluirSugestaoData(confrontoId: string, sugestaoId: string): Observable<any> {
        return this.http.delete<any>(`${environment.apiUrl}/api/confrontos/${confrontoId}/sugestao-data/${sugestaoId}`);
    }
}
