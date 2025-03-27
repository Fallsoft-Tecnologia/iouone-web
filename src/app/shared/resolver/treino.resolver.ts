import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { TreinoService } from '../services/TreinoService';

export const treinoResolver = (route: ActivatedRouteSnapshot): Observable<any> => {
    const treinoService = inject(TreinoService);
    const id = route.paramMap.get('id') ?? '';
    
    if (!id) {
        console.error('ID da receita não foi fornecido na rota.');
        return of(null);
    }

    return treinoService.getTreinoById(id).pipe(
        catchError((error) => {
            console.error('Erro ao buscar o treino:', error);
            return of(null); // Retorna um Observable vazio em caso de erro
        })
    );
};