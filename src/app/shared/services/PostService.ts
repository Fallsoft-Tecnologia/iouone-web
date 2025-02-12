import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = 'http://plataforma-prd.iouone.com.br/api/v2/mensagens';

    constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('accessToken') || '';
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

    getPosts(page: number, size: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`,{headers: this.getHeaders()});
    }

    createPost(mensagem: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, { mensagem, headers: this.getHeaders() });
    }

    getComments(mensagemId: number, page: number = 0, size: number = 10): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${mensagemId}/comentarios?page=${page}&size=${size}`,{headers: this.getHeaders()});
    }

    createComment(mensagemId: number, mensagemComentario: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/${mensagemId}/comentarios`, {
            idComentarioPai: 0,
            mensagemComentario,
            headers: this.getHeaders()
        });
    }
}
