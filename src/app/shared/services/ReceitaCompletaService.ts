import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReceitaCompleta } from '../models/ReceitaCompleta';
import { environment } from 'src/config';

@Injectable({
    providedIn: 'root'
})
export class ReceitaCompletaService {

    private apiUrl = `${environment.apiUrl}/v2`;

    constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('accessToken') || '';
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

    getReceita(tipo: string, id: string): Observable<ReceitaCompleta> {
        const params = new HttpParams()
            .set('tipo', tipo)
            .set('id', id);

        return this.http.get<ReceitaCompleta>(`${this.apiUrl}/receitas/dados`, 
            {
                params, 
                headers: this.getHeaders() 
            });
    }
}
