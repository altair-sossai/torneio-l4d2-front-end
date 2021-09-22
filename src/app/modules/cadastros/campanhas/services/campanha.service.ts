import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campanha } from '../models/campanha';

@Injectable({
    providedIn: 'root'
})
export class CampanhaService {

    constructor(private http: HttpClient) {
    }

    get(): Observable<Campanha[]> {
        return this.http.get<Campanha[]>(`${environment.apiUrl}/api/campanhas`);
    }
}
