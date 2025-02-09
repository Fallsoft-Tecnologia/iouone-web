import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/config';
import { DietaCompleta } from '../models/DietaCompleta';

@Injectable({
    providedIn: 'root'
})
export class DietaCompletaService {

    private apiUrl = `${environment.apiUrl}/v2`;

    constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('accessToken') || '';
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

    getDieta(tipo: string, id: string): Observable<DietaCompleta> {
        const params = new HttpParams()
            .set('tipo', tipo)
            .set('id', id);

        return this.http.get<DietaCompleta>(this.apiUrl,
            {
                params,
                headers: this.getHeaders()
            });
    }
}
