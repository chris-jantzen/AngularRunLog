import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../../../models/token';

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

  public getToken(email: string, password: string) {
    return this.http.post<Token>(
      'http://localhost:4201/get-token',
      { email, password },
      this.httpOptions
    ).subscribe(token => {
      console.log(token);
    });
  }
}
