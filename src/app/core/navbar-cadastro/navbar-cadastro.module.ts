import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCadastroComponent } from './navbar-cadastro.component';

import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    NavbarCadastroComponent
  ],
  imports: [
    MatToolbarModule,
    CommonModule
  ],
  exports: [
    NavbarCadastroComponent
  ]
})
export class NavbarCadastroModule { }
