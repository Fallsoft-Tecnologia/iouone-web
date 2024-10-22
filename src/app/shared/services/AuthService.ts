import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroLogin } from '../models/CadastroLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '/api/v2/pessoas/cadastro/dados/login';

  constructor(private http: HttpClient) { }

  cadastroLogin(credentials: CadastroLogin): Observable<Object> {
    return this.http.post(this.apiUrl, credentials);
  }
}
