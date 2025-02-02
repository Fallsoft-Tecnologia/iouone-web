import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercicios } from '../models/Exercicios';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {
  private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2';

  constructor(private http: HttpClient) {}

  getExercicios(): Observable<Exercicios[]> {
    return this.http.get<Exercicios[]>(`${this.apiUrl}/exercicios-casa`);
  }
}
