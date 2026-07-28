import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LastMatch } from '../models/last-match';

@Injectable({
    providedIn: 'root'
})
export class PlaystatsService {
    private http = inject(HttpClient);


    lastMatch(): Observable<LastMatch> {
        return this.http.get<LastMatch>(`${environment.playstatsUrl}/api/ranking/l4d2-zone-server/last-match`);
    }
}
