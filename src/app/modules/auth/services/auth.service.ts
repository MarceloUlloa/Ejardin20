import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
//, private cookie: CookieService (va en el contructor)
  constructor(private http: HttpClient) { }

  public sendCredentials(email: string, password: string): Observable<any> {
      const body = {
        email,
        password  
      }

      return this.http.post(`${this.URL}/auth/login`,body)
//      .pipe(
//       tap((responseOK: any) => {
//          const {tokenSession, data} = responseOK
//          this.cookie.set('token_servicio', tokenSession, 4, '/')
//        })
//      )
  }
}
