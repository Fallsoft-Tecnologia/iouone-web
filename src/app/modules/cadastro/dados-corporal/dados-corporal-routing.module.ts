import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosCorporalComponent } from './dados-corporal.component';

const routes: Routes = [
  {
    path: '',
    component: DadosCorporalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosCorporalRoutingModule { }
