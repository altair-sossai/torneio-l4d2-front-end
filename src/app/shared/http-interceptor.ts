import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentUserService } from '../modules/auth/current-user/services/current-user.service';
import { CapitaoService } from '../modules/cadastros/jogadores/services/capitao.service';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private currentUserService: CurrentUserService,
    private capitaoService: CapitaoService,
    private message: NzMessageService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers = new HttpHeaders();

    const currentUser = this.currentUserService.currentUser();
    if (currentUser?.accessToken != null)
      headers = headers.set('Authorization', currentUser.accessToken);

    const capitao = this.capitaoService.current();
    if (capitao?.token != null)
      headers = headers.set('Capitao', capitao?.token);

    return next.handle(req.clone({ headers: headers }))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['/auth']);
          }
          else {
            this.message.create('error', 'Ocorreu um erro ao executar a operação');
          }

          return throwError(error);
        })
      );
  }
}
