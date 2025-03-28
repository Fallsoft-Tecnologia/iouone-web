import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topicos } from '../models/Topicos';
import { environment } from 'src/config';
@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private apiUrl = `${environment.apiUrl}/v2`;

 constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('accessToken') || '';
      return new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    }

  getCardapios(): Observable<Topicos[]> {
    return this.http.get<Topicos[]>(`${this.apiUrl}/cardapios-atualizados`,{headers: this.getHeaders()});
  }
}
