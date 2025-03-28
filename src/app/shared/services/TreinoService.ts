import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Topicos } from '../models/Topicos';
import { Treino } from '../models/Treino';
import { environment } from 'src/config';

@Injectable({
    providedIn: 'root',
})
export class TreinoService {
    private apiUrl = `${environment.apiUrl}/v2`;

   constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('accessToken') || '';
      return new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    }
    

    getTreinos(): Observable<Topicos[]> {
        return this.http.get<Topicos[]>(`${this.apiUrl}/treino-atualizado`,{ headers: this.getHeaders()});
    }

    getTreinoById(id: string | null): Observable<Treino> {

        // Requisição normal
        return this.http.get<Treino>(`${this.apiUrl}/treino-completo/especifico/${id}`,{ headers: this.getHeaders()});
    }
}