import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DietasService } from '../services/DietasService';

;export const dietaResolver = (route: ActivatedRouteSnapshot): Observable<any> => {
    console.log('🚀 Resolver chamado com snapshot:', route);
    
    const dietaService = inject(DietasService);
    const id = route.paramMap.get('id') ?? '';

    if (!id) {
        console.error('❌ ID da dieta não foi fornecido na rota.');
        return of(null);
    }

    const tipo = route.parent?.url[0]?.path ?? '';
    console.log('🔍 Tipo:', tipo, '| ID:', id);

    return dietaService.getDietasById(tipo, id).pipe(
        catchError((error) => {
            console.error('❌ Erro ao buscar a dieta:', error);
            return of(null);
        })
    );
};
