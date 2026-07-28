import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrettyToken } from '../../pretty-token/models/pretty-token';
import { LoginCommand } from '../commands/login-command';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);


  auth(command: LoginCommand): Observable<PrettyToken> {
    return this.http.post<PrettyToken>(`${environment.apiUrl}/api/auth`, command);
  }
}
