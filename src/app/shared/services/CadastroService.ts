import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroLogin } from '../models/CadastroLogin';
import { DadosDoCliente } from '../models/DadosCliente';
import { DadosCorporal } from '../models/DadosCorporal';
import { DadosEndereco } from '../models/DadosEndereco';
import { environment } from 'src/environments/environment';
import { CadastroResponse } from '../models/CadastroResponse';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = `${environment.apiBaseUrl}/api/v2/pessoas/cadastro`;

  constructor(private http: HttpClient) { }

  cadastroLogin(credentials: CadastroLogin): Observable<CadastroResponse> {
    return this.http.post<CadastroResponse>(`${this.apiUrl}/dados/login`, credentials);
  }

  cadastrarDadosCliente(dadosCliente: DadosDoCliente, fluxoId: string): Observable<CadastroResponse> {
    const headers = { 'fluxoId': fluxoId };
    return this.http.post<CadastroResponse>(`${this.apiUrl}/dados/pessoais`, dadosCliente, { headers });
  }
  
  cadastrarDadosCorporal(dadosCorporal: DadosCorporal, fluxoId: string): Observable<CadastroResponse> {
    const headers = { 'fluxoId': fluxoId };
    return this.http.post<CadastroResponse>(`${this.apiUrl}/dados/corporais`, dadosCorporal, { headers });
  }

  cadastrarDadosEndereco(dadosEndereco: DadosEndereco, fluxoId: string): Observable<CadastroResponse> {
    const headers = { 'fluxoId': fluxoId };
    return this.http.post<CadastroResponse>(
      `${this.apiUrl}/dados/endereco`,
      dadosEndereco,
      { headers }
    );
  }
}
