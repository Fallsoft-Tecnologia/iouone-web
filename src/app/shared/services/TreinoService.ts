import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Topicos } from '../models/Topicos';
import { Treino } from '../models/Treino';

@Injectable({
    providedIn: 'root',
})
export class TreinoService {
    private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2';

    constructor(private http: HttpClient) { }

    getTreinos(): Observable<Topicos[]> {
        return this.http.get<Topicos[]>(`${this.apiUrl}/treino-atualizado`);
    }

    getTreinoById(id: string | null): Observable<Treino> {
        if (!id) {
            // Trate o caso de ID inválido
            return throwError(() => new Error('Invalid Treino ID'));
        }
        // Requisição normal
        return this.http.get<Treino>(`/treino/${id}`);
    }
}