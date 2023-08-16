
import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { 
  
  }
  /**
   * 
   * @returns devolver todas las canciones
   */
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(( { data }:any) => {
        return data
      })
    )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(( { data }:any) => {
        return data.reverse()
      })
    )
  }
}