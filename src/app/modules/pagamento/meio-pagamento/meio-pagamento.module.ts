import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoCartaoComponent } from './botao-cartao/botao-cartao.component';
import { BotaoPixComponent } from './botao-pix/botao-pix.component';
import { MeioPagamentoComponent } from './meio-pagamento.component';
import { EscolherPagamentoButtonModule } from 'src/app/shared/components/buttons/escolher-pagamento-button/escolher-pagamento-button.module';
import { NavbarCadastroModule } from 'src/app/core/navbar-cadastro/navbar-cadastro.module';
import { MatButtonModule } from '@angular/material/button';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';



@NgModule({
  declarations: [
    MeioPagamentoComponent, 
    BotaoCartaoComponent, 
    BotaoPixComponent],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    EscolherPagamentoButtonModule,
    EnterButtonModule,
    MatButtonModule
  ]
})
export class MeioPagamentoModule { }
