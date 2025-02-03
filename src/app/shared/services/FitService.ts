import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fit, TipoFitDance } from '../models/Fit';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class FitService {
private apiUrl = `${environment.apiUrl}/v2`;

  constructor(private http: HttpClient) { }
      private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('accessToken') || '';
        return new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
      }

  getFitDance(): Observable<Fit[]> {
    return this.http.get<Fit[]>(`${this.apiUrl}/fit-dance`,{headers: this.getHeaders()});
  }

  getTipos(): Observable<TipoFitDance[]> {
    return this.http.get<TipoFitDance[]>(`${this.apiUrl}/tipo-fit-dance`,{headers: this.getHeaders()});
  }
}
