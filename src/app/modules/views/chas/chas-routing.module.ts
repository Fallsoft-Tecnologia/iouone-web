import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChasComponent } from './chas.component';

const routes: Routes = [
  {
    path: '',
    component: ChasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChasRoutingModule { }
