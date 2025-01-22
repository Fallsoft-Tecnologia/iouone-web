import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietaCompletaComponent } from './dieta-completa.component';
import { dietaResolver } from '../../resolver/dieta.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: DietaCompletaComponent,
    resolve: {
        dietas: dietaResolver,
      },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietaCompletaRoutingModule { }
