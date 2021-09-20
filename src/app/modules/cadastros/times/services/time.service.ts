import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimeCommand } from '../commands/time.command';
import { Time } from '../models/time';

@Injectable({
    providedIn: 'root'
})
export class TimeService {

    constructor(private http: HttpClient) {
    }

    find(codigo: string): Observable<Time> {
        return this.http.get<Time>(`${environment.apiUrl}/api/times/${codigo}`);
    }

    get(): Observable<Time[]> {
        return this.http.get<Time[]>(`${environment.apiUrl}/api/times`);
    }

    post(command: TimeCommand): Observable<Time> {
        return this.http.post<Time>(`${environment.apiUrl}/api/times`, command);
    }

    delete(id: string | undefined): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/times/${id}`);
    }
}
