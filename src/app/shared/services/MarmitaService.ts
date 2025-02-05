import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marmita } from '../models/Marmita';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class MarmitaService {
  private apiUrl = `${environment.apiUrl}/v2`;

  constructor(private http: HttpClient) { }
      private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('accessToken') || '';
        return new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
      }

  getMarmitas(): Observable<Marmita[]> {
    return this.http.get<Marmita[]>(`${this.apiUrl}/marmitas-fit`,{headers: this.getHeaders()});
  }
}
