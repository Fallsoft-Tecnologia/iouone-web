import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detox } from '../models/Detox';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class DetoxService {
  private apiUrl = `${environment.apiUrl}/v2`;

  constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('accessToken') || '';
      return new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    }

  getDetox(): Observable<Detox[]> {
    return this.http.get<Detox[]>(`${this.apiUrl}/detox`,{headers: this.getHeaders()});
  }
}
