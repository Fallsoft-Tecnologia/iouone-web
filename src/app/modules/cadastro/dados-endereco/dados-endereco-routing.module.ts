import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosEnderecoComponent } from './dados-endereco.component';

const routes: Routes = [
  {
    path: '',
    component: DadosEnderecoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosEnderecoRoutingModule { }
