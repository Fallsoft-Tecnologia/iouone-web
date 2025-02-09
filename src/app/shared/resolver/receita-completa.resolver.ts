import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ReceitaCompletaService } from '../services/ReceitaCompletaService';

export const receitaCompletaResolver = (route: ActivatedRouteSnapshot): Observable<any> => {
    const receitaCompletaService = inject(ReceitaCompletaService);
    const id = route.paramMap.get('id') ?? '';

    const tipo = route.parent?.url[0]?.path ?? '';

    return receitaCompletaService.getReceita(tipo, id).pipe(
        catchError((error) => {
            console.error('Erro ao buscar a dieta:', error);
            return of(null); // Retorna um Observable vazio em caso de erro
        })
    );

};