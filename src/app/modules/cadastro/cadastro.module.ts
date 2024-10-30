import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { NavbarCadastroModule } from 'src/app/shared/components/navbar-cadastro/navbar-cadastro.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DadosCorporalComponent } from './dados-corporal/dados-corporal.component';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroRouterComponent } from './cadastro-router/cadastro-router.component';
import { DadosDoClienteModule } from './dados-do-cliente/dados-do-cliente.module';
import { DadosEnderecoModule } from './dados-endereco/dados-endereco.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DadosCorporalModule } from './dados-corporal/dados-corporal.module';



@NgModule({
  declarations: [
    CadastroComponent, 
    CadastroRouterComponent
  ],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    EnterButtonModule,
    MatSelectModule,
    CadastroRoutingModule,
    DadosDoClienteModule,
    DadosEnderecoModule,
    DadosCorporalModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class CadastroModule { }
