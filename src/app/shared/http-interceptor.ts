import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CurrentUserService } from '../modules/auth/current-user/services/current-user.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private currentUserService: CurrentUserService,
    private message: NzMessageService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let options = {};

    const currentUser = this.currentUserService.currentUser();
    if (currentUser?.accessToken != null) {
      options = { headers: req.headers.set('Authorization', currentUser.accessToken) };
    }

    return next.handle(req.clone(options))
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
