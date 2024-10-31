import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class CepService {
    private baseUrl = 'https://viacep.com.br/ws';
    
    constructor(private http: HttpClient) {}
  
    getAddressByCep(cep: string): Observable<Endereco> {
      return this.http.get<Endereco>(`${this.baseUrl}/${cep}/json/`);
    }
}
