import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dietaResolver } from '../../resolver/dieta.resolver';
import { ReceitaCompletaComponent } from './receita-completa.component';

const routes: Routes = [
  {
    path: ':id',
    component: ReceitaCompletaComponent,
    resolve: {
        dietas: dietaResolver,
      },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaCompletaRoutingModule { }
