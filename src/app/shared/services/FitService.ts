import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fit, TipoFitDance } from '../models/Fit';

@Injectable({
  providedIn: 'root'
})
export class FitService {
  private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2';

  constructor(private http: HttpClient) {}

  getFitDance(): Observable<Fit[]> {
    return this.http.get<Fit[]>(`${this.apiUrl}/fit-dance`);
  }

  getTipos(): Observable<TipoFitDance[]> {
    return this.http.get<TipoFitDance[]>(`${this.apiUrl}/tipo-fit-dance`);
  }
}
