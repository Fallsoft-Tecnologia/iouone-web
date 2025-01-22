import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Dieta } from '../models/Dieta';

@Injectable({
    providedIn: 'root',
})
export class DietaService {
    private apiUrl = 'https://sua-api.com/dietas'; // Substitua pelo seu endpoint

    constructor(private http: HttpClient) { }

    // getDietaById(id: string | null): Observable<any> {
    //     if (!id) {
    //         // Trate o caso de ID inválido
    //         return throwError(() => new Error('Invalid Dieta ID'));
    //     }
    //     // Requisição normal
    //     return this.http.get(`/api/dieta/${id}`);
    // }

    getDietaById(id: string): Observable<Dieta> {
        // Dados mockados
        const mockDietas: { [key: string]: Dieta } = {
          '1': {
            titulo: 'Dieta Keto',
            descricao: 'Uma dieta focada em baixo carboidrato e alta gordura.',
            itens: [
              { dia: 'Segunda-feira', descricao: 'Ovos mexidos com bacon e abacate.' },
              { dia: 'Terça-feira', descricao: 'Frango grelhado com brócolis e azeite.' },
              { dia: 'Quarta-feira', descricao: 'Bife com salada de folhas e queijo parmesão.' },
            ],
          },
          '2': {
            titulo: 'Dieta Vegana',
            descricao: 'Dieta baseada em alimentos de origem vegetal.',
            itens: [
              { dia: 'Segunda-feira', descricao: 'Aveia com frutas e leite de amêndoas.' },
              { dia: 'Terça-feira', descricao: 'Salada de quinoa com legumes e tofu.' },
              { dia: 'Quarta-feira', descricao: 'Lentilha cozida com arroz integral e batata-doce.' },
            ],
          },
        };
    
        // Retorna a dieta mockada ou uma padrão caso o ID não seja encontrado
        return of(
          mockDietas[id] || {
            titulo: 'Dieta Padrão',
            descricao: 'Uma dieta genérica para testes.',
            itens: [
              { dia: 'Segunda-feira', descricao: 'Refeição padrão para segunda-feira.' },
              { dia: 'Terça-feira', descricao: 'Refeição padrão para terça-feira.' },
              { dia: 'Quarta-feira', descricao: 'Refeição padrão para quarta-feira.' },
            ],
          }
        );
      }
}