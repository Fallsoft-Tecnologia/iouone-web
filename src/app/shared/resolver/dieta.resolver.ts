import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DietaService } from '../services/DietaService';

export const dietaResolver = (route: ActivatedRouteSnapshot): Observable<any> => {
    const dietaService = inject(DietaService);
    const dietaId = route.paramMap.get('id');

    if (!dietaId) {
        console.error('ID da dieta não foi fornecido na rota.');
        return of(null); // Retorna um Observable vazio caso o ID seja nulo
    }

    return dietaService.getDietaById(dietaId).pipe(
        catchError((error) => {
            console.error('Erro ao buscar a dieta:', error);
            return of(null); // Retorna um Observable vazio em caso de erro
        })
    );
};