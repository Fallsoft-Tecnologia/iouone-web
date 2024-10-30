import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroLogin } from '../models/CadastroLogin';
import { DadosDoCliente } from '../models/DadosDoCliente';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = '/api/v2/pessoas/cadastro';

  constructor(private http: HttpClient) { }

  cadastroLogin(credentials: CadastroLogin): Observable<Object> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  cadastrarDadosCliente(dadosCliente: DadosDoCliente): Observable<Object> {
    return this.http.post(`${this.apiUrl}/dados`, dadosCliente);
  }
}
