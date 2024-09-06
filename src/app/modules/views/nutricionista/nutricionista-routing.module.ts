import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutricionistaComponent } from './nutricionista.component';

const routes: Routes = [
  {
    path: '',
    component: NutricionistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutricionistaRoutingModule { }
