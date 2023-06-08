import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LastMatch } from '../models/last-match';

@Injectable({
    providedIn: 'root'
})
export class PlaystatsService {

    constructor(private http: HttpClient) {
    }

    lastMatch(): Observable<LastMatch> {
        return this.http.get<LastMatch>(`${environment.playstatsUrl}/api/ranking/vanilla4mod/last-match`);
    }
}
