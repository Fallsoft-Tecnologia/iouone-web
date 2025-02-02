import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { DietaCompleta } from '../models/DietaCompleta';
import { Topicos } from '../models/Topicos';

@Injectable({
    providedIn: 'root',
})
export class DietasService {
    
  private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2';

    constructor(private http: HttpClient) { }

    getDietaById(id: string | null): Observable<any> {
        if (!id) {
            // Trate o caso de ID inválido
            return throwError(() => new Error('Invalid Dieta ID'));
        }
        // Requisição normal
        return this.http.get(`/dieta/${id}`);
    }

    getDietas(): Observable<Topicos[]> {
      return this.http.get<Topicos[]>(`${this.apiUrl}/dietas-atualizadas`);
    }
}