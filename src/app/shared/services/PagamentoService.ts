import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosCartao } from '../models/DadosCartao';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiUrl = 'https://seu-backend-url.com/api/pagamento';

  constructor(private http: HttpClient) {}

  enviarDadosCartao(dados: DadosCartao): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}