import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosCartao } from '../models/DadosCartao';
import { FluxoResponse } from '../models/FluxoResponse';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiUrl = 'http://localhost:7072/api/v1';

  constructor(private http: HttpClient) {}

  enviarDadosCartao(dadosCartao: DadosCartao, fluxoId: string): Observable<FluxoResponse> {
      const headers = { 'fluxoId': fluxoId };
    return this.http.post<FluxoResponse>(
      `${this.apiUrl}/assinaturas/pagamento/cartao`,
      dadosCartao,
      { headers }
    );
  }
}