import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosDoClienteRoutingModule } from './dados-do-cliente-routing.module';
import { DadosDoClienteComponent } from './dados-do-cliente.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { NavbarCadastroModule } from 'src/app/core/navbar-cadastro/navbar-cadastro.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DadosDoClienteComponent],
  imports: [
    CommonModule,
    DadosDoClienteRoutingModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    EnterButtonModule,
    ReactiveFormsModule 
  ],
  exports: [
    DadosDoClienteComponent
  ]
})
export class DadosDoClienteModule { }
