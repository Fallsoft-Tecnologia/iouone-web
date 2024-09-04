import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciciosComponent } from './exercicios.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciciosRoutingModule { }
