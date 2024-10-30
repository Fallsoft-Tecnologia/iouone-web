import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosCorporalRoutingModule } from './dados-corporal-routing.module';
import { DadosCorporalComponent } from './dados-corporal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { NavbarCadastroModule } from 'src/app/shared/components/navbar-cadastro/navbar-cadastro.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DadosCorporalComponent
  ],
  imports: [
    CommonModule,
    DadosCorporalRoutingModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    EnterButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    DadosCorporalComponent
  ]
})
export class DadosCorporalModule { }
