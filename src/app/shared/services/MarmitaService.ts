import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marmita } from '../models/Marmita';

@Injectable({
  providedIn: 'root'
})
export class MarmitaService {
  private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2';

  constructor(private http: HttpClient) {}

  getMarmitas(): Observable<Marmita[]> {
    return this.http.get<Marmita[]>(`${this.apiUrl}/marmitas-fit`);
  }
}
