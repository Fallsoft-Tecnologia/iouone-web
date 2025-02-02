import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topicos } from '../models/Topicos';
@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2';

  constructor(private http: HttpClient) {}

  getCardapios(): Observable<Topicos[]> {
    return this.http.get<Topicos[]>(`${this.apiUrl}/cardapios-atualizados`);
  }
}
