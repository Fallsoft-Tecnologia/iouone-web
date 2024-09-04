import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarmitaComponent } from './marmita.component';

const routes: Routes = [
  {
    path: '',
    component: MarmitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarmitaRoutingModule { }
