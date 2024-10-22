import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosDoClienteRoutingModule } from '../dados-do-cliente/dados-do-cliente-routing.module';
import { DadosEnderecoComponent } from './dados-endereco.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { NavbarCadastroModule } from 'src/app/shared/components/navbar-cadastro/navbar-cadastro.module';
import { DadosEnderecoRoutingModule } from './dados-endereco-routing.module';



@NgModule({
  declarations: [
    DadosEnderecoComponent
  ],
  imports: [
    CommonModule,
    DadosEnderecoRoutingModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    EnterButtonModule,
  ]
})
export class DadosEnderecoModule { }
