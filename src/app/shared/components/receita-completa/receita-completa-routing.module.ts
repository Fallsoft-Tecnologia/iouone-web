import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dietaResolver } from '../../resolver/dieta.resolver';
import { ReceitaCompletaComponent } from './receita-completa.component';
import { receitaCompletaResolver } from '../../resolver/receita-completa.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ReceitaCompletaComponent,
    resolve: {
        receita: receitaCompletaResolver,
      },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaCompletaRoutingModule { }
