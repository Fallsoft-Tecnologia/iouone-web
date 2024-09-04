import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetoxComponent } from './detox.component';

const routes: Routes = [
  {
    path: '',
    component: DetoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetoxRoutingModule { }
