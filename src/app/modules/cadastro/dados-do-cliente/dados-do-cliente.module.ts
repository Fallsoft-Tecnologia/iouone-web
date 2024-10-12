import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosDoClienteRoutingModule } from './dados-do-cliente-routing.module';
import { DadosDoClienteComponent } from './dados-do-cliente.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EnterButtonModule } from 'src/app/shared/buttons/enter-button/enter-button.module';
import { NavbarCadastroModule } from 'src/app/shared/navbar-cadastro/navbar-cadastro.module';


@NgModule({
  declarations: [DadosDoClienteComponent],
  imports: [
    CommonModule,
    DadosDoClienteRoutingModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    EnterButtonModule,
  ]
})
export class DadosDoClienteModule { }
