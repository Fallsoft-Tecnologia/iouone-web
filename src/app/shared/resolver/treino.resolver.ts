import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { TreinoService } from '../services/TreinoService';

export const treinoResolver = (route: ActivatedRouteSnapshot): Observable<any> => {
    const treinoService = inject(TreinoService);
    const treinoId = route.paramMap.get('id');

    if (!treinoId) {
        console.error('ID do treino não foi fornecido na rota.');
        return of(null); // Retorna um Observable vazio caso o ID seja nulo
    }

    return treinoService.getTreinoById(treinoId).pipe(
        catchError((error) => {
            console.error('Erro ao buscar o treino:', error);
            return of(null); // Retorna um Observable vazio em caso de erro
        })
    );
};