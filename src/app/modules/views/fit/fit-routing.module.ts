import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitComponent } from './fit.component';

const routes: Routes = [
  {
    path: '',
    component: FitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitRoutingModule { }
