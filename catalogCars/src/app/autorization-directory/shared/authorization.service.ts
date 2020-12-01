import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {FbResponse, User} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public error$: Subject<string> = new Subject();

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }
  logout(): any {
    this.setToken(null);
  }

  isAuthorizated(): boolean {
    return !!this.token;
  }

  private setToken(response: FbResponse | null): any {
    if (response) {
      localStorage.setItem('fb-token', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  get token(): any {
    const idToken = localStorage.getItem('fb-token');
    if (idToken !== null) {
      return idToken;
    } else {
      this.logout();
      return null;
    }
  }

  private handleError(error: HttpErrorResponse): object {
    const {message} = error.error.error;
    console.log(message);

    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Invalid emil');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Invalid emil');
        break;
    }
    return throwError(error, );
  }
}
