import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detox } from '../models/Detox';

@Injectable({
  providedIn: 'root'
})
export class DetoxService {
  private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2';

  constructor(private http: HttpClient) {}

  getDetox(): Observable<Detox[]> {
    return this.http.get<Detox[]>(`${this.apiUrl}/detox`);
  }
}
