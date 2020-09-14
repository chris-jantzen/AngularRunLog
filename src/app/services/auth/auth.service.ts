import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../../models/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getToken(email: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      'http://localhost:4201/get-token', // TODO: Set up a proxy in the dev environment for this url
      { email, password },
      this.httpOptions
    );
  }
}
