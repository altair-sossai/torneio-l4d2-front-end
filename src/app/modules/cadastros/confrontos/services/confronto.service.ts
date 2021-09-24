import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Confronto } from '../models/confronto';
import { Rodada } from '../models/rodada';

@Injectable({
    providedIn: 'root'
})
export class ConfrontoService {

    constructor(private http: HttpClient) {
    }

    get(): Observable<Confronto[]> {
        return this.http.get<Confronto[]>(`${environment.apiUrl}/api/confrontos`);
    }

    rodadas(): Observable<Rodada[]> {
        return this.http.get<Rodada[]>(`${environment.apiUrl}/api/confrontos/rodadas`);
    }
}
