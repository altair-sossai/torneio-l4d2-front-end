import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campanha } from '../../campanhas/models/campanha';
import { ConfrontoCommand } from '../commands/confronto.command';
import { Confronto } from '../models/confronto';
import { Rodada } from '../models/rodada';

@Injectable({
    providedIn: 'root'
})
export class ConfrontoService {
    private http = inject(HttpClient);


    find(id: string): Observable<Confronto> {
        return this.http.get<Confronto>(`${environment.apiUrl}/api/confrontos/${id}`);
    }

    get(): Observable<Confronto[]> {
        return this.http.get<Confronto[]>(`${environment.apiUrl}/api/confrontos`);
    }

    rodadas(): Observable<Rodada[]> {
        return this.http.get<Rodada[]>(`${environment.apiUrl}/api/confrontos/rodadas`);
    }

    post(command: ConfrontoCommand): Observable<Confronto> {
        return this.http.post<Confronto>(`${environment.apiUrl}/api/confrontos`, command);
    }

    limparCampanhas(): Observable<Campanha[]> {
        return this.http.post<Campanha[]>(`${environment.apiUrl}/api/confrontos/limpar-campanhas`, {});
    }

    sortearCampanhas(): Observable<Campanha[]> {
        return this.http.post<Campanha[]>(`${environment.apiUrl}/api/confrontos/sortear-campanhas`, {});
    }

    gerar(): Observable<void> {
        return this.http.post<void>(`${environment.apiUrl}/api/confrontos/gerar`, {});
    }

    delete(id: string | undefined): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/confrontos/${id}`);
    }
}
