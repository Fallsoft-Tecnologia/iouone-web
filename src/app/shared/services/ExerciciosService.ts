import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercicios } from '../models/Exercicios';
import { environment } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {
  private apiUrl = `${environment.apiUrl}/v2`;

    constructor(private http: HttpClient) { }
     private getHeaders(): HttpHeaders {
       const token = localStorage.getItem('accessToken') || '';
       return new HttpHeaders({
         Authorization: `Bearer ${token}`
       });
     }

  getExercicios(): Observable<Exercicios[]> {
    return this.http.get<Exercicios[]>(`${this.apiUrl}/exercicios-casa`,{headers: this.getHeaders()});
  }
}
