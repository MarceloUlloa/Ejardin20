import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {

  constructor(private http: HttpClient) { }

  listPersonasNivel(idnivel: number): Observable<any>{
    return this.http.get(`/api/niveles/personas/` + idnivel.toString())
  }

  getDetallesNivel(idnivel: number): Observable<any>{
    return this.http.get(`/api/niveles/nivel/` + idnivel.toString())
  }

  formatearFecha(fechaStr: string): string {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const fecha = new Date(fechaStr);
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
  
    return `${dia} ${mes} ${año}`;
  }
  
}
