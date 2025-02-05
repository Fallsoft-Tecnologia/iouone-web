import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/config';
import { DadosPessoasCalculadora } from '../models/DadosPessoasCalculadora';
import { DadosCalcularoraTDEEResponse } from '../models/DadosCalcularoraTDEEResponse';
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private apiUrl = `${environment.apiUrl}/v2`;

 constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('accessToken') || '';
      return new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    }

  getDadosPessoasCalculadora(): Observable<DadosPessoasCalculadora> {
    return this.http.get<DadosPessoasCalculadora>(`${this.apiUrl}/tdee/dados-pessoa`,{headers: this.getHeaders()});
  }

  postDadosTdee(dadosCalculadora:DadosPessoasCalculadora): Observable<DadosCalcularoraTDEEResponse>{
    return this.http.post<DadosCalcularoraTDEEResponse>(`${this.apiUrl}/tdee`, dadosCalculadora, {headers: this.getHeaders()});
  }

 


}