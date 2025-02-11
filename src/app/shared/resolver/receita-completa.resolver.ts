import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ReceitaCompletaService } from '../services/ReceitaCompletaService';

export const receitaCompletaResolver = (route: ActivatedRouteSnapshot): Observable<any> => {
    const receitaCompletaService = inject(ReceitaCompletaService);
    const id = route.paramMap.get('id') ?? '';
    
    if (!id) {
        console.error('ID da dieta não foi fornecido na rota.');
        return of(null);
    }

    const tipo = route.parent?.url[0]?.path ?? '';

    return receitaCompletaService.getReceita(tipo, id).pipe(
        catchError((error) => {
            console.error('Erro ao buscar a dieta:', error);
            return of(null);
        })
    );

};