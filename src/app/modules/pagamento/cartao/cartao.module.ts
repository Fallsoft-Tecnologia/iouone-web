import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';
import { NavbarCadastroModule } from 'src/app/core/navbar-cadastro/navbar-cadastro.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { FormularioCartaoComponent } from './formulario-cartao/formulario-cartao.component';
import { InfosPagamentoCartaoComponent } from './formulario-cartao/infos-pagamento-cartao/infos-pagamento-cartao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModalModule } from 'src/app/loading-modal/loading-modal.module';



@NgModule({
  declarations: [
    CartaoComponent,
    FormularioCartaoComponent,
    InfosPagamentoCartaoComponent
  ],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    EnterButtonModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    LoadingModalModule
  ]
})
export class CartaoModule { }
