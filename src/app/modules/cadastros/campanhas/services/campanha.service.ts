import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campanha } from '../models/campanha';

@Injectable({
    providedIn: 'root'
})
export class CampanhaService {
    private http = inject(HttpClient);


    get(): Observable<Campanha[]> {
        return this.http.get<Campanha[]>(`${environment.apiUrl}/api/campanhas`);
    }
}
