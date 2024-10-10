import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { NavbarCadastroModule } from 'src/app/shared/navbar-cadastro/navbar-cadastro.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DadosDoClienteComponent } from './dados-do-cliente/dados-do-cliente.component';
import { DadosCorporalComponent } from './dados-corporal/dados-corporal.component';
import { EnterButtonModule } from 'src/app/shared/buttons/enter-button/enter-button.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroRouterComponent } from './cadastro-router/cadastro-router.component';



@NgModule({
  declarations: [CadastroComponent, DadosDoClienteComponent, DadosCorporalComponent, CadastroRouterComponent],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    EnterButtonModule,
    MatSelectModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
