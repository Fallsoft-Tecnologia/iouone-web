import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EnterButtonModule } from 'src/app/shared/components/buttons/enter-button/enter-button.module';
import { PixComponent } from './pix.component';
import { PixQrcodeComponent } from './pix-qrcode/pix-qrcode.component';
import { NavbarCadastroModule } from 'src/app/core/navbar-cadastro/navbar-cadastro.module';



@NgModule({
  declarations: [
    PixComponent, 
    PixQrcodeComponent
  ],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    EnterButtonModule,
    MatButtonModule
  ]
})
export class PixModule { }
