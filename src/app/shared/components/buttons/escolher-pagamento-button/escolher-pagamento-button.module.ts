import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolherPagamentoButtonComponent } from './escolher-pagamento-button.component';
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [
    EscolherPagamentoButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    EscolherPagamentoButtonComponent
  ]
})
export class EscolherPagamentoButtonModule { }
