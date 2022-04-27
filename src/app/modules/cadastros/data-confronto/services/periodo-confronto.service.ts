import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeriodoConfrontoCommand } from '../commands/periodo-confronto.command';
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
}
