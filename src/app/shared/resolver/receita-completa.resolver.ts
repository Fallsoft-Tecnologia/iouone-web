import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ReceitaCompletaService } from '../services/ReceitaCompletaService';

export const receitaCompletaResolver = (route: ActivatedRoute): Observable<any> => {
    const receitaCompletaService = inject(ReceitaCompletaService);
    const urlSegments = route.snapshot.url.map(segment => segment.path);

    if (urlSegments.length >= 2) {
        const tipo = urlSegments[0];
        const id = urlSegments[1];

        return receitaCompletaService.getReceita(tipo, id).pipe(
            catchError((error) => {
                console.error('Erro ao buscar a dieta:', error);
                return of(null); // Retorna um Observable vazio em caso de erro
            })
        );
    }

    return of(null);

};