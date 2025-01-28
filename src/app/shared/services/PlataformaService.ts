import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/config';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse';
import { LoginRequest } from '../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  private apiUrl = `${environment.apiUrl}/v2/login`;

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, loginRequest);
  }


}