import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TreinoService {
    private apiUrl = 'https://sua-api.com/treinos';

    constructor(private http: HttpClient) { }

    getTreinoById(id: string | null): Observable<any> {
        if (!id) {
            // Trate o caso de ID inválido
            return throwError(() => new Error('Invalid Treino ID'));
        }
        // Requisição normal
        return this.http.get(`/api/treino/${id}`);
    }
}