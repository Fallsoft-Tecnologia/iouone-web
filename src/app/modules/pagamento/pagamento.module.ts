import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoModule } from './cartao/cartao.module';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PixModule } from './pix/pix.module';
import { MeioPagamentoModule } from './meio-pagamento/meio-pagamento.module';
import { NavbarCadastroModule } from 'src/app/core/navbar-cadastro/navbar-cadastro.module';
import { LoadingModalModule } from 'src/app/loading-modal/loading-modal.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CartaoModule,
    PixModule,
    MeioPagamentoModule,
    PagamentoRoutingModule,
    LoadingModalModule
  ]
})
export class PagamentoModule { }
