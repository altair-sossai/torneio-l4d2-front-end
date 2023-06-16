import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JogadorModel } from '../models/jogador.model';

@Injectable({
    providedIn: 'root'
})
export class EstatisticasService {

    constructor(private http: HttpClient) {
    }

    get(): Observable<JogadorModel[]> {
        return this.http.get<JogadorModel[]>(`${environment.apiUrl}/api/estatisticas`);
    }
}
