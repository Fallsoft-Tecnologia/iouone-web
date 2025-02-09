import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaCompletaComponent } from './receita-completa.component';

const routes: Routes = [
  {
    path: ':id',
    component: ReceitaCompletaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaCompletaRoutingModule { }
