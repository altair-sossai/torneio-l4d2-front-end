import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EquipeModel } from '../models/por-equipe/equipe.model';
import { JogadorModel } from '../models/por-jogador/jogador.model';

@Injectable({
    providedIn: 'root'
})
export class EstatisticasService {

    constructor(private http: HttpClient) {
    }

    porJogador(): Observable<JogadorModel[]> {
        return this.http.get<JogadorModel[]>(`${environment.apiUrl}/api/estatisticas/por-jogador`);
    }

    porEquipe(): Observable<EquipeModel[]> {
        return this.http.get<EquipeModel[]>(`${environment.apiUrl}/api/estatisticas/por-equipe`);
    }
}
