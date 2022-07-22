import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayoffCommand } from '../commands/playoff.command';
import { Playoff } from '../models/playoff';
import { Rodada } from '../models/rodada';

@Injectable({
    providedIn: 'root'
})
export class PlayoffService {

    constructor(private http: HttpClient) {
    }

    find(id: string): Observable<Playoff> {
        return this.http.get<Playoff>(`${environment.apiUrl}/api/playoffs/${id}`);
    }

    get(): Observable<Playoff[]> {
        return this.http.get<Playoff[]>(`${environment.apiUrl}/api/playoffs`);
    }

    rodadas(): Observable<Rodada[]> {
        return this.http.get<Rodada[]>(`${environment.apiUrl}/api/playoffs/rodadas`);
    }

    post(command: PlayoffCommand): Observable<Playoff> {
        return this.http.post<Playoff>(`${environment.apiUrl}/api/playoffs`, command);
    }

    delete(id: string | undefined): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/playoffs/${id}`);
    }
}
