import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JogadorCommand } from '../commands/jogador.command';
import { Jogador } from '../models/jogador';

@Injectable({
    providedIn: 'root'
})
export class JogadorService {

    constructor(private http: HttpClient) {
    }

    get(): Observable<Jogador[]> {
        return this.http.get<Jogador[]>(`${environment.apiUrl}/api/jogadores`);
    }

    post(command: JogadorCommand): Observable<Jogador> {
        return this.http.post<Jogador>(`${environment.apiUrl}/api/jogadores`, command);
    }

    delete(id: string | undefined): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/jogadores/${id}`);
    }
}
