import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietasComponent } from './dietas.component';

const routes: Routes = [
  {
    path: '',
    component: DietasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietasRoutingModule { }
