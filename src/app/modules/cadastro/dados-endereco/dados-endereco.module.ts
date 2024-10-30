import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosEnderecoComponent } from './dados-endereco.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { NavbarCadastroModule } from 'src/app/shared/components/navbar-cadastro/navbar-cadastro.module';
import { DadosEnderecoRoutingModule } from './dados-endereco-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



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
    ReactiveFormsModule
  ],
  exports: [
    DadosEnderecoComponent
  ]
})
export class DadosEnderecoModule { }
