import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCadastroModule } from 'src/app/shared/navbar-cadastro/navbar-cadastro.module';
import { MeioPagamentoComponent } from './meio-pagamento/meio-pagamento.component';
import { EscolherPagamentoButtonModule } from 'src/app/shared/buttons/escolher-pagamento-button/escolher-pagamento-button.module';
import { CartaoComponent } from './meio-pagamento/cartao/cartao.component';
import { PixComponent } from './meio-pagamento/pix/pix.component';



@NgModule({
  declarations: [MeioPagamentoComponent, CartaoComponent, PixComponent],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    EscolherPagamentoButtonModule
  ]
})
export class PagamentoModule { }
