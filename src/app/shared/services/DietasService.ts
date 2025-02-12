import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Topicos } from '../models/Topicos';
import { environment } from 'src/config';
import { DietaCompleta } from '../models/DietaCompleta';

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
    getDietasById(tipo: string, id: string): Observable<DietaCompleta> {
         const params = new HttpParams()
         .set('id', id)    
         .set('tipo', tipo);
             
 
         return this.http.get<DietaCompleta>(`${this.apiUrl}/plano-diario/dados`, 
             {
                 params, 
                 headers: this.getHeaders() 
             });
     }
 

    getDietas(): Observable<Topicos[]> {
      return this.http.get<Topicos[]>(`${this.apiUrl}/dietas-atualizadas`, {
        headers: this.getHeaders()
      });
    }
}