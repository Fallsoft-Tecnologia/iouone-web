import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/config';
import { DadosCartao } from '../models/DadosCartao';
import { FluxoResponse } from '../models/FluxoResponse';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private apiPagUrl = `${environment.apiPagUrl}/v1`;

  constructor(private http: HttpClient) {}

  enviarDadosCartao(dadosCartao: DadosCartao, fluxoId: string): Observable<FluxoResponse> {
      const headers = { 'fluxoId': fluxoId };
    return this.http.post<FluxoResponse>(
      `${this.apiPagUrl}/assinaturas/pagamento/cartao`,
      dadosCartao,
      { headers }
    );
  }
}