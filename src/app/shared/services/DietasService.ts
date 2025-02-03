import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { DietaCompleta } from '../models/DietaCompleta';
import { Topicos } from '../models/Topicos';
import { environment } from 'src/config';

@Injectable({
    providedIn: 'root',
})
export class DietasService {
    
  private apiUrl = `${environment.apiUrl}/v2`;

    constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('accessToken') || '';
      return new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    }
  
    // Método para buscar dieta por ID com o token no cabeçalho
    getDietaById(id: string | null): Observable<any> {
      if (!id) {
        return throwError(() => new Error('Invalid Dieta ID'));
      }
  
      return this.http.get(`${this.apiUrl}/dietas-atualizadas/${id}`, {
        headers: this.getHeaders()
      });
    }

    getDietas(): Observable<Topicos[]> {
      return this.http.get<Topicos[]>(`${this.apiUrl}/dietas-atualizadas`, {
        headers: this.getHeaders()
      });
    }
}