import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeioPagamentoComponent } from './meio-pagamento/meio-pagamento.component';

const routes: Routes = [
  {
    path: '',
    component: MeioPagamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
