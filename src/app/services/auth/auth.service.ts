import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../../../models/token';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private tokenSubject = new BehaviorSubject<Token>(null);
  public token$: Observable<Token> = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) { }

  public fetchToken(email: string, password: string): void {
    this.token$ = this.http.post<Token>(
      'http://localhost:4201/get-token', // TODO: Set up a proxy in the dev environment for this url
      { email, password },
      this.httpOptions
    );
    /**
     * TODO: Set up NgXS/NgRX to store the token in.
     * Return boolean for whether to show error message or redirect to /home
     */
  }
}
