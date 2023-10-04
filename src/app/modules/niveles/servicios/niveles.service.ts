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

  formatearFecha(fechaStr: string, formato: string): string {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const meses2 = [
      "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
    ];

    const fecha = new Date(fechaStr);
    const dia = fecha.getDate();
    const dia2 = fecha.getDate().toString().padStart(2,"0");
    const mes = meses[fecha.getMonth()];
    const mes2 = meses2[fecha.getMonth()];
    const año = fecha.getFullYear();
  
    if (formato=="DMA"){
      return `${dia} ${mes} ${año}`;
    }
    else
    {
      return `${año}${mes2}${dia2}`;
    }
  }
  
}
