import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthorizationService} from './authorization.service';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private auth: AuthorizationService,
    private router: Router

  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthorizated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token
        }
      });
    }
    return next.handle(req)
      .pipe(
        tap(() => {
          console.log('Interceptor');
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('Interceptor Error', error);
          if (error.status === 401) {
            this.auth.logout();
            this.router.navigate(['']);
          }
          return throwError(error);
        })
      );
  }
}
