import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreinoCompletoComponent } from './treino-completo.component';
import { treinoResolver } from 'src/app/shared/resolver/treino.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: TreinoCompletoComponent,
    resolve: {
        dietas: treinoResolver,
      },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreinoCompletoRoutingModule { }
