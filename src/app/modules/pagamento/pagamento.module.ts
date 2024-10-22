import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCadastroModule } from 'src/app/shared/components/navbar-cadastro/navbar-cadastro.module';
import { MeioPagamentoComponent } from './meio-pagamento/meio-pagamento.component';
import { EscolherPagamentoButtonModule } from 'src/app/shared/components/buttons/escolher-pagamento-button/escolher-pagamento-button.module';
import { BotaoCartaoComponent } from './meio-pagamento/botao-cartao/botao-cartao.component';
import { BotaoPixComponent } from './meio-pagamento/botao-pix/botao-pix.component';
import { CartaoModule } from './cartao/cartao.module';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { PixModule } from './meio-pagamento/pix/pix.module';



@NgModule({
  declarations: [
    MeioPagamentoComponent, 
    BotaoCartaoComponent, 
    BotaoPixComponent
  ],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    EscolherPagamentoButtonModule,
    CartaoModule,
    PixModule,
    PagamentoRoutingModule,
    EnterButtonModule,
    MatButtonModule,
  ]
})
export class PagamentoModule { }
