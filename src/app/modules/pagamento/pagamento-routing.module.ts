import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeioPagamentoComponent } from './meio-pagamento/meio-pagamento.component';
import { CartaoComponent } from './cartao/cartao.component';

const routes: Routes = [
  {
    path: '',
    component: MeioPagamentoComponent
  },
  {
    path: 'cartao',
    component: CartaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
