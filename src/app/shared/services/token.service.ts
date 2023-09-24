import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router, private cookieService: CookieService) { 

  }
  FRONTusuarioactual: undefined | string = "";
  textToken: any;

  leerToken():any
  {
    const cookies = document.cookie;
    const tokenCookie = document.cookie
    .split(';')
    .map(cookie => cookie.trim())
    .find(cookie => cookie.startsWith('token'));
    if (tokenCookie) {
      // Extrae el token de la cookie
      const tokenValue = tokenCookie.split('=')[1];

      // Decodifica el token manualmente
      const tokenPayloadBase64 = tokenValue.split('.')[1];
      const tokenPayload = JSON.parse(atob(tokenPayloadBase64));

      return tokenPayload
    }
    
  }

  leerTokenUsuario(): string
  {
    this.textToken = this.leerToken();

    if (this.textToken != "")
    {
      return this.textToken.fullname
    }
    return "No hay"
  }

  leerTokenInstitucion(): string
  {
    this.textToken = this.leerToken();

    if (this.textToken != "")
    {
      return this.textToken.institucion
    }
    return "No hay"
  }

  logout(): any{
    this.cookieService.delete('token')
    this.router.navigate(['/auth/login']);
  }
}


