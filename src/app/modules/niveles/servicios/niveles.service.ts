import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {

  constructor(private http: HttpClient) { }

  listPersonasNivel(idnivel: number): Observable<any>{
    return this.http.get(`/api/niveles/` + idnivel.toString())
  }
  
}
