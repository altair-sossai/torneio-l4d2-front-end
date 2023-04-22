import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutenticarJogadorCommand } from '../commands/autenticar-jogador.command';
import { JogadorCommand } from '../commands/jogador.command';
import { AutenticarJogadorResult } from '../models/autenticar-jogador.result';
import { Jogador } from '../models/jogador';
import { SenhaJogador } from '../models/senha-jogador';

@Injectable({
    providedIn: 'root'
})
export class JogadorService {

    constructor(private http: HttpClient) {
    }

    get(): Observable<Jogador[]> {
        return this.http.get<Jogador[]>(`${environment.apiUrl}/api/jogadores`);
    }

    disponiveis(): Observable<Jogador[]> {
        return this.http.get<Jogador[]>(`${environment.apiUrl}/api/jogadores/disponiveis`);
    }

    capitaes(): Observable<Jogador[]> {
        return this.http.get<Jogador[]>(`${environment.apiUrl}/api/jogadores/capitaes`);
    }

    suportes(): Observable<Jogador[]> {
        return this.http.get<Jogador[]>(`${environment.apiUrl}/api/jogadores/suportes`);
    }

    post(command: JogadorCommand): Observable<Jogador> {
        return this.http.post<Jogador>(`${environment.apiUrl}/api/jogadores`, command);
    }

    gerarSenha(steamId: string): Observable<SenhaJogador> {
        return this.http.post<SenhaJogador>(`${environment.apiUrl}/api/jogadores/${steamId}/gerar-senha`, {});
    }

    verificarAutenticacao(command: AutenticarJogadorCommand): Observable<AutenticarJogadorResult> {
        return this.http.post<AutenticarJogadorResult>(`${environment.apiUrl}/api/jogadores/verificar-autenticacao`, command);
    }

    delete(id: string | undefined): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/jogadores/${id}`);
    }
}
