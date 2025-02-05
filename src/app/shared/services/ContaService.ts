import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/config';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse';
import { LoginRequest } from '../models/LoginRequest';
import { RedefinirSenhaRequest } from '../models/RedefinirSenhaRequest';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private apiUrl = `${environment.apiUrl}/v2`;

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginRequest);
  }

  redefinirSenha(redefinirSenhaRequest: RedefinirSenhaRequest) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/redefinirSenha`, redefinirSenhaRequest);
  }


}