
import { environment } from './../../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }



  sendCredentials(user: string, password: string): Observable<any> {

    const body = {
      usuario: user, 
      password: password
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(`/api/usuarios/check2`, body, httpOptions)
  }
}
