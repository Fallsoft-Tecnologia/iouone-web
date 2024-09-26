import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, throwError } from 'rxjs';
import { LeadClientForm } from '../model/lead-client-form.model';
import { InfoClientForm } from '../model/info-client-form.model';
import { InfoBodyForm } from '../model/info-body-form';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private api = 'http://localhost:8080/api/v2/pessoas'

  constructor(private http: HttpClient) {
      this.http = http;
  }

  // Headers
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  /*
  getPaginatedClientes(page: number) {
      const params = new HttpParams()
          .append('page', page)
      return this.http
          .get<PaginaCliente>(`${this.api}`, { params })
          .pipe(
              retry(2),
              catchError(this.handleError)
          );
  }

  deleteCliente(cliente: Cliente) {
      return this.http.delete<Cliente>(`${this.api}/${cliente.id}`, this.httpOptions)
          .pipe(
              retry(1),
              catchError(this.handleError)
          );
  }

  atualizaStatusCliente(cliente: Cliente) {
      return this.http.put<Cliente>(`${this.api}/status/${cliente.id}`, this.httpOptions)
          .pipe(
              retry(1),
              catchError(this.handleError)
          );
  }

  */

  salvaLeadCliente(leadCliente: LeadClientForm) {
    return this.http.post<LeadClientForm>(`${this.api}/lead`, leadCliente)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
}

  salvaInfoCliente(infoCliente: InfoClientForm) {
      return this.http.post<InfoClientForm>(`${this.api}/info`, infoCliente)
          .pipe(
              retry(2),
              catchError(this.handleError)
          );
  }

  salvaBodyCliente(bodyCliente: InfoBodyForm) {
    return this.http.post<InfoBodyForm>(`${this.api}/body`, bodyCliente)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
}

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = error.error.message;
      } else {
          // Erro ocorreu no lado do servidor
          errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
      }
      alert(errorMessage);
      return throwError(() => new Error(errorMessage));
  };

}

