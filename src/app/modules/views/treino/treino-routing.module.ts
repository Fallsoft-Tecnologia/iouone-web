import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreinoComponent } from './treino.component';

const routes: Routes = [
  {
    path: '',
    component: TreinoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreinoRoutingModule { }
